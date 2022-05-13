# HTML面试题

## 001 - src和href的区别

`src` 用于替换当前元素，`href` 用于在当前文档和引用资源之间确立联系。

`src` 是 `source` 的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置。在请求 `src` 资源时会将其指向的资源下载并应用到文档内，例如 `js` 脚本，`img` 图片和 `frame`
等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 `js` 脚本放在底部而不是头部。

`href` 是 `Hypertext Reference` 的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果在文档中添加，那么浏览器会识别该文档为 `css`
文件，就会并行下载资源并且不会停止对当前文档的处理。 这也是为什么建议使用 `link` 方式来加载 `css`，而不是使用`@import` 方式。

## 002 - 对HTML语义化的理解

语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。

语义化的优点：

- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录。

- 对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

## 003 - DOCTYPE(⽂档类型) 的作用

`DOCTYPE` 是文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（`html或xhtml`）的模式来渲染文档。它必须声明在HTML⽂档的第⼀⾏。

在 **HTML5** 中，`DOCTYPE` 唯一的作用是启用标准模式。

浏览器渲染页面的两种模式（可通过`document.compatMode`获取）。

在很久以前的网络上，页面通常有两种版本：为**网景（Netscape）的Navigator** 准备的版本，以及为**微软（Microsoft）的 Internet Explorer** 准备的版本。当 W3C
创立网络标准后，为了不破坏当时既有的网站，浏览器不能直接弃用这些标准。因此，浏览器采用了两种模式，用以把能符合新规范的网站和老旧网站区分开。

目前浏览器的排版引擎使用三种模式：**怪异模式（Quirks mode）**、**接近标准模式（Almost standards mode）**、以及**标准模式（Standards mode）**。在怪异模式下，排版会模拟
Navigator 4 与
Internet Explorer 5 的非标准行为。为了支持在网络标准被广泛采用前，就已经建好的网站，这么做是必要的。在标准模式下，行为即（但愿如此）由 HTML 与 CSS 的规范描述的行为。在接近标准模式下，只有少数的怪异行为被实现。

- `CSS1Compat`：标准模式（Standards mode），默认模式，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。

