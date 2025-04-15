---
title: HMAC
createTime: 2024/01/10
permalink: /article/pzbfbr5c/
---

# HMAC (Hash-based Message Authentication Code)

## 1. HMAC 简介
HMAC 是一种基于哈希函数的消息认证码，将一个密钥和消息一起进行哈希运算，用于确保消息的完整性和来源认证，确保数据在传输过程中未被篡改，并确保消息的来源可信。

### 1.1 核心要素
- 密钥（K）：用于认证的共享密钥
- 哈希函数（H）：如MD5、SHA-1、SHA-256等
- 消息（M）：需要认证的数据
- MAC值：最终生成的认证码

## 2. HMAC 优势

### 2.1 解决问题
- 单纯的哈希函数无法防止消息篡改
- 简单的密钥拼接容易受到长度扩展攻击
- 需要验证消息的完整性和来源

### 2.2 技术优势
- 消息完整性保护
- 消息来源认证
- 抵抗长度扩展攻击
- 密钥隐藏性

## 3. 相关人员

### 发明者
- Mihir Bellare
- Ran Canetti
- Hugo Krawczyk（1996年提出）

### 使用者
- 系统开发者
- 安全协议设计者
- API服务提供商

## 4. Hmac 发展历程

### 发展历程
- 1996年：首次提出
- 1997年：成为RFC 2104标准
- 2002年：成为FIPS标准

### 使用时机
- 需要验证API调用身份时
- 需要确保消息未被篡改时
- 需要生成安全令牌时

## 5. 应用场景

### 应用场景
- Web API认证
- 会话令牌生成
- 数字签名系统
- 安全通信协议（如TLS）
- 文件完整性校验

### 实现环境
- 各种编程语言标准库
- 密码学工具包（如OpenSSL）
- 安全通信框架

## 6. Hmac 算法原理

### 6.1 算法原理
`H(K XOR opad, H(K XOR ipad, text))`

### 6.2 实现步骤

- 密钥处理：将输入的密钥进行处理，得到适合哈希函数的密钥。
- 填充：对消息进行填充，使其长度符合哈希函数的要求。
- 哈希计算：使用哈希函数对填充后的消息和处理后的密钥进行计算。
- 结果处理：将哈希计算得到的结果与密钥再次进行哈希计算，得到最终的HMAC值。

### 6.3 伪代码
```c
void
hmac_md5(text, text_len, key, key_len, digest)
unsigned char*  text;                /* pointer to data stream */
int             text_len;            /* length of data stream */
unsigned char*  key;                 /* pointer to authentication key */
int             key_len;             /* length of authentication key */
caddr_t         digest;              /* caller digest to be filled in */

{
        MD5_CTX context;
        unsigned char k_ipad[65];    /* inner padding -
                                      * key XORd with ipad
                                      */
        unsigned char k_opad[65];    /* outer padding -
                                      * key XORd with opad
                                      */
        unsigned char tk[16];
        int i;
        /* if key is longer than 64 bytes reset it to key=MD5(key) */
        if (key_len > 64) {
                MD5_CTX      tctx;
                MD5Init(&tctx);
                MD5Update(&tctx, key, key_len);
                MD5Final(tk, &tctx);
                key = tk;
                key_len = 16;
        }
        /*
         * the HMAC_MD5 transform looks like:
         *
         * MD5(K XOR opad, MD5(K XOR ipad, text))
         *
         * where K is an n byte key
         * ipad is the byte 0x36 repeated 64 times
         * opad is the byte 0x5c repeated 64 times
         * and text is the data being protected
         */
        /* start out by storing key in pads */
        bzero( k_ipad, sizeof k_ipad);
        bzero( k_opad, sizeof k_opad);
        bcopy( key, k_ipad, key_len);
        bcopy( key, k_opad, key_len);
        /* XOR key with ipad and opad values */
        for (i=0; i<64; i++) {
                k_ipad[i] ^= 0x36;
                k_opad[i] ^= 0x5c;
        }
        /*
         * perform inner MD5
         */
        MD5Init(&context);                   /* init context for 1st
                                              * pass */
        MD5Update(&context, k_ipad, 64)      /* start with inner pad */
        MD5Update(&context, text, text_len); /* then text of datagram */
        MD5Final(digest, &context);          /* finish up 1st pass */
        /*
         * perform outer MD5
         */
        MD5Init(&context);                   /* init context for 2nd
                                              * pass */
        MD5Update(&context, k_opad, 64);     /* start with outer pad */
        MD5Update(&context, digest, 16);     /* then results of 1st
                                              * hash */
        MD5Final(digest, &context);          /* finish up 2nd pass */
}
```