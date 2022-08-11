---
sidebar_position: 2
---

# JavaScript

## 001 - JavaScript有哪些数据类型，它们的区别？

**基本数据类型**

- 字符串`String`
- 数字型`Number`
- 布尔型`Boolean`
- 未定义`undefined`
- `Null`
- `Symbol` (ES6新增)

**引用数据类型**

- 对象型`Object`
- 数组型`Array`
- 函数型`Function`
- `Date`
- `Math`
- 正则`RegExp`
- `Map`(ES6新增)
- `Set`(ES6新增)

**区别**

两种类型的区别在于存储位置的不同

- 基本数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；
  引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

## 002 - 数据类型检测的方式有哪些

**`typeof xxx`**

- 用于检测基本数据类型（除`Null`外，`Null`会被检测为 `object`）
- 检测引用数据类型除（除`function`外，`function`会被检测为`function`）会被检测为`object`
- 返回结果为字符串类型，且类型第一个字母均为小写

```javascript
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof function () {
} // 'function'
```

**`xxx instanceof constructor`**

适用于精准检测引用数据类型

可以正确判断对象的类型，用于检测构造函数的 `prototype`
属性是否出现在某个实例对象的原型链上，`object instanceof constructor`，`object`为实例对象，`constructor`为构造函数

```javascript
console.log(1 instanceof Number) // false
console.log(true instanceof Boolean) // false
console.log('a' instanceof String) // false
console.log([] instanceof Array) // true
console.log(function () {
} instanceof Function) // true
console.log({} instanceof Object) // true
```

**`Object.prototype.toString.call()`**

适用于所有数据类型

调用该方法，统一返回格式 `[object Xxx]` 的字符串

```javascript
Object.prototype.toString({}) // '[object Object]'
Object.prototype.toString.call({}) // '[object Object]' 加上call也一样
Object.prototype.toString.call(1) // '[object Number]'
Object.prototype.toString.call('a') // '[object String]'
Object.prototype.toString.call(true) // '[object Boolean]'
Object.prototype.toString.call(function () {
}) // '[object Function]'
Object.prototype.toString.call(null) // '[object Null]'
Object.prototype.toString.call(undefined) // '[object Undefined]'
Object.prototype.toString.call(/123/g) // '[object RegExp]'
Object.prototype.toString.call(new Date()) // '[object Date]'
Object.prototype.toString.call([]) // '[object Array]'
Object.prototype.toString.call(document) // '[object HTMLDocument]'
Object.prototype.toString.call(window) // '[object Window]'
```

## 003 - 判断数组的方式有哪些

1. `xxx instanceof constructor` 返回布尔值

2. `Object.prototype.toString.call()` 返回 `[object Xxx]` 的字符串

3. `arr.__proto__ === Array.prototype`(通过原型链做判断) 返回布尔值

4. 通过ES6的`Array.isArray(arr)`做判断 返回布尔值

5. 通过`Array.prototype.isPrototypeOf(arr)` 返回布尔值

## 004 - `null`和`undefined`区别

`Undefined` 和 `Null` 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 `undefined` 和 `null`。

`undefined` 代表的含义是未定义，`null` 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 `undefined`，`null`
主要用于赋值给一些可能会返回对象的变量，作为初始化。

## 005 - Object.is(value1, value2) 与比较操作符 “===”、“==” 的区别？

使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较
使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false
使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的

## 006 - object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别

Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发
ES6 setter。

扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制ES6的
symbols 属性。

## 007 - 如何判断一个对象是空对象

使用JSON自带的JSON.stringify方法来判断

使用ES6新增的方法Object.keys()来判断

## 008 - ES6有哪些新增？

新增了变量的声明方式、解构赋值、模板字符串、简化对象写法、箭头函数、函数形参默认值、rest参数、拓展运算符、新增数据类型（Set、Map、Symbol、BigInt）、promise、async/await

## 009 - `let` `const` `var`的区别

区别主要体现在七个方面

1. 是否有块级作用域：块作用域由 { }包括，let和const具有块级作用域，var不存在块级作用域。块级作用域解决了ES5中的两个问题：
    - 内层变量可能覆盖外层变量
    - 用来计数的循环变量泄露为全局变量
2. 是否存在变量提升
    - var存在变量提升
    - let、const不存在变量提升，即变量只能在声明之后使用，否在会报错
