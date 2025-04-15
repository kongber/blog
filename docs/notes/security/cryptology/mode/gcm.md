---
title: gcm
createTime: 2025/04/11 14:31:27
permalink: /article/d7i88kv3/
---
# GCM模式（Galois/Counter Mode）

## What（是什么）

GCM是一种提供认证加密的工作模式，结合了CTR模式的加密和GMAC的认证功能。

### 核心要素
- 认证加密模式
- 基于CTR模式
- 使用Galois域乘法
- 提供完整性和机密性

## Why（为什么）

### 解决问题
- 需要同时加密和认证的场景
- 高性能加密需求
- 随机访问需求

### 技术优势
- 加密认证一次完成
- 并行计算能力
- 支持附加认证数据(AAD)
- 性能优异

## When（何时）

### 适用场景
- 网络协议(TLS 1.2+)
- 存储加密
- 虚拟化安全
- 高速加密需求

### 发展历程
- 2004年：NIST提出
- 2007年：成为标准
- 现在：广泛使用

## How（如何）

### 算法实现
1. 加密部分：
   - CTR模式加密
   - 生成密钥流

2. 认证部分：
   - 计算GHASH
   - 生成认证标签

### 伪代码
```python
# 加密
ctr = Nonce || Counter
ciphertext = plaintext ^ encrypt(ctr)

# 认证
auth_tag = GHASH(AAD, ciphertext) ^ encrypt(ctr0)
```
