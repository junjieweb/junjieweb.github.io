---
sidebar_position: 5
---

# Less

less是一种动态样式语言，属于CSS预处理器的范畴，它拓展了CSS语言，增加了变量、Mixin（混合）、函数等特性，使CSS更容易维护和拓展

less既可以在客户端上运行，也可以借助Node.js在服务端运行

[Less 快速入门 | Less.js 中文文档 - Less 中文网 (bootcss.com)](https://less.bootcss.com/)

## 变量

声明：`@变量名:变量值;`

如果要将变量作为属性名称使用时，需要在变量名称的两边添加大括号（花括号）`@{变量名称}`

如果要将变量作为选择器使用时，最好将选择器的标签直接写给变量的值，然后调用时和属性名称相同，需要在变量名称两侧添加大括号 `选择器@{变量名}` `@{选择器变量名}`

**变量的延迟加载**

在当前这个大括号内，不论变量有多少，也不论变量离你使用的位置的远近，都没有关系，只看最后一个

如果当前大括号内没有这个变量的话，会向上一层的大括号进行查找，不会向内部去查找 然后依旧遵循延迟加载的原则

## 注释

`//`编译后不会出现在css文件中

`/*` 这个注释编译后还会存在 `*/`

## 基本嵌套规则

**后代选择器**：直接将后代元素的选择器和样式写在父元素或祖先元素的括号内

**子元素选择器**：在子元素前加 `>` 即可

**伪元素、伪类、结构类等带冒号的选择器**：在选择器前加 `&`

```less
ul {
  width: 300px;
  margin: 100px auto;
  border: 1px solid black;
  list-style: none;

  li {
    height: 30px;
    line-height: 30px;

    a {
      color: red;
    }

    &:hover {
      background-color: pink;
    }

    &:nth-child(2) {
      background-color: red;
    }
  }

  > a {
    color: yellowgreen;
  }
}
```

## 混合（Mixin）

混合的本质，就相当于在调用的位置写了混合内部的样式

less的混合在定义了参数且没有设置默认值的情况下，调用混合的参数个数必须相同

给混合的参数设置默认值，就是在定义混合时直接赋值

设置了默认值后，调用如果传值，则使用传入的值，如果不传，则使用默认值

```less
.allCenter(@w:50px,@h:50px,@bg:green) {
  width: @w;
  height: @h;
  background-color: @bg;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```
