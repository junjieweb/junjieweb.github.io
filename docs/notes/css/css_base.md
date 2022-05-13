# CSS 基础

## 简介

**层叠样式表** (Cascading Style Sheets，缩写为 **CSS**），用于设置和布置网页 - 例如，更改内容的字体，颜色，大小和间距，将其拆分为多个列，或添加动画和其他装饰功能。

CSS 是**开放网络**的核心语言之一，由 [W3C 规范](https://w3.org/Style/CSS/#specs) 实现跨浏览器的标准化。CSS节省了大量的工作。
样式可以通过定义保存在外部.css文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1
是推荐标准， [CSS3](https://developer.mozilla.org//docs/CSS/CSS3) 分成多个小模块且正在标准化中。

#### 编写的位置

1. 第一种：内联样式：可将css代码编写到标签的style属性中

   `<p style="color: red; font-size: 30px;">海内存知己，天涯若比邻！</p>`

2. 第二种：内部样式表：可以将css代码编写到一个style标签中

   ```html
   <style>
       p {
           color: green;
           font-size: 30px;
           background-color: yellow;
       }
   </style>
   ```

3. 第三种：外部样式表：可以将css代码编写到一个外部文件中，然后通过link标签引入

   `<link rel="stylesheet" href="./index.css">`

## CSS 语法

和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，要选择一个 HTML 页面里所有的段落元素，然后将其中的文本改成红色，可以这样写
CSS：

```css
p {
    color: red;
}
```

#### “CSS 规则集”详解

让我们来仔细看一看上述CSS：

![图解CSS声明](https://mdn.mozillademos.org/files/16483/css-declaration.png)

整个结构称为 **规则集**（通常简称“规则”），各部分释义如下：

- 选择器（Selector）

  HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 `p` 元素）。要给不同元素添加样式只需要更改选择器就行了。

- 声明（**Declaration**）

  一个单独的规则，如 `color: red;` 用来指定添加样式元素的**属性**。

- 属性（**Properties**）

  改变 HTML 元素样式的途径。（本例中 `color` 就是元素的属性。）CSS 中，由编写人员决定修改哪个属性以改变规则。

- 属性的值（Property value）

  在属性的右边，冒号后面即**属性的值**，它从指定属性的众多外观中选择一个值（我们除了 `red` 之外还有很多属性值可以用于 `color` ）。

注意其他重要的语法：

- 每个规则集（除了选择器的部分）都应该包含在成对的大括号里（`{}`）。
- 在每个声明里要用冒号（`:`）将属性与属性值分隔开。
- 在每个规则集里要用分号（`;`）将各个声明分隔开。

如果要同时修改多个属性，只需要将它们用分号隔开，就像这样：

```css
p {
    color: red;
    width: 500px;
    border: 1px solid black;
}
```

#### 多元素选择

也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。例如：

```css
p, li, h1 {
    color: red;
}
```

## 选择器

CSS选择器是CSS规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

| 选择器名称              | 选择的内容               | 示例             |
|:-------------------|:--------------------|:---------------|
| 通配选择器              | 选中页面中的所有元素          | `*{}`          |
| 元素选择器（也称作标签或类型选择器） | 所有指定(该)类型的 HTML 元素  | `p{}`          |
| ID 选择器             | 具有特定 ID 的元素         | `#my-id{}`     |
| 类选择器               | 具有特定类的元素            | `.my-class{}`  |
| 属性选择器              | 拥有特定属性的元素           | `a[title]{}`   |
| 选择器列表              | 同时选择多个选择器对应的元素      | `div,p,span{}` |
| 子元素选择器             | 选择指定父元素的指定子元素       | `ul > li{}`    |
| 后代元素选择器            | 选中指定元素内的指定后代元素      | `div span{}`   |
| 相邻兄弟选择器            | 选择指定元素第一个指定兄弟元素     | `div + p{}`    |
| 通用兄弟选择器            | 指定元素所有指定兄弟元素        | `div ~ p{}`    |
| 属性选择器              | 含有指定属性的元素           | `a[title]{}`   |
|| 含有指定属性和属性值的元素      | `a[ref="value"]{}`  |
|| 指定属性值以指定值开头的元素     | `a[ref^="value"]{}` |
|| 指定属性值以指定值结尾的元素     | `a[ref$="value"]{}` |
|| 指定属性值含有指定值的元素      | `a[ref*="value"]{}` |
| 伪元素选择器             | 元素内部的开始位置           | `p::before{}`  |
|| 元素内部的结束位置          | `p::after{}`        |
|| 元素内部的结束位置          | `p::after{}`        |
|| 第一行                | `p::first-line{}`   |
|| 第一个字母（汉字）          | `p::first-letter{}` |

> **伪元素**，表示页面中一些特殊的并不真实存在的元素（特殊的位置），伪元素使用 `::` 开头。
>
> **伪类**（不存在的类，特殊的类），伪类用来描述一个元素的特殊状态，伪类一般情况下都是使用`:`开头

#### 伪类选择器

- `:first-child` 第一个子元素
- `:first-of-type` 同类型的第一个子元素
- `:last-child` 最后一个子元素
- `:last-of-type` 同类型的最后一个子元素
- `:nth-child(n)` 选中第n个子元素
- `:nth-of-type(n)`      同类型的第N个子元素
- `:only-child` 唯一的子元素
- `:only-of-type` 同类型中唯一的子元素
- `:empty` 空元素
- `:not()` 除了
- `:link` 正常的链接（没访问过的链接）
- `:visited` 访问过的链接
- `:hover` 鼠标移入的状态
- `:active` 鼠标点击的状态

#### 选择器优先级

当我们通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突。 发生样式冲突时，应用哪个样式由选择器的权重（优先级）决定。

> 继承的样式（无） > 通配选择器（0） > 标签选择器（1） > 类选择器（10） > id选择器（100） > 行内样式（1000） > !important（10000）

比较优先级时，需要将所有的选择器的优先级相加计算，最后优先级越高，则越优先显示（分组选择器是单独计算的）。
选择器的累加不会超过其最大的数量级，类选择器在高也不会超过id选择器，如果优先级计算后相等，此时则优先使用靠下的样式。

可以在某一个样式的后面添加 `!important`，则此时该样式会获取到最高的优先级，甚至超过内联样式。

注意：在开发中这个一定要慎用

![specifishity](/images/css/specifishity.png)

## 盒模型

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用CSS实现准确布局、处理元素排列的关键。

#### 块级盒子（Block box） 和 内联盒子（Inline box）

在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**
方面表现出不同的行为:

**一个被定义成块级的（block）盒子会表现出以下行为:**

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- `width`和 `height`属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。

**如果一个盒子对外显示为 `inline`，那么他的行为如下:**

- 盒子不会产生换行。
- `width`和 `height`属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用，但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用，且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子`display`属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。

### 什么是CSS 盒模型?

完整的 CSS 盒模型应用于块级盒子，内联盒子只使用盒模型中定义的部分内容。模型定义了盒的每个部分 —— margin, border, padding, and content ——
合在一起就可以创建我们在页面上看到的内容。为了增加一些额外的复杂性，有一个标准的和替代（IE）的盒模型。

### 盒模型的各个部分

CSS中组成一个块级盒子需要:

- **Content box**: 这个区域是用来显示内容，大小可以通过设置`width`和`height`.
- **Padding box**: 包围在内容区域外部的空白区域； 大小通过 `padding`相关属性设置。
- **Border box**: 边框盒包裹内容和内边距。大小通过 `border`相关属性设置。
- **Margin box**: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 `margin`相关属性设置。

如下图：

![Diagram of the box model](https://mdn.mozillademos.org/files/16558/box-model.png)

### 标准盒模型

在标准模型中，如果你给盒设置 `width` 和 `height`，实际设置的是 *content box*。 padding 和 border 再加上设置的宽高一起决定整个盒子的大小。 见下图。

假设定义了 `width`, `height`, `margin`, `border`, and `padding`:

```css
.box {
    width: 350px;
    height: 150px;
    margin: 25px;
    padding: 25px;
    border: 5px solid black;
}
```

如果使用标准模型宽度 = 410px (350 + 25 + 25 + 5 + 5)，高度 = 210px (150 + 25 + 25 + 5 + 5)，padding 加 border 再加 content box。

![Showing the size of the box when the standard box model is being used.](https://mdn.mozillademos.org/files/16559/standard-box-model.png)

> **注**: margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到margin。

### 替代（IE）盒模型

你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且你的想法是对的! 因为这个原因，css还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。使用上面相同的样式得到 (width =
350px, height = 150px).

![Showing the size of the box when the alternate box model is being used.](https://mdn.mozillademos.org/files/16557/alternate-box-model.png)

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。 这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。

```css
.box {
    box-sizing: border-box;
} 
```

如果你希望所有元素都使用替代模式，而且确实很常用，设置 `box-sizing` 在 `<html>`
元素上，然后设置所有元素继承该属性，正如下面的例子。如果想要深入理解，请看 [the CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)
。

```css
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}
```

**注：** 一个有趣的历史记录 ——Internet Explorer默认使用替代盒模型，没有可用的机制来切换。（译者注：IE8+ 支持使用`box-sizing` 进行切换 ）

### 外边距，内边距，边框

#### 外边距

外边距是盒子周围一圈看不到的空间。它会把其他元素从盒子旁边推开。 外边距属性值可以为正也可以为负。设置负值会导致和其他内容重叠。无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

我们可以使用`margin`属性一次控制一个元素的所有边距，或者每边单独使用等价的普通属性控制：

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

#### 外边距折叠

理解外边距的一个关键是外边距折叠的概念。如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

有许多规则规定了什么时候外边距会折叠，什么时候不会折叠。相关更多信息，请参阅 [mastering margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
。现在首先要记住的事情是，外边距会折叠这个事情。如果你用外边距创建空间而没有得到你想要的效果，那这可能就是这个原因。

#### 边框

边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。

为边框设置样式时，有大量的属性可以使用——有四个边框，每个边框都有样式、宽度和颜色，我们可能需要对它们进行操作。

可以使用`border`属性一次设置所有四个边框的宽度、颜色和样式。

分别设置每边的宽度、颜色和样式，可以使用：

- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

设置所有边的颜色、样式或宽度，请使用以下属性：

- `border-width`
- `border-style`
- `border-color`

设置单边的颜色、样式或宽度，可以使用最细粒度的普通属性之一：

- `border-top-width`
- `border-top-style`
- `border-top-color`
- `border-right-width`
- `border-right-style`
- `border-right-color`
- `border-bottom-width`
- `border-bottom-style`
- `border-bottom-color`
- `border-left-width`
- `border-left-style`
- `border-left-color`

#### 内边距

内边距位于边框和内容区域之间。与外边距不同，您不能有负数量的内边距，所以值必须是0或正的值。应用于元素的任何背景都将显示在内边距后面，内边距通常用于将内容推离边框。

我们可以使用`padding`简写属性控制元素所有边，或者每边单独使用等价的普通属性：

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

#### 使用display: inline-block

display有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用:您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

一个元素使用 `display: inline-block`，实现我们需要的块级的部分效果：

- 设置`width` 和`height` 属性会生效。
- `padding`, `margin`, 以及`border` 会推开其他元素。

但是，它不会跳转到新行，如果显式添加`width` 和`height` 属性，它只会变得比其内容更大。

当您想要通过添加内边距使链接具有更大的命中区域时，这是很有用的。`<a>`是像`<span`>一样的内联元素；你可以使用`display: inline-block`来设置内边距，让用户更容易点击链接。

### overflow

`overflow`属性是你控制一个元素溢出的方式，它告诉浏览器你想怎样处理溢出。

- `visible` 默认值，不处理溢出的内容，在盒子外部显示
- `hidden` 溢出的内容会被裁剪，不在页面中显示
- `scroll` 生成水平和垂直双方向滚动条
- `auto` 根据需要生成滚动条

### display

`display` 属性可以设置元素的内部和外部显示类型。

- `block` 元素作为块元素显示
- `inline` 元素作为行内元素显示
- `inline-block` 元素作为行内块元素显示
- `none` 元素不在页面中显示
- `table` 元素会作为一个表格显示
- `flex` 元素会作为一个弹性容器显示
- `inline-flex` 元素会作为行内弹性容器显示

## BFC

**块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
如果一个元素具有BFC，内部元素再怎么弄，都不会影响到外面的元素

下列方式会创建**块格式化上下文**：

- 根元素（`<html>）`
- 浮动元素（元素的 `float` 不是 `none`）
- 绝对定位元素（元素的 `position`为 `absolute` 或 `fixed`）
- 行内块元素（元素的 `display`为 `inline-block`）
- 表格单元格（元素的 `display` 为 `table-cell`，HTML表格单元格默认为该值）
- 表格标题（元素的 `display` 为 `table-caption`，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 `display` 为 `table`、`table-row`、 `table-row-group`、`table-header-group`、`table-footer-group`（分别是HTML
  table、row、tbody、thead、tfoot 的默认属性）或 `inline-table`）
- `overflow`计算值(Computed)不为 `visible` 的块元素
- `display`值为 `flow-root` 的元素
- `contain`值为 `layout`、`content `或 paint 的元素
- 弹性元素（`display`为 `flex` 或 `inline-flex `元素的直接子元素）
- 网格元素（`display` 为 `grid` 或 `inline-grid` 元素的直接子元素）
- 多列容器（元素的 `column-count`或 `column-width`  不为 `auto，包括 ``column-count` 为 `1`）
- `column-span` 为 `all`的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中。

块格式化上下文包含创建它的元素内部的所有内容.

块格式化上下文对浮动定位`float`与清除浮动`clear`
都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（[Margin collapsing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
）也只会发生在属于同一BFC的块级元素之间。
