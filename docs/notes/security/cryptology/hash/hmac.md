---
title: HMAC
createTime: 2024/01/10
---

# HMAC (Hash-based Message Authentication Code)

HMAC是一种基于哈希函数的消息认证码，用于确保消息的完整性和来源认证。

## 算法原理

### 基本结构
- 使用两个不同的密钥块（ipad和opad）
- 双重哈希过程
- 公式：HMAC(K,m) = H((K⊕opad)||H((K⊕ipad)||m))

### 参数
- K：密钥
- H：底层哈希函数（如MD5、SHA-1、SHA-256等）
- ipad：内部填充（0x36重复）
- opad：外部填充（0x5c重复）

## 安全特性

- 消息完整性保护
- 消息来源认证
- 抵抗长度扩展攻击
- 密钥隐藏性

## 常见实现

- HMAC-MD5
- HMAC-SHA1
- HMAC-SHA256
- HMAC-SHA512

## 应用场景

- API认证
- 会话令牌
- 数字签名
- 安全通信协议（如TLS）
- 数据完整性校验