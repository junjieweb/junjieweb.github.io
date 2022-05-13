# node.js面试题

## 001 - 对Node.js 的理解？优缺点？应用场景？

**`Node.js`** 是一个基于Chrome V8引擎的JavaScript运行环境，让JavaScript 运行在服务端的开发平台。Node.
js是一个事件驱动、非阻塞式I/O的模型，轻量而又高效。浏览器是js的前端运行环境，node.js是js的后端运行环境。

**优点**

- 处理高并发场景性能更佳
- 适合I/O密集型应用，指的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作

**缺点**

- 不适合CPU密集型应用（如复杂的数学计算）
- 只支持单核CPU，不能充分利用CPU
- 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃

**适用场景**

- 高并发、实时聊天、实时消息推送、客户端逻辑强大的SPA（单页面应用程序）。

**应用场景**

- 第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序
- 第二大类：基于web、canvas等多人联网游戏
- 第三大类：基于web的多人实时聊天客户端、聊天室、图文直播
- 第四大类：单页面浏览器应用程序
- 第五大类：操作数据库、为前端和移动端提供基于json的API

## 002 - Node.js与javascript有什么不同

| JavaScript                                                                                       | Node.js                                                          |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| JavaScript是一种编程语言，可以再任何具有合适浏览器引擎的网络浏览器中运行                                                        | Node.js是一个为JavaScript设计的解释器和运行时环境。Node.js内置了一些增强JavaScript编程功能模块 |
| 除了Node.js，JavaScript用于网络应用程序的客户端，特别是用于开发动态特性。                                                    | Node.js可以在任何操作系统上用于开发与系统硬件交互的应用程序，特别是对于web 后端。                   |
| JavaScript 可以在不同的浏览器引擎上运行，比如v8 (Google Chrome) . SpiderMonkey (Firefox)和JavaScript Core(Safari)。 | Node.js 仅在Chrome 使用的V8引擎上运行。                                     |

## 003 - 为什么要用Node.js

1. 简单， Node. js用 JavaScript、JSON进行编码，简单好学。

2. 功能强大，非阻塞式I/O，在较慢的网络环境中，可以分块传输数据，事件驱动，擅长高并发访问。

   高并发是指许多用户同时访问相同 API接口或 URL地址。这种情况常常发生在活跃用户数量大、用户聚集程度高的业务场景中。
   非阻塞I/O是指以异步来执行函数，先执行同步任务，耗时任务放在事件队列中，以此轮询执行

4. 轻量级， Node. js本身既是代码又是服务器，前后端使用同一语言。

5. 可扩展，可以轻松应对多实例、多服务器架构，同时有海量的第三方应用组件。

## 004 - Node. js 有哪些全局对象？

在浏览器 JavaScript 中，通常window 是全局对象， 而 Nodejs中的全局对象是 global，global全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值

**全局对象分类**

- 真正的全局对象

    - **`Buffer`** 可以处理二进制以及非Unicode编码的数据

    - **`process`** 进程对象，提供有关当前进程的信息和控制

    - **`console`** 最常用的输入内容的方式：console.log/console.
      info、console.error/console.warning、console.time/console.timeEnd、console.trace、console .table。

    - **`clearInterval`**、**`setInterval`** 设置定时器与清除定时器

    - **`clearTimeout`**、**`setTimeout`** 设置延时器与清除延时器

    - **`global`** 全局命名空间对象，process、console、setTimeout等都有放到global中

- 模块级别的全局变量

    - **`__dirname`** 获取当前文件所在的路径，不包括后面的文件名

    - **`__filename`** 获取当前文件所在的路径和文件名称，包括后面的文件名称

    - **`exports`** module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容

    - **`module`** 对当前模块的引用，通过module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容

    - **`require`** 用于引入模块、 JSON、或本地文件。 可以从 node_modules 引入模块。

## 你知道哪些 Node.js核心模块？

### EventEmitter 、Stream、FS、Net和全局对象等。

## 对 Node.js 中的 process 的理解？有哪些常用方法？

### 概念

- process 对象是一个全局变量，提供了有关当前 Node.js进程的信息并对其进行控制，作为一个全局变量

### 属性与方法

- 属性

    - process.env：环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息
    - process.nextTick：这个在谈及 EventLoop 时经常为会提到
    - process.pid：获取当前进程id
    - process.ppid：当前进程对应的父进程
    - process.cwd()：获取当前进程工作目录，
    - process.platform：获取当前进程运行的操作系统平台
    - process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
    - 进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听
    - 三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出
    - process.title 指定进程名称，有的时候需要给进程指定一个名称

