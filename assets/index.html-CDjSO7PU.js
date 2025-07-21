import{_ as t,c as n,a as _,o as c}from"./app-CxwMiOet.js";const i={};function r(o,e){return c(),n("div",null,e[0]||(e[0]=[_(`<p>项目地址: https://github.com/Tongsuo-Project/Tongsuo</p><p>NTLS使用手册 编译NTLS功能 NTLS在BabaSSL的属于中代指符合GM/T 0024 SSL VPN和TLCP协议的安全通信协议，其特点是采用加密证书/私钥和签名证书/私钥相分离的方式。</p><p>在编译BabaSSL的时候，需要显式的指定编译参数方可开启NTLS的支持：</p><p>./config enable-ntls 特性使用（s_server/s_client工具验证） 测试用证书在test_certs/double_cert目录下</p><p>server端：命令行输入</p><p>openssl s_server -accept 127.0.0.1:4433 <br> -enc_cert test_certs/double_cert/SE.cert.pem <br> -enc_key test_certs/double_cert/SE.key.pem <br> -sign_cert test_certs/double_cert/SS.cert.pem <br> -sign_key test_certs/double_cert/SS.key.pem <br> -enable_ntls client端(测试ECC-SM2-WITH-SM4-SM3套件)：命令行输入</p><p>openssl s_client -connect 127.0.0.1:4433 -cipher ECC-SM2-WITH-SM4-SM3 -enable_ntls -ntls client端(测试ECDHE-SM2-WITH-SM4-SM3套件)：命令行输入</p><p>openssl s_client -connect 127.0.0.1:4433 -cipher ECDHE-SM2-WITH-SM4-SM3 <br> -sign_cert test_certs/double_cert/CS.cert.pem <br> -sign_key test_certs/double_cert/CS.key.pem <br> -enc_cert test_certs/double_cert/CE.cert.pem <br> -enc_key test_certs/double_cert/CE.key.pem <br> -enable_ntls -ntls 在你的client/server中使用（相关api使用） server端</p><p>int main() { //变量定义 const SSL_METHOD *meth = NULL; SSL_CTX *ctx = NULL; const char *sign_key_file = &quot;/path/to/sign_key_file&quot;; const char *sign_cert_file = &quot;/path/to/sign_cert_file&quot;; const char *enc_key_file = &quot;/path/to/enc_key_file&quot;; const char *enc_cert_file = &quot;/path/to/enc_cert_file&quot;;</p><pre><code>//双证书相关server的各种定义
meth = NTLS_server_method();
//生成上下文
ctx = SSL_CTX_new(meth);
//允许使用国密双证书功能
SSL_CTX_enable_ntls(ctx);

//加载签名证书，加密证书
if (sign_key_file) {
    if (!SSL_CTX_use_sign_PrivateKey_file(cctx-&gt;ctx, sign_key_file,
                                           SSL_FILETYPE_PEM))
        goto err;
}

if (sign_cert_file) {
    if (!SSL_CTX_use_sign_certificate_file(cctx-&gt;ctx, sign_cert_file,
                                           SSL_FILETYPE_PEM))
        goto err;
}

if (enc_key_file) {
    if (!SSL_CTX_use_enc_PrivateKey_file(cctx-&gt;ctx, enc_key_file,
                                         SSL_FILETYPE_PEM))
        goto err;
}

if (enc_cert_file) {
    if (!SSL_CTX_use_enc_certificate_file(cctx-&gt;ctx, enc_cert_file,
                                          SSL_FILETYPE_PEM))
        goto err;
}

//...后续同标准tls流程
con = SSL_new(ctx);
</code></pre><p>} client端</p><p>int main() { //变量定义 const SSL_METHOD *meth = NULL; SSL_CTX *ctx = NULL; const char *sign_key_file = &quot;/path/to/sign_key_file&quot;; const char *sign_cert_file = &quot;/path/to/sign_cert_file&quot;; const char *enc_key_file = &quot;/path/to/enc_key_file&quot;; const char *enc_cert_file = &quot;/path/to/enc_cert_file&quot;;</p><pre><code>//双证书相关client的各种定义
meth = NTLS_client_method();
//生成上下文
ctx = SSL_CTX_new(meth);
//允许使用国密双证书功能
SSL_CTX_enable_ntls(ctx);

//设置算法套件为ECC-SM2-WITH-SM4-SM3或者ECDHE-SM2-WITH-SM4-SM3
//这一步并不强制编写，默认ECC-SM2-WITH-SM4-SM3优先
if(SSL_CTX_set_cipher_list(ctx, &quot;ECC-SM2-WITH-SM4-SM3&quot;) &lt;= 0)
    goto err;

//加载签名证书，加密证书，仅ECDHE-SM2-WITH-SM4-SM3套件需要这一步,
//该部分流程用...begin...和...end...注明
// ...begin...
if (sign_key_file) {
    if (!SSL_CTX_use_sign_PrivateKey_file(cctx-&gt;ctx, sign_key_file,
                                           SSL_FILETYPE_PEM))
        goto err;
}

if (sign_cert_file) {
    if (!SSL_CTX_use_sign_certificate_file(cctx-&gt;ctx, sign_cert_file,
                                           SSL_FILETYPE_PEM))
        goto err;
}

if (enc_key_file) {
    if (!SSL_CTX_use_enc_PrivateKey_file(cctx-&gt;ctx, enc_key_file,
                                         SSL_FILETYPE_PEM))
        goto err;
}

if (enc_cert_file) {
    if (!SSL_CTX_use_enc_certificate_file(cctx-&gt;ctx, enc_cert_file,
                                          SSL_FILETYPE_PEM))
        goto err;
}
// ...end...

//...后续同标准tls流程
con = SSL_new(ctx);
</code></pre><p>}</p>`,14)]))}const S=t(i,[["render",r]]),l=JSON.parse('{"path":"/article/3a658ak4/","title":"Tongsuo","lang":"zh-CN","frontmatter":{"title":"Tongsuo","createTime":"2025/04/30 15:55:46","permalink":"/article/3a658ak4/"},"readingTime":{"minutes":1.9,"words":569},"git":{"updatedTime":1751457679000,"contributors":[{"name":"Kongber","username":"Kongber","email":"kongmongolia@gmail.com","commits":5,"avatar":"https://avatars.githubusercontent.com/Kongber?v=4","url":"https://github.com/Kongber"}]},"filePathRelative":"notes/C.safe/C1.cipher/algorithm/tongsuo.md","headers":[],"categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"63b13f","sort":10005,"name":"C.safe"},{"id":"42ad35","sort":10010,"name":"C1.cipher"},{"id":"7adf9c","sort":10007,"name":"algorithm"}]}');export{S as comp,l as data};
