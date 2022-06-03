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

## Promise关键问题

### 1. 如何改变一个Promise实例的状态?

- 执行`resolve(value)`: 如果当前是pending就会变为fulfilled
- 执行`reject(reason)`: 如果当前是pending就会变为rejected
- 执行器函数(executor)抛出异常: 如果当前是pending就会变为rejected

### 2. 改变Promise实例的状态和指定回调函数谁先谁后?

1. 都有可能, 正常情况下是先指定回调再改变状态, 但也可以先改状态再指定回调
2. 如何先改状态再指定回调? 延迟一会再调用`then()`
3. Promise实例什么时候才能得到数据?
    - 如果先指定的回调, 那当状态发生改变时, 回调函数就会调用, 得到数据
    - 如果先改变的状态, 那当指定回调时, 回调函数就会调用, 得到数据

```javascript
//先指定回调，后改变状态（最常见）
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a');
    }, 1000);
});
p.then(
    value => {
        console.log('成功了', value);
    },
    reason => {
        console.log('失败了', reason);
    }
)
```

```javascript
//先改变状态，后指定回调
const p = new Promise((resolve, reject) => {
    resolve('a');
});
setTimeout(() => {
    p.then(
        value => {
            console.log('成功了', value);
        },
        reason => {
            console.log('失败了', reason);
        }
    )
}, 2000);
```

### 3. Promise实例.then()返回的是一个【新的Promise实例】，它的值和状态由什么决定?

**简单表达:** 由then()所指定的回调函数执行的结果决定

**详细表达:**

1. 如果then所指定的回调返回的是非Promise值a:
   那么【新Promise实例】状态为：成功(fulfilled), 成功的value为a
2. 如果then所指定的回调返回的是一个Promise实例p:
   那么【新Promise实例】的状态、值，都与p一致
3. 如果then所指定的回调抛出异常:
   那么【新Promise实例】状态为rejected, reason为抛出的那个异常

```javascript
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a');
    }, 100);
});
p.then(
    value => {
        console.log('成功了1', value);
        return Promise.reject('a');
    },
    reason => {
        console.log('失败了1', reason);
    }
).then(
    value => {
        console.log('成功了2', value);
        return true;
    },
    reason => {
        console.log('失败了2', reason);
        return 100;
    }
).then(
    value => {
        console.log('成功了3', value);
        throw 900;
    },
    reason => {
        console.log('失败了3', reason);
        return false;
    }
).then(
    value => {
        console.log('成功了4', value);
        return -100;
    },
    reason => {
        console.log('失败了4', reason);
    }
)
```

### 4. Promise如何串连多个异步任务?

通过then的链式调用

```javascript
    function sendAjax(url, data) {
    return new Promise((resolve, reject) => {
        //实例xhr
        const xhr = new XMLHttpRequest();
        //绑定监听
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject('请求出错了');
                }
            }
        }
        //整理参数
        let str = '';
        for (let key in data) {
            str += `${key}=${data[key]}&`;
        }
        str = str.slice(0, -1);

        xhr.open('GET', url + '?' + str);
        xhr.responseType = 'json';
        xhr.send();
    });
}

//发送第一次请求
sendAjax('https://api.apiopen.top/getJoke', {page: 1})
    .then(
        value => {
            console.log('第1次请求成功了', value);
            //发送第二次请求
            return sendAjax('https://api.apiopen.top/getJoke', {page: 1});
        },
        reason => {
            console.log('第1次请求失败了', reason);
        }
    )
    .then(
        value => {
            console.log('第2次请求成功了', value);
            //发送第三次请求
            return sendAjax('https://api.apiopen.top/getJoke', {page: 1});
        },
        reason => {
            console.log('第2次请求失败了', reason);
        }
    )
    .then(
        value => {
            console.log('第3次请求成功了', value);
        },
        reason => {
            console.log('第3次请求失败了', reason);
        }
    )
```

### 5. 中断promise链

当使用promise的then链式调用时，在中间中断，不再调用后面的回调函数

办法：在失败的回调函数中返回一个pending状态的Promise实例

```javascript
return new Promise(() => {
});
```

### 6. promise错误穿透

当使用promise的then链式调用时, 可以在最后用catch指定一个失败的回调,

前面任何操作出了错误, 都会传到最后失败的回调中处理了

:::tip
如果不存在then的链式调用，就不需要考虑then的错误穿透。
:::

```javascript
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(-1)
    }, 500)
})

p.then(
    value => {
        console.log('成功了' + value)
        return 'b';
    },
    reason => {
        throw reason
    }//底层帮我们补上的这个失败的回调
).then(
    value => {
        console.log('成功了' + value)
        return Promise.reject(-3)
    },
    reason => {
        throw reason
    }//底层帮我们补上的这个失败的回调
).catch(
    reason => {
        console.log('失败了' + reason)
    }
)
```

## Promise的优势

1. 指定回调函数的方式更加灵活:
    - 旧的:必须在启动异步任务前指定
    - promise:启动异步任务=>返回promise对象=>给promise对象绑定回调函数(甚至可以在异步任务结束后指定)

2. 支持链式调用,可以解决回调地狱问题
    - 什么是回调地狱：回调函数嵌套调用,外部回调函数异步执行的结果是嵌套的回调函数执行的条件
    - 回调地狱的弊病：代码不便于阅读、不便于异常的处理
    - 一个不是很优秀的解决方案：then的链式调用
    - 终极解决方案：`async/await`（底层实际上依然使用then的链式调用）

## `async` 与 `await`

**`async` 修饰的函数**

- 函数的返回值为promise对象
- Promise实例的结果由async函数执行的返回值决定

**`await` 表达式** await右侧的表达式一般为Promise实例对象, 但也可以是其它的值

- 如果表达式是Promise实例对象, await后的返回值是promise成功的值
- 如果表达式是其它值, 直接将此值作为await的返回值

:::tip注意

- `await`必须写在`async`函数中, 但`async`函数中可以没有`await`
- 如果`await`的Promise实例对象失败了, 就会抛出异常, 需要通过`try...catch`来捕获处理

:::

```javascript
function sendAjax(url, data) {
    return new Promise((resolve, reject) => {
        //实例xhr
        const xhr = new XMLHttpRequest();
        //绑定监听
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(`请求出了点问题`);
                }
            }
        }
        //整理参数
        let str = '';
        for (let key in data) {
            str += `${key}=${data[key]}&`;
        }
        str = str.slice(0, -1);

        xhr.open('GET', url + '?' + str);
        xhr.responseType = 'json';
        xhr.send();
    });
}

(async () => {
    try {
        const result1 = await sendAjax('https://api.apiopen.top/getJoke', {page: 1});
        console.log('第1次请求成功了', result1);
        const result2 = await sendAjax('https://api.apiopen.top/getJoke', {page: 1});
        console.log('第2次请求成功了', result2);
        const result3 = await sendAjax('https://api.apiopen.top/getJoke', {page: 1});
        console.log('第3次请求成功了', result3);
    } catch (e) {
        console.log(e);
    }
})();
```

### await的原理

我们使用async配合await这种写法：表面上不出现任何的回调函数。但实际上底层把我们写的代码进行了加工，把回调函数“还原”回来了。最终运行的代码是依然有回调的，只是程序员没有看见。

```javascript
 const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a');
    }, 500);
});

async function f() {
    //程序员轻松的写法
    const result = await p;
    console.log(result);

    //浏览器翻译后的代码
    /*p.then(
        result => {
            console.log(result);
        }
    );*/
}

f();
console.log(1);
```
