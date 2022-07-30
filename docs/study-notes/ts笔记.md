---
sidebar_position: 6
---

# TypeScript

## 初体验

> 全局安装TypeScript

```shell
npm install -g typescript
```

- ts文件如果书写的是基本的js代码，引入ts文件，浏览器可以正常使用

- 如果使用了ts语法书写代码，那么报错

> 编译：`tsc xxx.ts`

> 运行：`node xxx.js`

## webpack打包ts配置

```javascript title="build/webpack.config.js"
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: './src/main.ts'
    },

    output: {
        path: resolve('dist'),
        filename: '[name].[contenthash:8].js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [resolve('src')]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin({}),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

    devServer: {
        host: 'localhost', // 主机名
        stats: 'errors-only', // 打包日志输出输出错误信息
        port: 8081,
        open: true
    },
}

```

```html title="public/index.html"
<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello TypeScript</title>
</head>
<body>

</body>
</html>

```

```json title="package.json"
{
  "name": "2-webpack-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "ts-loader": "^8.0.12",
    "typescript": "^4.1.3",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.2"
  },
  "dependencies": {
    "-": "0.0.1",
    "D": "^1.0.0",
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^4.5.0"
  }
}

```

## 基本类型

- ts中定义变量的语法：`let/const 变量名:类型 = 值`
- 变量是什么类型，就应该赋什么类型的值

1. boolean

    ```typescript
    let flag: boolean = true
    flag = false
    ```

2. number

    ```typescript
    let num: number = 10 // 十进制
    let num1: number = 0b1010 // 二进制
    let num2: number = 0o12 // 八进制
    let num3: number = 0xa // 十六进制
    ```

3. string

    ```typescript
    let str: string = 'hello'
    ```

4. undefined 和 null

   可以把`null`或`undefined`赋值给number类型的变量，但是需要关闭`tsconfig.json`文件的严格模式

    ```typescript
    let u: undefined = undefined
    let n: null = null
    ```

5. 数组

   方式一：`let/const 变量名: 类型[] = [值1,值2,...]`

    ```typescript
    let arr: number[] = [1, 2, 3]
    ```

   方式二：使用数组泛型 `let/const 变量名: Array<类型> = [值1,值2,...]`

    ```typescript
    let arr1: Array<number> = [10, 20, 30]
    ```

6. 元组（Tuple）

   元组类型允许表示一个已知元素数量和类型的数组，`各元素的类型不必相同`。 比如，你可以定义一对值分别为 `number` 和 `string`
   类型的元组。

    ```typescript
    let t1: [number, string] = [1, 'a']
    ```

7. 枚举

   `enum` 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以`为一组数值赋予友好的名字`

    - 把具有特定个数，且值是固定的情况的数据，使用枚举类型的方式定义出来，
    - 枚举类型中的数据，可以是中文
    - 枚举类型中的值是从0开始的，依次+1
    - 枚举的值对应的数字值是可以改变的
    - 枚举的值是可以通过索引（像数组中索引的方式来使用，但不是索引）的方式来访问的

    ```typescript
    enum Color {
        red,
        green,
        blue
    }

    let c: Color = Color.red // 0
    console.log(Color[0]) // red
    ```

8. any

   `any`类型代表任意类型

    ```typescript
    let s1: any = 10
    s1 = 'hello'
    // 数组中的数据可以是任意类型
    let arr2: any = [10, 'tom', true]
    ```

9. void

   某种程度上来说，`void` 类型像是与 `any` 类型相反，它`表示没有任何类型`。
   当一个函数没有返回值时，你通常会见到其返回值类型是 `void`

   可以赋值为`null`或者`undefined`，但是需要关闭`tsconfig.json`文件的严格模式

    ```typescript
    let v: void = undefined
    let v1: void = null
    ```

   通常用在函数的返回值中，标识该函数没有返回值，或者说该函数的返回值可以是null或undefined

    ```typescript
    function showTime(): void {
        console.log(Date.now())
        // 以下都可以
        // return
        // return undefined
        // return null // 需要关闭`tsconfig.json`文件的严格模式
    }

    console.log(showTime()) // undefined
    ```

