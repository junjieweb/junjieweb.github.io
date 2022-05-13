# Object 对象

JavaScript 的设计是一个简单的基于对象的范式。一个对象就是一系列属性的集合，一个属性包含一个名和一个值。一个属性的值可以是函数，这种情况下属性也被称为方法。除了浏览器里面预定义的那些对象之外，你也可以定义你自己的对象。

在javascript中，一个对象可以是一个单独的拥有属性和类型的实体。我们拿它和一个杯子做下类比。一个杯子是一个对象(物体)，拥有属性。杯子有颜色，图案，重量，由什么材质构成等等。同样，javascript对象也有属性来定义它的特征。

Object 是 JavaScript 的一种 数据类型 。它用于存储各种键值集合和更复杂的实体。Objects 可以通过 `new Object()` `Object.create()`方法，或者使用 对象字面量 的方式创建

## 对象和属性

一个 javascript 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 javascript 变量基本没什么区别，仅仅是属性属于某个对象。

- **属性：**事物的**特征**，在对象中用属性来表示（常用名词）
- **方法：**属性的**行为**，在对象中用方法来表示（常用动词）

### 创建对象

```javascript
let obj = new Object();
let obj = Object();
let obj = {};

function Car() {
}

let c = new Car()
```

### 定义方法

对象的属性值可以是任意类型，也可以是一个函数.如果对象的属性值是一个函数，这个函数我们称为是对象的方法.调用函数称为调用对象的方法.

一个方法 是关联到某个对象的函数，或者简单地说，一个方法是一个值为某个函数的对象属性。定义方法就像定义普通的函数，除了它们必须被赋给对象的某个属性。

```javascript
var myObj = {
    myMethod: function (params) {

    },
    // 或者 这样写也可以
    myOtherMethod(params) {

    }
};
```

### 使用对象

```javascript
const obj = {}
// 添加
obj.name = 'tom'
obj.age = 23
// 读取
console.log(obj.name)
console.log(obj["age"])
// 删除
delete obj.name
delete obj["age"]
```

### 工厂模式

```javascript
function fun(cName) {
    let obj = new Object()
    obj.name = cName
    return obj
}

let obj1 = fun('tom')
let obj2 = fun('jerry')
```

### `in`

如果指定的属性在指定的对象或其原型链中，则 **`in` 运算符**返回`true`。

```javascript
let obj = {name: 'tom'}
console.log('name' in obj)
```

## 枚举一个对象的所有属性

从 ECMAScript 5 开始，有三种原生的方法用于列出或枚举对象的属性：

1. `for...in` 循环
   该方法依次访问一个对象及其原型链中所有可枚举的属性。

```javascript
for (variable in object) {
    statement
}
```

2. `Object.keys(o)`
   该方法返回对象 `o` 自身包含（不包括原型中）的所有可枚举属性的名称的字符串数组。

```javascript
Object.keys(obj)
```

3. `Object.getOwnPropertyNames(o)`
   该方法返回对象 `o` 自身包含（不包括原型中）的所有属性(无论是否可枚举)的名称的字符串数组。

```javascript
Object.getOwnPropertyNames(obj)
```

## 原型和原型链

#### 原型

每一个函数都有一个属性叫做`prototype`（显式原型），该属性指向的是一个对象，这个对象就是原型对象

如果函数作为一个构造函数去调用，那么它所创建的实例中会有一个隐含的属性（`__proto__`，隐式原型）指向函数的显式原型（`prototype`）

实例的隐式原型`__prpto__`指向函数的显示原型`prototype`

原型对象就相当于一个公共的区域，可以被所有的该类实例所共享。所有我们可以将实例中共有的属性统一存储到原型中，这样我们只需创建一个属性（方法），即可使所有实例拥有该属性（方法）

#### 原型链

为什么设计原型：继承、让对象的属性和方法实现共享

函数：`prototype`，对象：`__ptoto__`

原型链：每一个对象都有原型`__proto__`，这个原型还有自己的原型，最终形成了原型链，原型链的最顶端是`null`

如果要查找对象的属性或方法，先在对象中查找，如果没有找到，去对象的原型中找，如果还没找到，去对象的原型的原型中去找，直到找不到，返回`undefined`

当访问一个对象的属性时，JS会首先在对象自身中寻找

