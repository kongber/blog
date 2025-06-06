---
title: RSA算法
createTime: 2024/01/10
permalink: /article/kv4a1scd/
---

# RSA 算法 

## 什么是 RSA 算法？

RSA是最广泛使用的非对称加密算法之一，由Ron Rivest、Adi Shamir和Leonard Adleman在1977年提出。

## 算法原理

RSA基于大数分解的困难性：
- 密钥生成：选择两个大素数p和q，计算n=p×q和欧拉函数φ(n)
- 公钥：(n,e)，其中e与φ(n)互质
- 私钥：(n,d)，其中d×e ≡ 1 (mod φ(n))

## 加解密过程

- 加密：c = m^e mod n
- 解密：m = c^d mod n

## 安全性

- 安全性基于大数分解问题
- 推荐密钥长度：2048位或更长
- 需要考虑量子计算机威胁

## 应用场景

- 数字签名
- 密钥交换
- 安全通信
- 身份认证