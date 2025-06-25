---
title: 密钥用途
createTime: 2025/06/25 10:34:08
permalink: /article/lisiem2d/
---

# 密钥用途

## 1. 密钥用途
密钥用途是基本用途，它指示证书中包含的公钥可以执行的密码操作类型。这是一个位掩码，意味着您可以同时选择多个用途。当证书的密钥被用于这些特定目的时，对应密钥用途需要被设置。

* 数据签名 (Digital Signature)：
    * 用途： 用于验证数字签名，确保数据的完整性和真实性。常用于对文档、代码、邮件或其他数据进行签名。
    * 示例： 签署软件更新包、PDF 文档、S/MIME 邮件签名、VPN 认证（部分场景）。
    * 选择场景： 任何需要对数据进行签名的证书。
* 防抵赖 (Non-Repudiation)：
    * 用途： 类似于 digitalSignature，但更强调签名的不可否认性，即签名者不能否认他们执行了签名操作。
    * 示例： 具有法律效力的电子签名、电子交易确认。
    * 选择场景： 通常与 digitalSignature 一起使用，当签名的法律效力或追溯性很重要时。
* 加密密钥 (Key Encipherment)：
    * 用途： 用于加密对称密钥、私钥或任何其他用于加密的密钥。例如，在 SSL/TLS 握手期间，服务器的公钥用于加密客户端生成的预主密钥（pre-master secret）。
    * 示例： TLS/SSL 服务器证书、用于文件加密（如 EFS）、S/MIME 邮件加密。
    * 选择场景： 需要用证书公钥加密其他密钥的场景。
* 加密数据 (Data Encipherment)：
    * 用途： 用于直接加密用户数据，而不是加密密钥。这在实践中较少直接用于大量数据，因为非对称加密效率较低，通常结合对称加密使用。
    * 示例： 用于加密小块数据，或者在某些特定的协议中。
    * 选择场景： 需要用证书公钥直接加密少量数据的场景。
* 密钥协商 (Key Agreement)：
    * 用途： 用于密钥协商算法（如 Diffie-Hellman），以便双方可以安全地建立共享秘密。
    * 示例： TLS/SSL 握手（Diffie-Hellman 或 ECDH 密钥交换）、IPSec VPN。
    * 选择场景： 证书用于参与密钥协商协议，建立共享秘密以保护后续通信。
* 证书签名 (Certificate Sign)： 
    * 用途： 表明此证书的公钥可用于验证其他证书上的数字签名。这通常是证书颁发机构 (CA) 证书的特有用途。
    * 示例： 根 CA 证书、中间 CA 证书。
    * 选择场景： 只有 CA 证书才应该勾选此项。
* CRL签名 (CRL Sign)：
    * 用途： 表明此证书的公钥可用于验证证书吊销列表 (CRL) 上的数字签名。这通常是 CA 证书或专门的 CRL 签发者证书的用途。
    * 示例： CA 证书。
    * 选择场景： 只有 CA 证书或 CRL 发布者证书才应该勾选此项。
* 仅加密 (Encipher Only)： 
    * 用途： 与 keyAgreement 结合使用，表示密钥只能用于在密钥协商过程中加密数据。
    * 示例： 特定加密算法的限制。
    * 选择场景： 极少单独使用，通常与 keyAgreement 配合。
* 仅解密 (Decipher Only)：
    * 用途： 与 keyAgreement 结合使用，表示密钥只能用于在密钥协商过程中解密数据。
    * 示例： 特定加密算法的限制。
    * 选择场景： 极少单独使用，通常与 keyAgreement 配合。

## 2. 扩展密钥用途

* Server Authentication (服务器认证) (OID: 1.3.6.1.5.5.7.3.1)
    * 用途： 表明证书的公钥可用于服务器端，验证服务器的身份。
    * 示例： HTTPS 服务器、LDAP 服务器、FTPS 服务器。
    * 选择场景： 用于验证服务器身份的证书（即，服务器向客户端证明其身份）。
* Client Authentication (客户端认证) (OID: 1.3.6.1.5.5.7.3.2)
    * 用途： 表明证书的公钥可用于客户端，验证客户端的身份。
    * 示例： 基于证书的 VPN 登录、智能卡登录、TLS 客户端证书认证。
    * 选择场景： 用于验证客户端身份的证书（即，客户端向服务器证明其身份）。
* Code Signing (代码签名) (OID: 1.3.6.1.5.5.7.3.3)
    * 用途： 表明证书的公钥可用于验证可执行代码、脚本或文件的完整性和来源。
    * 示例： 签署 Windows 驱动程序、Java Applet、macOS 应用程序。
    * 选择场景： 用于对软件、驱动程序等进行数字签名的证书。
* Email Protection (邮件保护) (OID: 1.3.6.1.5.5.7.3.4)
    * 用途： 表明证书的公钥可用于安全电子邮件（S/MIME），包括签名和加密电子邮件。
    * 示例： S/MIME 邮件的签名和加密。
    * 选择场景： 用于 S/MIME 电子邮件的证书。
