---
title: DH密钥交换
createTime: 2024/01/10
permalink: /article/rvqjrh40/
---

# DH密钥交换协议

Diffie-Hellman密钥交换（DH）是一种允许双方在不安全的通道上建立共享密钥的协议。

## 协议原理

1. 系统参数
   - 大素数p
   - 生成元g（2 ≤ g ≤ p-2）

2. 密钥交换过程
   - Alice选择私钥a，计算A = g^a mod p
   - Bob选择私钥b，计算B = g^b mod p
   - 双方交换A和B
   - 共享密钥K = B^a mod p = A^b mod p

## 安全性

- 基于离散对数问题
- 抵抗中间人攻击需要身份认证
- 建议使用2048位或更长的素数p

## 改进版本

- ECDH：基于椭圆曲线的DH
- 认证型DH：增加身份认证机制

## 应用场景

- TLS/SSL协议
- IPSec VPN
- 即时通讯加密
- 安全通信信道建立