# 五、异步编程

## 001 - Event Loop（JS执行机制）

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

<img src="https://zh.javascript.info/article/event-loop/eventLoop-full.svg">

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

## 002 - 什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？

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

## 003 - 异步编程的实现方式？

**回调函数的方式**

- 使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护

**`Promise`的方式**

- 使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确

**`generator`的方式**

- 它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来。当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权给转移回来。因此在 generator
  内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控制权转移回来，因此需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行

**`async`函数的方式**

- async 函数是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个 await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise
  对象的状态变为 resolve 后再继续向下执行。因此可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行

## 004 - 对Promise的理解

- Promise本身是同步的立即执行函数，当在executor中执行resolve（）或者reject（）的时候,
  此时是异步操作，也就是说promise中函数体内部的非异步操作正常顺序执行，resolve（）和reject（）异步操作为promise实例对象的返回结果，这个返回结果后面的then或者catch需要用，所以then和catch要放到异步任务中等待所有同步任务执行完毕之后再按顺序（或者如果有定时器，需要遵循定时器的时间）执行。

    -
    -

-

Promise是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise
是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理

- Promise解决了什么问题/为什么需要promise

    - 在工作中经常会碰到这样一个需求，比如我使用ajax发一个A请求后，成功后拿到数据，需要把数据传给B请求；那么需要如下编写代码

        - 上面的代码有如下缺点：
          ● 后一个请求需要依赖于前一个请求成功后，将数据往下传递，会导致多个ajax请求嵌套的情况，代码不够直观。
          ● 如果前后两个请求不需要传递参数的情况下，那么后一个请求也需要前一个请求成功后再执行下一步操作，这种情况下，那么也需要如上编写代码，导致代码不够直观。
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

    - Promise 对象是异步编程的一种解决方案，最早由社区提出。Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例。一个 Promise 实例有三种状态，分别是pending、resolved 和
      rejected，分别代表了进行中、已成功和已失败。实例的状态只能由 pending 转变 resolved 或者rejected 状态，并且状态一经改变，就凝固了，无法再被改变了。状态的改变是通过 resolve() 和
      reject() 函数来实现的，可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，使用这个 then
      方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行

## 005 - Promise解决了什么问题

- 在工作中经常会碰到这样一个需求，比如我使用ajax发一个A请求后，成功后拿到数据，需要把数据传给B请求

    - 上面的代码有如下缺点：
      ● 后一个请求需要依赖于前一个请求成功后，将数据往下传递，会导致多个ajax请求嵌套的情况，代码不够直观。
      ● 如果前后两个请求不需要传递参数的情况下，那么后一个请求也需要前一个请求成功后再执行下一步操作，这种情况下，那么也需要如上编写代码，导致代码不够直观
    - promise形式：代码看起了就简洁了很多，解决了地狱回调的问题

## 006 - Promise的基本用法

- 创建Promise对象

    - new Promise()法

        -

    - promise.resolve（）方法

        - resolve(11)代码中，会让promise对象进入确定(resolve状态)，并将参数11传递给后面的then所指定的onFulfilled 函数；

    - promise.reject（）方法

        - reject(‘wrong’)代码中，会让promise对象进入拒绝(reject状态)，并将参数wrong传递给后面的catch所指定的reject 函数；