* Time Stamping (时间戳) (OID: 1.3.6.1.5.5.7.3.8)
    * 用途： 表明证书的公钥可用于验证时间戳机构提供的数字时间戳。
    * 示例： 数字签名时附带的时间戳服务。
    * 选择场景： 时间戳服务器使用的证书。
* OCSP Signing (OCSP 签名) (OID: 1.3.6.1.5.5.7.3.9)
    * 用途： 表明证书的公钥可用于验证在线证书状态协议 (OCSP) 响应的签名。
    * 示例： OCSP 响应器使用的证书。
    *选择场景： OCSP 服务端使用的证书。
* IPSec End System (IPSec 终端系统) (OID: 1.3.6.1.5.5.7.3.5)
* IPSec Tunnel (IPSec 隧道) (OID: 1.3.6.1.5.5.7.3.6)
* IPSec User (IPSec 用户) (OID: 1.3.6.1.5.5.7.3.7)
    * 用途： 用于 IPSec VPN 隧道的不同组件。
    * 选择场景： 特定于 IPSec 部署的证书。

## 3. 国密双证书证书用途配置

### 3.1 客户端加密证书

Reference: GMT-0015-2012 基于SM2密码算法的数字证书格式规范.pdf

* 密钥用途 (Key Usage):
    * 密钥协商 (Key Agreement):     客户端的公钥参与创建会话密钥。
    * 加密密钥 (Key Encipherment):  TLS 握手中密钥加密。
    * 加密数据 (Data Encipherment): 用于直接加密用户数据，而不是加密密钥。
* 扩展密钥用途 (Extended Key Usage):
    * 客户端认证 (Client Authentication): 明确指出证书是用于客户端身份验证的。

### 3.2 客户端签名证书

Reference: GMT-0015-2012 基于SM2密码算法的数字证书格式规范.pdf

* 密钥用途 (Key Usage):
    * 数字签名 (Digital Signature): 明确指出证书是用于数字签名的。
    * 防抵赖 (Non-Repudiation):     强调签名的不可否认性。
    * 密钥协商 (Key Agreement):     客户端的公钥参与创建会话密钥。
* 扩展密钥用途 (Extended Key Usage):
    * 客户端认证 (Client Authentication): 明确指出证书是用于客户端身份验证的。

### 3.3 服务端加密证书

* 密钥用途 (Key Usage):
    * 密钥协商 (Key Agreement):     客户端的公钥参与创建会话密钥。
    * 加密密钥 (Key Encipherment):  TLS 握手中密钥加密。
    * 加密数据 (Data Encipherment): 用于直接加密用户数据，而不是加密密钥。
* 扩展密钥用途 (Extended Key Usage):
    * 服务器认证 (Server Authentication): 明确表明证书的用途是服务器身份认证。

### 3.4 服务端签名证书

* 密钥用途 (Key Usage):
    * 数字签名 (Digital Signature): 明确指出证书是用于数字签名的。
    * 防抵赖 (Non-Repudiation):     强调签名的不可否认性。
    * 密钥协商 (Key Agreement):     客户端的公钥参与创建会话密钥。
* 扩展密钥用途 (Extended Key Usage):
    * 服务器认证 (Server Authentication): 明确表明证书的用途是服务器身份认证。


## 4. 单证书证书用途配置

### 4.1 客户端证书
* 密钥用途 (Key Usage):
    * 数字签名 (Digital Signature): 必须选择。客户端使用其私钥对TLS握手消息进行数字签名，以向服务器证明其身份。
    * 密钥协商 (Key Agreement): 必须选择。在SM2密钥交换过程中，客户端证书的公钥参与生成会话密钥。
    * 加密密钥 (Key Encipherment): 在某些特定的密钥交换模式中，客户端的公钥可能需要用于加密数据，可以考虑选择，但不如 Key Agreement 常用。通常，Key Agreement 就足以覆盖密钥交换的需求。RSA 算法，ECC 算法不需要该 Usage。
* 扩展密钥用途 (Extended Key Usage):
    * 客户端认证 (Client Authentication) (OID: 1.3.6.1.5.5.7.3.2): 必须选择。明确表明证书的用途是客户端身份认证。

### 4.2 服务端证书

* 密钥用途 (Key Usage):
    * 数字签名 (Digital Signature): 必须选择。服务器使用其私钥对TLS握手消息进行签名，以向客户端证明其身份。
    * 加密密钥 (Key Encipherment): 必须选择。服务器的公钥用于加密客户端发来的预主密钥。
    * 密钥协商 (Key Agreement): 可选，但通常推荐选择。如果服务器支持基于SM2的密钥协商算法（如SM2_ECDHE_SM2），则需要此项。在实际应用中，Key Encipherment 和 Key Agreement 常常会同时选择以确保兼容性和灵活性。
* 扩展密钥用途 (Extended Key Usage):
    * 服务器认证 (Server Authentication) (OID: 1.3.6.1.5.5.7.3.1): 必须选择。明确表明证书的用途是服务器身份认证。