3. 是否添加全局属性
    - 浏览器的全局对象是window，Node的全局对象是global。var声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是let和const不会。
4. 能否重复声明变量
    - var可以重复声明变量，后声明的同名变量会覆盖之前声明的变量
    - const和let不允许重复声明变量
5. 是否存在暂时性死区
    - 在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区 let a = a/const a = a（会报错）
    - 使用var声明的变量不存在暂时性死区：var a = a（不会报错）
6. 是否必须设置初始值
    - var和let不需要赋初始值，只声明就可以
    - const声明时必须赋初始值，否则会报错
7. 能否改变指针指向（重复赋值）
    - let创建的变量是可以更改指针指向（可以重新赋值）
    - const声明的变量是不允许改变指针的指向

## 010 - const对象的属性可以修改吗

const保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数值、字符串、布尔值），
其值就保存在变量指向的那个内存地址，因此等同于常量；但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，
const只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

## 011 - 箭头函数与普通函数的区别

普通函数：`let fn = function(){}` 或者 `function fn(){}`

箭头函数：`let fn = () => {}`

- 箭头函数比普通函数更加简洁
    - 如果只有一个参数，可以省去参数的括号
    - 如果函数体的返回值只有一句，可以省略大括号，且必须省略return
- 箭头函数没有自己的this
    - 箭头函数不会创建自己的this， 所以它没有自己的this，它只会在自己作用域的上一层继承this。所以箭头函数中this的指向在它在定义时已经确定了，之后不会改变。
- call()、apply()、bind()等方法不能改变箭头函数中this的指向
    - 箭头函数的this指向要么是window，要么是他的外层
- 箭头函数不能作为构造函数使用
    - 箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用arguments参数，所以不能New一个箭头函数

new操作符的实现步骤如下:

1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是将对象的**proto**属性指向构造函数的prototype属性）
3. 指向构造函数中的代码，构造函数中的this指向该对象（也就是为这个对象添加属性和方法）
4. 返回新的对象 所以，上面的第二、三步，箭头函数都是没有办法执行的。

- 箭头函数没有自己的 `arguments`
    - 箭头函数没有自己的 `arguments` 对象。在箭头函数中访问 `arguments` 实际上获得的是它外层函数的 `arguments` 值。
- 箭头函数没有 `prototype`
- 箭头函数不能用作 `Generator` 函数，不能使用 `yield` 关键字

## 012 - 箭头函数的this指向哪⾥？

箭头函数不同于传统JavaScript中的函数，箭头函数并没有属于⾃⼰的this，它所谓的this是捕获其所在上下⽂的 this 值，作为⾃⼰的 this
值，并且由于没有属于⾃⼰的this，所以是不会被new调⽤的，这个所谓的this也不会被改变。箭头函数的this指向外层函数的this

## 013 - `new` 操作符的实现原理

new操作符的执行过程：

1. 首先创建了一个新的空对象(创建一个新的内存空间）
2. 设置原型，将对象的原型设置为函数的 `prototype` 对象。
3. 让函数的 `this` 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 返回新对象（所以构造函数不需要return）

## 014 - `Map` 和`Object` 的区别

- 同名碰撞
    - 对象其实就是在堆开辟了一块内存，其实Map的键存的就是这块内存的地址。只要地址不一样，就是两个不同的键，这就解决了同名属性的碰撞问题，而传统的Object显然做不到这一点。
- 键的类型
    - Map的键可以是任意值，包括函数、对象或任意基本类型。
    - Object 的键必须是 String 或是Symbol。
- 键的顺序
    - Map 中的 key 是有序的。因此，当迭代的时候， Map 对象以插入的顺序返回键值。
    - Object 的键是无序的
- Size
    - Map 的键值对个数可以轻易地通过size 属性获取
    - Object 的键值对个数只能手动计算
- 迭代
    - Map 是 iterable 的，所以可以直接被迭代，可用for...of遍历
    - Object不是 iterable，不可以被迭代，不能用for...of遍历

## 015 - JavaScript 类数组对象的定义？

一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。常见的类数组对象有
arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有
length 属性值，代表可接收的参数个数

**常见的类数组转换为数组的方法**

- 通过 call 调用数组的 slice 方法来实现转换 `Array.prototype.slice.call(arrayLike);`

  slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

- 通过 call 调用数组的 splice 方法来实现转换 `Array.prototype.splice.call(arrayLike, 0);`

  splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

- 通过 apply 调用数组的 concat 方法来实现转换 `Array.prototype.concat.apply([], arrayLike);`

  concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

- 通过 Array.from 方法来实现转换 `Array.from(arrayLike);`

  Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

## 016 - 数组有哪些原生方法？

- 数组和字符串的转换方法
    - toString()、toLocalString()、join()
- 数组尾部操作的方法
    - pop() 和 push()，push 方法可以传入多个参数
- 数组首部操作的方法
    - shift() 和 unshift() unshift方法可以传递多个参数，表示在数组开头增加
- 重排序的方法
    - reverse() 和 sort()，sort() 方法可以传入一个函数来进行比较，传入前后两个值，如果返回值为正数，则交换两个参数的位置
- 数组连接的方法
    - concat() ，返回的是拼接好的数组，不影响原数组
- 数组截取（浅拷贝）办法
    - slice(begin【end】)，用于截取数组中的一部分返回，不影响原数组。
- 数组插入/删除/新增方法
    - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])，改变原数组
