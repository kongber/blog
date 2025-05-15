---
title: scep
createTime: 2025/05/15 16:08:27
permalink: /article/appnvceb/
---
# SCEP 简单证书注册协议

## 1. SCEP 简介
SCEP 是一种用于证书申请和管理的网络协议，它允许用户从远程服务器请求证书，而无需直接与证书颁发机构（CA）进行交互。SCEP 通常用于在网络环境中管理证书，例如在网络设备上安装和更新证书。
SCEP 协议的主要特点包括：
- 简单性：SCEP 协议相对简单，易于理解和实现。
- 灵活性：SCEP 允许用户在不接触 CA 的情况下请求证书，这对于在网络环境中管理证书非常有用。
- 安全性：SCEP 使用加密通信，确保用户的证书请求和响应在传输过程中得到保护。


## 参考资料
* 【SCEP 简介】https://www.urut.ch/scep/scepclient.pdf
* 【SCEP 官网】https://www.cisco.com/c/en/us/support/docs/security-vpn/public-key-infrastructure-pki/116167-technote-scep-00.html
* 【SCEP 官网】https://www.cisco.com/c/zh_cn/support/docs/security-vpn/public-key-infrastructure-pki/116167-technote-scep-00.html
* 【SCEP 协议】https://wenku.baidu.com/view/463ae772a417866fb84a8e1a.html
* 【SCEP 标准】[https://www.rfc-editor.org/rfc/rfc8894.html](https://www.rfc-editor.org/rfc/rfc8894.html#failInfo)
* 【SCEP C 实现】https://github.com/Javex/libscep