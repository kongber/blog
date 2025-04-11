---
title: ElGamal加密
createTime: 2024/01/10
permalink: /article/4u55u2ar/
---

# ElGamal加密系统

ElGamal加密是一种基于离散对数问题的公钥密码系统，由Taher ElGamal在1985年提出。

## 算法原理

### 密钥生成
- 选择大素数p和生成元g
- 选择私钥x（1 < x < p-1）
- 计算公钥y = g^x mod p

### 加密过程
- 选择随机数k
- 计算c1 = g^k mod p
- 计算c2 = m × y^k mod p
- 密文为(c1, c2)

### 解密过程
- 计算s = c1^x mod p
- 计算m = c2 × s^(-1) mod p

## 特点

- 随机化加密：相同明文每次加密结果不同
- 语义安全：满足选择明文安全
- 密文长度：是明文长度的两倍

## 应用场景

- 数字签名
- 公钥加密
- 密钥分发
- 安全通信