- 数组归并方法
    - reduce() 和 reduceRight() 方法

## 017 - 什么是 DOM 和 BOM？

**DOM** 指的是文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。

**BOM** 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的方法和接口。BOM的核心是
window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个
Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location
对象、navigator 对象、screen 对象、history对象等子对象，并且
DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。

## 018 - ES6模块与CommonJS模块有什么异同？

**不同点**

1. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
2. CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载
3. CommonJS是对模块的浅拷贝，ES6 Module是对模块的引入，即ES6 Module只存只读，不能改变其值，具体点就是指针指向不能变，类似const
   。
4. import的接口是read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向。可以对commonJS重新赋值（改变指针指向），但是对ES6
   Module赋值会编译报错。

**相同点**

CommonJS和ES6 Module都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变

## 019 - `for...in`和`for...of`的区别

`for...of` 是ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、字符串、Map、Set、类数组对象【伪数组】等，注意：对象没有iterator）并且返回各项的值

:::tip 区别

`for...in` 会遍历对象的整个原型链，性能非常差不推荐使用，而 `for...of` 只遍历当前对象不会遍历原型链

对于数组的遍历，`for...in` 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，`for...of` 只返回数组的下标对应的属性值

:::

## 020 - 数组的遍历方法有哪些

`for...of` 不改变原数组

- for...of遍历具有Iterator迭代器的对象的属性，返回的是数组的元素、对象的属性值，不能遍历普通的obj对象

`forEach()` 视情况是否改变原数组, 没有返回值

`filter()` 不改变原数组

- 数组方法，不改变原数组，有返回值，返回一个符合筛选规则的新数组

`every()` 和 `some()` 不改变原数组

- 数组方法，some()只要有一个是true，便返回true；而every()只要有一个是false，便返回false.

`map()` 不改变原数组

- 数组方法，不改变原数组，有返回值，生成一个一一对应的新数组

`find()` 和 `findIndex()` 不改变原数组

- 数组方法，find()返回的是第一个符合条件的值；findIndex()返回的是第一个返回条件的值的索引值

`reduce()` 和 `reduceRight()` 不改变原数组

- 数组方法，reduce()对数组正序操作；reduceRight()对数组逆序操作

## 021 - forEach和map方法有什么区别

- `forEach()`方法会针对每一个元素执行提供的函数，对数据的操作会改变原数组，该方法没有返回值
- `map()`方法不会改变原数组的值，有返回值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值

## 022 - 如何实现深拷贝？

:::tip 什么是拷贝？复制

基本类型是按照值访问的. 引用类型都是按照引用传递的

:::

#### 浅拷贝

只复制一层对象，当对象的属性是引用类型时，实质上复制的是其引用，当引用指向的值方式变化的时候，原对象的属性值也会跟着变化，互相影响

`Object.assign(target, ...sources)`target目标对象，sources元对象，返回目标对象

#### 深拷贝

在拷贝的时候创建新的对象，并把原对象所有的属性都拷贝到新对象，原属性如果是对象，也会重新创建新的对象并拷贝到新对象属性中，原对象和新对象都是相互独立的，互不影响

方式一：`let newObj = JSON.parse(JSON.stringify(obj))`

