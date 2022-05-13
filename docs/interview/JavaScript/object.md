# 八、JS对象

## 001 - 如何理解面向对象？

面向对象程序设计以对象为核心，该方法认为程序由一系列对象组成。类是对现实世界的抽象，包括表示静态属性的数据和对数据的操作，对象是类的实例化。面向对象有三个特点：

**封装性**

- 将描述每一个对象的属性以及其行为的程序代码组装到一起，一并封装在一个有机的实体中，把它们封装在一个“模块”中，也就是一个类中

**继承性**

- 继承性是面向对象技术中的另外一个重要特点，继承在面向对象技术是指一个对象针对于另一个对象的某些独有的特点、能力进行复制或者延续。

**多态性**

- 从宏观的角度来讲，多态性是指在面向对象技术中，当不同的多个对象同时接收到同一个完全相同的消息之后，所表现出来的动作是各不相同的，具有多种形态；
- 从微观的角度来讲，多态性是指在一组对象的一个类中，面向对象技术可以使用相同的调用方式来对相同的函数名进行调用

## 002 - 对象创建的方式有哪些？

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

执行构造函数首先会创建一个空对象，然后将对象的原型指向构造函数的 prototype 属性，然后将执行上下文中的 this 指向这个对象，最后再执行整个函数，给实例对象添加属性和方法，最后再指回这个新对象。

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

## 003 - 对象继承的方式有哪些？

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