- 如果找到了，则使用
- 如果没找到，则去对象的原型（`__proto__`）中寻找
- 如果找到了，则使用，没找到继续去原型的原型中寻找，以此类推
- 直到找到`Object`的原型，它是所有原型的原型，它的原型是`null`
- 如果找到`Object`的原型，依然没有则返回`undefined`

> 定义一个类时，如果属性和方法是对象独有的，就直接在构造函数中设置
>
> 如果属性和方法是公共的，每一个对象的值都是相同的，可以通过原型来添加

## 继承

### 原型链继承

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

### 构造函数继承

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

### 组合继承

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

## JS作用域

### 作用域

作用的区域或者作用范围，JS没有块级作用域，只有函数作用域

**全局作用域**：在全局作用域下写的变量：没有区别，都属于window对象的属性

**局部作用域**：在局部作用域写变量

### 作用域链

从当前作用域逐级向上查找

从当前作用域开始找，找不到向外继续找，直到找到window，找不到报错

### 变量提升

JS会提升var声明的变量和函数，移动到当前作用域的开头

**优先级**：变量 > 函数 > 形参 > 变量提升

## JS严格模式-递归-闭包

### 严格模式

`use strict`开启严格模式

使用方式：

1. 针对整个文件，全局严格模式：文件的第一行写：`'use strict'`
2. 针对单个函数，局部严格模式：函数的第一行写：`'use strict'`

作用：

1. 变量声明：var | window ，`num = 10`报错
2. 禁止`this`关键字指向全局对象
3. 函数不能有重名的形参

### 闭包

什么是闭包？

一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。
也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

> 闭包是一个函数加上到创建函数的作用域的连接，闭包“关闭”了函数的自由变量

1. 有两个函数，作用域是连接关系（scope）
2. 变量不自由，会停留在内存中，不会销毁

闭包可以做什么？无意间共享环境

### new操作符具体做了什么？

1. 创建一个对象`new Object()`
2. 原型赋值（指向同一个原型对象）：`对象.__proto__ = Fun.prototype`
3. 改变this指向：`Fun.call(obj)`

## ES6

https://es6.ruanyifeng.com/

### let、var、const

let：声明变量

1. let声明的变量只在代码块内有效
2. 不可以重复声明同一个变量
3. 不存在变量提升

const：常量

1. const声明的变量只在代码块内有效
2. 不可以重复声明同一个变量
3. 不存在变量提升

var和let的区别？

1. var声明的变量没有块作用域，let声明的有块作用域
2. var可以声明同一个变量（覆盖），let不可以
3. var有变量提升，let没有

### 变量的结构赋值

#### 数组的解构赋值

```javascript
// 表示，可以从数组中提取值，按照对应位置，对变量赋值。
let [a, b, c] = [10, 20, 30]
```

#### 对象的结构赋值

```javascript
let {a, b} = {a: 10, b: 20}
```

#### 字符串的结构赋值

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

### Class

基本用法

```javascript
class Person {
    constructor(name) {
        this.name = name
    }

    run() {
        return '这是run方法'
    }
}

const p = new Person('tom')
```

继承

```javascript
class Child extends Parent {
    constructor() {
        super()
    }
}
```

### Promise

Promise是异步编程的一种解决方案

功能：写异步的代码，同步的执行出来，让代码更好的维护易读

同步：只有前一个任务执行完，才能继续执行下一个任务

异步：不进入主线程，进入任务队列，只有任务队列通知主线程，某个异步任务才可以执行，该任务才会进入主线程

1. 每一个Promise实例都有3种状态：初始化(pending)、成功(fulfilled)、失败(rejected)
2. 每一个Promise实例在刚被new出来的那一刻，状态都是初始化(pending)
3. executor函数会接收到2个参数，它们都是函数，分别用形参：resolve、reject接收

### async和await

async修饰的函数返回一个Promise对象，Promise实例的结果由async函数执行的返回值决定

await右侧的表达式一般为Promise实例对象, 但也可以是其它的值

- 如果表达式是Promise实例对象, await后的返回值是promise成功的值
- 如果表达式是其它值, 直接将此值作为await的返回值

await必须写在async函数中, 但async函数中可以没有await

如果await的Promise实例对象失败了, 就会抛出异常, 需要通过try...catch来捕获处理





