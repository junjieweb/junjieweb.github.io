# 三、页面布局

## 001 - 常见的CSS布局单位

**像素（px）** 是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS像素和物理像素：

- CSS像素：为web开发者提供，在CSS中使用的一个抽象单位；
- 物理像素：只与设备的硬件密度有关，任何设备的物理像素都是固定的。

**百分比（%）** 当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。

**em和rem**：对于px更具灵活性，它们都是相对长度单位，它们之间的区别：em相对于自身或者父元素字体，rem相对于根元素（html字体大小）。

- em： 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认16px)。(相对父元素的字体大小倍数)。
- rem：是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数。作用：利用rem可以实现简单的响应式布局，
  可以利用html元素中字体的大小与屏幕间的比值来设置font-size的值，以此实现当屏幕分辨率变化时让元素也随之变化。

**vw/vh** 是与视口有关的单位，vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。

- 百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate等)

- vw/vm：相对于视窗的尺寸

    - vw：相对于视窗的宽度，1vw = 1/100视口宽度；
    - vh：相对于视窗的高度，1vh = 1/100视口高度；
    - vmin：vw和vh中的较小值；
    - vmax：vw和vh中的较大值；

## 002 - px、em、rem的区别及使用场景

**区别**

- px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
- em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。

- em是以自身的font-size为参考的，当em没有设置自身的font-size，则会以父元素的font-size为标准；
- rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。

**适用场景**

- 对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
- 对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。

## 003 - 两栏布局的实现

**一般两栏布局指的是左边一栏宽度固定，右边一栏宽度自适应**

- 左侧浮动+右侧margin-left

    - 给父容器一个高度；左边盒子宽度给200px，高度100%，左浮动，右边盒子margin-left：200px，宽度auto，高度100%

- 左侧浮动+右侧BFC

  BFC：全称块级格式化上下文，一个 独立的个体，是的不受其他元素的影响，始终保持自己独立，内部的子元素 不受外界的影响，外界的元素，也不受内部的元素的影响

  BFC触发条件：

  【1】根元素，即HTML元素
  【2】float的值不为none
  【3】overflow的值不为visible
  【4】display的值为inline-block、table-cell、table-caption
  【5】position的值为absolute或fixed

  BFC的区域不会与float
  box重叠。BFC区域的子元素不受外面的影响，外面的也不受BFC区域里面的影响（这个挺重要的，设置的浮动的元素，脱离了文档流，正常的相邻的元素会跑到它下面（靠左）。设置成BFC，自己独成一块，不会跑到它下面，而是保持洁身自好，自己依然占一块。）

    - 给父容器一个高度，左侧的盒子宽度200px，高度100%，左浮动，右侧的盒子高度100%，overflow：hidden触发BFC

- flex布局

    - 父容器给一个高度，display：flex；左侧盒子给一个宽度200px，高度100%，右侧盒子宽度100%，flex：1

- 左侧绝对定位+右侧margin-left

    - 父容器给一个高度，position：relative；左侧盒子给一个宽度200px，高度100%，position：absolute，top：0；left：0；右侧盒子margin-left：200px，高度100%

- 右侧绝对定位+右侧定位left

    - 父容器给一个高度，position：relative；左侧盒子宽度200px，高度100%；右侧盒子高度100%，position：absolute，top：0；right：0；bottom：0；left：200px；

## 004 - 三栏布局的实现

**三栏布局一般指的是页面中一共有三栏，左右两栏宽度固定，中间自适应的布局**

- 左右绝对定位，中间margin

    - 给父容器一个高度，position：relative；左侧盒子和右侧盒子宽度200px，高度100%，左侧盒子左侧绝对定位，右侧盒子右侧绝对定位（position：absolute）中间盒子高度100%，margin：0
      200px；

- flex布局

    - 父容器给一个高度，display：flex；左侧和右侧盒子高度100%，宽度200px；中间盒子高度100%，flex：1；

- 两侧浮动+中间margin

    - 父容器给一个高度；左右盒子宽度200px，高度100%，左边左浮动，右边右浮动，中间的盒子margin：0 200px；高度100%

- 圣杯布局：父盒子padding+三个盒子浮动+左右盒子相对定位并负边距

    - **html**

        - **css**

- 双飞翼布局：三个盒子浮动+中间盒子左右margin留位+左右负边距

    - **html**

        - **css**

## 005 -水平垂直居中的实现

- 绝对定位+transform

  需考虑浏览器兼容问题

    - 父亲给一个高度，position：relative；子盒子position：absolute，top：50%；left：50%；transform：translate（-50%，-50%）

- 绝对定位+margin:auto

    - 父容器给一个高度，position：relative；子容器有宽度和高度，position：absolute，上下左右都是0，margin：auto；

- 绝对定位+margin负值

    - 父容器给一个高度，position：relative；子盒子绝对定位，top：50%；left：50%，margin-top： - 高度/2 px;margin-left:- 宽度/2 px

- flex布局

    - 父容器给一个高度，display：flex，justify-content：center，align-items：center；

## 006 - 如何根据设计稿进行移动端适配？

- 移动端适配主要有两个维度

    - 适配不同像素密度

        - 针对不同的像素密度，使用 CSS 媒体查询，选择不同精度的图片，以保证图片不会失真；

    - 适配不同屏幕大小

        - 由于不同的屏幕有着不同的逻辑像素大小，所以如果直接使用 px
          作为开发单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会失真。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。为了能让页面的尺寸自适应，可以使用 rem，em，vw，vh 等相对单位。

## 007 - 对Flex布局的理解及其使用场景

- Flex是FlexibleBox的缩写，意为"弹性布局"
  ，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。行内元素也可以使用Flex布局。注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。采用Flex布局的元素，称为Flex容器（flex
  container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross
  axis），项目默认沿水平主轴排列。

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

                - flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 auto，它还有另外两种完整写法, 分别是
                  initial (0 1 auto) 和 none (0 0 auto)

        - align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。

## 008 - 响应式设计的概念及基本原理

**概念**：响应式网站设计（Responsive Web design）是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。

**原理**：基本原理是通过媒体查询（@media）查询检测不同的设备屏幕尺寸做处理。

**兼容**：页面头部必须有meta声明的viewport。

## 009 - 品字布局

- margin： 0 auto；+ 浮动

    - 设置三个div宽和高，第一个div margin： 0
      auto；后两个div浮动使其一行显示，然后通过margin-left以及transform：translate实现布局，（padding和margin若是百分比则是以父亲的宽度为准）

- margin： 0 auto； + inline-block

    - 设置三个div宽和高，第一个div margin： 0
      auto；后两个div display：inline-block使其一行显示，然后通过margin-left以及transform：translate实现布局，（padding和margin若是百分比则是以父亲的宽度为准）

## 010 - 九宫格布局

- float

    - 给ul设定宽和高（需计算：比如330*330）每个li宽和高（100*100）并且设置左浮动，每个limargin-right：10px；margin-bottom：10px；

- flex

    - 给ul设定宽和高（330*
      330），display：flex；flex-wrap：wrap；justify-content：space-around；align-items：space-around；，每个li给定宽和高（100*100）

- inline-block

    - 给ul设定宽和高（需计算：比如330*330）每个li宽和高（100*100）并且设置display：inline-block；每个limargin-bottom： 10px；
