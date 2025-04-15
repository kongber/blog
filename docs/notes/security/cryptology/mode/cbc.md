---
title: cbc
createTime: 2025/04/11 14:30:59
permalink: /article/cmhmk35t/
---

# CBC模式（Cipher Block Chaining）

## What（是什么）

CBC是一种分组密码工作模式，每个明文块先与前一个密文块进行异或操作后再加密。

### 核心要素
- 分组加密方式
- 使用初始化向量(IV)
- 链式加密结构
- 需要填充机制

## Why（为什么）

### 解决问题
- ECB模式的相同明文产生相同密文问题
- 隐藏明文数据模式
- 提高安全性

### 技术优势
- 相同明文产生不同密文
- 支持并行解密
- 错误传播有限
- 安全性较高

## When（何时）

### 适用场景
- 文件加密
- 数据库加密
- 网络协议加密
- 需要高安全性的场景

### 发展历程
- 1976年：首次提出
- 1980年：标准化
- 现在：广泛使用

## How（如何）

### 算法实现
1. 加密过程：
   - 明文分块
   - 第一块与IV异或
   - 加密结果作为下一块的IV
   - 循环直到结束

2. 解密过程：
   - 密文分块
   - 解密当前块
   - 与前一块密文异或
   - 循环直到结束

### 伪代码
```python
# 加密
for i in range(blocks):
    if i == 0:
        block ^= IV
    else:
        block ^= ciphertext[i-1]
    ciphertext[i] = encrypt(block)

# 解密
for i in range(blocks):
    block = decrypt(ciphertext[i])
    if i == 0:
        block ^= IV
    else:
        block ^= ciphertext[i-1]
    plaintext[i] = block
```