- 方法

    - process.cwd()

        - 返回当前 Node进程执行的目录

    - process.argv

        - 在终端通过 Node 执行命令的时候，通过 process.argv 可以获取传入的命令行参数，返回值是一个数组

    - process.env

        - 返回一个对象，存储当前环境相关的所有信息，一般很少直接用到。

    - process.nextTick()

        - NodeJs是基于事件轮询，在这个过程中，同一时间只会处理一件事情，在这种处理模式下，process.nextTick()就是定义出一个动作，并且让这个动作在下一个事件轮询的时间点上执行

## Node. js中的异步和同步如何理解？

Node.js是单线程的，异步是通过一次次的循环事件队列来实现的。同步则是阻塞式的IO，这在高并发环境中会是一个很大的性能问题，所以同步一般只在基础框架启动时使用，用来加载配置文件、初始化程序等。

## 通过哪些方法可以进行异步流程的控制？

1. 多层嵌套回调。
3. 为每一个回调写单独的函数，函数里边再回调。
5. 用第三方框架，如 async、 promise等。

## 如何避免回调地狱？

### 使用Promise

### 使用async/await

## Node.js有哪些定时功能？

### setTimeout/clearTimeout

### setInterval/clearInterval

### setImmediate/clearImmediate

### process. nextTick

## 什么是错误优先的回调函数？

错误优先(Error-first)的回调函数（Error-First Callback）用于同时返回错误和数据。第一个参数返回错误，并且验证它是否出错；其他参数返回数据。

## 对 Node 中的 fs模块的理解? 有哪些常用方法

### 概念

- fs（filesystem），该模块提供本地文件的读写能力，可以说，所有与文件的操作都是通过fs核心模块实现，这个模块对所有文件系统操作提供异步（不具有sync 后缀）和同步（具有 sync 后缀）两种操作方式，而供开发者选择

    -

### 常用方法

- 文件读取

    - 同步读取：fs.readFileSync

        - **第一个参数为读取文件的路径或文件描述符
          第二个参数为 options，默认值为 null，其中有 encoding（编码，默认为 null）和 flag（标识位，默认为 r），也可直接传入 encoding**

    - 异步读取：fs.readFile

        - **异步读取方法 readFile 与 readFileSync 的前两个参数相同，最后一个参数为回调函数，函数内有两个参数 err（错误）和 data（数据），该方法没有返回值，回调函数在读取文件成功后执行**

- 文件写入

    - 同步写入：fs.writeFileSync

        - **第一个参数为写入文件的路径或文件描述符
          第二个参数为写入的数据，类型为 String 或 Buffer
          第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 w）和 mode（权限位，默认为 0o666），也可直接传入 encoding**

    - 异步写入：fs.writeFile

        - **异步写入，writeFile 与 writeFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件写入数据成功后执行**

- 文件追加写入

  我们在nodejs开发中，有时候会遇到文件读写问题，在写文件的时候，我们会有这样的场景，需要向文件中循环添加内容，这时候，如果调用writeFile(path,data)或者writeFileSync(path,data)
  ，只会将最后一次写入的内容加入到文件中，而不是追加内容到文件，如果想要将内容追加到文件中，我们需要使用appendFile(path,data)或者appendFileSync(path,data)方法

    - 同步追加：fs.appendFileSync

        - **第一个参数为写入文件的路径或文件描述符
          第二个参数为写入的数据，类型为 String 或 Buffer
          第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 a）和 mode（权限位，默认为 0o666），也可直接传入 encoding**

    - 异步追加：fs.appendFile

        - **异步追加写入方法 appendFile 与 appendFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件追加写入数据成功后执行**

- 文件拷贝

    - 同步拷贝：fs.copyFileSync

        -

    - 异步拷贝：fs.copyFile

        -

- 创建目录

    - 同步创建：fs.mkdirSync

        - **同步创建，参数为一个目录的路径，没有返回值，在创建目录的过程中，必须保证传入的路径前面的文件目录都存在，否则会抛出异常**

    - 异步创建：fs.mkdir

        - **异步创建，第二个参数为回调函数**

## 对 Node 中的 Buffer 的理解？应用场景？

### 概念

-

在Node应用中，需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，要处理大量二进制数据，而Buffer就是在内存中开辟一片区域（初次初始化为8KB），用来存放二进制数据；Nodejs不能控制数据传输的速度和到达时间，只能决定何时发送数据，如果还没到发送时间，则将数据放在Buffer中，即在RAM中，直至将它们发送完毕

### 应用场景

- I/O操作
- 加密解密
- zlib.js

## 对中间件概念的理解

