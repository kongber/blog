---
title: 密码学体系
createTime: 2024/01/10
permalink: /security/cryptology/
---

# 密码学体系

## 1. 基础密码学

### 1.1 对称密码
- [分组密码](./symmetric/block-cipher.md)
  - DES、AES、SM4
- [流密码](./symmetric/stream-cipher.md)
  - RC4、ChaCha20
- [工作模式](./symmetric/operation-modes.md)
  - ECB、CBC、CTR、GCM

### 1.2 非对称密码
- [RSA算法](./asymmetric/rsa.md)
- [ECC椭圆曲线](./asymmetric/ecc.md)
- [DH密钥交换](./asymmetric/dh.md)
- [ElGamal加密](./asymmetric/elgamal.md)

### 1.3 哈希函数
- [MD5/SHA家族](./hash/md-sha.md)
- [HMAC](./hash/hmac.md)
- [SM3](./hash/sm3.md)

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
- [密钥生成](./key/generation.md)
- [密钥分发](./key/distribution.md)
- [密钥存储](./key/storage.md)

### 3.2 认证机制
- [数字签名](./auth/digital-signature.md)
- [数字证书](./auth/certificate.md)
- [PKI体系](./auth/pki.md)

### 3.3 协议安全
- [TLS/SSL](./protocol/tls-ssl.md)
- [SSH](./protocol/ssh.md)
- [VPN](./protocol/vpn.md)

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

## 5. 新兴领域

### 5.1 区块链密码学
- [共识机制](./blockchain/consensus.md)
- [智能合约](./blockchain/smart-contract.md)
- [零知识应用](./blockchain/zk-apps.md)

### 5.2 隐私计算
- [安全多方计算](./privacy/mpc.md)
- [联邦学习](./privacy/federated-learning.md)
- [差分隐私](./privacy/differential-privacy.md)