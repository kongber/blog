---
title: openssl
createTime: 2025/04/15 16:47:44
permalink: /article/dcv6gqr2/
---

# 加密库 | OpenSSL

## 1. OpenSSL 简介

OpensSSL 是一个开放源代码的软件库包，应用程序可以使用这个包来进行安全通信。
库地址：[https://www.openssl.org/](https://www.openssl.org/)

# 2. OpenSSL 库编译
 
## 2.1 Window 编译

```bash
# Windows 中编译 OpenSSL 需使用 msvc 进行编译，并且增加 no-asm 编译选项，不使用汇编模式进行编译。
perl Configure VC-WIN32 shared no-asm --prefix=E:\openssl\xxx\ --openssldir=E:\openssl\xxx
perl Configure VC-WIN64A shared no-asm --prefix=E:\openssl\xxx\ --openssldir=E:\openssl\xxx

nmake
nmake install
```

## 2.2 Linux 编译

```bash
./config shared no-asm --prefix=/home/xxx/
make
make install
```

## 2.3 iOS 编译

```bash
export DEVELOPER=`xcode-select -print-path`
export PLATFORM="iPhoneOS"
export CROSS_TOP="${DEVELOPER}/Platforms/${PLATFORM}.platform/Developer"
export IOS_SDK_VERSION=""
export CROSS_SDK="${PLATFORM}${IOS_SDK_VERSION}.sdk"
export BUILD_TOOLS="${DEVELOPER}"
export CC="${BUILD_TOOLS}/usr/bin/gcc -fembed-bitcode  -miphoneos-version-min=8.0 -arch arm64"
./Configure iphoneos-cross no-asm -no-shared enable-ntls
```

## 2.4 Android 编译

```bash
export PATH=/opt/toolchains/android/android-ndk-r26d/toolchains/llvm/prebuilt/linux-x86_64/bin:$PATH
export ANDROID_NDK_HOME=/opt/toolchains/android/android-ndk-r26d
export ANDROID_NDK_ROOT=/opt/toolchains/android/android-ndk-r26d
./Configure android-arm64 -D__ANDROID_API__=21 --prefix=/xxx/tongsuo-android
```

## 2.5 交叉编译

```bash
./config shared no-asm --prefix=/home/xxx/ --cross-compile-prefix=arm-linux-gnueabihf-
**make 
make install** 
```

## 3. OpenSSL 常用命令

## 3.1 **证书格式转换**

### 3.1.1 PEM ⇒ DER

openssl x509 -outform der -in certificate.pem -out certificate.der

### 3.1.2 DER ⇒ PEM

openssl x509 -inform der -in certificate.cer -out certificate.pem

### 3.1.3 PEM ⇒ PFX

openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt

### 3.1.4 PFX ⇒ PEM

openssl pkcs12 -in certificate.pfx -out certificate.cer -nodes

### 3.1.5 PEM ⇒ P7B

openssl crl2pkcs7 -nocrl -certfile certificate.cer -out certificate.p7b -certfile CACert.cer

### 3.1.6 P7B ⇒ PEM

openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer

### 3.1.7 P7B ⇒ PFX

openssl pkcs7 -print_certs -in certificate.p7b -out certificate.cer

openssl pkcs12 -export -in certificate.cer -inkey privateKey.key -out certificate.pfx -certfile CACert.cer

## 3.2 多级证书链生成

### 3.2.1 RSA 证书链

```bash
# 生成根 CA
openssl genrsa -des3 -out root.key 2048
openssl req -new -x509 -days 3650 -key root.key -out root.crt

# 生成二级 CA
openssl genrsa -des3 -out second.key 2048
openssl rsa -in second.key -out second.key
openssl req -new -days 3650 -key second.key -out second.csr
openssl ca -extensions v3_ca -in second.csr -config /etc/pki/tls/openssl.cnf -days 3650 -out second.crt -cert root.crt -keyfile root.key

# 生成三级 CA
openssl genrsa -des3 -out third.key 2048
openssl rsa -in third.key -out third.key
openssl req -new -days 3650 -key third.key -out third.csr
openssl ca -extensions v3_ca -in third.csr -config /etc/pki/tls/openssl.cnf -days 3650 -out third.crt -cert second.crt -keyfile second.key
```

### 3.2.2 ECC 证书链

```bash
# 生成根 CA 
openssl ecparam -out root.key -name prime256v1 -genkey
openssl req -new -x509 -days 3650 -key root.key -out root.crt

# 生成二级 CA
openssl ecparam -out second.key -name prime256v1 -genkey
openssl req -new -days 3650 -key second.key -out second.csr
openssl ca -extensions v3_ca -in second.csr -days 3650 -out second.pem -cert root.pem -keyfile root.key

# 生成三级 CA 
同生成二级证书
```

### 3.2.3 SM2 证书链

```bash
# 生成根 CA: 
openssl ecparam -genkey -name SM2 -out root.key
openssl req -new -x509 -days 3650 -key root.key -out root.crt

# 生成二级 CA
openssl ecparam -genkey -name SM2 -out second.key
openssl req -new -days 3650 -key second.key -out second.csr
openssl ca -extensions v3_ca -in second.csr -days 3650 -out second.crt -cert root.crt -keyfile root.key
```

## 3.3 证书链校验

openssl verify -CAfile cert1.pem(根+sub) cert2.pem(其他)

## 3.4 OCSP 校验

openssl ocsp -issuer ocsp.cer -cert iwall.pem -text -url http://xxx.8080

## 3.5 P12 生成及解析

```bash
# P12 导出证书
openssl pkcs12 -clcerts -nokeys -out apple_cert.pem -in apple_cert.p12
# P12 导出私钥
openssl pkcs12 -nocerts -nodes -out apple.key -in apple_cert.p12
# P12 使用 key 导出公私钥
openssl rsa -in apple.key -out apple_rsa_pri.pemopenssl rsa -in apple.key -pubout -out apple_rsa_pub.pem
openssl ec -in apple.key -out apple_ec_pri.pemopenssl ec -in apple.key -pubout -out apple_ec_pub.pem
# P12 生成
openssl pkcs12 -export -clcerts -in root.crt -inkey Authorized.key -out Authorized.p12
```

## 3.6 Hash 计算

```bash
# SHA256 
openssl dgst -sha256 datafile
# SM3
openssl dgst -sm3 datafile
# SHA256-HMAC
openssl dgst -sha256 -hmac keystr datafile
# SM3-HMAC
openssl dgst -sm3 -hmac keystr datafile
```

## 3.7 TLS 服务

```bash
# 开启 TLS 服务
openssl s_server -accept 4433 -key server.key -cert server.crt -CAfile certificate_chain.crt -verify 5 -debug
  
openssl s_server -accept 127.0.0.1:4433 \
    -enc_cert test_certs/double_cert/SE.cert.pem \
    -enc_key test_certs/double_cert/SE.key.pem \
    -sign_cert test_certs/double_cert/SS.cert.pem \
    -sign_key test_certs/double_cert/SS.key.pem \
    -enable_ntls

# BabaSSL 创建 TLS 请求
openssl s_client -connect 127.0.0.1:4433 -cipher ECC-SM2-WITH-SM4-SM3 -enable_ntls -ntls

openssl s_client -connect 127.0.0.1:4433 -cipher ECDHE-SM2-WITH-SM4-SM3 \
    -sign_cert test_certs/double_cert/CS.cert.pem \
    -sign_key test_certs/double_cert/CS.key.pem \
    -enc_cert test_certs/double_cert/CE.cert.pem \
    -enc_key test_certs/double_cert/CE.key.pem \
    -enable_ntls -ntls
```

## 3.8 生成 bks

```bash
keytool -keystore truststore.bks -keypass qwer1234 -storepass qwer1234
-storetype BKS -provider org.bouncycastle.jce.provider.BouncyCastleProvider
-alias TrustCA -import -trustcacerts -file localhost_cert_chain.pem 
-providerpath /Users/sm2/Desktop/certs/bcprov-jdk18on-177.jar
```

## 4. 参考链接

1. 代码生成 CSR 文件  [https://www.cnblogs.com/chevin/p/11041713.html](https://www.cnblogs.com/chevin/p/11041713.html)
2. 生成 ED25519 证书 [https://blog.pinterjann.is/ed25519-certificates.html](https://blog.pinterjann.is/ed25519-certificates.html)
3. OpenSSL 测试命令  [https://blog.csdn.net/carefree2005/article/details/120889451](https://blog.csdn.net/carefree2005/article/details/120889451)