中间件（Middleware）是介于应用系统和系统软件之间的一类软件，能够达到资源共享、功能共享的目的。中间件的本质为一个回调函数，参数包含请求对象、响应对象和执行下一个中间件的函数

    -

## npm是什么，作用是？

### 概念

- npm是 Node. js中管理和分发包的工具，可用于安装、卸载、发布、查看包等。

### 作用

- 通过ηpm，可以安装和管理项目的依赖，还可以指明依赖项的具体版本号。

    - （1）允许用户从npm服务器下载别人编写的第三方包到本地。
    - （2）允许用户从npm服务器下载并安装别人编写的命令行程序到本地。
    - （3）允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用。

## 什么是 EventEmitter？EventEmitter有哪些典型应用？

### 什么是EventEmitter？

- EventEmitter是 Node. js中一个实现观察者模式的类，主要功能是订阅和发布消息，Node.js 中任何对象发出的事件都是 EventEmitter 类的实例，所有 EventEmitter 类都可以使用
  eventEmitter.on() 函数将事件侦听器附加到事件。然后一旦捕捉到这样的事件，就会同步地逐个调用它的侦听器。

### EventEmitter有哪些典型应用？

- （1）在模块间传递消息。
- （2）在回调函数内外传递消息。
- （3）处理流数据，因为流是在 EventEmitter的基础上实现的。

## Node. js中的流是什么？使用流有什么好处？流有哪些典型应用？

流(Stream)是基于 EventEmitter的数据管理模式，由各种不同的抽象接口组成，主要包括可写、可读、可读写、可转换等类型。

**好处**

- 流是非阻塞式数据处理模式，可以提升效率，节省内存，有助于处理管道且可扩展等。

**典型应用**

- 流在文件读写、网络请求、数据转换、音频、视频等方面有很广泛的应用。

## 有哪些常用 Stream流？分别什么时候使用？

Readable流为可读流，在作为输入数据源时使用；Writable流为可写流，在作为输岀源时使用；Duplex流为可读写流，它作为输岀源被写入，同时又作为输入源被后面的流读出。Transform流和 Duplex流一样，都是双向流，区别是 Transfrom流只需要实现一个函数 _transfrom( chunk, encoding, callback)；而 Duplex流需要分别实现_read(size )函数和_write( chunk, encoding, callback ）函数。

## readFile 和 createReadStream 函数有什么区别？

readFile 函数异步读取文件的全部内容，并存储在内存中，然后再传递给用户。createReadStream 使用一个可读的流，逐块读取文件，而不是全部存储在内存中。与 readFile 相比，createReadStream 使用更少的内存和更快的速度来优化文件读取操作。

## 对Nodejs中的事件循环机制理解?

事件循环其实就是一个事件队列，先加入先执行，执行完一次队列，再次循环遍历看有没有新事件加入队列。执行中的事件叫IO事件，Node 规定，process.nextTick和Promise的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们，且process.nextTick是所有异步任务里面最快执行的。而setTimeout、setInterval、setImmediate的回调函数，追加在次轮循环。 由于setTimeout在 timers 阶段执行，而setImmediate在 check 阶段执行。所以，setTimeout会早于setImmediate完成。

Nodejs事件循环六个阶段

- **每个阶段对应一个队列，当事件循环进入某个阶段时, 将会在该阶段内执行回调，直到队列耗尽或者回调的最大数量已执行,
  那么将进入下一个处理阶段。除了上述6个阶段，还存在process.nextTick，其不属于事件循环的任何一个阶段，它属于该阶段与下阶段之间的过渡, 即本阶段执行结束, 进入下一个阶段前, 所要执行的回调，类似插队**

    - timers：这个是定时器阶段，处理setTimeout()和setInterval()的回调函数。进入这个阶段后，主线程会检查一下当前时间，是否满足定时器的条件。如果满足就执行回调函数，否则就离开这个阶段。
    - I/O事件回调阶段(I/O callbacks)：执行延迟到下一个循环迭代的 I/O 回调，即上一轮循环中未被执行的一些I/O回调
    - 闲置阶段(idle, prepare)：仅系统内部使用
    - 这个阶段是轮询时间，用于等待还未返回的 I/O 事件，比如服务器的回应、用户移动鼠标等等。这个阶段的时间会比较长。如果没有其他异步任务要处理（比如到期的定时器），会一直停留在这个阶段，等待 I/O 请求返回结果。
    - 检查阶段(check)：setImmediate() 回调函数在这里执行
    - 关闭事件回调阶段(close callback)：一些关闭的回调函数，如：socket.on('close', ...)