10. object

    `object` 表示非原始类型，也就是除 `number`，`string`，`boolean`之外的类型。

    ```typescript
    let obj: object = {name: 'tom', age: 23}
    ```

    使用 `object` 类型，就可以更好地表示像 `Object.create` 这样的 `API`。例如：

    ```typescript
    function fn2(obj: object): object {
        console.log('fn2()', obj)
        return {}
        // return undefined
        // return null
    }

    console.log(fn2(new String('abc')))
    console.log(fn2(String))
    ```

11. 联合类型

    联合类型（Union Types）表示取值可以为多种类型中的一种

    ```typescript
    let t: number | string = 100
    t = 'hello'
    ```

12. 类型断言

    通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
    它没有运行时的影响，只是在编译阶段起作用。 TypeScript
    会假设你，程序员，已经进行了必须的检查。

    语法：方式一：`<类型>值`；方式二：`值 as 类型`

    > 例：定义一个一个函数得到一个数字或字符串值的长度

    ```typescript
    function getLength(str: string | number): number {
        // 如果str是string类型的，那么久str就会自动的转成对象的方式来调用length属性使用（基本包装类型）
        // 如果str是number类型的，那么number是不能直接调用length属性使用
        // 写法一：<string> str 把str变量的类型强制的转成string类型的数据
        // 写法二：(str as string) 转换类型
        if ((<string>str).length) { // 字符串类型的数据
            // return (<string>str).length
            return (str as string).length
        } else { // number类型的数据
            return str.toString().length
        }
    }
    console.log(getLength(100))
    console.log(getLength('hello'))
    ```

13. 类型推断

    TS会在没有明确的指定类型的时候推测出一个类型

    有下面两种情况：

    ```typescript
    // 情况一：定义变量时赋值了, 推断为对应的类型
    let num = 10 // number
    // 情况二： 定义变量时没有赋值, 推断为any类型
    let a // any类型
    a = 100
    a = 'hello'
    ```

## 接口

TypeScript
的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。`接口是对象的状态(属性)和行为(方法)的抽象(描述)`

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型

### 接口类型的对象

- 多了或者少了属性是不允许的

- 可选属性: ?

- 只读属性: readonly

例子：需求：创建人的对象, 需要对人的属性进行一定的约束

1. id是number类型, 必须有, 只读的
2. name是string类型, 必须有
3. age是number类型, 必须有
4. gender是string类型, 可以没有

```typescript
// 定义一个接口
interface Person {
    readonly id: number, // readonly 只读
    name: string,
    age: number,
    gender?: string // ? 可选属性
}

// 定义一个对象
// 类型检查器会查看对象内部的属性是否与Person接口描述一致, 如果不一致就会提示类型错误
let person: Person = {
    id: 1,
    name: 'tom',
    age: 23,
    // gender: '男'
}
```

### 函数类型

接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。

为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```typescript
// 接口可以描述函数类型(参数的类型与返回的类型)
interface Search {
    // 限制某个函数的类型
    (x: number, y: string): string
}

// 定义一个函数
let fn: Search = function (x: number, y: string): string {
    return x + y
}
fn(1, 'a')
```

### 类类型

#### 类实现接口

与 C# 或 Java 里接口的基本作用一样，TypeScript 也能够用它来明确的强制一个类去符合某种契约。

```typescript
// 定义一个接口
interface Fly {
    fly(str: string): void
}

// 定义一个类
// 理解：当前User类的类型是Fly类型的/接口限定了当前这个类中必须要有接口中定义的内容
class User implements Fly {
    // 定义属性
    name: string
    age: number

    // 构造方法（构造函数/构造器）
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 定义方法
    sayHi() {
        console.log(`我是${this.name}，今年${this.age}岁了`)
    }

    // 实现接口中定义的方法
    fly(str: string): void {
        console.log(str)
    }
}

// 实例化对象
let u: User = new User('tom', 34)
u.sayHi()
u.fly('起飞')
```

#### 类可以实现多个接口

