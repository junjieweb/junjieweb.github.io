---
sidebar_position: 1
---

# HTML和CSS

## 001 - script标签中defer和async的区别

如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。
使用defer和async都会使得解析HTML的同时进行js脚本的异步下载，不会阻碍文档的解析，区别是，async在下载完js脚本之后立即执行js，有可能会阻碍文档的解析，
且多个标记async的js脚本可能不会按照顺序执行；使用defer会在html解析完成之后再执行js脚本文件，而且多个defer的脚本会按照顺序执行。

:::tip 或者会问你如何解决js脚本加载阻塞文档解析：

1. 将js脚本写在body最下方；
2. script标签添加defer或者async属性

:::

## 002 - HTML5有哪些更新

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

- `history.go(num)` 通过当前页面的相对位置从浏览器历史记录( 会话记录 )加载页面。比如：参数为-1的时候为上一页，参数为1的时候为下一页.
  当整数参数超出界限时( 译者注:原文为When integerDelta is
  out of bounds )，例如: 如果当前页为第一页，前面已经没有页面了，我传参的值为-1，那么这个方法没有任何效果也不会报错。调用没有参数的
  go() 方法或者参数值为0时，重新载入当前页面。(
  这点与支持字符串作为url参数的IE有点不同)。
- `history.forward(num)` 在浏览器历史记录里前往下一页，用户可点击浏览器左上角的前进(→)按钮模拟此方法.
  等价于 `history.go(1)`.
- `history.back（num）` 在浏览器历史记录里前往上一页, 用户可点击浏览器左上角的返回(←)按钮模拟此方法.
  等价于 `history.go(-1)`
- `history.pushState(state, title[, url])` 按指定的名称和URL（如果提供该参数）将数据push进会话历史栈，数据被DOM进行不透明处理；你可以指定任何可以被序列化的javascript对象。

#### 其他

- **拖放**：`<img draggable="true"/>` 如果该属性没有设值，则默认值 为 auto ，表示使用浏览器定义的默认行为。
  默认情况下，只有已选中的文本、图片、链接可以拖动。对其它的元素来说，必须按拖动机制的顺序设置
  ondragstart 事件才能正常工作

- **`Canvas`**：Canvas API 提供了一个通过JavaScript 和 HTML的`<canvas>`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
  `canvas` 元素使用 `JavaScript`
  在网页上绘制图像。画布是一个矩形区域，可以控制其每一像素。canvas拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。

     ```html
   <canvas id="myCanvas" width="200" height="100" style="background:#bfa"></canvas>
     ```

- **可缩放矢量图形（Scalable Vector Graphics，SVG）**：是一种用于描述二维的矢量图形，基于 XML
  的标记语言。作为一个基于文本的开放网络标准，SVG能够优雅而简洁地渲染不同大小的图形，并和CSS，DOM，JavaScript和SMIL等其他网络标准无缝衔接。本质上，SVG
  相对于图像，就好比 HTML 相对于文本。

- 地理定位：`Geolocation` 接口是一个用来获取设备地理位置的可编程的对象，它可以让Web内容访问到设备的地理位置，这将允许Web应用基于用户的地理位置提供定制的信息。说实话：其实Geolocation
  就是用来获取到当前设备的经纬度（位置）

  带有此接口的对象可以用由 `Navigator` 实现的属性`NavigatorGeolocation.geolocation` 来获得。

## 003 - CSS选择器及优先级

#### 选择器

- 基础选择器

    - 通配符选择器
    - 标签选择器/元素选择器
    - 类选择器
    - id选择器

- 复合选择器

    - 后代选择器
    - 子代选择器
    - 并集选择器
    - 伪类选择器

- 新增选择器

    - 属性选择器
    - 结构伪类选择器
    - 伪元素选择器

#### 优先级

- 0：通配符选择器（继承）
- 1：标签选择器、伪元素选择器
- 10：类选择器、属性选择器、结构伪类选择器
- 100：id选择器
- 1000：内联样式
- 无穷大：`!important`
- 需计算累加权重：复合选择器

#### 注意

- `!important`声明的样式的优先级最高；
- 如果优先级相同，则最后出现的样式生效；
- 继承得到的样式的优先级最低；
- 通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；
- 样式表的来源不同时，优先级顺序为：内联样式 > 内部样式 > 外部样式 > 浏览器用户自定义样式 > 浏览器默认样式。

## 004 - `display`的属性值及其作用