JSON.parse(JSON.stringify(obj))是目前比较常用的深拷贝方法之一，它的原理就是利用JSON.stringify
将js对象序列化（JSON字符串），再使用JSON.parse来反序列化( 还原)js对象。

这个方法可以简单粗暴的实现深拷贝，但是还存在问题，拷贝的对象中如果有函数，undefined，symbol，当使用过JSON.stringify()
进行处理之后，都会消失。

方式二：递归

```javascript
let obj = {
    a: 10,
    b: {
        c: 20
    }
}

function deepCopy(obj) {
    let o = {}
    if (typeof obj === 'object') {
        for (let k in obj) {
            if (obj.hasOwnProperty(k)) {
                if (typeof obj[k] === 'object') {
                    o[k] = deepCopy(obj[k])
                } else {
                    o[k] = obj[k]
                }
            }
        }
    }
    return o
}

let newObj = deepCopy(obj)
```

方式三：函数库lodash的`_.cloneDeep`方法

## 023 - 对原型、原型链的理解

![prototype](https://junjieweb.github.io/assets/images/prototype-3bbaf738582be5967fdc883d581b1899.png)

在JavaScript中是使用构造函数来初始化一个对象的，每一个构造函数的内部都有一个 `prototype`（原型对象）
属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的
prototype 属性对应的值，在 ES5
中这个指针被称为对象的原型。一般来说不应该能够获取到这个值的，但是现在浏览器中都实现了 `__proto__`
属性来访问这个属性（prototype原型对象），但是最好不要使用这个属性，因为它不是规范中规定的。ES5
中新增了一个 `Object.getPrototypeOf()`
方法，可以通过这个方法来获取对象的原型。当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是
Object.prototype（除null外）

特点：JavaScript 对象是通过引用来传递的，创建的每个新对象实体中并没有一份属于自己的原型副本。当修改原型时，与之相关的对象也会继承这一改变。

## 024 - Event Loop（JS执行机制）

JS是单线程，也就是说，同一时间只能做一件事。同步和异步的本质区别是这条流水线上各个流程的执行顺序不同。

**同步（按顺序来）**

同步任务：同步任务都在主流程上执行，形成一个执行栈。（宏任务）

**异步（同时进行）**

异步任务：JS的异步是通过回调函数实现的。异步任务相关回调函数添加到任务队列中（任务队列也称消息队列）。一般而言，异步任务有三种类型：

- 普通事件，如`click`、`resize`等
- 资源加载，如`load`、`error`等
- 定时器，包括`setTimeout`、`setInterval`等。

**JS执行机制--`Event Loop`**

详细的事件循环图示如下（顺序是从上到下，即：首先是脚本，然后是微任务，渲染等）：

![img](https://zh.javascript.info/article/event-loop/eventLoop-full.svg)

**更详细的事件循环算法**

1. 从 宏任务 队列（例如 “script”）中出队（dequeue）并执行最早的任务。
2. 执行所有 微任务：
    - 当微任务队列非空时：
        - 出队（dequeue）并执行最早的微任务。
3. 如果有变更，则将变更渲染出来。
4. 如果宏任务队列为空，则休眠直到出现宏任务。
5. 转到步骤 1。

- 先执行执行栈中的同步任务；
- 异步任务（回调函数）放入任务队列中；
- 一旦执行栈中的所有同步任务执行完毕，系统会按次序取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

由于主线程不断地重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为**事件循环( event loop )**.

## 025 - 什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？

回调函数是一个作为变量传递给另一个函数的函数，它在主体函数执行完之后再执行。

**回调函数特点**

- 你定义的
- 你没有调用
- 但是最终执行了

**缺点**

- 回调函数有一个致命的弱点，就是容易写出回调地狱（Callback hell）
    - 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
    - 嵌套函数一多，就很难处理错误
- 不能使用 try catch 捕获错误
- 不能直接 return

**常见地回调函数**

- DOM事件回调函数
- 定时器回调函数
- ajax请求回调函数
- 生命周期回调函数

**如何解决回调函数**

- promise
- async/await
- generator

## 026 - 对Promise的理解

Promise本身是同步的立即执行函数，当在executor中执行resolve（）或者reject（）的时候,
此时是异步操作，也就是说promise中函数体内部的非异步操作正常顺序执行，resolve（）和reject（）异步操作为promise实例对象的返回结果，这个返回结果后面的then或者catch需要用，所以then和catch要放到异步任务中等待所有同步任务执行完毕之后再按顺序（或者如果有定时器，需要遵循定时器的时间）执行。

Promise是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise
是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理

- Promise解决了什么问题/为什么需要promise
    - 在工作中经常会碰到这样一个需求，比如我使用ajax发一个A请求后，成功后拿到数据，需要把数据传给B请求；那么需要如下编写代码
        - 上面的代码有如下缺点： 后一个请求需要依赖于前一个请求成功后，将数据往下传递，会导致多个ajax请求嵌套的情况，代码不够直观。
          如果前后两个请求不需要传递参数的情况下，那么后一个请求也需要前一个请求成功后再执行下一步操作，这种情况下，那么也需要如上编写代码，导致代码不够直观。
        - promise写法：解决了地狱回调的问题
- Promise的实例有三个状态
    - Pending（进行中）
    - Resolved（已完成）
    - Rejected（已拒绝）
- Promise的实例有两个过程
    - pending -> fulfilled : Resolved（已完成）
    - pending -> rejected：Rejected（已拒绝）
- Promise的特点
    - 对象的状态不受外界影响。promise对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。
      只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是promise这个名字的由来——“承诺”
    - 一旦状态改变就不会再变，任何时候都可以得到这个结果。promise对象的状态改变，只有两种可能：从pending变为fulfilled，从pending变为rejected。
      这时就称为resolved（已定型）。如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果。这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的
- Promise的缺点
    - 无法取消Promise，一旦新建它就会立即执行，无法中途取消
    - 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
    - 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
- 总结
    - Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise
      实例。一个 Promise 实例有三种状态，分别是pending、resolved 和
      rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者rejected
      状态，并且状态一经改变，就凝固了，无法再被改变了。状态的改变是通过 resolve() 和
      reject() 函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个
      then
      方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行

## 027 - Promise.all和Promise.race的区别的使用场景

**`Promise.all()`**

Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。Promise.all中传入的是数组，返回的也是是数组，并且会将进行映射，传入的promise对象返回的值是按照顺序在数组中排列的，但是注意的是他们执行的顺序并不是按照顺序的，除非可迭代对象为空。需要注意，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，这样当遇到发送多个请求并根据请求顺序获取和使用数据的场景，就可以使用Promise.all来解决。

**`Promise.race()`**

Promise.race就是赛跑的意思，意思就是说，`Promise.race([p1, p2, p3])`
里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。当要做一件事，超过多长时间就不做了，可以用这个方法来解决

## 028 - 对async/await 的理解

- async/await其实是Generator 的语法糖，它能实现的效果都能用then链来实现，它是为优化then链而开发出来的。从字面上来看，async是“异步”的简写，await则为等待，所以很好理解async
  用于申明一个
  function 是异步的，而 await 用于等待一个异步方法执行完成。
- async函数返回的是一个Promise 对象，如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成
  Promise 对象，async 函数返回的是一个 Promise
  对象，所以在最外层不能用 await 获取其返回值的情况下，当然应该用原来的方式：then() 链来处理这个 Promise 对象
    - async函数返回的是一个promise对象
    - 可以用then（）方法或者catch（）方法来处理async函数（promise对象）

**对promise/then、async/await 的理解**

async函数实际上就是promise对象，promise是同步的立即执行函数，所以aysnc函数也是立即执行函数，也就是说含有async或者promise（下面还有普通函数，或者console.log（...))
会按照代码的顺序进行执行（若async函数中有await需要重新考虑执行顺序，具体看下面的tip）