```typescript
// 定义接口
interface Fly {
    fly(str: string): void
}

interface Swim {
    swim(str: string): void
}

// 定义一个类
class User2 implements Fly, Swim {
    name: string

    constructor(name: string) {
        this.name = name
    }

    // 实现的Fly接口中的方法
    fly(str: string): void {
        console.log('起飞了', str)
    }

    // 实现的Swim接口中的方法
    swim(str: string): void {
        console.log('游泳去了', str)
    }
}

// 实例化对象
let u2: User2 = new User2('user')
u2.fly('真好')
u2.swim('一起啊')
```

#### 接口继承接口

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```typescript
// 定义接口
interface Fly1 {
    fly(): void
}

interface Swim1 {
    swim(): void
}

// 新的接口，继承上面两个接口
interface FlyAndSwim extends Fly1, Swim1 {
}

// 定义一个类，可以同时实现多个接口
class User3 implements FlyAndSwim {
    name: string

    constructor(name: string) {
        this.name = name
    }

    fly(): void {
        console.log('起飞')
    }

    swim(): void {
        console.log('游泳')
    }
}

// 实例化对象
let u3: User3 = new User3('tom')
u3.fly()
u3.swim()
```

## 类

对于传统的 JavaScript 程序我们会使用`函数`和`基于原型的继承`
来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是`基于类的继承`并且对象是由类构建出来的。
从 ECMAScript
2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的
JavaScript
可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本

### 基本示例

```typescript
// 定义一个普通的类
class Product {
    // 定义属性
    name: string
    color: string
    price: number

    // 构造函数/构造器：为了实例化对象的时候，可以直接把对象中的属性进行初始化的操作
    constructor(name: string, color: string, price: number) {
        this.name = name
        this.color = color
        this.price = price
    }

    //定义方法
    showProduct(): void {
        console.log(`当前的商品是${this.name}，颜色是${this.color}，价格是${this.price}`)
    }
}

// 实例化对象
let pro: Product = new Product('手机', 'red', 1999)
pro.showProduct()
```

### 继承

在 TypeScript 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。

```typescript
// 定义一个父类（基类）
class Person {
    // 属性
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    // 方法
    sayHi(): void {
        console.log('你好啊')
    }
}

// 定义一个学生类（派生类）
class Student extends Person {
    // 属性
    score: number

    constructor(name: string, age: number, score: number) {
        // 使用父类中的构造函数来进行属性的初始化操作
        super(name, age)
        this.score = score
    }

    // 子类中可以定义和父类中的方法同名的方法，内部可以重写父类方法中内容
    sayHi() {
        // 子类的方法中调用父类的方法
        super.sayHi();
        console.log('我是学生')
    }

    // 自己的方法
    study() {
        console.log('好好学习，天天向上！')
    }
}

// 实例化对象
const stu: Student = new Student('tom', 23, 100)
stu.sayHi()
stu.study()
```

### 多态

同一个行为针对不同的对象，产生的结果是不同的

父类型引用指向子类型的实例 ==> 多态

```typescript
// 父类 Animal
class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    eat() {
        console.log('我喜欢吃好吃的')
    }
}

// 子类 Dog
class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    // 自己的方法
    play() {
        console.log('玩去了')
    }

    // 重写父类中的方法
    eat() {
        console.log('我喜欢吃大骨头')
    }
}

// 子类 Pig
class Pig extends Animal {
    constructor(name: string) {
        super(name);
    }

    // 自己的方法
    sleep() {
        console.log('睡觉了')
    }

    eat() {
        console.log('我喜欢吃泥巴')
    }
}

// 子类 Horse
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    // 自己的方法
    run() {
        console.log('奔跑吧')
    }

    eat() {
        console.log('我喜欢吃小草')
    }
}

// 定义对象
const ani: Animal = new Animal('动物')
const dog: Animal = new Dog('小黑')
const pig: Animal = new Pig('佩奇')
const horse: Animal = new Horse('小白龙')

// 工厂的设计模式的体现
// 多态展示的效果
// 定义一个数组，里面用来存储Animal类型的对象数据
const arr: Animal[] = [dog, pig, horse]

function showEat(ani: Animal) {
    ani.eat()
}

// 循环遍历数组
for (let i = 0; i < arr.length; i++) {
    showEat(arr[i])
}
// 我喜欢吃大骨头
// 我喜欢吃泥巴
// 我喜欢吃小草
```

