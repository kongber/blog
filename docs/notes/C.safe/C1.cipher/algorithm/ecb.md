---
title: ecb
createTime: 2025/04/11 14:30:24
permalink: /article/agwyzm0y/
---

# ECB模式（Electronic Codebook）

## What（是什么）

ECB是最基本的分组密码工作模式，直接对每个明文块独立加密。

### 核心要素
- 分组加密方式
- 无加密反馈
- 独立块处理
- 需要填充机制

## Why（为什么）

### 解决问题
- 最简单的加密模式
- 需要并行加密的场景
- 无需记忆状态

### 技术优势
- 实现简单
- 并行加密
- 无错误传播
- 计算效率高

## When（何时）

### 适用场景
- 加密密钥等短数据
- 需要并行处理
- 测试验证场景
- 低安全需求环境

### 发展历程
- 1977年：DES标准首次定义
- 1980年：正式标准化
- 现在：基本被淘汰

## How（如何）

### 算法实现
1. 加密过程：
   - 明文分块
   - 每个块独立加密
   - 拼接密文块

2. 解密过程：
   - 密文分块
   - 每个块独立解密
   - 拼接明文块

### 伪代码
```python
# 加密
for block in plaintext_blocks:
    ciphertext.append(encrypt(block))

# 解密 
for block in ciphertext_blocks:
    plaintext.append(decrypt(block))
```