- Promise方法

    - then（）方法

        - p.then(res => {...},err => {...})

            - then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中第二个参数可以省略
            - then方法返回的是一个新的Promise实例（不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法

    - catch（）方法

        - p.catch(err => {...})

            - 该方法相当于then方法的第二个参数，指向reject的回调函数

                -

    - all（）方法

        - Promise.all([p1,p2...])

            - all方法可以完成并行任务，
              它接收一个数组，数组的每一项都是一个promise对象。当数组中所有的promise的状态都达到resolved的时候，all方法的状态就会变成resolved，如果有一个状态变成了rejected，那么all方法的状态就会变成rejected
            - 当所有的子Promise都完成，该Promise完成，返回值是全部值的数组,这个数组按顺序保存着每一个promise对象resolve执行时的值

                -

            - 如果有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果

    - race（）方法

        - Promise.race([p1,p2...])

            -
          race方法和all一样，接受的参数是一个每项都是promise的数组，但是与all不同的是，当最先执行完的事件执行完之后，就直接返回该promise对象的值。如果第一个promise对象状态变成resolved，那自身的状态变成了resolved；反之第一个promise变成rejected，那自身状态就会变成rejected

                -

            - 实际应用

                - 当要做一件事，超过多长时间就不做了，可以用这个方法来解决

                    -

    - finally（）方法

        - p.finally（）

            - finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作
            - 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数
            - 服务器使用 Promise 处理请求，然后使用finally方法关掉服务器，finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise
              状态到底是fulfilled还是rejected

## 007 - Promise.all和Promise.race的区别的使用场景

- Promise.all（）

    -
  Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。Promise.all中传入的是数组，返回的也是是数组，并且会将进行映射，传入的promise对象返回的值是按照顺序在数组中排列的，但是注意的是他们执行的顺序并不是按照顺序的，除非可迭代对象为空。需要注意，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，这样当遇到发送多个请求并根据请求顺序获取和使用数据的场景，就可以使用Promise.all来解决。

- Promise.race（）

    - Promise.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])
      里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。当要做一件事，超过多长时间就不做了，可以用这个方法来解决

        -

## 008 - 对async/await 的理解

- async/await其实是Generator 的语法糖，它能实现的效果都能用then链来实现，它是为优化then链而开发出来的。从字面上来看，async是“异步”的简写，await则为等待，所以很好理解async 用于申明一个
  function 是异步的，而 await 用于等待一个异步方法执行完成。
- async函数返回的是一个Promise 对象，如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象，async 函数返回的是一个 Promise
  对象，所以在最外层不能用 await 获取其返回值的情况下，当然应该用原来的方式：then() 链来处理这个 Promise 对象

    - async函数返回的是一个promise对象
    - 可以用then（）方法或者catch（）方法来处理async函数（promise对象）

- 对promise/then、async/await 的理解

    - async函数实际上就是promise对象，promise是同步的立即执行函数，所以aysnc函数也是立即执行函数，也就是说含有async或者promise（下面还有普通函数，或者console.log（...))
      会按照代码的顺序进行执行（若async函数中有await需要重新考虑执行顺序，具体看下面的tip）

        -

    -
  promise（async函数）异步任务只针对promise（async函数）中调用的then（）方法或者catch（）方法等里面的函数执行，promise（async函数）中的同步任务正常执行，不会阻塞，此时then或者catch方法里面的代码会放到异步任务队列中，待页面所有同步任务完成后再按照顺序（或时间顺序）执行

        -

    - 没有await的async函数也是立即执行函数，会正常执行async函数里面的代码
    -
  tip：有await的async函数，会暂时阻碍await下面所有代码的执行，在async函数中并且在await前面的代码（以及await紧跟着的那个异步函数也会正常运行）会正常运行，待await等待到他后面异步函数的结果之后，再执行await下面的代码。注意：await在没有等待到它后面的异步函数的结果时只是阻碍async函数中且在await下面的代码的执行，async函数中且在await前面、await后面紧跟着的那个异步任务的代码，以及async函数之后的代码不会受到影响，会正常运行

        -

## 009 - `await` 到底在等啥？

await后面必须是异步函数， await是在等待一个异步函数完成，而这个异步函数返回值可能时promise对象，也可能是其他值，而await 等待的就是就是异步函数的返回值

- 如果它等到的不是一个 Promise 对象，那 await 表达式的运算结果就是它等到的东西
- 如果它等到的是一个 Promise 对象，await 就忙起来了，它会阻塞在async函数之中且await后面的代码，等着 Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果

