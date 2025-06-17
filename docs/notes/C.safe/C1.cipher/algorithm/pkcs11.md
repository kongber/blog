---
title: PKCS11 
createTime: 2024/01/10
permalink: /article/rvqjrh41/
---

## 1. PKCS11 简介
PKCS11是一种用于安全访问硬件加密设备的应用程序接口（API）标准。它定义了一组函数和数据结构，使应用程序能够与硬件加密设备进行交互，执行加密、解密、签名和验证等操作。

## 2. PKCS11 的核心概念

### 2.1 基础组件
* 槽位（Slot）：代表物理或逻辑设备接口，如USB读卡器的插槽。
    * 单个 USB Key 设备: 1 个 Slot
    * 智能卡读卡器: 可能有 1 ~ 4 个 Slot
    * 软件 HSM: 1 ~ 2 个 Slot
    * 硬件 HSM: 多个 Slot, 但一般不会超过 10 个 Slot
* 令牌（Token）：槽位上的密码设备，如HSM或智能卡。
* 会话（Session）：应用程序与令牌之间的通信通道，分为"公共会话"和"用户会话"。
* 对象（Object）：令牌中存储的数据实体，如密钥、证书、数据对象。对象通过属性（Attribute）定义其类型和访问权限。
    * 访问权限：共有对象，私有对象。
    * 状态类型：临时会话，持久会话。
* 用户（User）：与令牌进行交互的实体，如管理员、普通用户。
    * Security Officer (管理员)：初始化令牌，设置密码，重置密码，更新固件等管理操作。
    * Normal Users (普通用户)：生成密钥，签名，加密，解密，证书管理，密钥管理。

### 2.2 调用流程

```markdown
A[C_GetFunctionList] --> B[C_Initialize] 
B --> C[C_GetSlotList]
C --> D[C_OpenSession]
D --> E[C_Login]
E --> F[C_Logout]
F --> G[C_CloseSession]
G --> H[C_Finalize]
```

## 3. SoftHsm2 
SoftHsm2是一个开源的密码设备软件实现，提供了PKCS11接口，用于管理和使用密码设备。它支持多种硬件加密设备，如HSM、智能卡等。

### 3.1 安装和配置
```bash 
sudo apt install softhsm2
softhsm2-util --version
```

## 4. PKCS11 实现和使用

### 4.1 工具安装

使用 opensc 安装 操作 pkcs11 模块。
```bash
sudo apt install opensc
```
### 4.2 模块管理
使用 softHsm2 管理 pkcs11 模块。(其他硬件设备模块类似)
* 查看模块信息: 
    * pkcs11-tool --show-info --module /usr/local/lib/softhsm/libsofthsm2.so
* 查看令牌信息:
    * pkcs11-tool --list-slots --module /usr/local/lib/softhsm/libsofthsm2.so
* 初始化令牌:
    * pkcs11-tool --init-token --slot 0 --label "My Token" --so-pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so
* 初始化用户:
    * pkcs11-tool --init-pin --slot 0x01 --so-pin 12345678 --pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so
* 查看对象信息: 
    * pkcs11-tool --list-objects --module /usr/local/lib/softhsm/libsofthsm2.so
* 查看对象信息(private): 
    * pkcs11-tool --list-objects --login --pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so 
* 删除对象信息:
    * pkcs11-tool --delete-object --label="vehiclepubk" --type=data --module /usr/local/lib/softhsm/libsofthsm2.so
* 生成密钥对信息:
    * pkcs11-tool --generate-key-pair --key-type RSA:2048 --id 01 --label "My Key Pair" --module /usr/local/lib/softhsm/libsofthsm2.so
* 签名操作: 
    * pkcs11-tool --sign --mechanism SHA256-RSA-PKCS --input input_file --output signed_file --login --pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so
* 验证签名: 
    * pkcs11-tool --verify --mechanism SHA256-RSA-PKCS --input input_file --signature signed_file --login --pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so
* 加密操作: 
    * pkcs11-tool --encrypt --mechanism RSA-OAEP --input input_file --output encrypted_file --login --pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so
* 解密操作:
    * pkcs11-tool --decrypt --mechanism RSA-OAEP --input encrypted_file --output decrypted_file --login --pin 12345678 --module /usr/local/lib/softhsm/libsofthsm2.so

### 4.3 常用函数
* C_Initialize：这个函数用于初始化PKCS#11库和密码设备。它可能包括设置库的运行时环境、加载支持的密码设备模块，以及进行其他初始化操作。
* C_Finalize：C_Finalize函数用于终止PKCS#11库和密码设备的操作。它通常包括资源的释放、会话的关闭和清理操作。
* C_GetFunctionList：这个函数用于获取PKCS#11库中可用的函数列表，以供应用程序进行函数调用。
* C_GetInfo：C_GetInfo函数用于获取PKCS#11库的信息，如库的版本、制造商、支持的机制等。
* C_GetSlotList：这个函数用于获取密码设备中可用的槽（slots）列表，每个槽对应一个物理或逻辑插槽，通常包含一个密码设备模块。
* C_GetTokenInfo：C_GetTokenInfo函数用于获取特定槽中的密码设备信息，包括制造商、模块名称、序列号等。
* C_OpenSession：C_OpenSession函数用于建立与密码设备的会话，这是进行密码学操作的前提，会话可以有不同的安全级别和属性。
* C_CloseSession：C_CloseSession函数用于关闭会话，确保资源的正确释放，会话的安全结束以及操作的完整性。
* C_Login：C_Login函数用于用户的身份验证，以获得对密码设备的访问权限。这可以包括PIN码的验证或其他身份验证机制。
* C_Logout：C_Logout函数用于用户退出会话，以保护密码设备免受未经授权的访问。
* C_GenerateKey：这个函数用于生成密钥，可以是对称密钥或非对称密钥，具体取决于指定的机制和参数。
* C_Encrypt和C_Decrypt：这些函数分别用于加密和解密数据，可以使用指定的密钥和机制进行操作。
* C_Sign和C_Verify：这些函数用于数字签名和验证数字签名，以确保数据的完整性和来源验证。
* C_Digest：C_Digest函数用于计算数据的摘要，通常用于数据完整性验证。
* C_GenerateRandom：C_GenerateRandom函数用于生成高质量的随机数，用于密钥生成、初始化向量生成等密码学操作。

## 5. 参考资料
* 规范
    * [PKCS #11 加密令牌接口基本规范版本 2.40](https://docs.oasis-open.org/pkcs11/pkcs11-base/v2.40/errata01/os/pkcs11-base-v2.40-errata01-os-complete.html)
    * [PKCS #11 URI Scheme](https://www.rfc-editor.org/rfc/rfc7512)
* 代码 
    * [PKCS #11 provider 应用](https://github.com/embetrix/pkcs11-provider-example)
    * [PKCS #11 Tool and Opensssl](https://github.com/OpenSC/OpenSC/wiki/Using-pkcs11-tool-and-OpenSSL)
* 资料
    * [PKCS #11 youtube](https://www.youtube.com/watch?v=zTt9wp5vXDE&list=PLgBMtP0_D_aec5yMhAmcjmeFoJGwfgLKy)  
    * [Cryptographic Token Interface Standard (https://www.cryptsoft.com/pkcs11doc/v220/)](https://www.cryptsoft.com/pkcs11doc/v220/)