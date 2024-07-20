<template><div><p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>
<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>
<!-- more -->
<h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction"><span>Markdown Introduction</span></a></h2>
<p>If you are a new learner and don't know how to write Markdown, please read <a href="https://theme-hope.vuejs.press/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown Intro</a> and <a href="https://theme-hope.vuejs.press/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo</a>.</p>
<h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config"><span>Markdown Config</span></a></h2>
<p>VuePress introduce configuration for each markdown page using Frontmatter.</p>
<div class="hint-container important">
<p class="hint-container-title">Frontmatter</p>
<p>Frontmatter is an important concept in VuePress. If you don't know it, you need to read <a href="https://theme-hope.vuejs.press/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction</a>.</p>
</div>
<h2 id="markdown-extension" tabindex="-1"><a class="header-anchor" href="#markdown-extension"><span>Markdown Extension</span></a></h2>
<p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions</a> via markdown-it plugins.</p>
<h3 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement"><span>VuePress Enhancement</span></a></h3>
<p>To enrich document writing, VuePress has extended Markdown syntax.</p>
<p>For these extensions, please read <a href="https://theme-hope.vuejs.press/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress</a>.</p>
<h3 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement"><span>Theme Enhancement</span></a></h3>
<p>By using <a href="https://md-enhance.vuejs.press/" target="_blank" rel="noopener noreferrer"><code v-pre>vuepress-plugin-md-enhance</code></a>, the theme extends more Markdown syntax and provides richer writing functions.</p>
<h4 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>Tabs</span></a></h4>
<Tabs id="48" :data='[{"id":"apple"},{"id":"banana"},{"id":"orange"}]' tab-id="fruit">
<template #title0="{ value, isActive }">apple</template>
<template #title1="{ value, isActive }">banana</template>
<template #title2="{ value, isActive }">orange</template>
<template #tab0="{ value, isActive }">
<p>Apple</p>
</template>
<template #tab1="{ value, isActive }">
<p>Banana</p>
</template>
<template #tab2="{ value, isActive }">
<p>Orange</p>
</template>
</Tabs>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote"><span>Footnote</span></a></h4>
<p>This text has footnote[^first].</p>
<p>[^first]: This is footnote content</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files"><span>Include files</span></a></h4>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="reveal-js" tabindex="-1"><a class="header-anchor" href="#reveal-js"><span>Reveal.js</span></a></h4>
<p>@slidestart</p>
<h2 id="slide-1" tabindex="-1"><a class="header-anchor" href="#slide-1"><span>Slide 1</span></a></h2>
<p>A paragraph with some text and a <a href="https://mister-hope.com" target="_blank" rel="noopener noreferrer">link</a></p>
<hr>
<h2 id="slide-2" tabindex="-1"><a class="header-anchor" href="#slide-2"><span>Slide 2</span></a></h2>
<ul>
<li>Item 1</li>
<li>Item 2</li>
</ul>
<hr>
<h2 id="slide-3-1" tabindex="-1"><a class="header-anchor" href="#slide-3-1"><span>Slide 3.1</span></a></h2>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>--</p>
<h2 id="slide-3-2" tabindex="-1"><a class="header-anchor" href="#slide-3-2"><span>Slide 3.2</span></a></h2>
<p>$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$</p>
<p>@slideend</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<!-- markdownlint-disable MD001 -->
<h4 id="tex" tabindex="-1"><a class="header-anchor" href="#tex"><span>TeX</span></a></h4>
<p>$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right}
$$</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tex.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist"><span>Tasklist</span></a></h4>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></li>
</ul>
<p><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail</a></p>
<h4 id="image-enhancement" tabindex="-1"><a class="header-anchor" href="#image-enhancement"><span>Image Enhancement</span></a></h4>
<p>Support setting color scheme and size.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript"><span>Superscript and Subscript</span></a></h4>
<p>19<sup>th</sup> H<sub>2</sub>O</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/grammar/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="component" tabindex="-1"><a class="header-anchor" href="#component"><span>Component</span></a></h4>
<VPCard v-bind='{"title":"Mr.Hope","desc":"Where there is light, there is hope","logo":"https://mister-hope.com/logo.svg","link":"https://mister-hope.com","background":"rgba(253, 230, 138, 0.15)"}' /><ul>
<li><a href="https://theme-hope.vuejs.press/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="hint-box-and-gfm-alerts" tabindex="-1"><a class="header-anchor" href="#hint-box-and-gfm-alerts"><span>Hint box and GFM alerts</span></a></h4>
<div v-pre>
<p>Safely use {{ variable }} in Markdown.</p>
</div>
<div class="hint-container info">
<p class="hint-container-title">Custom Title</p>
<p>A custom information container with <code v-pre>code</code>, <a href="#markdown-extension">link</a>.</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="hint-container tip">
<p class="hint-container-title">Custom Title</p>
<p>A custom tip container</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Custom Title</p>
<p>A custom warning container</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">Custom Title</p>
<p>A custom caution container</p>
</div>
<details class="hint-container details"><summary>Custom Title</summary>
<p>A custom details container</p>
</details>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub Alert</a></li>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">Hint boxes</a></li>
</ul>
<h4 id="align" tabindex="-1"><a class="header-anchor" href="#align"><span>Align</span></a></h4>
<div style="text-align:center">
<p>I am center</p>
</div>
<div style="text-align:right">
<p>I am right align</p>
</div>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="attrs" tabindex="-1"><a class="header-anchor" href="#attrs"><span>Attrs</span></a></h4>
<p>A <strong id="word">word</strong> having id.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark"><span>Mark</span></a></h4>
<p>You can mark <mark>important words</mark> .</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="spoiler" tabindex="-1"><a class="header-anchor" href="#spoiler"><span>Spoiler</span></a></h4>
<p>VuePress Theme Hope is <span class="spoiler" tabindex="-1">powerful</span>.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize"><span>Stylize</span></a></h4>
<p>Donate Mr.Hope a cup of coffee. <Badge type="tip">Recommended</Badge></p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="chart-js" tabindex="-1"><a class="header-anchor" href="#chart-js"><span>Chart.js</span></a></h4>
<p>::: chart A Scatter Chart</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"scatter"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"datasets"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"label"</span><span class="token operator">:</span> <span class="token string">"Scatter Dataset"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">-10</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">5.5</span> <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"rgb(255, 99, 132)"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"scales"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"x"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"linear"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"bottom"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4>
<p>::: echarts A line chart</p>
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"xAxis"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"category"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Mon"</span><span class="token punctuation">,</span> <span class="token string">"Tue"</span><span class="token punctuation">,</span> <span class="token string">"Wed"</span><span class="token punctuation">,</span> <span class="token string">"Thu"</span><span class="token punctuation">,</span> <span class="token string">"Fri"</span><span class="token punctuation">,</span> <span class="token string">"Sat"</span><span class="token punctuation">,</span> <span class="token string">"Sun"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"yAxis"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"value"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"series"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"line"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart"><span>Flowchart</span></a></h4>
<div class="language-flow line-numbers-mode" data-ext="flow" data-title="flow"><pre v-pre class="language-flow"><code><span class="line">cond<span class="token operator">=></span>condition<span class="token operator">:</span> Process<span class="token operator">?</span></span>
<span class="line">process<span class="token operator">=></span>operation<span class="token operator">:</span> Process</span>
<span class="line">e<span class="token operator">=></span>end<span class="token operator">:</span> End</span>
<span class="line"></span>
<span class="line"><span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>process<span class="token operator">-</span><span class="token operator">></span>e</span>
<span class="line"><span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4>
<div class="language-markmap line-numbers-mode" data-ext="markmap" data-title="markmap"><pre v-pre class="language-markmap"><code><span class="line">---</span>
<span class="line">markmap:</span>
<span class="line">  colorFreezeLevel: 2</span>
<span class="line">---</span>
<span class="line"></span>
<span class="line"># markmap</span>
<span class="line"></span>
<span class="line">## Links</span>
<span class="line"></span>
<span class="line">- &lt;https://markmap.js.org/&gt;</span>
<span class="line">- [GitHub](https://github.com/gera2ld/markmap)</span>
<span class="line"></span>
<span class="line">## Related Projects</span>
<span class="line"></span>
<span class="line">- [coc-markmap](https://github.com/gera2ld/coc-markmap)</span>
<span class="line">- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)</span>
<span class="line"></span>
<span class="line">## Features</span>
<span class="line"></span>
<span class="line">- links</span>
<span class="line">- **strong** ~~del~~ *italic* ==highlight==</span>
<span class="line">- multiline</span>
<span class="line">  text</span>
<span class="line">- `inline code`</span>
<span class="line">-</span>
<span class="line">    ```js</span>
<span class="line">    console.log('code block');</span>
<span class="line">    ```</span>
<span class="line">- Katex</span>
<span class="line">  - $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$</span>
<span class="line">  - [More Katex Examples](#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md)</span>
<span class="line">- Now we can wrap very very very very long text based on `maxWidth` option</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4>
<div class="language-mermaid line-numbers-mode" data-ext="mermaid" data-title="mermaid"><pre v-pre class="language-mermaid"><code><span class="line"><span class="token arrow operator">---</span></span>
<span class="line">title<span class="token operator">:</span> Flowchart</span>
<span class="line"><span class="token arrow operator">---</span></span>
<span class="line"><span class="token keyword">flowchart</span> TB</span>
<span class="line">    c1<span class="token arrow operator">--></span>a2</span>
<span class="line">    <span class="token keyword">subgraph</span> one</span>
<span class="line">    a1<span class="token arrow operator">--></span>a2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">subgraph</span> two</span>
<span class="line">    b1<span class="token arrow operator">--></span>b2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    <span class="token keyword">subgraph</span> three</span>
<span class="line">    c1<span class="token arrow operator">--></span>c2</span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line">    one <span class="token arrow operator">--></span> two</span>
<span class="line">    three <span class="token arrow operator">--></span> two</span>
<span class="line">    two <span class="token arrow operator">--></span> c2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4>
<p>@startuml
Alice -&gt; Bob: Authentication Request</p>
<p>alt successful case</p>
<pre><code>Bob -&gt; Alice: Authentication Accepted
</code></pre>
<p>else some kind of failure</p>
<pre><code>Bob -&gt; Alice: Authentication Failure
group My own label
Alice -&gt; Log : Log attack start
    loop 1000 times
        Alice -&gt; Bob: DNS Attack
    end
Alice -&gt; Log : Log attack end
end
</code></pre>
<p>else Another type of failure</p>
<p>Bob -&gt; Alice: Please repeat</p>
<p>end
@enduml</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs"><span>Code Tabs</span></a></h4>
<CodeTabs id="439" :data='[{"id":"pnpm"},{"id":"yarn"},{"id":"npm"}]' :active="2" tab-id="shell">
<template #title0="{ value, isActive }">pnpm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">npm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress-theme-hope</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> vuepress-theme-hope</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo"><span>Code Demo</span></a></h4>
<CodeDemo id="code-demo-460" type="normal" title="A%20normal%20demo" code="eJxFjjELAjEMhf9KjIuCeLhq7SYoOAiKU5ejjdxpr61tTxHxv5ueg0sCed97L29scmdxiaJZyHNPh0gpwamhjmDrA4mK78qJIHcJRAq1g9asFT4ovhTKskRVzhKCf1K89HYkqsAWnOE1cbDxuu/I5fm9Z/hIlnT2caJw/MuYzmtjNg8m9m3K5Kho2rb6pnAGkymsJbyVA6gtxczamW3/Mg5YKfcpgxt1KpXDm4NHe+vjEiKZAjHy+QJaqVDL">
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>VuePress Theme Hope<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Is <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>very<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>very<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> powerful!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#very"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Very powerful!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">span</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="playground" tabindex="-1"><a class="header-anchor" href="#playground"><span>Playground</span></a></h4>
<p>::: playground#unocss UnoCSS demo</p>
<p>@file index.html</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex flex-col text-center h-full justify-center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>TEST for default preset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-$fd-color<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>TEST for custom css<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@file config.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> presetUno <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"unocss"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">presetUno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@file custom.css</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--fd-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="kotlin-playground" tabindex="-1"><a class="header-anchor" href="#kotlin-playground"><span>Kotlin Playground</span></a></h4>
<p>::: kotlin-playground Simple Playground</p>
<p>@file main.kt</p>
<div class="language-kotlin line-numbers-mode" data-ext="kt" data-title="kt"><pre v-pre class="language-kotlin"><code><span class="line"><span class="token keyword">class</span> <span class="token function">Contact</span><span class="token punctuation">(</span><span class="token keyword">val</span> id<span class="token operator">:</span> Int<span class="token punctuation">,</span> <span class="token keyword">var</span> email<span class="token operator">:</span> String<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span>args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">val</span> contact <span class="token operator">=</span> <span class="token function">Contact</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">"mary@gmail.com"</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">println</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>id<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="vue-playground" tabindex="-1"><a class="header-anchor" href="#vue-playground"><span>Vue Playground</span></a></h4>
<p>::: vue-playground Vue Playground</p>
<p>@file App.vue</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
<h4 id="sandpack-playground" tabindex="-1"><a class="header-anchor" href="#sandpack-playground"><span>Sandpack Playground</span></a></h4>
<p>::: sandpack#vue Vue Demo</p>
<p>@file /src/App.vue</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"Hello Playground!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">View Detail</a></li>
</ul>
</div></template>


