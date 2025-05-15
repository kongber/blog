---
title: PKCS11 
createTime: 2024/01/10
permalink: /article/rvqjrh41/
---

## 1. PKCS11 简介
PKCS11是一种用于安全访问硬件加密设备的应用程序接口（API）标准。它定义了一组函数和数据结构，使应用程序能够与硬件加密设备进行交互，执行加密、解密、签名和验证等操作。
- PKCS#11的定义和概念
- 标准规范内容
- 核心组件和结构

## 2. PKCS11 应用场景   
- 为什么需要PKCS#11
- 解决了什么问题
- 带来什么好处
## 3. 提出人，和使用人
- 谁在使用PKCS#11
- 适用的场景
- 主要用户群体
## 4. PKCS11 实现步骤

安装 pkcs11-tool

基于 Ubuntu 安装 `sudo apt install opensc1`

查看当前可用模块：
pkcs11-tool --module ./libgm3000_pkcs11.so --list-object

pkcs11-tool --module ./libgm3000_pkcs11.so --list-object --pin 12345678

签名：
pkcs11-tool --module ./libgm3000_pkcs11.so --login --sign --mechanism SHA256-RSA-PKCS --input input_file --output signed_file --pin 12345678
验证签名：
pkcs11-tool --module./libgm3000_pkcs11.so --login --verify --mechanism SHA256-RSA-PKCS --input input_file --signature signed_file --pin 12345678
加密：
pkcs11-tool --module./libgm3000_pkcs11.so --login --encrypt --mechanism RSA-OAEP --input input_file --output encrypted_file --pin 12345678
解密：
pkcs11-tool --module./libgm3000_pkcs11.so --login --decrypt --mechanism RSA-OAEP --input encrypted_file --output decrypted_file --pin 12345678


- 如何实现PKCS#11
- 如何使用PKCS#11
- 开发示例和最佳实践
## 5. PKCS11 实现步骤
- 性能影响
- 资源消耗
- 成本考虑
- 





参考资料：
* [PKCS #11 加密令牌接口基本规范版本 2.40](https://docs.oasis-open.org/pkcs11/pkcs11-base/v2.40/errata01/os/pkcs11-base-v2.40-errata01-os-complete.html)
* [PKCS #11 provider 应用](https://github.com/embetrix/pkcs11-provider-example)
* [PKCS #11 URI Scheme](https://www.rfc-editor.org/rfc/rfc7512)
* [PKCS #11 Tool and Opensssl](https://github.com/OpenSC/OpenSC/wiki/Using-pkcs11-tool-and-OpenSSL)
* [PKCS #11 youtube](https://www.youtube.com/watch?v=zTt9wp5vXDE&list=PLgBMtP0_D_aec5yMhAmcjmeFoJGwfgLKy)  