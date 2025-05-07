---
title: ECC椭圆曲线
createTime: 2024/01/10
permalink: /article/inmfcyrh/
---

# ECC椭圆曲线密码学

## What（是什么）
ECC是一种基于椭圆曲线数学的公钥密码系统，其安全性基于椭圆曲线离散对数问题（ECDLP）。

### 核心要素
- 椭圆曲线方程：y² = x³ + ax + b
- 有限域：所有运算在特定的素数域上进行
- 基点G：曲线上的一个特定点
- 私钥：一个随机数k
- 公钥：基点G的k倍点

## Why（为什么）

### 解决问题
- RSA密钥长度过长问题
- 移动设备计算资源限制
- 带宽和存储空间优化需求

### 技术优势
| 安全强度 | ECC密钥长度 | RSA密钥长度 |
|---------|------------|------------|
| 128位   | 256位      | 3072位     |
| 192位   | 384位      | 7680位     |
| 256位   | 512位      | 15360位    |

## When（何时）

### 适用场景
- 需要高安全性但资源受限时
- 需要高性能加密时
- 移动设备和物联网应用
- 实时通信系统

### 发展历程
- 1985年：Miller和Koblitz独立提出
- 1990年代：理论研究阶段
- 2000年后：开始广泛应用
- 现在：主流加密方案

## How（如何）

### 基本操作
1. 密钥生成
   - 选择随机数作为私钥
   - 计算基点倍乘得到公钥

2. 加密过程
   - 将消息映射到曲线上的点
   - 使用接收方公钥进行点运算

3. 解密过程
   - 使用私钥进行逆运算
   - 从点还原出原始消息

### 实现方式
- ECDSA：数字签名
- ECDH：密钥交换
- ECIES：集成加密方案

## How Much（多少）

### 性能指标
- 计算速度：比RSA快7-30倍
- 密钥长度：约为RSA的1/6
- 带宽占用：显著低于RSA
- 存储需求：更少的内存占用

### 应用成本
- 开发成本：现代密码库普遍支持
- 运行成本：更低的计算资源需求
- 维护成本：更简单的密钥管理

secp256r1 曲线参数：

| Name | Value                                                        |
| ---- | ------------------------------------------------------------ |
| p    | 0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff |
| a    | 0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc |
| b    | 0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b |
| G    | (0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296, 0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5) |
| n    | 0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551 |
| h    | 0x1                                                          |



SM2 曲线参数：

| Name | Value                                                        |
| ---- | ------------------------------------------------------------ |
| p    | 0xfffffffeffffffffffffffffffffffffffffffff00000000ffffffffffffffff |
| a    | 0xfffffffeffffffffffffffffffffffffffffffff00000000fffffffffffffffc |
| b    | 0x28e9fa9e9d9f5e344d5a9e4bcf6509a7f39789f515ab8f92ddbcbd414d940e93 |
| G    | (0x32c4ae2c1f1981195f9904466a39c9948fe30bbff2660be1715a4589334c74c7, 0xbc3736a2f4f6779c59bdcee36b692153d0a9877cc62a474002df32e52139f0a0) |
| n    | 0xfffffffeffffffffffffffffffffffff7203df6b21c6052b53bbf40939d54123 |
| h    | 0x1                                                          |

## 常用曲线

- secp256k1：比特币使用的曲线
- secp256r1：RFC 3279推荐的曲线
- Curve25519：现代高性能曲线
- SM2：中国商用密码标准曲线

## 优势

- 密钥长度短（256位ECC ≈ 3072位RSA）
- 计算效率高
- 带宽占用小

## 应用场景

- 数字签名（ECDSA）
- 密钥协商（ECDH）
- 移动设备加密
- 物联网安全

参考链接：

[Secp 曲线参数]https://neuromancer.sk/std/secg