- `BackCompat`：怪异模式(混杂模式)(Quirks mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

## 004 - defer和async的区别

#### 脚本调用策略

要让脚本调用的时机符合预期，需要解决一系列的问题。这里看似简单，实际大有文章。最常见的问题就是：HTML 元素是按其在页面中出现的次序调用的，如果用 JavaScript 来管理页面上的元素（更精确的说法是使用 文档对象模型 DOM），若
JavaScript 加载于欲操作的 HTML 元素之前，则代码将出错。

#### `async` 和 `defer`

上述的脚本阻塞问题实际有两种解决方案 —— `async` 和 `defer`。

浏览器遇到 `async` 脚本时不会阻塞页面渲染，而是直接下载然后运行。这样脚本的运行次序就无法控制，只是脚本不会阻止剩余页面的显示。当页面的脚本之间彼此独立，且不依赖于本页面的其它任何脚本时，async 是最理想的选择。

使用 `defer` 属性，脚本将按照在页面中出现的顺序加载和运行。

**脚本调用策略小结：**

- 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 `async`。

- 如果脚本需要等待页面解析，且依赖于其它脚本，调用这些脚本时应使用 `defer`，将关联的脚本按所需顺序置于 HTML 中。

![deferAndAsync](../../.vuepress/public/images/html/deferAndAsync.png)

如果没有 `defer` 或 `async` 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

使用 `defer` 和 `async` 都会使得解析HTML的同时进行js脚本的异步下载，不会阻碍文档的解析，区别是

- `async` 在下载完js脚本之后立即执行js，有可能会阻碍文档的解析，且多个标记 `async` 的js脚本可能不会按照顺序执行。

- 使用 `defer` 会在html解析完成之后再执行js脚本文件，而且多个 `defer` 的脚本会按照顺序执行。

其中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。

## 005 - 常用的meta标签

`meta` 标签（文档级元数据元素）由 `name` 和 `content` 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等。

**`meta` 元素定义的元数据的类型包括以下几种：**

- 如果设置了 `name` 属性，`meta` 元素提供的是文档级别（document-level）的元数据，应用于整个页面。

- 如果设置了 `http-equiv` 属性，`meta` 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。

- 如果设置了 `charset` 属性，`meta` 元素是一个字符集声明，告诉文档使用哪种字符编码。

- 如果设置了 `itemprop` 属性，`meta` 元素提供用户定义的元数据。

**常用的meta标签：**

1. `charset`，用来描述HTML文档的编码类型。
    ```html
    <meta charset="UTF-8">
    ```
3. `keywords`，页面关键词。
    ```html
    <meta name="keywords" content="关键词" />
    ```
4. `description`，页面描述。
    ```html
    <meta name="description" content="页面描述内容" />
    ```
5. `refresh`，页面重定向和刷新。
    ```html
    <meta http-equiv="refresh" content="0;url=" />
    ```
6. `viewport`，适配移动端，可以控制视口的大小和比例。
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    ```
   其中，`content` 参数有以下几种：

    - `width` viewport ：宽度(数值/device-width)
    - `height` viewport ：高度(数值/device-height)
    - `initial-scale` ：初始缩放比例
    - `maximum-scale` ：最大缩放比例
    - `minimum-scale` ：最小缩放比例
    - `user-scalable` ：是否允许用户缩放(yes/no）

7. 搜索引擎索引方式。
    ```html
    <meta name="robots" content="index,follow" />
    ```
   其中，`content` 参数有以下几种：

    - `all`：文件将被检索，且页面上的链接可以被查询；
    - `none`：文件将不被检索，且页面上的链接不可以被查询；
    - `index`：文件将被检索；
    - `follow`：页面上的链接可以被查询；
    - `noindex`：文件将不被检索；
    - `nofollow`：页面上的链接不可以被查询。

## 006 - HTML5有哪些更新

#### 语义化标签

```html

<header>定义了文档的头部区域</header>
<nav>定义导航链接的部分。</nav>
<footer>定义 section 或 document 的页脚。</footer>
<aside> 定义页面的侧边栏内容。</aside>
<section>定义文档中的节（section、区段）。</section>
<article>定义页面独立的内容区域。</article>
```

#### 媒体标签

`audio` 和 `video`

```html

<audio src='' controls autoplay loop='true'></audio>
<video src='' poster='a.mp4' controls></video>

<!-- 因为浏览器对视频格式支持程度不一样，为了能够兼容不同的浏览器，可以通过source来指定视频源。 -->
<video>
    <source src='a.flv' type='video/flv'>
    <source src='b.mp4' type='video/mp4'>
</video>
```

#### 表单

表单类型

```html
<input type="tel" name="" id="">
<input type="search" name="" id="">
<input type="number" name="" id="">
<input type="email" name="" id="">
<input type="url" name="" id="">
<input type="date" name="" id="">
<input type="time" name="" id="">
<input type="month" name="" id="">
<input type="week" name="" id="">
<input type="color" name="" id="">
```

<input type="tel" name="" id="" placeholder="tel">
<input type="search" name="" id="" placeholder="search">
<input type="number" name="" id="" placeholder="number">
<input type="email" name="" id="" placeholder="email">
<input type="url" name="" id="" placeholder="url">
<input type="date" name="" id="">
<input type="time" name="" id="">
<input type="month" name="" id="">
<input type="week" name="" id="">
<input type="color" name="" id="">

表单属性

`required、autofocus、autocomplate、multiple、pattern、form`

表单事件

- `oninput`：每当input里的输入框内容发生变化都会触发此事件。
- `oninvalid`：当验证不通过时触发此事件。

#### 进度条、度量器

进度条：`progress` 标签：用来表示任务的进度（IE、Safari不支持），max用来表示任务的进度，value表示已完成多少

度量器：

- `meter` 属性：用来显示剩余容量或剩余库存（IE、Safari不支持）
- `high/low`：规定被视作高/低的范围
- `max/min`：规定最大/小值
- `value`：规定当前度量值 设置规则：`min < low < high < max`

#### DOM查询操作

- `document.querySelector('')`
- `document.querySelectorAll('')`

#### Web存储

- `sessionStorage`：针对一个 session 的数据存储（会话存储：关闭页面会消失）
- `localStorage`：没有时间限制的数据存储（本地存储：关闭页面不会消失）

#### history API

- `history.go(num)` 通过当前页面的相对位置从浏览器历史记录( 会话记录 )加载页面。比如：参数为-1的时候为上一页，参数为1的时候为下一页. 当整数参数超出界限时( 译者注:原文为When integerDelta is
  out of bounds )，例如: 如果当前页为第一页，前面已经没有页面了，我传参的值为-1，那么这个方法没有任何效果也不会报错。调用没有参数的 go() 方法或者参数值为0时，重新载入当前页面。(
  这点与支持字符串作为url参数的IE有点不同)。
- `history.forward(num)` 在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进(→)按钮模拟此方法. 等价于 `history.go(1)`.
- `history.back（num）` 在浏览器历史记录里前往上一页, 用户可点击浏览器左上角的返回(←)按钮模拟此方法. 等价于 `history.go(-1)`
- `history.pushState(state, title[, url])` 按指定的名称和URL（如果提供该参数）将数据push进会话历史栈，数据被DOM进行不透明处理；你可以指定任何可以被序列化的javascript对象。

#### 其他

- **拖放**：`<img draggable="true"/>` 如果该属性没有设值，则默认值 为 auto ，表示使用浏览器定义的默认行为。 默认情况下，只有已选中的文本、图片、链接可以拖动。对其它的元素来说，必须按拖动机制的顺序设置
  ondragstart 事件才能正常工作

- **`Canvas`**：Canvas API 提供了一个通过JavaScript 和 HTML的`<canvas>`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
  `canvas` 元素使用 `JavaScript`
  在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

    ```html
    <canvas id="myCanvas" width="200" height="100" style="background:#bfa"></canvas>
    ```
  <canvas id="myCanvas" width="200" height="100" style="background:#bfa"></canvas>

- **可缩放矢量图形（Scalable Vector Graphics，SVG）**：是一种用于描述二维的矢量图形，基于 XML
  的标记语言。作为一个基于文本的开放网络标准，SVG能够优雅而简洁地渲染不同大小的图形，并和CSS，DOM，JavaScript和SMIL等其他网络标准无缝衔接。本质上，SVG 相对于图像，就好比 HTML 相对于文本。
- 地理定位：`Geolocation` 接口是一个用来获取设备地理位置的可编程的对象，它可以让Web内容访问到设备的地理位置，这将允许Web应用基于用户的地理位置提供定制的信息。说实话：其实Geolocation
  就是用来获取到当前设备的经纬度（位置）

  带有此接口的对象可以用由 `Navigator` 实现的属性`NavigatorGeolocation.geolocation` 来获得。

## 007 - 块元素、行内元素、空元素

#### 行内元素

行内元素特点：

1. 相邻的行内元素一行显示多个
2. 不能设置宽度和高度，默认的宽度和高度就是它自身的高度和宽度
3. 行内元素内部只能放文本或者行内元素（a可以放块级元素）

```html
<span></span>
<a href=""></a>
<img src="" alt="">
<input type="text">
<strong></strong>
<em></em>
<del></del>
<ins></ins>
```

#### 块级元素

块元素特点：

1. 自己独占一行
2. 可以设置宽度、高度、内外边距，默认高度与父亲一致
3. 容器内可以放行内块元素或者块级元素（文字类的元素内不能放块级元素）

```html

<div></div>
<h1></h1>
<h6></h6>
<ul>
    <li></li>
</ul>
<ol>
    <li></li>
</ol>
<dl>
    <dt></dt>
    <dd></dd>
</dl>
<header></header>
<nav></nav>
<artical></artical>
<section></section>
<aside></aside>
<footer></footer>
```

#### 行内块元素

行内块元素特点：

1. 一行可以显示多个行内块元素，而且行内块元素之间有间隔
2. 默认宽度和高度是自身的宽度和高度
3. 可以设置宽度和高度、内外边距

#### 空元素（没有闭合）

```html
<img src="" alt="">
<input type="text">
<br>
<hr>
<link rel="stylesheet" href="">
<meta>
```

鲜见的有：`<area>、<base>、<col>、<colgroup>、<command>、<embed>、<keygen>、<param>、<source>、<track>、<wbr>`。

## 008 - title与h1的区别、b与strong的区别、i与em的区别

`strong` 标签有语义，是起到加重语气的效果，而`b`标签是没有的，`b`标签只是一个简单加粗标签。b标签之间的字符都设为粗体，`strong` 标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重 `strong` 标签。

`title` 属性没有明确意义只表示是个标题，`H1` 则表示层次明确的标题，对页面信息的抓取有很大的影响

`i` 内容展示为斜体，`em` 表示强调的文本

## 009 - 对 web workers 的理解

JavaScript 语言采用的是单线程模型，Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。

JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU
的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker
线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

如何创建 web worker：

1. 检测浏览器对于 web worker 的支持性

2. 创建 web worker 文件（js，回传函数等）

3. 创建 web worker 对象

## 010 - head 标签有什么作用，其中什么标签必不可少

**HTML head** 元素 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。

在页面加载完成的时候，标签 `head` 里的内容，是不会在页面中显示出来的。它包含了像页面的`<title>`(标题) ,`CSS`(如果你选择用 CSS 来为 HTML 内容添加样式)，指向自定义图标的链接和其他的元数据(
描述HTML的数据，比如，作者，和描述文档的重要关键词)。

**作用**

`<head>` 标签用于定义文档的头部，它是所有头部元素的容器。

`<head>` 中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等。文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web
中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

**可包含的标签**

`<base>, <link>, <meta>, <script>, <style>, <title>`。 其中只有title是必须的。

## 011 - Canvas和SVG的区别

#### SVG

**可缩放矢量图形（Scalable Vector Graphics，SVG）**，是一种用于描述二维的矢量图形，基于 `XML`
的标记语言。作为一个基于文本的开放网络标准，SVG能够优雅而简洁地渲染不同大小的图形，并和`CSS`，`DOM`，`JavaScript`和`SMIL`等其他网络标准无缝衔接。本质上，SVG 相对于图像，就好比 HTML 相对于文本。

SVG 图像及其相关行为被定义于 XML 文本文件之中，这意味着可以对它们进行搜索、索引、编写脚本以及压缩。此外，这也意味着可以使用任何文本编辑器和绘图软件来创建和编辑它们。

和传统的点阵图像模式，像JPEG和PNG不同，SVG格式提供的是矢量图，这意味着它的图像能够被无限放大而不失真或降低质量，并且可以方便地修改内容。

SVG 是由万维网联盟（W3C）自 1999 年开始开发的开放标准。

SVG是基于可扩展标记语言XML描述的2D图形的语言，SVG基于XML就意味着SVG DOM中的每个元素都是可用的，可以为某个元素附加Javascript事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG
对象的属性发生变化，那么浏览器能够自动重现图形。

**特点**

- 不依赖分辨率
- 支持事件处理器
- 最适合带有大型渲染区域的应用程序（比如谷歌地图）
- 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
- 不适合游戏应用

#### Canvas

`<canvas>`是一个可以使用脚本(通常为JavaScript)来绘制图形的 HTML 元素.例如,它可以用于绘制图表、制作图片构图或者制作简单的(以及不那么简单的)动画

Canvas是画布，通过Javascript来绘制2D图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。

**特点**

- 依赖分辨率
- 不支持事件处理器
- 弱的文本渲染能力
- 能够以 .png 或 .jpg 格式保存结果图像
- 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

## 012 - html与XML

`html` 是超文本标记语言，是一种描述性语言，用html可以创建能在互联网上传输的信息页，是构成网页文档的主要内容，由很多标签组成

`XML` 可扩展标记语言，是互联网环境中跨平台、基于内容的技术，是当前处理结构类文档信息的强有力的工具，适合作为各种存储与共享的通用平台，是对html的补充

## 013 - img的srcset属性的作用

#### `srcset`

以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像。每一个字符串由以下组成：

1. 指向图像的 URL。
1. 可选地，再加一个空格之后，附加以下的其一：
    - 一个宽度描述符，这是一个正整数，后面紧跟 'w' 符号。该整数宽度除以 `sizes` 属性给出的资源（source）大小来计算得到有效的像素密度，即换算成和 x 描述符等价的值。
    - 一个像素密度描述符，这是一个正浮点数，后面紧跟 'x' 符号。

   如果没有指定源描述符，那它会被指定为默认的 1x。

响应式页面中经常用到根据屏幕密度设置不同的图片。这时就用到了 img 标签的 `srcset` 属性。`srcset` 属性用于设置不同屏幕密度下，img 会自动加载不同的图片。
`<img src="image-128.png" srcset="image-256.png 2x" />`使用上面的代码，就能实现在屏幕密度为1x的情况下加载image-128.png, 屏幕密度为2x时加载image-256.png。

按照上面的实现，不同的屏幕密度都要设置图片地址，目前的屏幕密度有1x,2x,3x,4x四种，如果每一个图片都设置4张图片，加载就会很慢。所以就有了新的srcset标准。代码如下：

```html
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
<!-- sizes指默认显示800px, 如果视区宽度小于于480px, 则显示440px。小于320px，则显示280px。 -->

<img src="image-128.png"
     srcset="image-128.png 128w, 
     image-256.png 256w, 
     image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px"/>
<!-- sizes就是指默认显示128px, 如果视区宽度大于360px, 则显示340px。 -->
```

其中srcset指定图片的地址和对应的图片质量。sizes用来设置图片的尺寸零界点。对于 srcset 中的 w 单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用。浏览器会自动选择一个最小的可用图片。

sizes语法如下：

`sizes="[media query] [length], [media query] [length] ... "`

## 014 - `iframe`标签的优缺点

iframe作用：iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

**优点：**

- 用来加载速度较慢的内容（如广告）
- 可以使脚本可以并行下载
- 可以实现跨子域通信

**缺点：**

- iframe 会阻塞主页面的 onload 事件
- 无法被一些搜索引擎索识别
- 会产生很多页面，不容易管理

## 015 - `label`的作用是什么？如何使用？

**作用**：`label`标签来定义表单控件的关系：当用户选择`label`标签时，浏览器会自动将焦点转到和`label`标签相关的表单控件上。

**使用方法**：`<label for="mobile">Number:</label>`
`<input type="text" id="mobile"/>`

## 016 - HTML5的离线储存怎么使用，它的工作原理是什么

离线存储指的是：在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

原理：HTML5的离线存储是基于一个新建的 .appcache 文件的缓存机制(不是存储技术)
，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示

使用方法：

（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：

`<html lang="en" manifest="index.manifest">`

（2）在 cache.manifest 文件中编写需要离线存储的资源：

```
  CACHE MANIFEST

       #v0.11
       
       CACHE:
       
       js/app.js
       
       css/style.css
       
       NETWORK:
       
       resourse/logo.png
       
       FALLBACK:
       
       / /offline.html
```

● CACHE: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。

● NETWORK: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说
CACHE 的优先级更高。

● FALLBACK: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html 。

（3）在离线状态时，操作 window.applicationCache 进行离线缓存的操作。

如何更新缓存：

（1）更新 manifest 文件

（2）通过 javascript 操作

（3）清除浏览器缓存

注意事项：

（1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。

（2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。

（3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。

（4）FALLBACK 中的资源必须和 manifest 文件同源。

（5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。

（6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。

（7）当 manifest 文件发生改变时，资源请求本身也会触发更新。

## 017 - 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？

在线情况下：浏览器发现 html 头部有 manifest 属性，它会请求 manifest
文件。第一次访问页面，会根据manidest内容下载相应资源并存储，不是第一次根据离线资源加载页面，并对比新旧manifest，未改变不做修改，改变了下载新的资源并进行存储

离线情况下：加载离线资源

## 018 - 文档声明（Doctype）和`<!Doctype html>`有何作用? 严格模式与混杂模式如何区分？它们有何意义?

严格模式与混杂模式的区分：

- 严格模式： 又称为标准模式，指浏览器按照W3C标准解析代码；
- 混杂模式： 又称怪异模式、兼容模式，是指浏览器用自己的方式解析代码。混杂模式通常模拟老式浏览器的行为，以防止老站点无法工作；

区分：网页中的DTD，直接影响到使用的是严格模式还是浏览模式，可以说DTD的使用与这两种方式的区别息息相关。

- 如果文档包含严格的DOCTYPE ，那么它一般以严格模式呈现（严格 DTD ——严格模式）；
- 包含过渡 DTD 和 URI 的 DOCTYPE ，也以严格模式呈现，但有过渡 DTD 而没有 URI （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现（有 URI 的过渡 DTD ——严格模式；没有 URI 的过渡
  DTD ——混杂模式）；

- DOCTYPE 不存在或形式不正确会导致文档以混杂模式呈现（DTD不存在或者格式不正确——混杂模式）；
- HTML5 没有 DTD ，因此也就没有严格模式与混杂模式的区别，HTML5 有相对宽松的 法，实现时，已经尽可能大的实现了向后兼容(HTML5 没有严格和混杂之分)。
  总之，严格模式让各个浏览器统一执行一套规范兼容模式保证了旧网站的正常运行。

- 文档声明的作用：文档声明是为了告诉浏览器，当前HTML文档使用什么版本的HTML来写的，这样浏览器才能按照声明的版本来正确的解析。

- `<!Doctype html>`的作用：`<!doctype html>` 的作用就是让浏览器进入标准模式，使用最新的 HTML5 标准来解析渲染页面；如果不写，浏览器就会进入混杂模式，我们需要避免此类情况发生。

## 019 - 渐进增强和优雅降级之间的区别

**两者区别**

- 优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；
- 降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。

“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。
在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。

“渐进增强”观点则认为应关注于内容本身。内容是建立网站的诱因，有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被
Yahoo 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。

- 渐进增强：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。
- 优雅降级：一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。

## 020 - 浏览器乱码的原因是什么？如何解决？

**产生乱码的原因：**

- 网页源代码是gbk的编码，而内容中的中文字是utf-8的编码，这样浏览器打开即会出现html乱码，反之也会出现乱码；
- html网页编码是gbk，而程序从数据库中调出呈现是utf-8编码的内容也会造成编码乱码；
- 浏览器不能自动检测网页编码，造成网页乱码。

**解决方式：**

- 使用软件编辑HTML网页内容；
- 如果网页设置编码是gbk，而数据库储存数据编码格式是UTF-8，此时需要程序查询数据库数据显示数据前进行程序转码；
- 如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。

## 021 - 说一下 HTML5 drag API （拖放）

- `dragstart`：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
- `drag`：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- `dragenter`：事件主体是目标元素，在被拖放元素进入某元素时触发。
- `dragover`：事件主体是目标元素，在被拖放在某元素内移动时触发。
- `dragleave`：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- `drop`：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。在一个拖动过程中，释放鼠标键时触发此事件
- `dragend`：事件主体是被拖放元素，在整个拖放操作结束时触发。