## 010 - `async/await`的优势

- Promise 通过 then 链来解决多层回调的问题，而 async/await 来进一步优化promise的then（）方法的多层调用
- async/await对比Promise/then（）的优势

    - 代码读起来更加同步，Promise虽然摆脱了回调地狱，但是then的链式调⽤也会带来额外的阅读负担
    - Promise传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅
    - 错误处理友好，async/await可以⽤成熟的try/catch，Promise的错误捕获⾮常冗余
    - 调试友好，Promise的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀个.then代码块中使⽤调试器的步进(step-over)
      功能，调试器并不会进⼊后续的.then代码块，因为调试器只能跟踪同步代码的每⼀步

## 011 - `async/await` 如何捕获异常

`try...catch`

```javascript
async function fn() {
    try {
        let a = await Promise.resolve('成功了')
        console.log(a)
    } catch (e) {
        console.log(e)
    }
}
```

- a为await等待的结果，await下面的代码捕获a resolve的信息
- catch捕获a reject的信息

## 012 - `setTimeout`、`Promise`、`Async/Await` 的区别

**`setTimeout`**

- 定时器是异步任务，会将定时器中的代码放到异步任务中，待页面中所有同步任务执行完毕之后再执行异步任务队列

**`Promise`**

- Promise本身是同步的立即执行函数， 当在executor中执行resolve或者reject的时候,
  此时是异步操作，会先执行promise中的同步任务，然后执行promise之外的同步操作（按照书写代码的先后顺序），而promise.then( )
  视为异步任务的方法，会加入到任务队列中，等待全部同步任务执行完毕再按顺序执行异步任务队列中的任务，promise后面的定时器也是异步函数，也要加入到异步函数队列中，即使定时器是0s，而且按照代码书写先后顺序，在任务队列中会排到then后面

**`async/await`**

- async函数为异步函数，返回的也是promise对象，所以说async函数也是立即执行函数，他里面的代码会按照顺序相继执行；
  但当有异步任务，且异步任务前面有await时，这时await若未等到异步任务的结果，会阻碍async里面且在await下面的代码（await后面紧跟着的异步任务会正常执行），执行async函数下面的代码直至await等到结果之后再执行它下面在async函数中的代码

## 013 - 并发与并行的区别？

**并发**

- 并发是宏观概念，在一段时间内通过任务间的切换完成了这些任务，这种情况就可以称之为并发（指在同一时刻只能有一条指令执行，但多个进程指令被快速的轮换执行）

**并行**

- 并行是微观概念，指在同一时刻，有多条指令在多个处理器上同时执行。同时完成多个任务的情况就可以称之为并行

## 014 - `setTimeout`、`setInterval`、`requestAnimationFrame` 各有什么特点？

异步编程当然少不了定时器了，常见的定时器函数有 `setTimeout`、`setInterval`、`requestAnimationFrame`。

- 最常用的是setTimeout，很多人认为 setTimeout 是延时多久，那就应该是多久后执行，其实这个观点是错误的，因为 JS 是单线程执行的，如果前面的代码影响了性能，就会导致 setTimeout
  不会按期执行。当然了，可以通过代码去修正 setTimeout，从而使定时器相对准确
- setInterval，其实这个函数作用和 setTimeout 基本一致，只是该函数是每隔一段时间执行一次回调函数，通常来说不建议使用 setInterval。第一，它和 setTimeout
  一样，不能保证在预期的时间执行任务。第二，它存在执行累积的问题，如果定时器执行过程中出现了耗时操作，多个回调函数会在耗时操作结束以后同时执行，这样可能就会带来性能上的问题
- 如果有循环定时器的需求，其实完全可以通过 requestAnimationFrame 来实现，首先 requestAnimationFrame 自带函数节流功能，基本可以保证在 16.6
  毫秒内只执行一次（不掉帧的情况下），并且该函数的延时效果是精确的，没有其他定时器时间不准的问题
