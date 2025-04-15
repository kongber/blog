---
title: ctr
createTime: 2025/04/11 14:31:15
permalink: /article/rosauizo/
---
# CTR模式（Counter Mode）

## What（是什么）

CTR是一种将分组密码转换为流密码的工作模式，通过加密计数器值来生成密钥流。

### 核心要素
- 流加密模式
- 使用计数器而非反馈
- 可并行计算
- 不需要填充

## Why（为什么）

### 解决问题
- 需要并行加密的场景
- 处理任意长度数据
- 随机访问需求

### 技术优势
- 加密解密使用相同结构
- 无错误传播
- 支持预处理
- 性能优异

## When（何时）

### 适用场景
- 大文件加密
- 随机访问加密
- 高性能需求场景
- 磁盘加密

### 发展历程
- 1979年：首次提出
- 2001年：NIST标准化
- 现在：广泛使用

## How（如何）

### 算法实现
1. 初始化：
   - 设置计数器初始值(Nonce)
   - 定义计数器增量函数

2. 加密/解密：
   - 加密计数器值
   - 与明文/密文异或
   - 更新计数器

### 伪代码
```python
# 加密/解密（过程相同）
counter = Nonce
for block in data:
    key_stream = encrypt(counter)
    output = block ^ key_stream
    counter = increment(counter)
```