- none：元素不显示，并且会从文档流中移除。
- block：元素显示/块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
- inline：行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
- inline-block：行内块元素类型。默认宽度为内容宽度，可以设置宽高，同行显示（有间隙）。
- list-item：像块类型元素一样显示，并添加样式列表标记。
- table：此元素会作为块级表格来显示。
- inherit：规定应该从父元素继承display属性的值。

## 005 - 隐藏元素的方法有哪些

- `display：none` 渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置
- `visibility：hidden` 元素在页面中仍占据空间
- `opacity: 0` 将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间
- `position: absolute` 通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。
- `z-index: 负值` 来使其他元素遮盖住该元素，以此来实现隐藏。
- `clip/clip-path` 使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置
- `transform: scale(0,0)` 将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置

## 006 - `display:none`与`visibility:hidden`的区别

这两个属性都是让元素隐藏，不可见。两者区别如下：

1. **在渲染树中**
    - `display:none` 会让元素完全从渲染树中消失，渲染时不会占据任何空间；
    - `visibility:hidden` 不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。
2. **是否是继承属性**
    - `display:none`是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
    - `visibility:hidden`是继承属性，子孙节点消失是由于继承了hidden，通过设置visibility:visible可以让子孙节点显示；
3. 修改常规文档流中元素的 `display` 通常会造成文档的重排，但是修改 `visibility` 属性只会造成本元素的重绘；
4. 如果使用读屏器，设置为 `display:none` 的内容不会被读取，设置为 `visibility:hidden` 的内容会被读取。

## 007 - CSS3中有哪些新特性

**新增选择器**

- 属性选择器
- 结构伪类选择器
- 伪元素选择器

**2D转换：`transform`**

- 位移：`transform：translate（100px，100px）`
- 缩放：`transform：scale（1，1）`
- 旋转：`transform：rotate（45deg）`

**3D转换：`transform`**

- 位移：`transform：translate（100px，100px，100px）`
- 旋转：`transform：rotate（0，0，1，45deg）`
- 3D呈现：`transform-style`
    - `flat`：子元素不开启3d空间
    - `preserve-3d`：子元素开启3d空间
- 透视：`perspective`（单位px），人的眼睛到屏幕的距离；近大远小。

**动画** `@keyframes 动画名称 {0% {width：100px} 100% {width：200px}}`

**过渡：`transition`** 谁过度给谁加

**其他特性**

- 背景渐变 `background：linear-gradient（top left，red，pink）`
- 图片模糊：`filter：blur（5px）`数值越大越模糊
- calc函数：`width：calc（100% - 80px）`
- 圆角：`border-radius`
- 文字特效 （`text-shadow`）
- 文字渲染 （`text-decoration`）

## 008 - `position`的属性有哪些？区别是什么

**`static`**：默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index
声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。

**`relative`**：生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。

**`absolute`**：生成绝对定位的元素，相对于static定位以外的一个有定位的父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。
元素的定位相对于前两者要复杂许多。如果为 `absolute`
设置了
top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了`position:relative/absolute/fixed`
的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。

**`fixed`**：生成固定定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。
元素的定位是相对于 window （或者
iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。

**`sticky`**：粘性定位，基于用户的滚动位置来定位。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是
top, right, bottom 或 left 之一，换言之，指定 top, right,
bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

**`inherit`**：规定从父元素继承 `position` 属性的值

## 009 - `absolute`和`fixed`的共同点和不同点

**共同点**

- 改变行内元素的呈现方式，将display置为inline-block
- 子主题使元素脱离普通文档流，不再占据文档物理空间
- 覆盖非定位文档元素

不同点

- absolute与fixed的根元素不同，absolute的根元素可以设置，fixed根元素是浏览器。
- 在有滚动条的页面中，absolute会跟着父元素进行移动，fixed固定在页面的具体位置。

## 010 - 对`sticky`定位的理解

`sticky` 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的滚动位置来定位。

粘性定位的元素是依赖于用户的滚动，在 `position:relative` 与 `position:fixed` 定位之间切换。它的行为就像 position:relative;
而当页面滚动超出目标区域时，它的表现就像
position: fixed;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top,
right, bottom 或 left 之一，换言之，指定 top, right, bottom
或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

## 011 - 常见的CSS布局单位

**像素（px）** 是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS像素和物理像素：

- CSS像素：为web开发者提供，在CSS中使用的一个抽象单位；
- 物理像素：只与设备的硬件密度有关，任何设备的物理像素都是固定的。

