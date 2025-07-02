---
title: Tongsuo
createTime: 2025/04/30 15:55:46
permalink: /article/3a658ak4/
---

项目地址: https://github.com/Tongsuo-Project/Tongsuo

NTLS使用手册
编译NTLS功能
NTLS在BabaSSL的属于中代指符合GM/T 0024 SSL VPN和TLCP协议的安全通信协议，其特点是采用加密证书/私钥和签名证书/私钥相分离的方式。

在编译BabaSSL的时候，需要显式的指定编译参数方可开启NTLS的支持：

./config enable-ntls
特性使用（s_server/s_client工具验证）
测试用证书在test_certs/double_cert目录下

server端：命令行输入

openssl s_server -accept 127.0.0.1:4433 \
    -enc_cert test_certs/double_cert/SE.cert.pem \
    -enc_key test_certs/double_cert/SE.key.pem \
    -sign_cert test_certs/double_cert/SS.cert.pem \
    -sign_key test_certs/double_cert/SS.key.pem \
    -enable_ntls
client端(测试ECC-SM2-WITH-SM4-SM3套件)：命令行输入

openssl s_client -connect 127.0.0.1:4433 -cipher ECC-SM2-WITH-SM4-SM3 -enable_ntls -ntls
client端(测试ECDHE-SM2-WITH-SM4-SM3套件)：命令行输入

openssl s_client -connect 127.0.0.1:4433 -cipher ECDHE-SM2-WITH-SM4-SM3 \
    -sign_cert test_certs/double_cert/CS.cert.pem \
    -sign_key test_certs/double_cert/CS.key.pem \
    -enc_cert test_certs/double_cert/CE.cert.pem \
    -enc_key test_certs/double_cert/CE.key.pem \
    -enable_ntls -ntls
在你的client/server中使用（相关api使用）
server端

int main() {
    //变量定义
    const SSL_METHOD *meth = NULL;
    SSL_CTX *ctx = NULL;
    const char *sign_key_file = "/path/to/sign_key_file";
    const char *sign_cert_file = "/path/to/sign_cert_file";
    const char *enc_key_file = "/path/to/enc_key_file";
    const char *enc_cert_file = "/path/to/enc_cert_file";

    //双证书相关server的各种定义
    meth = NTLS_server_method();
    //生成上下文
    ctx = SSL_CTX_new(meth);
    //允许使用国密双证书功能
    SSL_CTX_enable_ntls(ctx);

    //加载签名证书，加密证书
    if (sign_key_file) {
        if (!SSL_CTX_use_sign_PrivateKey_file(cctx->ctx, sign_key_file,
                                               SSL_FILETYPE_PEM))
            goto err;
    }

    if (sign_cert_file) {
        if (!SSL_CTX_use_sign_certificate_file(cctx->ctx, sign_cert_file,
                                               SSL_FILETYPE_PEM))
            goto err;
    }

    if (enc_key_file) {
        if (!SSL_CTX_use_enc_PrivateKey_file(cctx->ctx, enc_key_file,
                                             SSL_FILETYPE_PEM))
            goto err;
    }

    if (enc_cert_file) {
        if (!SSL_CTX_use_enc_certificate_file(cctx->ctx, enc_cert_file,
                                              SSL_FILETYPE_PEM))
            goto err;
    }

    //...后续同标准tls流程
    con = SSL_new(ctx);
}
client端

int main() {
    //变量定义
    const SSL_METHOD *meth = NULL;
    SSL_CTX *ctx = NULL;
    const char *sign_key_file = "/path/to/sign_key_file";
    const char *sign_cert_file = "/path/to/sign_cert_file";
    const char *enc_key_file = "/path/to/enc_key_file";
    const char *enc_cert_file = "/path/to/enc_cert_file";

    //双证书相关client的各种定义
    meth = NTLS_client_method();
    //生成上下文
    ctx = SSL_CTX_new(meth);
    //允许使用国密双证书功能
    SSL_CTX_enable_ntls(ctx);

    //设置算法套件为ECC-SM2-WITH-SM4-SM3或者ECDHE-SM2-WITH-SM4-SM3
    //这一步并不强制编写，默认ECC-SM2-WITH-SM4-SM3优先
    if(SSL_CTX_set_cipher_list(ctx, "ECC-SM2-WITH-SM4-SM3") <= 0)
        goto err;

    //加载签名证书，加密证书，仅ECDHE-SM2-WITH-SM4-SM3套件需要这一步,
    //该部分流程用...begin...和...end...注明
    // ...begin...
    if (sign_key_file) {
        if (!SSL_CTX_use_sign_PrivateKey_file(cctx->ctx, sign_key_file,
                                               SSL_FILETYPE_PEM))
            goto err;
    }

    if (sign_cert_file) {
        if (!SSL_CTX_use_sign_certificate_file(cctx->ctx, sign_cert_file,
                                               SSL_FILETYPE_PEM))
            goto err;
    }

    if (enc_key_file) {
        if (!SSL_CTX_use_enc_PrivateKey_file(cctx->ctx, enc_key_file,
                                             SSL_FILETYPE_PEM))
            goto err;
    }

    if (enc_cert_file) {
        if (!SSL_CTX_use_enc_certificate_file(cctx->ctx, enc_cert_file,
                                              SSL_FILETYPE_PEM))
            goto err;
    }
    // ...end...

    //...后续同标准tls流程
    con = SSL_new(ctx);
}