---
title: 后量子密码
createTime: 2024/01/10
---

# 后量子密码

后量子密码（Post-Quantum Cryptography，PQC）是为了抵抗量子计算机攻击而设计的密码系统，目标是在量子计算机时代仍然保持安全性。

## 主要类型

### 基于格的密码
- LWE（Learning With Errors）
- NTRU（Number Theory Research Unit）
- RLWE（Ring-LWE）

### 基于编码的密码
- McEliece密码系统
- Niederreiter密码系统

### 多变量密码
- Rainbow签名
- HFEv-签名

### 基于哈希的密码
- SPHINCS+
- XMSS

### 超奇异同源密码
- SIKE（已被破解）

## NIST标准化

### 第三轮入选算法
- CRYSTALS-Kyber（公钥加密）
- CRYSTALS-Dilithium（数字签名）
- FALCON（数字签名）
- SPHINCS+（数字签名）

## 性能特点

### 优势
- 抗量子计算攻击
- 基于成熟数学问题
- 可在经典计算机上实现

### 挑战
- 密钥大小
- 计算开销
- 带宽占用

## 应用场景

- 长期数据保护
- 关键基础设施
- 政府通信系统
- 区块链系统

## 研究方向

- 效率优化
- 安全性分析
- 硬件加速
- 混合方案