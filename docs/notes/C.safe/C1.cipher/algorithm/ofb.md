---
title: ofb
createTime: 2025/04/11 14:31:11
permalink: /article/40cjg59p/
---

# OFB模式（Output Feedback）

## What（是什么）

OFB是一种将分组密码转换为自同步流密码的工作模式，通过加密反馈输出生成密钥流。

### 核心要素
- 流加密模式
- 使用初始化向量(IV)
- 反馈机制
- 自同步特性

## Why（为什么）

### 解决问题
- 需要流加密的场景
- 避免错误传播
- 预处理密钥流需求

### 技术优势
- 可预处理密钥流
- 错误不传播
- 实现简单
- 支持实时加密

## When（何时）

### 适用场景
- 实时通信加密
- 卫星通信
- 需要预处理场景
- 低延迟需求

### 发展历程
- 1977年：首次提出
- 1980年：NIST标准化
- 现在：特定领域使用

## How（如何）

### 算法实现
1. 初始化：
   - 设置IV
   - 初始化反馈寄存器

2. 加密/解密：
   - 加密反馈寄存器
   - 输出作为密钥流
   - 与明文/密文异或
   - 更新反馈寄存器

### 伪代码
```python
# 加密/解密（过程相同）
register = IV
for data in input_stream:
    key_stream = encrypt(register)
    output = data ^ key_stream[0]
    register = key_stream
```
