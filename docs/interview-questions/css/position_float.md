---
sidebar_position: 2
---

# 二、定位与浮动

## 001 - 为什么需要清除浮动，清除浮动的方式？

**为什么清除浮动**

- 非IE浏览器下，容器不设高度且子元素浮动时，浮动的子元素脱离文档流，不占据空间（引起“高度塌陷”现象），父元素的高度无法被撑开，影响与父元素同级的元素，影响布局

**清除浮动的方式**

- 给父级`div`定义`height`属性
- 最后一个浮动元素之后添加一个空的div标签，并添加`clear:both`样式
- 包含浮动元素的父级标签添加`overflow:hidden`或者`overflow:auto`
- 使用 `::after` 伪元素。由于IE6-7不支持 :after，使用 `zoom:1` 触发 hasLayout

## 002 - 使用clear属性清除浮动的原理

使用clear属性清除浮动，其语法如下：`clear:
none|left|right|both`，官方对clear属性解释：“元素盒子的边不能和前面的浮动元素相邻”，对元素设置clear属性是为了避免浮动元素对该元素的影响，而不是清除掉浮动。

一般使用伪元素的方式清除浮动：

```css
.clear-fix::after {
    content: '';
    display: block;
    clear: both;
}
```

## 003 - 对BFC的理解，如何创建BFC

**BFC理解**

- Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个Box就是我们所说的盒模型。
- Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。
- 块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。
  通俗来讲：BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

**如何创建BFC**

- 根元素：`body`
- 元素设置浮动：`float` 除 `none` 以外的值
- 元素设置绝对定位或者固定定位：`position (absolute、fixed)`
- `display` 值为：`inline-block`、`table-cell`、`table-caption`、`flex`等
- `overflow` 值为：`hidden`、`auto`、`scroll`

**BFC特点**

- 垂直方向上，自上而下排列，和文档流的排列方式一致。
- 在BFC中上下相邻的两个容器的margin会重叠
- 计算BFC的高度时，需要计算浮动元素的高度
- BFC区域不会与浮动的容器发生重叠
- BFC是独立的容器，容器内部元素不会影响外部元素
- 每个元素的左margin值和容器的左border相接触

**BFC应用**

- 解决margin的重叠问题

    - 由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。

- 解决高度塌陷的问题

    - 在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。

- 创建自适应两栏布局

    - 可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。

## 004 - 什么是margin重叠问题？如何解决

**margin重叠问题**

一个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠。需要注意的是，浮动的元素和绝对定位这种脱离文档流的元素的外边距不会折叠。重叠只会出现在垂直方向。只有块级元素会触发外边距塌陷的问题

**计算原则**

- 如果两者都是正数，那么就去最大者
- 如果是一正一负，就会正值减去负值的绝对值
- 两个都是负值时，用0减去两个中绝对值大的那个

**解决方案**

- 兄弟之间重叠

    - 底部元素变为行内盒子：`display: inline-block`
    - 底部元素设置浮动：`float`
    - 底部元素的 `position` 的值为`absolute/fixed`

- 父子之间重叠

    - 父元素加入：`overflow: hidden`
    - 父元素添加透明边框：`border:1px solid transparent`
    - 子元素变为行内盒子：`display: inline-block`
    - 子元素加入浮动属性或定位

## 005 - 元素的层叠顺序

层叠顺序，英文称作 stacking order，表示元素发生层叠时有着特定的垂直显示顺序。

- 背景和边框：建立当前层叠上下文元素的背景和边框。
- 负的z-index：当前层叠上下文中，z-index属性值为负的元素。
- 块级盒：文档流内非行内级非定位后代元素。
- 浮动盒：非定位浮动元素。
- 行内盒：文档流内行内级非定位后代元素。
- z-index:0：层叠级数为0的定位元素。
- 正z-index：z-index属性值为正的定位元素。

## 006 - `position`的属性有哪些？区别是什么

**`static`**：默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。

**`relative`**：生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。

**`absolute`**：生成绝对定位的元素，相对于static定位以外的一个有定位的父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。 元素的定位相对于前两者要复杂许多。如果为 `absolute`
设置了 top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了`position:relative/absolute/fixed`
的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。

**`fixed`**：生成固定定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。
元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。

**`sticky`**：粘性定位，基于用户的滚动位置来定位。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right,
bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

**`inherit`**：规定从父元素继承 `position` 属性的值

## 007 - `display`、`float`、`position`的关系

1. 首先判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。

2. 然后判断position的值是否为absolute或者fixed，
    - 如果是，则float属性失效，并且display的值应该被设置为table或者block，具体转换需要看初始转换值。 如果position的值不为absolute或者fixed，则判断float属性的值是否为none，
    - 如果不是，则display的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对于浮动后的最终位置定位。

3. 如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，则保持指定的display属性值不变。

总的来说，可以把它看作是一个类似优先级的机制，"position:absolute"和"position:fixed"优先级最高，有它存在的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是"
none"的时候或者它是根元素的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值。

## 008 - `absolute`和`fixed`的共同点和不同点

**共同点**

- 改变行内元素的呈现方式，将display置为inline-block
- 子主题使元素脱离普通文档流，不再占据文档物理空间
- 覆盖非定位文档元素

不同点

- absolute与fixed的根元素不同，absolute的根元素可以设置，fixed根元素是浏览器。
- 在有滚动条的页面中，absolute会跟着父元素进行移动，fixed固定在页面的具体位置。

## 009 - 对`sticky`定位的理解

`sticky` 英文字面意思是粘贴，所以可以把它称之为粘性定位。语法：position: sticky; 基于用户的滚动位置来定位。

粘性定位的元素是依赖于用户的滚动，在 `position:relative` 与 `position:fixed` 定位之间切换。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:
fixed;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left
四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
