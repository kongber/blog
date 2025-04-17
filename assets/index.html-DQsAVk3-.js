import{_ as s,c as a,a as l,o as e}from"./app-D1YSUqsr.js";const n={};function h(t,i){return e(),a("div",null,i[0]||(i[0]=[l(`<h2 id="what-是什么" tabindex="-1"><a class="header-anchor" href="#what-是什么"><span>What（是什么）</span></a></h2><p>CFB是一种将分组密码转换为自同步流密码的工作模式，前一个密文块作为下一个块的加密输入。</p><h3 id="核心要素" tabindex="-1"><a class="header-anchor" href="#核心要素"><span>核心要素</span></a></h3><ul><li>流加密模式</li><li>使用移位寄存器</li><li>自同步特性</li><li>支持任意长度数据</li></ul><h2 id="why-为什么" tabindex="-1"><a class="header-anchor" href="#why-为什么"><span>Why（为什么）</span></a></h2><h3 id="解决问题" tabindex="-1"><a class="header-anchor" href="#解决问题"><span>解决问题</span></a></h3><ul><li>需要实时加密的场景</li><li>处理非块大小整数倍数据</li><li>错误恢复需求</li></ul><h3 id="技术优势" tabindex="-1"><a class="header-anchor" href="#技术优势"><span>技术优势</span></a></h3><ul><li>无需填充</li><li>支持逐位加密</li><li>错误传播有限</li><li>自同步能力</li></ul><h2 id="when-何时" tabindex="-1"><a class="header-anchor" href="#when-何时"><span>When（何时）</span></a></h2><h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span>适用场景</span></a></h3><ul><li>网络流加密</li><li>实时通信</li><li>磁盘加密</li><li>需要流加密的场景</li></ul><h3 id="发展历程" tabindex="-1"><a class="header-anchor" href="#发展历程"><span>发展历程</span></a></h3><ul><li>1980年：首次提出</li><li>1981年：NIST标准化</li><li>现在：仍在使用</li></ul><h2 id="how-如何" tabindex="-1"><a class="header-anchor" href="#how-如何"><span>How（如何）</span></a></h2><h3 id="算法实现" tabindex="-1"><a class="header-anchor" href="#算法实现"><span>算法实现</span></a></h3><ol><li><p>加密过程：</p><ul><li>初始化移位寄存器</li><li>加密寄存器内容</li><li>与明文异或产生密文</li><li>密文反馈到寄存器</li></ul></li><li><p>解密过程：</p><ul><li>相同初始化</li><li>加密寄存器内容</li><li>与密文异或恢复明文</li><li>密文反馈到寄存器</li></ul></li></ol><h3 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码"><span>伪代码</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 加密/解密（过程相同）</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">register </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> IV</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">for</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> data </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> input_stream</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    encrypted </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> encrypt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">register</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    output </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> data </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">^</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> encrypted</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    register </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> register</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> output</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const p=s(n,[["render",h]]),d=JSON.parse('{"path":"/article/xptpe9z1/","title":"cfb","lang":"zh-CN","frontmatter":{"title":"cfb","createTime":"2025/04/11 14:31:05","permalink":"/article/xptpe9z1/"},"headers":[],"readingTime":{"minutes":1.01,"words":304},"git":{"updatedTime":1744710733000,"contributors":[{"name":"Kongber","username":"Kongber","email":"kongmongolia@gmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/Kongber?v=4","url":"https://github.com/Kongber"}]},"filePathRelative":"notes/security/cryptology/mode/cfb.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"d1f7d2","sort":10001,"name":"security"},{"id":"d1e61f","sort":10002,"name":"cryptology"},{"id":"0c3ef1","sort":10005,"name":"mode"}]}');export{p as comp,d as data};