promise（async函数）异步任务只针对promise（async函数）中调用的then（）方法或者catch（）方法等里面的函数执行，promise（async函数）中的同步任务正常执行，不会阻塞，此时then或者catch方法里面的代码会放到异步任务队列中，待页面所有同步任务完成后再按照顺序（或时间顺序）执行

没有await的async函数也是立即执行函数，会正常执行async函数里面的代码

tip：有await的async函数，会暂时阻碍await下面所有代码的执行，在async函数中并且在await前面的代码（以及await紧跟着的那个异步函数也会正常运行）会正常运行，待await等待到他后面异步函数的结果之后，再执行await下面的代码。注意：await在没有等待到它后面的异步函数的结果时只是阻碍async函数中且在await下面的代码的执行，async函数中且在await前面、await后面紧跟着的那个异步任务的代码，以及async函数之后的代码不会受到影响，会正常运行

## 029 - 对闭包的理解

- 闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。
- 比如，函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。
    - 注意：必须要先调用A，B才可以访问到A里面的变量
- 用途
    - 闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
    - 闭包的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。
- 经典面试题：循环中使用闭包解决 var 定义函数的问题
    - 首先因为 setTimeout 是个异步函数，所以会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。解决办法
        - 第一种是使用闭包的方式+立即执行函数
            - 在上述代码中，首先使用了立即执行函数将 i 传入函数内部，这个时候值就被固定在了参数 j 上面不会改变，当下次执行
              timer 这个闭包的时候，就可以使用外部函数的变量 j，从而达到目的
        - 使用 setTimeout 的第三个参数，这个参数会被当成 timer 函数的参数传入
        - 第三种就是使用 let 定义 i 了来解决问题

