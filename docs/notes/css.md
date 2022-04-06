# CSS

## 简介

**层叠样式表** (Cascading Style Sheets，缩写为 **CSS**），是一种 [样式表](https://developer.mozilla.org/zh-CN/docs/Web/API/StyleSheet) 语言，用来描述 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML) 或 [XML](https://developer.mozilla.org/zh-CN/docs/Web/XML/XML_Introduction)（包括如 [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG)、[MathML](https://developer.mozilla.org/zh-CN/docs/Web/MathML)、[XHTML](https://developer.mozilla.org/zh-CN/docs/Glossary/XHTML) 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其它媒体上的元素应该如何被渲染的问题。

CSS 是**开放网络**的核心语言之一，由 [W3C 规范](https://w3.org/Style/CSS/#specs) 实现跨浏览器的标准化。CSS节省了大量的工作。 样式可以通过定义保存在外部.css文件中，同时控制多个网页的布局，这意味着开发者不必经历在所有网页上编辑布局的麻烦。CSS 被分为不同等级：CSS1 现已废弃， CSS2.1 是推荐标准， [CSS3](https://developer.mozilla.org/zh-CN/docs/CSS/CSS3) 分成多个小模块且正在标准化中。

**编写的位置**

1. 第一种：内联样式：可将css代码编写到标签的style属性中
   - `<p style="color: red; font-size: 30px;">海内存知己，天涯若比邻！</p>`

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

   `<link rel="stylesheet" href="./style.css">`

**CSS 语法**

CSS是一门基于规则的语言 —— 你能定义用于你的网页中特定元素样式的一组规则. 比如“我希望页面中的主标题是红色的大字”

下面这段代码使用非常简单的 CSS 规则实现了之前提到的效果:

```css
h1 {
    color: red;
    font-size: 5em;
}
```

语法由一个 [选择器(selector)](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS_Selector)起头。 它 *选择(selects)* 了我们将要用来添加样式的 HTML 元素。 在这个例子中我们为一级标题（主标题[`` (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)）添加样式。

接着输入一对大括号`{ }`。 在大括号内部定义一个或多个形式为 **属性(property):值(value);** 的 **声明(declarations)**。每个声明都指定了我们所选择元素的一个属性，之后跟一个我们想赋给这个属性的值。

冒号之前是属性，冒号之后是值。不同的 CSS [属性(properties) (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/property/CSS) 对应不同的合法值。在这个例子中，我们指定了 `color` 属性，它可以接受许多[颜色值](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#color)；还有 `font-size` 属性，它可以接收许多 [size units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#numbers_lengths_and_percentages) 值。

## 选择器

CSS选择器是CSS规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

**常用选择器**

- 元素选择器：根据标签名来选中指定的元素 `p{}`
- id选择器：根据元素的id属性值选中一个元素 `#myid{}`
- 类选择器：根据元素的class属性选中一组元素 `.myclass{}`
- 通配选择器：选中页面中的所有元素 `*{}`

**复合选择器**

- 交集选择器：选中同时符合多个条件的元素
   - 语法：选择器1选择器2选择器n{}
   - 注意：交集选择器中如果有元素选择器，必须使用元素选择器开头
- 选择器分组（并集选择器）：同时选择多个选择器对应的元素
   - 语法：选择器1,选择器2,选择器n{}
   - `#myid,.p,h1,span,div.myclass{}`

**关系选择器**

- 父元素：直接包含子元素的元素叫做父元素
- 子元素：直接被父元素包含的元素是子元素
- 祖先元素：直接或间接包含后代的元素叫做祖先元素，一个元素的父元素也是它的祖先元素
- 后代元素：直接或间接被祖先元素包含的元素叫做后代元素，子元素也是后代元素
- 兄弟元素：拥有相同父元素的元素是兄弟元素
- 子元素选择器：选中指定父元素的指定子元素 `父元素 > 子元素{}`
- 后代元素选择器：选中指定元素内的指定后代元素 `祖先 后代{}`
- 选择下一个兄弟 `前一个 + 下一个{}`
- 选择下边所有的兄弟 `兄 ~ 弟{}`

**属性选择器**

- 根据元素的属性来获取元素
   - [属性名] 选择含有指定属性的元素
   - [属性名 = 属性值] 选择含有指定属性和属性值的元素
   - [属性名 ^= 属性值] 选择属性值以指定值开头的元素
   - [属性名 $= 属性值] 选择属性值以指定值结尾的元素
   - [属性名 *= 属性值] 选择属性值中含有某值的元素的元素


**伪类选择器**

- 伪类（不存在的类，特殊的类）
- 伪类用来描述一个元素的特殊状态
- 比如：第一个子元素、被点击的元素、鼠标移入的元素
- 伪类一般情况下都是使用:开头
   - :first-child 第一个子元素
   - :first-of-type      同类型的第一个子元素
   - :last-child 最后一个子元素
   - :last-of-type      同类型的最后一个子元素
   - :nth-child(n) 选中第n个子元素
   - :nth-of-type(n)      同类型的第N个子元素 
   - :only-child 唯一的子元素      
   - :only-of-type      同类型中唯一的子元素 
   - :empty 空元素 
   - :not() 除了 
   - :link      正常的链接（没访问过的链接） 
   - :visited 访问过的链接
   - :hover 鼠标移入的状态 
   - :active 鼠标点击的状态


**伪元素选择器**

- 伪元素，表示页面中一些特殊的并不真实存在的元素（特殊的位置）
- 伪元素使用 :: 开头
   - ::before 元素内部的开始位置 
   - ::after 元素内部的结束位置 
   - ::selection 选中的内容 
   - ::first-letter 第一个字母（汉字） 
   - ::first-line 第一行 

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">选择器</th>
   <th scope="col">示例</th>
   <th scope="col">学习CSS的教程</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Type_selectors">类型选择器</a></td>
   <td><code>h1 {&nbsp; }</code></td>
   <td><a href="/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Type_selectors" class="page-not-created" title="This is a link to an unwritten page">类型选择器</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Universal_selectors">通配选择器</a></td>
   <td><code>* {&nbsp; }</code></td>
   <td><a href="/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#The_universal_selector" class="page-not-created" title="This is a link to an unwritten page">通配选择器</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Class_selectors">类选择器</a></td>
   <td><code>.box {&nbsp; }</code></td>
   <td><a href="/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#Class_selectors">类选择器</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/ID_selectors">ID选择器</a></td>
   <td><code>#unique { }</code></td>
   <td><a href="/zh-CN/docs/user:chrisdavidmills/CSS_Learn/CSS_Selectors/Type_Class_and_ID_Selectors#ID_Selectors">ID选择器</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Attribute_selectors">标签属性选择器</a></td>
   <td><code>a[title] {&nbsp; }</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Attribute_selectors">标签属性选择器</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Pseudo-classes">伪类选择器</a></td>
   <td><code>p:first-child { }</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class">伪类</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Pseudo-elements">伪元素选择器</a></td>
   <td><code>p::first-line { }</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element">伪元素</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Descendant_combinator">后代选择器</a></td>
   <td><code>article p</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Descendant_Selector">后代运算符</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Child_combinator">子代选择器</a></td>
   <td><code>article &gt; p</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Child_combinator">子代选择器</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator">相邻兄弟选择器</a></td>
   <td><code>h1 + p</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#Adjacent_sibling">相邻兄弟</a></td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/Web/CSS/General_sibling_combinator">通用兄弟选择器</a></td>
   <td><code>h1 ~ p</code></td>
   <td><a href="/zh-CN/docs/User:chrisdavidmills/CSS_Learn/CSS_Selectors/Combinators#General_sibling">通用兄弟</a></td>
  </tr>
 </tbody>
</table>

**选择器优先级**

- 当我们通过不同的选择器，选中相同的元素，并且为相同的样式设置不同的值时，此时就发生了样式的冲突。
- 发生样式冲突时，应用哪个样式由选择器的权重（优先级）决定

| 内联样式/行内样式 | 1，0，0，0 |
| ----------------- | ---------- |
| id选择器          | 0，1，0，0 |
| 类和伪类选择器    | 0，0，1，0 |
| 元素选择器        | 0，0，0，1 |
| 通配选择器        | 0，0，0，0 |
| 继承的样式        | 没有优先级 |

- 比较优先级时，需要将所有的选择器的优先级相加计算，最后优先级越高，则越优先显示（分组选择器是单独计算的）

- - 选择器的累加不会超过其最大的数量级，类选择器在高也不会超过id选择器
   - 如果优先级计算后相等，此时则优先使用靠下的样式

- 可以在某一个样式的后面添加 **!important**，则此时该样式会获取到最高的优先级，甚至超过内联样式

注意：在开发中这个一定要慎用

https://specifishity.com/

![specifishity](/images/css/specifishity.png)

## 盒模型

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，理解这些“盒子”的基本原理，是我们使用CSS实现准确布局、处理元素排列的关键。

在 CSS 中我们广泛地使用两种“盒子” —— **块级盒子** (**block box**) 和 **内联盒子** (**inline box**)**。**这两种盒子会在**页面流**（page flow）和**元素之间的关系**方面表现出不同的行为:

一个被定义成块级的（block）盒子会表现出以下行为:

- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性可以发挥作用
- 内边距（padding）, 外边距（margin） 和 边框（border） 会将其他元素从当前盒子周围“推开”

除非特殊指定，诸如标题(`<h1>`等)和段落(`<p>`)默认情况下都是块级的盒子。

如果一个盒子对外显示为 `inline`，那么他的行为如下:

- 盒子不会产生换行。
-  [`width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width) 和 [`height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height) 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

用做链接的 `<a>` 元素、 `<span>`、 `<em>` 以及 `<strong>` 都是默认处于 `inline` 状态的。

我们通过对盒子[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 属性的设置，比如 `inline` 或者 `block` ，来控制盒子的外部显示类型。