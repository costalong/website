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
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2>
<p><a href="https://blog.csdn.net/u013276277/article/details/104993370" target="_blank" rel="noopener noreferrer">gomonkey调研文档和学习</a></p>
</div></template>


