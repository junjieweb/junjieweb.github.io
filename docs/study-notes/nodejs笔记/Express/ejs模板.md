---
sidebar_position: 4
---

# EJS模板

EJS是一个高效的 JavaScript 模板引擎。模板引擎是为了使用户界面与业务数据（内容）分离而产生的。

简单来说，使用EJS模板引擎就能动态渲染数据。

## 使用

1. 下载安装 `npm i ejs --save`
2. 配置模板引擎 `app.set('view engine', 'ejs');`
3. 配置模板的存放目录 `app.set('views', './template');`
4. 在views目录下创建模板文件 `xxx.ejs`
5. 使用模板，通过response来渲染模板 `response.render('模板名称', {数据对象});`

```javascript
// ejs 模板引擎 一种技术 并不是js独有
//1、安装 ejs
//2、引入 ejs
const ejs = require('ejs');
const fs = require('fs');

//3、调用方法
/*
    str     要编译的字符串
    data    数据对象
*/
//一、变量的拼接
// let str = '<h1><%= msg %></h1>';
// let str = fs.readFileSync('./views/ry.html').toString();
// let data = {
//     msg:'多少事，从来急，天地转，光阴迫，一万年太久，只争朝夕。',
//     title:'标题'
// };
//
// const result = ejs.render(str,data);


//二、数据的遍历
// let str = `
//     <ul>
//         <% for(let i = 0;i< songs.length;i++){ %>
//         <li><%= songs[i] %></li>
//         <% } %>
//     </ul>
// `;

// let str = fs.readFileSync('./views/songs.html').toString();
// let data = {
//     songs: [
//         '甜蜜蜜',
//         '笨小孩',
//         '常回家看看',
//         '难忘今宵',
//         '好运来'
//     ]
// };
// let result = ejs.render(str, data);
// console.log(result);

//三.判断
let str = `
    <h2>布布TV</h2>
    <% if(!vip){ %>
    <p><%= ad %></p>
    <% } %>
`;

let result = ejs.render(str, {
    vip: 1,
    ad: '我是广告'
});
console.log(result);
```

### 例子1

```javascript
const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');

//显示歌曲列表
app.get('/songs', (request, response) => {
    //字符串参数
    let str = fs.readFileSync('./views/songs.html').toString();
    //数据对象
    let data = {
        songs: [
            '甜蜜蜜',
            '笨小孩',
            '常回家看看',
            '难忘今宵',
            '好运来'
        ]
    };
    //编译内容
    let result = ejs.render(str, data);
    //响应
    response.send(result);
})

app.listen(80);
```

```html title="\views\songs.html"
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>歌曲列表</title>
</head>
<body>
<ul>
    <% for(let i = 0;i< songs.length;i++){ %>
    <li><%= songs[i] %></li>
    <% } %>
</ul>
</body>
</html>
```

### 例子2

```javascript
//选手数据
const player = [
    {id: 1, name: 'xm'},
    {id: 2, name: 'xn'},
    {id: 3, name: 'xt'},
    {id: 4, name: 'kn'}
];

//引入 express 包
const express = require('express');
//创建应用对象
const app = express();
//1.设置 express 使用的模板引擎 ejs
app.set('view engine', 'ejs');
//设置 ejs 使用的模板的存放位置 模板指的就是 HTML 代码存放的文件
app.set('views', './template');

//路由的设置
app.get('/player', (request, response) => {
    //2.到指定的文件夹下创建模板文件
    //3.设置模板设置响应    使用ejs编译 ./template/player.ejs 文件中的内容
    response.render('player', {player: player});
})
//监听端口,启动服务
app.listen(80);
```

```html title="\template\player.ejs"
<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>选手列表</title>
    <style>
        table, td {
            border-collapse: collapse;
        }

        td {
            padding: 10px 20px;
        }
    </style>
</head>
<body>
<h2>职业选手</h2>
<!--<ul>
    <% for (let i = 0; i < player.length; i++) {%>
    <li><%= player[i] %></li>
    <% } %>
</ul>-->
<table border="1">
    <tr>
        <td>id</td>
        <td>name</td>
    </tr>
    <% for (let i = 0; i < player.length; i++) {%>
    <tr>
        <td><%= player[i].id %></td>
        <td><%=player[i].name%></td>
    </tr>
    <% } %>
</table>
</body>
</html>
```
