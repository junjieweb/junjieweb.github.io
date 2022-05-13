# ES6 新特性

**`ECMAScript`** 是由Ecma国际通过ECMA-262标准化的脚本程序设计语言。

## `let`关键字

`let` 关键字用来声明变量，使用`let` 声明的变量有几个特点：

1. 不允许重复声明
2. 块级作用域
3. 不存在变量提升
4. 不影响作用域链

## `const` 关键字

`const` 关键字用来声明常量，`const` 声明有以下特点：

1. 声明必须要赋初始值
2. 常量的名称一般大写
3. 不能修改常量的值
4. 不允许重复声明
5. 块级作用域

> 注意: 对象属性修改和数组元素变化不会出发 `const` 错误

应用场景：声明对象类型使用 `const`，非对象类型声明选择 `let`

## 变量的解构赋值

ES6允许按照一定模式从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

```javascript
//数组的解构赋值
const arr = ['宋小宝', '刘能', '赵四', '小沈阳'];
let [song, liu, zhao, xiao] = arr;
console.log(song, liu, zhao, xiao);
//对象的解构赋值
const star = {
    name: '于谦',
    tags: ['抽烟', '喝酒', '烫头'],
    say: function () {
        console.log('我可以说相声');
    }
};
let {name, tags: [chou, he, tang], say} = star;
```

> 注意：频繁使用对象方法、数组元素，就可以使用解构赋值形式

## 模板字符串

**模板字符串（template string）** 是增强版的字符串，用反引号（`）标识，特点：

1. 字符串中可以出现换行符
2. 可以使用 `${xxx}` 形式输出变量

```javascript
//直接使用换行符
let str = `<ul>
            <li>沈腾</li>
            <li>玛丽</li>
            <li>艾伦</li>
            <li>魏翔</li>
        </ul>`;
//字符串中进行变量拼接
let star = '魏翔';
let str2 = `我特别喜欢${star}`;
```

> 注意：当遇到字符串与变量拼接的情况使用模板字符串

## 简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```javascript
let name = 'Tom';
let pos = '北京';
let change = function () {
    console.log('改变');
};
const i = {
    name,
    pos,
    change,
    improve() {
        console.log('提升');
    }
}
```

## 箭头函数

ES6 允许使用「箭头」（=>）定义函数。

```javascript
//1. 声明格式
let add = (a, b, c) => {
    return a + b + c;
};
//2. 函数调用
console.log(add(1, 2, 3));
console.log(add.call({}, 1, 2, 3));
console.log(add.apply({}, [1, 2, 3]));
```

**箭头函数的注意点：**

- 如果形参只有一个，则小括号可以省略
- 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果(如果不写花括号的话,`return` 也不能写)
- 箭头函数 `this` 指向声明时所在作用域下 `this` 的值
- 箭头函数不能作为构造函数实例化
- 箭头函数不能使用 `arguments`

> 注意：箭头函数不会更改this指向，所以非常适合设置与this无关的回调，比如数组回调、定时器回调，不适合事件回调与对象方法。

## `rest` 参数

ES6引入 `rest` 参数，用于获取函数的实参，用来代替 `arguments`

```javascript
function main(...args) {
    //1、使用arguments获取实参
    console.log(arguments);
    //2、rest参数
    console.log(args);
}

main(12, 23, 2, 2, 4, 12);
```

> 注意：`rest` 参数非常适合不定个数参数函数的场景

## `spread` 扩展运算符

扩展运算符（spread）也是三个点（`...`）。它好比 `rest` 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

```javascript
//对象的展开
const skillOne = {
    q: '天音波'
};
const skillTwo = {
    w: '金钟罩'
};
const skillThree = {
    e: '天雷破'
};
const skillFour = {
    r: '猛龙摆尾'
};
const mangseng = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};
console.log(mangseng);
```

## `Symbol`

ES6 引入了一种新的原始数据类型 `Symbol`，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。

**特点**

1. Symbol的值是唯一的，用来解决命名冲突的问题
2. Symbol值不能与其他数据进行运算
3. Symbol定义的对象属性不能使用`for...in`循环遍历，但是可以使用`Reflect.ownKeys`来获取对象的所有键名

> 注: Symbol类型唯一合理的用法是用变量存储 `symbol` 的值，然后使用存储的值创建对象属性

#### Symbol内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了11个内置的Symbol值，指向语言内部使用的方法。

| 方法                        | 作用                                                                               |
|---------------------------|----------------------------------------------------------------------------------|
| Symbol.hasInstance        | 当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法                                        |
| Symbol.isConcatSpreadable | 对象的Symbol.isConcatSpreadable属性等于的是一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。 |
| Symbol.species            | 创建衍生对象时，会使用该属性                                                                   |
| Symbol.match              | 当执行str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。                                 |
| Symbol.replace            | 当该对象被str.replace(myObject)方法调用时，会返回该方法的返回值。                                      |
| Symbol.search             | 当该对象被str. search (myObject)方法调用时，会返回该方法的返回值。                                     |
| Symbol.split              | 当该对象被str. split (myObject)方法调用时，会返回该方法的返回值。                                      |
| Symbol.iterator           | 对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器                                 |
| Symbol.toPrimitive        | 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。                                             |
| Symbol. toStringTag       | 在该对象上面调用toString方法时，返回该方法的返回值                                                    |
| Symbol. unscopables       | 该对象指定了使用with关键字时，哪些属性会被with环境排除。                                                 |

## 迭代器

迭代器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 `Iterator` 接口，就可以完成遍历操作。

ES6创造了一种新的遍历命令`for...of`循环，`Iterator`接口主要供`for...of`消费

原生具备iterator接口的数据(可用`for...of`遍历)

- Array
- Arguments
- Set
- Map
- String
- TypedArray
- NodeList

**工作原理**

- 创建一个指针对象，指向当前数据结构的起始位置
- 第一次调用对象的next方法，指针自动指向数据结构的第一个成员
- 接下来不断调用next方法，指针一直往后移动，直到指向最后一个成员
- 每调用next方法返回一个包含value和done属性的对象

> 注: 需要自定义遍历数据的时候，要想到迭代器。

## `Promise`

Promise是ES6引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

## `Set`

ES6 提供了新的数据结构 Set（集合）。它类似于数组，『但成员的值都是唯一』的

集合实现了`iterator`接口，所以可以使用『扩展运算符』和`for...of`进行遍历

**集合的属性和方法**

- `size` 返回集合的元素个数
- `add` 增加一个新元素，返回当前集合
- `delete` 删除元素，返回`boolean` 值
- `has` 检测集合中是否包含某个元素，返回`boolean`值
- `clear` 清空集合，返回`undefined`

## `Map`

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。

Map也实现了iterator接口，所以可以使用『扩展运算符』和`for...of`进行遍历。

**Map的属性和方法**

- `size` 返回Map的元素个数
- `set` 增加一个新元素，返回当前Map
- `get` 返回键名对象的键值
- `delete` 删除某个键
- `has` 检测Map中是否包含某个元素，返回`boolean`值
- `clear` 清空集合，返回`undefined`

## class类

ES6 提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。

通过class关键字，可以定义类。基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

**知识点**

- `class`声明类
- `constructor` 定义构造函数初始化
- `extends` 继承父类
- `super` 调用父级构造方法
- `static` 定义静态方法和属性
- 父类方法可以重写
- `get` 和 `set` 方法
