<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2>
<p>GoMock是由Golang官方开发维护的测试框架，实现了较为完整的基于interface的Mock功能，能够与Golang内置的testing包良好集成，也能用于其它的测试环境中。GoMock测试框架包含了GoMock包和mockgen工具两部分，其中GoMock包完成对桩对象生命周期的管理，mockgen工具用来生成interface对应的Mock类源文件。</p>
<p>GoMock官网: <a href="https://github.com/golang/mock" target="_blank" rel="noopener noreferrer">github</a></p>
<h2 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用"><span>安装使用</span></a></h2>
<h3 id="安装-mockgen" tabindex="-1"><a class="header-anchor" href="#安装-mockgen"><span>安装 mockgen</span></a></h3>
<p><strong>Go version &lt; 1.16</strong></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">GO111MODULE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">on</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> github.com/golang/mock/mockgen@v1.6.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>Go 1.16+</strong></p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> github.com/golang/mock/mockgen@v1.6.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="mockgen辅助代码生成工具安装" tabindex="-1"><a class="header-anchor" href="#mockgen辅助代码生成工具安装"><span>mockgen辅助代码生成工具安装：</span></a></h3>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> github.com/golang/mock/mockgen@latest</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>mockgen 的参数</p>
<h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h2>
<p>在使用 mockgen 生成模拟对象（Mock Objects）时，通常需要指定主要的参数</p>
<ul>
<li>
<p>-source：这是你想要生成模拟对象的接口定义所在的文件路径。</p>
</li>
<li>
<p>-destination：生成的源代码写入的文件。如果不设置此项，代码将打印到标准输出。</p>
</li>
<li>
<p>-package：用于生成的模拟类源代码的包名。如果不设置此项包名默认在原包名前添加mock_前缀。</p>
</li>
<li>
<p>-imports：在生成的源代码中使用的显式导入列表。值为foo=bar/baz形式的逗号分隔的元素列表，其中bar/baz是要导入的包，foo是要在生成的源代码中用于包的标识符。</p>
</li>
<li>
<p>-aux_files：需要参考以解决的附加文件列表，例如在不同文件中定义的嵌入式接口。指定的值应为foo=bar/baz.go形式的以逗号分隔的元素列表，其中bar/baz.go是源文件，foo是-source文件使用的文件的包名。</p>
</li>
<li>
<p>-build_flags：（仅反射模式）一字不差地传递标志给go build</p>
</li>
<li>
<p>-mock_names：生成的模拟的自定义名称列表。这被指定为一个逗号分隔的元素列表，形式为Repository = MockSensorRepository,Endpoint=MockSensorEndpoint，其中Repository是接口名称，mockSensorrepository是所需的mock名称(mock工厂方法和mock记录器将以mock命名)。如果其中一个接口没有指定自定义名称，则将使用默认命名约定。</p>
</li>
<li>
<p>-self_package：生成的代码的完整包导入路径。使用此flag的目的是通过尝试包含自己的包来防止生成代码中的循环导入。如果mock的包被设置为它的一个输入(通常是主输入)，并且输出是stdio，那么mockgen就无法检测到最终的输出包，这种情况就会发生。设置此标志将告诉 mockgen 排除哪个导入</p>
</li>
<li>
<p>-copyright_file：用于将版权标头添加到生成的源代码中的版权文件</p>
</li>
<li>
<p>-debug_parser：仅打印解析器结果</p>
</li>
<li>
<p>-exec_only：（反射模式） 如果设置，则执行此反射程序</p>
</li>
<li>
<p>-prog_only：（反射模式）只生成反射程序；将其写入标准输出并退出。</p>
</li>
<li>
<p>-write_package_comment：如果为true，则写入包文档注释 (godoc)。（默认为true）</p>
</li>
</ul>
<p>命令为接口生成 mock 实现</p>
<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">mockgen</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -destination=user_service_mock.go</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -package=unittest</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -source=user_service.go</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>自定义mock实现主要包含了自定义参数，自定义返回值，自定义mock调用次数以及调用顺序</p>
<h3 id="_1-自定义参数" tabindex="-1"><a class="header-anchor" href="#_1-自定义参数"><span>（1）自定义参数</span></a></h3>
<p>参数支持Eq,Any,Not,Nil，分别代表一下含义：</p>
<pre><code>Eq(value) 用于参数为固定值的场景。
Any() 用于任意参数的场景。
Not(value) 用于表示参数非 value 以外的值场景。
Nil()  用于表示参数None 值的场景
</code></pre>
<h3 id="_2-自定义返回值" tabindex="-1"><a class="header-anchor" href="#_2-自定义返回值"><span>（2）自定义返回值</span></a></h3>
<p>返回值支持如下几种：</p>
<pre><code>Return 用于返回确定的值的场景
Do 用于无返回值的场景。
DoAndReturn 用于可以动态地控制返回值。
</code></pre>
<h3 id="_3-自定义mock调用次数" tabindex="-1"><a class="header-anchor" href="#_3-自定义mock调用次数"><span>（3）自定义mock调用次数</span></a></h3>
<pre><code>mock调用次数支持如下几种场景：

Times() 断言 Mock 方法被调用的次数, 指定次数。
MaxTimes() 最大次数。
MinTimes() 最小次数。
AnyTimes() 任意次数（包括 0 次）
</code></pre>
<h3 id="_4-自定义mock调用顺序" tabindex="-1"><a class="header-anchor" href="#_4-自定义mock调用顺序"><span>（4）自定义mock调用顺序</span></a></h3>
<p>当存在多个mock之间相互调用的情况时，可以通过一下2种方式定义mock执行的顺序：</p>
<pre><code>通过After关键字来实现保序
通过InOrder关键字来实现保序
</code></pre>
</div></template>


