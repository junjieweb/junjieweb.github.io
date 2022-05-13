# 简介

## 什么是 JavaScript?

**`JavaScript`**
是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。另外还有高级的服务端`Javascript`版本，例如`Node.js`
，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。在宿主环境（例如
web 浏览器）中， JavaScript 能够通过其所连接的环境提供的编程接口进行控制。

**`JavaScript`** 内置了一些对象的标准库，比如数组（`Array`），日期（`Date`），数学（`Math`）和一套核心语句，包括运算符、流程控制符以及声明方式等。JavaScript
的核心部分可以通过添加对象来扩展语言以适应不同用途；例如：

- 客户端的 JavaScript 通过提供对象，控制浏览器及其文档对象模型（DOM），来扩展语言核心。例如：客户端的拓展代码允许应用程序将元素放在某个 HTML 表单中，并且支持响应用户事件，比如鼠标点击、表单提交和页面导航。
- 服务端的 JavaScript 则通过提供有关在服务器上运行 JavaScript 的对象来可扩展语言核心。例如：服务端版本直接支持应用和数据库通信，提供应用不同调用间的信息连续性，或者在服务器上执行文件操作。

这意味着，在浏览器中，JavaScript 可以改变网页（DOM）的外观与样式。同样地，在服务器上，Node.js 中的 JavaScript 可以对浏览器上编写的代码发出的客户端请求做出响应。

**`JavaScript ( JS )`** 是一种具有[函数优先](https://developer.mozilla.org//docs/Glossary/First-class_Function)
的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web
页面的脚本语言而出名的，但是它也被用到了很多[非浏览器环境](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages)
中，例如 [Node.js](https://nodejs.org/)、 [Apache CouchDB](https://couchdb.apache.org/)
和 [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html)。JavaScript
是一种[基于原型编程](https://developer.mozilla.org//docs/Glossary/Prototype-based_programming)
、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。了解更多[ JavaScript](https://developer.mozilla.org//docs/Web/JavaScript/About_JavaScript)
。

**`JavaScript`** 的标准是 [ECMAScript](https://developer.mozilla.org//docs/Web/JavaScript/Language_Resources) 。截至 2012
年，所有的[现代浏览器](https://kangax.github.io/compat-table/es5/)都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3
标准。2015年6月17日，[ECMA国际组织](https://www.ecma-international.org/)发布了 ECMAScript 的第六版，该版本正式名称为 ECMAScript 2015，但通常被称为
ECMAScript 6 或者 ES6。自此，ECMAScript 每年发布一次新标准。

**`ECMAScript`**是形成[JavaScript](https://developer.mozilla.org/zh-CN/JavaScript)
语言基础的脚本语言。ECMAScript是由[Ecma国际](https://www.ecma-international.org/)标准组织以**ECMA-262和ECMA-402规范**的形式进行标准化的。

## JS 的编写位置

1. 编写到script标签中：`<script>JS代码</script>`

2. 编写到外部的js文件中：`<script src="xxx.js"></script>`

3. 编写到标签的指定属性中：`<button onclick="js代码"></button>` `<a href="javascript:js代码"></a>`

## JS 基本语法

- 单行注释：`// 单行注释`
- 多行注释：`/* 多行注释 */`
- JS 的每一条语句都应以分号`;`结尾
- JS 中严格区分大小写
- JS 中多个空格和换行会被忽略

## 字面量和变量

**字面量**就是一个一个的值，像`1`、`'hello'`、`true`、`NaN`... 所有的字面量在JS中都可以直接使用，但一般不会这么做

**变量**用来存储值，一个变量可以用来“存储”任意值，并且变量中“存储”的值可以任意修改，JS中的变量并没有直接存储值，而是存储值的内存地址，JS中变量更像是一个值的别名

变量的名字又叫做**标识符**，其需要遵守一定的规则。

一个 JavaScript 标识符必须以 **`字母`**、下划线（**`_`**）或者美元符号（**`$`**）开头

例如：`var a = 10;` `_b = 20;` `let $c = 30;` `const d = 40;`

用 `var` 或 `let` 语句声明的变量，如果没有赋初始值，则其值为 `undefined`。

## 交互

1. 警告框：`alert('Hello World');`
2. 控制台打印：`console.log('Hello World');`
3. 网页中打印：`document.write('Hello World');`
4. 显示信息等待用户点击确定或取消：
   - `result = confirm(question);`点击确定返回 `true`，点击取消返回 `false`。
