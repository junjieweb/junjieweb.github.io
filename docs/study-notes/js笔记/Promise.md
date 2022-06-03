# Promise

## 前置知识

### 回调函数的分类

我们定义的，我们没有调用，最终执行了

**同步的回调函数：** 立即在主线程上执行，不会放入回调队列中。例：数组遍历相关的回调函数。

**异步的回调函数：** 不会立即执行，会放入回调队列中以后执行。例：定时器回调/Ajax回调

### js中的error

**错误的类型：**

- Error: 所有错误的父类型
- ReferenceError: 引用的变量不存在
- TypeError: 数据类型不正确
- RangeError: 数据值不在其所允许的范围内--死循环
- SyntaxError: 语法错误

**错误处理**

- 捕获错误: `try{}catch(){}`
- 抛出错误: `throw error`

**错误对象**

- `message` 属性: 错误相关信息
- `stack` 属性: 记录信息

## Promise 是什么？

**抽象表达**

- Promise是一门新的技术(ES6提出的)
- Promise是JS中异步编程的新方案(旧方案是谁?---纯回调)。

**具体表达**

- 从语法上来说: Promise是一个内置构造函数。
- 从功能上来说: Promise的实例对象可以用来封装一个异步操作，并可以获取其成功/失败的


1. Promise不是回调，是一个内置的构造函数，是程序员自己new调用的。
2. `new Promise`的时候，要传入一个回调函数，它是同步的回调，会立即在主线程上执行，它被称为 `executor` 函数
3. 每一个Promise实例都有3种状态：初始化(`pending`)、成功(`fulfilled`)、失败(`rejected`)
4. 每一个Promise实例在刚被new出来的那一刻，状态都是初始化(`pending`)
5. `executor` 函数会接收到2个参数，它们都是函数，分别用形参：`resolve`、`reject` 接收
    1. 调用`resolve`函数会：让Promise实例状态变为成功(`fulfilled`)，可以指定成功的value。
    2. 调用`reject`函数会：让Promise实例状态变为失败(`rejected`)，可以指定失败的reason。

## 基本使用

**重要语法：**`new Promise(executor)`构造函数 `Promise.prototype.then`方法

**基本编码流程**

1. 创建Promise的实例对象(pending状态), 传入executor函数
2. 在executor中启动异步任务（定时器、ajax请求）
3. 根据异步任务的结果，做不同处理：
    1. 如果异步任务成功了：
       我们调用resolve(value), 让Promise实例对象状态变为成功(fulfilled),同时指定成功的value
    2. 如果异步任务失败了：
       我们调用reject(reason), 让Promise实例对象状态变为失败(rejected),同时指定失败的reason
4. 通过then方法为Promise的实例指定成功、失败的回调函数，来获取成功的value、失败的reason
   注意：then方法所指定的：成功的回调、失败的回调，都是异步的回调。

**关于状态的注意点：**

1. 三个状态:
    1. pending: 未确定的------初始状态
    2. fulfilled: 成功的------调用resolve()后的状态
    3. rejected: 失败的-------调用reject()后的状态
2. 两种状态改变 `pending ==> fulfilled` `pending ==> rejected`
3. 状态只能改变一次！！

一个promise指定多个成功/失败回调函数, 都会调用吗?

```javascript
const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject('请求出错');
            }
        }
    }

    xhr.open('GET', 'https://api.apiopen.top/getJoke');
    xhr.responseType = 'json';
    xhr.send();
});

p.then(
    (value) => {
        console.log(value);
    },//成功的回调--异步
    (reason) => {
        console.log(reason);
    }//失败的回调--异步
);

console.log('hello');
```

## API

### Promise构造函数

`new Promise (executor) {}`

- `executor` 函数: 是**同步**执行的，`(resolve, reject) => {}`
- `resolve` 函数: 调用`resolve`将Promise实例内部状态改为**成功(fulfilled)**。
- `reject` 函数: 调用`reject`将Promise实例内部状态改为**失败(rejected)**。

:::tip说明
executor函数会在Promise内部立即同步调用,异步代码放在executor函数中。
:::

### Promise.prototype.then方法

`Promise实例.then(onFulfilled,onRejected)`

- `onFulfilled`: 成功的回调函数 `(value) => {}`
- `onRejected`: 失败的回调函数 `(reason) => {}`

:::tip特别注意(难点)
then方法会返回一个新的Promise实例对象
:::

```javascript
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);
    }, 1000)
})
const x = p.then(
    value => {
        console.log('成功了', value)
    },
    reason => {
        console.log('失败了', reason)
    }
)
console.log(x); // Promise {<pending>}
```

### Promise.prototype.catch方法

`Promise实例.catch(onRejected)`

`onRejected`: 失败的回调函数 `(reason) => {}`

:::tip说明
catch方法是then方法的语法糖, 相当于: `then(undefined, onRejected)`
:::

```javascript
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(-1)
    }, 1000)
})
p.then(
    value => {
        console.log('成功了', value)
    },
    reason => {
        console.log('失败了1', reason)
    }
)
p.catch(
    reason => {
        console.log('失败了2', reason)
    }
)
```

### Promise.resolve方法

`Promise.resolve(value)`

用于快速返回一个状态为 `fulfilled` 或 `rejected` 的Promise实例对象

:::tip
value的值可能是：(1)非Promise值  (2)Promise值
:::

```javascript
const p0 = Promise.reject(-100);
const p = Promise.resolve(p0);
p.then(
    value => {
        console.log('成功了', value)
    },
    reason => {
        console.log('失败了', reason)
    }
)
```

### Promise.reject方法

`Promise.reject方法(reason)`

用于快速返回一个状态必为 `rejected` 的Promise实例对象

```javascript
const p0 = Promise.resolve(100);
const p = Promise.reject(p0);
p.then(
    value => {
        console.log('成功了', value)
    },
    reason => {
        console.log('失败了', reason)
    }
)
```

### Promise.all方法

`Promise.all(promiseArr)`

`promiseArr`: 包含n个Promise实例的数组

返回一个新的Promise实例, **只有所有的promise都成功才成功, 只要有一个失败了就直接失败**。

```javascript
const p1 = Promise.resolve('a');
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('b')
    }, 500)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('c')
    }, 2000)
})

const x = Promise.all([p1, p2, p3]);
x.then(
    value => {
        console.log('成功了', value)
    },
    reason => {
        console.log('失败了', reason)
    }
)
```

### Promise.race方法

`Promise.race(promiseArr)`

`promiseArr`: 包含n个Promise实例的数组

返回一个新的Promise实例, 成功还是很失败？以最先出结果的promise为准。

```javascript
const p1 = Promise.resolve('a');
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('b')
    }, 500)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('c')
    }, 2000)
})

const x = Promise.race([p1, p2, p3]);
x.then(
    value => {
        console.log('成功了', value)
    },
    reason => {
        console.log('失败了', reason)
    }
)
```