### 权限修饰符

#### public

在 TypeScript 里，成员都默认为 `public`。也可以明确的将一个成员标记成 `public`。

#### private

当成员被标记成 `private` 时，它就不能在声明它的类的外部访问。

#### protected

`protected` 修饰符与 `private` 修饰符的行为很相似，但有一点不同，`protected`成员在派生类中仍然可以访问。

#### readonly

你可以使用 `readonly` 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```typescript
// 类中成员的修饰符（属性和方法）
class Animal2 {
    // 声明的属性，默认为public，所以任何地方都可以访问这个属性
    // public name: string // public 任何地方都可以以访问
    // private name: string // private 子类中和外部不可以访问，只能在本类中使用
    // protected name: string // protected 子类中可以访问，外部不能访问
    readonly name: string // readonly 表示属性是只读的，不能修改

    constructor(name: string) {
        this.name = name
    }

    sayHi(msg: string) {
        console.log(msg)
    }
}

class Dog2 extends Animal2 {
    constructor(name: string) {
        super(name);
    }

    eat(msg: string) {
        console.log(msg, this.name)
    }
}

// 子类的子类
class Husky extends Dog2 {
    constructor(name: string) {
        super(name);
    }

    play(msg: string) {
        console.log(msg, this.name)
    }
}

const ani2: Animal2 = new Animal2('动物2')
console.log(ani2.name)

const dog2: Dog2 = new Dog2('阿黄')
dog2.eat('骨头')

const husky: Husky = new Husky('大白')
husky.eat('沙发')
```

### 存取器

`TypeScript` 支持通过 `getters/setters` 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

如果某个属性成员只有get方法，则只能读取，不能修改。

如果某个属性成员只有set方法，则只能修改，读取不报错，结果为undefined。

```typescript
class User {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    // 存取器--针对姓名
    get fullName() {
        console.log('get方法执行了')
        return this.firstName + '-' + this.lastName
    }

    set fullName(value: string) {
        console.log('set方法执行了')
        const names = value.split('-')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

const user: User = new User('东方', '不败')
// 显示姓名
console.log(user.fullName)
// 设置姓名
user.fullName = '诸葛-孔明'
console.log(user.firstName)
console.log(user.lastName)
```

### 静态属性

静态属性，是类对象的属性。

非静态属性，是类的实例化对象的属性。

```typescript
class User {
    firstName: string
    lastName: string
    // 属性可以设置默认值
    // 属性前面使用了static进行修饰，就是静态属性
    static gender: string = '男'

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user: User = new User('诸葛', '孔明')

console.log(user)
console.log(User.gender)
```

### 抽象类

抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。 `abstract`
关键字是用于定义抽象类和在抽象类内部定义抽象方法。

- 不能创建实例对象，只有实现类才能创建实例

- 可以包含未实现的抽象方法
- 子类是一个抽象类，继承自一个抽象类的父类，那么该子类可以不用实现这个父类中的抽象成员

```typescript
abstract class Animal {
    // 抽象方法
    abstract eat(): void

    // 方法中有具体的代码，或者方法体，那么该方法就有了具体的实现
    run(): void {
        console.log('跑')
    }
}

class Dog extends Animal {
    eat(): void {
        console.log('吃骨头')
    }
}

const dog: Dog = new Dog()
dog.run()
dog.eat()
```

## 函数

函数是 JavaScript 应用程序的基础，它帮助你实现抽象层，模拟类，信息隐藏和模块。在 TypeScript
里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义行为的地方。TypeScript 为 JavaScript
函数添加了额外的功能，让我们可以更容易地使用。

和 JavaScript 一样，TypeScript 函数可以创建有名字的函数和匿名函数。你可以随意选择适合应用程序的方式，不论是定义一系列 API
函数还是只使用一次的函数。

### 函数类型

我们可以给每个参数添加类型之后再为函数本身添加返回值类型。TypeScript 能够根据返回语句自动推断出返回值类型。

```typescript
let add: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}
```

### 可选参数和默认参数

TypeScript 里的每个函数参数都是必须的。 这不是指不能传递 `null` 或 `undefined`
作为参数，而是说编译器检查用户是否为每个参数都传入了值。编译器还会假设只有这些参数会被传递进函数。
简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。

