<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>Gomonkey 是一个在 Go 语言中非常有用的测试工具库。</p>
<p>Gomonkey 的主要作用是用于在测试中动态地修改函数的行为。这使得测试能够更加灵活和全面，能够模拟各种不同的情况和边界条件。它提供了多种功能，包括方法、函数和全局变量的打桩（Stub），函数的 Monkey Patch，方法和函数调用的参数与返回值验证等。</p>
<h2 id="gomonkey支持的特性以及使用方法" tabindex="-1"><a class="header-anchor" href="#gomonkey支持的特性以及使用方法"><span>gomonkey支持的特性以及使用方法</span></a></h2>
<ul>
<li>支持为函数/ 接口打一个桩</li>
<li>支持为函数/ 接口打一个特定的桩序列</li>
<li>支持为成员方法打一个桩</li>
<li>支持为成员方法打一个特定的桩序列</li>
<li>支持为函数变量打一个桩</li>
<li>支持为函数变量打一个特定的桩序列</li>
<li>支持为全局变量打一个桩</li>
</ul>
<table>
<thead>
<tr>
<th>方法</th>
<th>作用</th>
<th>函数使用说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ApplyFunc(target, double interface{}</td>
<td>为函数/ 接口打一个桩</td>
<td>target表示函数名，第二个参数表示桩函数</td>
</tr>
<tr>
<td>ApplyFuncSeq(target interface{}, outputs []OutputCell）</td>
<td>target表示函数名，第二个参数表示桩序列参数（返回值需序列）</td>
<td></td>
</tr>
<tr>
<td>ApplyMethod(target reflect.Type, methodName string, double interface{}）</td>
<td>为成员方法打一个桩</td>
<td>target表示对象类型，对象的方法名，第三个参数表示桩函数</td>
</tr>
<tr>
<td>ApplyMethodSeq(target reflect.Type, methodName string, outputs []OutputCell）</td>
<td>为成员方法打一个特定的桩序列</td>
<td>target表示对象类型，对象的方法名，第三个参数表示桩序列参数（返回值需序列）</td>
</tr>
<tr>
<td>ApplyFuncVar(target, double interface{}）</td>
<td>为函数变量打一个桩</td>
<td>target表示函数变量，第二个参数表示桩函数</td>
</tr>
<tr>
<td>ApplyFuncVarSeq(target interface{}, outputs []OutputCell）</td>
<td>为函数变量打一个特定的桩序列</td>
<td>target表示函数变量，第二个参数表示桩序列参数（返回值需序列）</td>
</tr>
<tr>
<td>ApplyGlobalVar(target, double interface{})</td>
<td>为全局变量打一个桩</td>
<td>target表示函数变量，第二个参数表示桩函数</td>
</tr>
<tr>
<td>Reset()</td>
<td>删除桩</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<h3 id="安装-gomonkey" tabindex="-1"><a class="header-anchor" href="#安装-gomonkey"><span>安装 gomonkey</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> github.com/agiledragon/gomonkey/v2@v2.11.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3>
<ol>
<li>为函数打桩</li>
</ol>
<p>简单的例子，为函数 Sum 打桩，返回 2，nil</p>
<div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">package</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> demo_one</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	"github.com/agiledragon/gomonkey/v2"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	"github.com/stretchr/testify/assert"</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">	"testing"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">b</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">	// do something in remote computer</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	c</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> b</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">nil</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Compute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">b</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">err</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> TestCompute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">t</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD"> *</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">testing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B">T</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	patches</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> :=</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> gomonkey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">ApplyFunc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">func</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">b</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">		return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">nil</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	})</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	defer</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> patches</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Reset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">err</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Compute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">NoError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">err</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">	assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">Equal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2>
<p><a href="https://blog.csdn.net/u013276277/article/details/104993370" target="_blank" rel="noopener noreferrer">gomonkey调研文档和学习</a></p>
</div></template>