**百分比（%）** 当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。

**em和rem**：对于px更具灵活性，它们都是相对长度单位，它们之间的区别：em相对于自身或者父元素字体，rem相对于根元素（html字体大小）。

- em：
  文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(
  默认16px)。(相对父元素的字体大小倍数)。
- rem：是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数。作用：利用rem可以实现简单的响应式布局，
  可以利用html元素中字体的大小与屏幕间的比值来设置font-size的值，以此实现当屏幕分辨率变化时让元素也随之变化。

**vw/vh** 是与视口有关的单位，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。

- 百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate等)
- vw/vm：相对于视窗的尺寸
    - vw：相对于视窗的宽度，1vw = 1/100视口宽度；
    - vh：相对于视窗的高度，1vh = 1/100视口高度；
    - vmin：vw和vh中的较小值；
    - vmax：vw和vh中的较大值；

## 012 - px、em、rem的区别及使用场景

**区别**

- px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
- em是以自身的font-size为参考的，当em没有设置自身的font-size，则会以父元素的font-size为标准；
- rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

**适用场景**

- 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
- 对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。

## 013 - 水平垂直居中的实现

1. 绝对定位+transform

   需考虑浏览器兼容问题， 父亲给一个高度，position：relative；子盒子position：absolute，top：50%；left：50%；transform：translate（-50%，-50%）

2. 绝对定位+margin:auto

   父容器给一个高度，position：relative；子容器有宽度和高度，position：absolute，上下左右都是0，margin：auto；

3. 绝对定位+margin负值

   父容器给一个高度，position：relative；子盒子绝对定位，top：50%；left：50%，margin-top： - 高度/2 px;margin-left:- 宽度/2 px

4. flex布局

   父容器给一个高度，display：flex，justify-content：center，align-items：center；

## 014 - 对Flex布局的理解及其使用场景

Flex是FlexibleBox的缩写，意为"弹性布局"
，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。采用Flex布局的元素，称为Flex容器（flex
container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。容器默认存在两根轴：水平的主轴（main
axis）和垂直的交叉轴（cross axis），项目默认沿水平主轴排列。

- 容器属性
    - flex-direction属性决定主轴的方向（即项目的排列方向）。
    - flex-wrap属性定义，如果一条轴线排不下，是否换行。
    - flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
    - justify-content属性定义了项目在主轴上的对齐方式。
    - align-items属性定义单行项目在侧轴上如何对齐。
    - align-content属性定义了多行项目在侧轴的对齐方式。如果项目只有一行，该属性不起作用。
- 项目属性
    - order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    - flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    - flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    - flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    - flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。
        - flex:1 表示什么
            - flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 auto，它还有另外两种完整写法,
              分别是
              initial (0 1 auto) 和 none (0 0 auto)
    - align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

## 015 - 如何解决1px问题

1px 问题指的是：在一些 Retina屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px
并不能和移动设备上的 1px 划等号。

**原因**

- window.devicePixelRatio = 设备的物理像素 / CSS像素。
- 打开 Chrome 浏览器，启动移动端调试模式，在控制台去输出这个 devicePixelRatio 的值。这里选中 iPhone6/7/8 这系列的机型，输出的结果就是2：
- 这就意味着设置的 1px CSS 像素，在这个设备上实际会用 2 个物理像素单元来进行渲染，所以实际看到的一定会比 1px 粗一些。

**解决方案**

- 直接写 0.5px
    - 目前为止最简单的一种方法。这种方法的缺陷在于兼容性不行，IOS 系统需要8及以上的版本，安卓系统则直接不兼容。
- 伪元素先放大后缩小
    - 思路是先放大、后缩小：在目标元素的后面追加一个 ::after 伪元素，让这个元素布局为 absolute
      之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border值设为 1px。接着借助 CSS
      动画特效中的放缩能力，把整个伪元素缩小为原来的 50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而 border 也缩小为了
      1px 的二分之一，间接地实现了 0.5px 的效果。
        - 这个方法的可行性会更高，兼容性也更好。唯一的缺点是代码会变多。
- 思路三：viewport 缩放来解决
    - `<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">`
    - 整个页面被缩放了。这时 1px 已经被处理成物理像素大小，这样的大小在手机上显示边框很合适。但是，一些原本不需要被缩小的内容，比如文字、图片等，也被无差别缩小掉了。