## 030 - 对作用域、作用域链的理解

- 作用域
    - 全局作用域
        - 最外层函数和最外层函数外面定义的变量拥有全局作用域（函数本身也是一个特殊的变量，其名字就是函数名字）
        - 所有未定义直接赋值的变量自动声明为全局作用域
        - 所有window对象的属性拥有全局作用域
    - 局部作用域
        - 声明在函数内部的变量，一般只有固定的代码片段可以访问到
        - 作用域是分层的，内层作用域可以访问外层作用域，反之不行
    - 块级作用域
        - 使用ES6中新增的let和const指令可以声明块级作用域，块级作用域可以在函数中创建也可以在一个代码块中的创建（由{
          }包裹的代码片段）
        - let和const声明的变量不会有变量提升，也不可以重复声明
        - 在循环中比较适合绑定块级作用域，这样就可以把声明的计数器变量限制在循环内部
- 作用域链
    - 概念
        - 在当前作用域中查找所需变量，如果在自己作用域找不到该变量就去父级作用域查找，依次向上级作用域查找，直到访问到window对象就被终止，这一层层的关系就是作用域链。
    - 作用
        - 保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数。
    - 本质
        - 一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象

## 031 - 对执行上下文的理解

在执行JS代码之前，需要先解析代码。解析的时候会先创建一个全局执行上下文环境，先把代码中即将执行的变量、函数声明都拿出来，变量先赋值为undefined，函数先声明好可使用。这一步执行完了，才开始正式的执行程序。

在一个函数执行之前，也会创建一个函数执行上下文环境，跟全局执行上下文类似，不过函数执行上下文会多出this、arguments和函数的参数

全局上下文：变量定义，函数声明

函数上下文：变量定义，函数声明，this，arguments

- 执行上下文类型
    - 全局执行上下文
        - 任何不在函数内部的都是全局执行上下文，它首先会创建一个全局的window对象，并且设置this的值等于这个全局对象，一个程序中只有一个全局执行上下文
    - 函数执行上下文
        - 当一个函数被调用时，就会为该函数创建一个新的执行上下文，函数的上下文可以有任意多个
    - eval函数执行上下文
        - 执行在eval函数中的代码会有属于他自己的执行上下文，不过eval函数不常使用
- 执行上下文栈
    - JavaScript引擎使用执行上下文栈来管理执行上下文
    - 当JavaScript执行代码时，首先遇到全局代码，会创建一个全局执行上下文并且压入执行栈中，每当遇到一个函数调用，就会为该函数创建一个新的执行上下文并压入栈顶，
      引擎会执行位于执行上下文栈顶的函数，当函数执行完成之后，执行上下文从栈中弹出，继续执行下一个上下文。当所有的代码都执行完毕之后，从栈中弹出全局执行上下文
    - 输出顺序Inside first function--Inside second function--Again inside first function

## 032 - this/call/apply/bind

apply、call 和 bind 调用模式，这三个方法都可以改变指定调用函数的 this 指向。

**`apply`** 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。

**`call`** 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call()
方法时，传递给函数的参数必须逐个列举出来。

**`bind`** 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

## 033 - `call()` 和 `apply()` 的区别

它们的作用一模一样，区别仅在于传入参数的形式的不同。

- `apply` 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply
  方法把这个集合中的元素作为参数传递给被调用的函数。
- `call` 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数。

## 034 - 如何理解面向对象？

面向对象程序设计以对象为核心，该方法认为程序由一系列对象组成。类是对现实世界的抽象，包括表示静态属性的数据和对数据的操作，对象是类的实例化。面向对象有三个特点：

