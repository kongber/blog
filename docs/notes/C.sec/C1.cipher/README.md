---
title: README
createTime: 2025/04/23 15:43:54
permalink: /notes/se/rvej7qfs/
---
# 密码学体系

## 1. 基础密码学

### 1.1 分组密码
- [DES](./symmetric/des.md)
- [3DES](./symmetric/3des.md)
- [AES](./symmetric/aes.md)
- [SM4](./symmetric/sm4.md)

### 1.2 分组密码模式
- [ECB](./symmetric/ecb.md)
- [CBC](./symmetric/cbc.md)
- [CFB](./symmetric/cfb.md)
- [OFB](./symmetric/ofb.md)
- [CTR](./symmetric/ctr.md)
- [GCM](./symmetric/gcm.md)

### 1.3 流密码
- [RC4-流密码](./symmetric/rc4.md)
- [ChaCha20-流密码](./symmetric/chacha20.md)

### 1.4 非对称密码
- [RSA算法](./asymmetric/rsa.md)
- [ECC椭圆曲线](./asymmetric/ecc.md)
- [DH密钥交换](./asymmetric/dh.md)
- [ElGamal加密](./asymmetric/elgamal.md)

- [SM2](./asymmetric/sm2.md)
- [SM9](./asymmetric/sm9.md)

### 1.5 哈希函数
- [MD5](./hash/md5.md)
- [SHA](./hash/sha.md)

- [SM3](./hash/sm3.md)

### 1.6 消息认证码
- [HMAC](./mac/hmac.md)
- [CMAC](./mac/cmac.md)

## 2. 高级密码学

### 2.1 特殊加密技术
- [同态加密](./advanced/homomorphic.md)
- [身份基加密](./advanced/ibe.md)
- [属性基加密](./advanced/abe.md)
- [可搜索加密](./advanced/searchable.md)

### 2.2 零知识证明
- [交互式证明](./zkp/interactive.md)
- [非交互式证明](./zkp/non-interactive.md)
- [zk-SNARK](./zkp/zk-snark.md)

### 2.3 量子密码学
- [量子密钥分发](./quantum/qkd.md)
- [后量子密码](./quantum/post-quantum.md)

## 3. 应用密码学

### 3.1 密钥管理
- 密钥生命周期管理
    - 密钥生成
    - 密钥分发
    - 密钥存储
    - 密钥更新
    - 密钥销毁
- 密码设备接口
    - [PKCS#11](./applied/pkcs11.md)
    - JCE
    - CNG
- 密钥备份与恢复

### 3.2 认证机制
- 身份认证
    - 数字签名
    - 数字证书
    - PKI体系
- 消息认证
    - MAC
    - HMAC
- 多因素认证
    - OTP
    - FIDO

### 3.3 协议安全
- 网络协议
    - TLS/SSL
    - SSH
    - IPSec
- 应用协议
    - HTTPS
    - SFTP
    - PGP
- VPN协议
    - OpenVPN
    - L2TP
    - PPTP
### 3.4 数据保护
- 存储加密
    - 文件加密
    - 磁盘加密
    - 数据库加密
- 传输加密
    - 端到端加密
    - 链路加密
- 密钥托管
    - KMS
    - HSM
### 3.5 访问控制
- 权限管理
    - RBAC
    - ABAC
- 审计日志
    - 操作记录
    - 密钥使用记录
- 安全策略
    - 密码策略
    - 访问策略

## 4. 密码分析

### 4.1 攻击方法
- [暴力攻击](./analysis/brute-force.md)
- [差分分析](./analysis/differential.md)
- [线性分析](./analysis/linear.md)
- [侧信道攻击](./analysis/side-channel.md)

### 4.2 安全评估
- [安全模型](./security/models.md)
- [安全证明](./security/proofs.md)
- [标准与规范](./security/standards.md)

## 5. 密码库
- [OpenSSL](./library/openssl.md)