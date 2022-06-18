---
sidebar_position: 11
---

# Ajax

## 原生Ajax

Ajax 全称为Asynchronous Javascript And XML，就是异步的 JS 和 XML。     
通过Ajax可以在浏览器中向服务器发送异步请求，最大的优势：**页面无刷新获取数据**。    
Ajax 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式。

#### XML

- 可扩展标记语言。
- XML 被设计用来传输和存储数据。
- XML和HTML类似，不同的是HTML中都是预定义标签，而XML中没有预定义标签，全都是自定义标签，用来表示一些数据。
- 现在已经被JSON取代了。

### Ajax特点

- 可以无需刷新页面而与服务器端进行通信
- 允许你根据用户事件来更新部分页面内容

### Ajax缺点

- 没有浏览历史，不能回退
- 存在跨域问题
- SEO不友好

### 核心对象 `XMLHttpRequest`

### 使用

```html

<button id="btn">点我发送请求</button>
<div id="content"></div>
<script>
    const btn = document.getElementById('btn');
    const content = document.getElementById('content');

    btn.onclick = () => {
        //实例xhr
        const xhr = new XMLHttpRequest();

        //绑定监听
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const {name, age, sex} = xhr.response;
                    content.innerHTML = (`
                        <ul>
                            <li>姓名：${name}</li>
                            <li>年龄：${age}</li>
                            <li>性别：${sex}</li>
                        </ul>
                    `);
                }
            }
        }

        //配置请求
        xhr.open('GET', 'http://127.0.0.1:8080/get_person')

        //responseType 用于指定返回数据的格式
        xhr.responseType = 'json';

        //发送请求
        xhr.send();
    };

</script>
```

```javascript title="请求异常与超时处理"
//配置出错的回调
xhr.onerror = () => {
    alert('当前网络不稳定，请稍后重试');
}

//超时时间
xhr.timeout = 2000;

//超时的回调
xhr.ontimeout = () => {
    alert('网速不给力，请切换网络重试');
}
```

### Ajax请求状态

`xhr.readyState` 可以用来查看请求当前的状态

- 0: 表示XMLHttpRequest实例已经生成，但open未调用。
- 1: open已调用，但send还未调用，此时仍然可以修改请求头信息。
- 2: 表示send()方法已经执行，并且头信息和状态码已经收到。
- 3: 表示正在接收服务器传来的部分数据，小的数据会在此阶段一次性接收完毕，较大的数据有待进一步接收，响应头已经回来了
- 4：表示数据已经接收完毕

### IE-GET缓存问题

**问题**：在一些浏览器中(IE),由于缓存机制的存在，ajax只会发送的第一次请求，剩余多次请求不会在发送给浏览器而是直接加载缓存中的数据。

**解决方式**：浏览器的ajax缓存是根据url地址来记录的，所以我们只需要修改url地址即可避免缓存问题。     
`xhr.open('GET', 'http://127.0.0.1:8080/get_person?t=' + Date.now())`

## Ajax 跨域

跨域问题：原因是浏览器为了安全，而采用的同源策略（Same origin policy）

### 同源策略

同源策略是由Netscape提出的一个著名的安全策略，现在所有支持 JavaScript 的浏览器都会使用这个策略。
Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。

所谓同源是指：协议，域名（IP），端口必须要完全相同。即：**协议**、**域名（IP）**、**端口**都相同，才能算是在同一个域里。

**非同源受到的限制：**

1. Cookie不能读取；
2. DOM无法获得；
3. Ajax请求不能获取数据

### 如何解决跨域问题

#### JSONP解决发送请求跨域问题

JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，**只支持get请求**。
JSONP不是一种技术，而是程序员“智慧的结晶”（利用了标签请求资源不受同源策略限制的特点）

```html title="前端写法"
<body>
    <button id="btn">按钮</button>
    <script>
        const btn = document.getElementById('btn');
        btn.onclick = () => {
            //1.创建script节点
            const scriptNode = document.createElement('script');
            //2.给节点指定src属性（请求地址）
            scriptNode.src = 'http://127.0.0.1:8080/test_jsonp?callback=test';
            //3.将节点放入页面
            document.body.appendChild(scriptNode);
            //4.准备好一个函数
            window.test = (a) => {
                console.log(a);
            }
            //5.移除已经使用过的script节点
            document.body.removeChild(scriptNode);
        }
    </script>
</body>
```

```javascript title="后端写法"
app.get('/jsonp', (req, res) => {
    //解构赋值获取请求参数
    const {callback} = req.query
    //去数据库查找对应数据
    const data = [{name: 'tom', age: 18}, {name: 'jerry', age: 20}];
    res.send(callback + '(' + JSON.stringify(data) + ')');
})
```

#### 后台配置cors解决跨域

CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，
它的特点是**不需要在客户端做任何特殊的操作，完全在服务器中进行处理**，支持所有常见的请求。

CORS是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应以后就会对响应放行。

```javascript
// 以Node为例：
res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
```

#### 使用脚手架代理服务器

例如：React脚手架、Vue脚手架
