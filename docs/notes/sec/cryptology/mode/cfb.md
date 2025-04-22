---
title: cfb
createTime: 2025/04/11 14:31:05
permalink: /article/xptpe9z1/
---
# CFB模式（Cipher Feedback）

## What（是什么）

CFB是一种将分组密码转换为自同步流密码的工作模式，前一个密文块作为下一个块的加密输入。

### 核心要素
- 流加密模式
- 使用移位寄存器
- 自同步特性
- 支持任意长度数据

## Why（为什么）

### 解决问题
- 需要实时加密的场景
- 处理非块大小整数倍数据
- 错误恢复需求

### 技术优势
- 无需填充
- 支持逐位加密
- 错误传播有限
- 自同步能力

## When（何时）

### 适用场景
- 网络流加密
- 实时通信
- 磁盘加密
- 需要流加密的场景

### 发展历程
- 1980年：首次提出
- 1981年：NIST标准化
- 现在：仍在使用

## How（如何）

### 算法实现
1. 加密过程：
   - 初始化移位寄存器
   - 加密寄存器内容
   - 与明文异或产生密文
   - 密文反馈到寄存器

2. 解密过程：
   - 相同初始化
   - 加密寄存器内容
   - 与密文异或恢复明文
   - 密文反馈到寄存器

### 伪代码
```python
# 加密/解密（过程相同）
register = IV
for data in input_stream:
    encrypted = encrypt(register)
    output = data ^ encrypted[0]
    register = register[1:] + output
```