**封装性**

- 将描述每一个对象的属性以及其行为的程序代码组装到一起，一并封装在一个有机的实体中，把它们封装在一个“模块”中，也就是一个类中

**继承性**

- 继承性是面向对象技术中的另外一个重要特点，继承在面向对象技术是指一个对象针对于另一个对象的某些独有的特点、能力进行复制或者延续。

**多态性**

- 从宏观的角度来讲，多态性是指在面向对象技术中，当不同的多个对象同时接收到同一个完全相同的消息之后，所表现出来的动作是各不相同的，具有多种形态；
- 从微观的角度来讲，多态性是指在一组对象的一个类中，面向对象技术可以使用相同的调用方式来对相同的函数名进行调用

## 035 - 对象创建的方式有哪些？

**`new Object()`方式**

```javascript
const obj = new Object()
obj.name = 'tom'
console.log(obj)
```

**字面量方式**

```javascript
const obj = {name: 'tom'}
console.log(obj)
```

**工厂模式**

工厂模式的主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系

```javascript
function createObject(name, age) {
    return {
        name,
        age
    }
}

const obj = createObject('tom', 23)
```

**构造函数方式**

js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么就可以把它称为构造函数。

执行构造函数首先会创建一个空对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this
指向这个对象，最后再执行整个函数，给实例对象添加属性和方法，最后再指回这个新对象。

构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在
js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function () {
        console.log('hello')
    }
}

const p = new Person('tom', 23)
p.say() // hello
console.log(p) // Person {name: 'tom', age: 23, say: ƒ}
```

**原型方式**

因为每一个函数都有一个 prototype
属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如
Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例。

```javascript
function Person() {

}

Person.prototype.name = 'tom'
Person.prototype.age = 23
Person.prototype.say = function () {
    console.log('hello')
}
const p = new Person()
p.say()
```

**构造函数+原型方式**

这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此可以组合使用这两种模式，通过构造函数来初始化对象的属性，
通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好

```javascript
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.say = function () {
    console.log('hello')
}

const p = new Person('tom', 23)
p.say()
```

**类方式**

```javascript
    class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        console.log('hello')
    }
}

const p = new Person('tom', 12)
p.say()
```

## 036 - 对象继承的方式有哪些？

**构造函数继承 `call/apply`**

每次生成一个对象，对象本身的属性和方法不共享

优点：可以向父构造函数传递参数

缺点：不可以共享属性和方法

`call/apply/bind`

```javascript
function Parent() {
    this.name = 'tom'
    this.arr = [1, 2, 3]
}

function Child() {
    // 让Parent的this指向对象
    Parent.call(this)
}

const obj1 = new Child()
const obj2 = new Child()
obj1.arr[0] = 10
console.log(obj1.arr) // [10, 2, 3]
console.log(obj2.arr) // [1, 2, 3]
```

**`prototype`原型链继承**

儿子继承父亲`Child.prototype = new Parent()`

优点：共享属性和方法

缺点：无法给父构造函数传递参数

面试题

```javascript
function Foo() {
    getName = function () {
        alert(1)
    }
    return this
}

Foo.getName = function () {
    alert(2)
}
Foo.prototype.getName = function () {
    alert(3)
}
var getName = function () {
    alert(4)
}

function getName() {
    alert(5)
}

// **优先级**：变量 > 函数 > 形参 > 变量提升
Foo.getName() // 2
getName() // 4
// 全局getName = function(){alert(1)}
Foo().getName() // 1
getName() // 1
new Foo().getName() // 3
```

**组合继承**

原型链继承+借用构造函数继承

既可以传递参数，也可以实现该有的共享性

```javascript
function Parent(name) {
    this.name = name
    this.arr = [1, 2, 3]
}

function Child(name) {
    // 借用构造函数
    Parent.call(this, name)
}

Parent.prototype.run = function () {

}
// 原型
Child.prototype = new Parent()

const obj1 = new Child('张三')
const obj2 = new Child('李四')
obj1.arr[0] = 10
console.log(obj1)
console.log(obj2)
console.log(obj1.run === obj2.run)
```

**类继承 `extends+super`**

```javascript
class Parent {
    constructor(name) {
        this.name = name
    }

    run() {
        return '这是run方法'
    }
}

class Child extends Parent {
    constructor(name) {
        super(name)
    }
}

