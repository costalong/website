<template><div><h2 id="使用-github-安装-giscus" tabindex="-1"><a class="header-anchor" href="#使用-github-安装-giscus"><span>使用 github 安装 giscus</span></a></h2>
<p>安装地址：  <a href="https://github.com/apps/giscus/installations/new" target="_blank" rel="noopener noreferrer">giscus 安装地址</a></p>
<figure><img src="@source/webs/images/gisucs-one.png" alt="安装" tabindex="0" loading="lazy"><figcaption>安装</figcaption></figure>
<p>选择使用项目</p>
<figure><img src="@source/webs/images/giscus-two.png" alt="安装" tabindex="0" loading="lazy"><figcaption>安装</figcaption></figure>
<p>开启 Discussions 功能</p>
<ul>
<li>点击项目 Setting 功能</li>
</ul>
<figure><img src="https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240725233134.png" alt="设置" tabindex="0" loading="lazy"><figcaption>设置</figcaption></figure>
<ul>
<li>往下滑动到 Features 部分，找到 Discussions 多选择，把复选框选中,</li>
</ul>
<figure><img src="https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240725233240.png" alt="20240725233240" tabindex="0" loading="lazy"><figcaption>20240725233240</figcaption></figure>
<ul>
<li>获取项目的分类与分类id</li>
</ul>
<p><a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">点击进入</a> 滑动“仓库”位置，输入你开启的discussion 的仓库信息</p>
<figure><img src="https://costa92.oss-cn-hangzhou.aliyuncs.com/Blog/20240725233726.png" alt="20240725233726" tabindex="0" loading="lazy"><figcaption>20240725233726</figcaption></figure>
<p>在往下滑找到 启用 giscus 找到</p>
<div class="language-script line-numbers-mode" data-highlighter="shiki" data-ext="script" data-title="script" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#x3C;script src="https://giscus.app/client.js"</span></span>
<span class="line"><span>        data-repo="[在此输入仓库]"</span></span>
<span class="line"><span>        data-repo-id="[在此输入仓库 ID]"  </span></span>
<span class="line"><span>        data-category="[在此输入分类名]"</span></span>
<span class="line"><span>        data-category-id="[在此输入分类 ID]"</span></span>
<span class="line"><span>        data-mapping="pathname"</span></span>
<span class="line"><span>        data-strict="0"</span></span>
<span class="line"><span>        data-reactions-enabled="1"</span></span>
<span class="line"><span>        data-emit-metadata="0"</span></span>
<span class="line"><span>        data-input-position="bottom"</span></span>
<span class="line"><span>        data-theme="preferred_color_scheme"</span></span>
<span class="line"><span>        data-lang="zh-CN"</span></span>
<span class="line"><span>        crossorigin="anonymous"</span></span>
<span class="line"><span>        async></span></span>
<span class="line"><span>&#x3C;/script></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找相应的信息后，在配置 giscus 评论系统</p>
<h2 id="参考我文档" tabindex="-1"><a class="header-anchor" href="#参考我文档"><span>参考我文档</span></a></h2>
<p><a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">官方地址</a></p>
</div></template>


