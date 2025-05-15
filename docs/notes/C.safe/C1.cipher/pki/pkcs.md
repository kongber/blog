---
title: PKCS系列标准
createTime: 2025/05/15 16:08:27
permalink: /article/pkcs-standards/
---

# PKCS（公钥密码学标准）

## 1. PKCS 概述
PKCS 全称是 Public-Key Cryptography Standards ，是由 RSA 实验室与其它安全系统开发商为促进公钥密码的发展而制订的一系列标准。

## 2. PKCS#1：RSA加密标准
- RSA加密算法概述
- 密钥生成和格式
- 加密和解密操作
- 数字签名机制
- 填充方案（ PKCS#1 v1.5 和 OAEP ）
- 对应RFC标准：8017、3447、2437、2313
- v2.2: https://www.rfc-editor.org/rfc/rfc8017

## 3. PKCS#2：RSA加密标准
- 消息摘要加密，合并到了 PKCS#1 中

## 4. PKCS#3：DH密钥协商标准
- Diffie-Hellman密钥交换协议
- 密钥生成过程
- 安全考虑
- 应用场景

## 5. PKCS#4：RSA 密钥语法
- 规定 RSA 密钥语法，合并到了 PKCS#1 中

## 6. PKCS#5：基于密码的加密标准
- 密码加密方案
- PBKDF2密钥派生函数
- 加密算法
- 对应RFC标准：8018、2898
- v2.1: https://www.rfc-editor.org/rfc/rfc8018

## 7. PKCS#6：扩展证书语法标准
- 定义了X.509证书的扩展语法
- 已被X.509 v3证书标准取代
- 不再作为独立标准使用

## 8. PKCS#7：密码消息语法标准
- 数字签名格式
- 数字信封
- S/MIME应用
- 对应RFC标准：2315、5652、3369
- pkcs7: https://www.rfc-editor.org/rfc/rfc2315
- CMS: https://www.rfc-editor.org/rfc/rfc5652

## 9. PKCS#8：私钥信息语法标准
- 私钥格式规范
- 加密私钥
- 密钥保护
- 对应RFC标准：5208、5958
- https://www.rfc-editor.org/rfc/rfc5208
- https://www.rfc-editor.org/rfc/rfc5958

## 10. PKCS#9：选定的属性类型
- 电子邮件属性
- 挑战口令属性
- 扩展属性类型
- 对应RFC标准：2985
- https://www.rfc-editor.org/rfc/rfc2985

## 11. PKCS#10：证书请求语法标准 (CSR)
- 证书请求格式
- 证书申请流程
- 属性处理
- 对应RFC标准：2986、5967
- https://www.rfc-editor.org/rfc/rfc2986
- https://www.rfc-editor.org/rfc/rfc5967

## 12. PKCS#11：密码令牌接口标准
- Cryptoki概述
- API接口规范
- 密码操作
- 设备管理
- OASIS标准维护
- https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=pkcs11

## 13. PKCS#12：个人信息交换语法标准
- 证书和私钥打包
- 安全存储
- 密码保护
- 对应RFC标准：7292
- v1.1: https://www.rfc-editor.org/rfc/rfc7292

## 14. PKCS#13：椭圆曲线密码标准
- ECC算法概述
- 密钥生成
- 加密操作
- 签名机制

## 15. PKCS#14：伪随机数产生标准
- 随机数生成算法
- 熵源管理
- 随机数生成算法

## 16. PKCS#15：密码令牌信息格式标准
- 智能卡应用
- 密码对象存储
- 访问控制