JavaScript 里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是 `undefined`。 在TypeScript
里我们可以在参数名旁使用 `?` 实现可选参数的功能。

在 TypeScript 里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是 `undefined` 时。 它们叫做有默认初始化值的参数。

```typescript
function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
        return firstName + '-' + lastName
    } else {
        return firstName
    }
}

console.log(buildName('C', 'D'))
console.log(buildName('C'))
console.log(buildName())
```

### 剩余参数

必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。 有时，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。
在 JavaScript 里，你可以使用 `arguments` 来访问所有传入的参数。

在 TypeScript 里，你可以把所有参数收集到一个变量里：
剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ `...`
）后面给定的名字，你可以在函数体内使用这个数组。

```typescript
function info(x: string, ...args: string[]) {
    console.log(x, args)
}

info('abc', 'c', 'b', 'a')
```

### 函数重载

函数重载：函数名相同，而形参不同的多个函数
在JS中，由于弱类型的特点和形参与实参可以不匹配，是没有函数重载这一说的。但在TS中，与其它面向对象的语言(如Java)就存在此语法

```typescript
// 需求: 有一个add函数，可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加
// 重载函数声明
function add(x: number, y: number): number
function add(x: string, y: string): string

// 定义函数实现
function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'string' && typeof y === 'string') {
        return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
        return x + y
    }
}

console.log(add(1, 2));
console.log(add('a', 'b'));
```

## 泛型

指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。

```typescript
// 在定义函数或类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a: T): T {
    return a
}

// 直接调用具有泛型的函数
fn(10) // 不指定泛型，TS可以自动对类型进行推断
fn<string>('hello') // 指定泛型

// 定义多个泛型参数的函数
function f1<T, K, V>(x: T, y: K, z: V): void {
    let result = x + '-' + y + '-' + z
    console.log(result)
}

f1<string, number, boolean>('a', 10, true)
```

### 泛型接口

在定义接口时，为接口中的属性或方法定义泛型类型

在使用接口时，再指定具体的泛型类型

> 需求：创建对象的时候，调用对应的方法，可以实现某一类的信息的添加或查询操作

```typescript
// 定义一个泛型接口，用来约束工具类中的方法或者数据的方式
interface BaseCRUD<T> {
    // 限定存储数据的容器的类型
    data: T[]
    // 增加数据的方法
    add: (t: T) => number
    // 查询数据的方法
    getById: (id: number) => T
}

class User {
    id: number = 1
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class UserCRUD implements BaseCRUD<User> {
    // 定义属性
    data: User[] = [] // 用来存储用户对象信息
    // 添加用户对象的方法
    add(user: User): number {
        const obj = {
            id: Date.now() + Math.random(),
            name: user.name,
            age: user.age
        }
        this.data.push(obj) // 把当前的用户对象保存到容器中
        return obj.id // 返回用户的id
    }

    // 根据id返回对应的用户对象
    getById(id: number): User {
        return <User>this.data.find(item => item.id === id) || {}
    }
}

// 实例化工具类的对象
const userCRUD: UserCRUD = new UserCRUD()
let userId: number = userCRUD.add(new User('tom', 23))
userCRUD.add(new User('tom2', 12))
userCRUD.add(new User('tom3', 35))
console.log(userCRUD.data)
const user = userCRUD.getById(userId)
console.log(user)
```

### 泛型类

在定义类时，为类中的属性或方法定义泛型类型，在创建类的实例时，再指定特定的泛型类型

```typescript
class Person<T> {
    name: T

    constructor(name: T) {
        this.name = name
    }
}

const p = new Person('tom')
console.log(p)
const p1 = new Person<number>(123)
console.log(p1)
```

### 泛型约束

如果我们直接对一个泛型参数取 `length` 属性，会报错，因为这个泛型根本就不知道它有这个属性，我们可以使用泛型约束来实现

```typescript
interface Length {
    length: number
}

// 指定泛型约束
function getLength<T extends Length>(t: T): void {
    console.log(t.length)
}

getLength('abc')
// getLength(123) // error number没有length属性
```