const c = new Child('tom')
console.log(c.__proto__) // Parent {constructor: ƒ}
console.log(c.run()) // 这是run方法
```

## 037 - 浏览器的垃圾回收机制

**垃圾回收**：JavaScript代码运行时，需要分配内存空间来储存变量和值。当变量不在参与运行时，就需要系统收回被占用的内存空间，这就是垃圾回收。

#### 回收机制

- Javascript 具有自动垃圾回收机制，会定期对那些不再使用的变量、对象所占用的内存进行释放，原理就是找到不再使用的变量，然后释放掉其占用的内存。
- JavaScript中存在两种变量：局部变量和全局变量。
  全局变量的生命周期会持续要页面卸载；而局部变量声明在函数中，它的生命周期从函数执行开始，直到函数执行结束，在这个过程中，局部变量会在堆或栈中存储它们的值，当函数执行结束后，这些局部变量不再被使用，它们所占有的空间就会被释放。
- 当局部变量被外部函数使用时，其中一种情况就是闭包，在函数执行结束后，函数外部的变量依然指向函数内部的局部变量，此时局部变量依然在被使用，所以不会回收。

#### 垃圾回收的方式

**标记清除**

- 标记清除是浏览器常见的垃圾回收方式，当变量进入执行环境时，就标记这个变量“进入环境”，被标记为“进入环境”的变量是不能被回收的，因为他们正在被使用。当变量离开环境时，就会被标记为“离开环境”，被标记为“离开环境”的变量会被内存释放。
- 垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的标记。
  而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。

**引用计数**

- 另外一种垃圾回收机制就是引用计数，这个用的相对较少。引用计数就是跟踪记录每个值被引用的次数。
  当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减1。当这个引用次数变为0时，说明这个变量已经没有价值，因此，在在机回收期下次再运行时，这个变量所占有的内存空间就会被释放出来

- 这种方法会引起循环引用的问题：例如：
  obj1和obj2通过属性进行相互引用，两个对象的引用次数都是2。当使用循环计数时，由于函数执行完后，两个对象都离开作用域，函数执行结束，obj1和obj2还将会继续存在，因此它们的引用次数永远不会是0，就会引起循环引用

```javascript
function x() {
    const obj1 = {}
    const obj2 = {}
    obj1.a = obj2
    obj2.a = obj1
}
```

```javascript
// 这种情况下，就要手动释放变量占用的内存
obj1.a = null
obj2.a = null
```

**减少垃圾回收**

- 对数组进行优化

    - 在清空一个数组时，最简单的方法就是给其赋值为`[]`，但是与此同时会创建一个新的空对象，可以将数组的长度设置为0，以此来达到清空数组的目的

- 对object进行优化

    - 对象尽量复用，对于不再使用的对象，就将其设置为 `null`，尽快被回收

- 对函数进行优化

    - 在循环中的函数表达式，如果可以复用，尽量放在函数的外面

## 038 - 哪些情况会导致内存泄漏

> 无法垃圾回收就是内存泄露

**意外的全局变量**

- 由于使用未声明的变量，而意外地创建了一个全局变量，而使这个变量一直留在内存中无法被回收

**被遗忘的计时器或回调函数**

- 设置了 `setInterval` 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被一直留在内存中，而无法被回收

**脱离 DOM 的引用**

- 获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收

**闭包**

- 不合理地使用闭包，从而导致某些变量一直被留在内存当中

## 039 - 对 `this` 对象的理解

**`this`** 是函数中的隐含参数，由浏览器自动传递

根据函数的调用方式不同，`this` 的值也不同，this指的是函数运行时所在的“环境”

1. 以函数的形式调用，`this` 是 `window`
2. 以方法的形式调用，`this` 是`调用方法的对象`
3. 以构造函数的形式调用，`this` 是`新建的对象`
4. 以 `call` 和 `apply` 的形式调用，`this` 是`它们的第一个参数`
5. 箭头函数中的 `this` 由它`外层作用域`决定
6. 事件的回调函数中，`this` 是`绑定事件的对象`

## 040 - 数组去重的方式

set `[...new Set(arr)] `

遍历：利用创建一个空数组，然后对原数组foreach遍历，使用indexOf判定新数组中是否有该数组元素，若没有，就往新数组中push

对象：利用同名碰撞

`arr.includes()` 检测数组是否有某个值

