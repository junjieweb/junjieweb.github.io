"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7313],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return m}});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=t.createContext({}),i=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},c=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=i(r),m=s,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return r?t.createElement(f,p(p({ref:n},c),{},{components:r})):t.createElement(f,p({ref:n},c))}));function m(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=r.length,p=new Array(o);p[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:s,p[1]=a;for(var i=2;i<o;i++)p[i]=r[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3186:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l}});var t=r(7462),s=r(3366),o=(r(7294),r(3905)),p=["components"],a={sidebar_position:2},u="\u4e2d\u95f4\u4ef6",i={unversionedId:"study-notes/nodejs\u7b14\u8bb0/Express/\u4e2d\u95f4\u4ef6",id:"study-notes/nodejs\u7b14\u8bb0/Express/\u4e2d\u95f4\u4ef6",title:"\u4e2d\u95f4\u4ef6",description:"Express \u662f\u4e00\u4e2a\u81ea\u8eab\u529f\u80fd\u6781\u7b80\uff0c\u5b8c\u5168\u662f\u7531\u8def\u7531\u548c\u4e2d\u95f4\u4ef6\u6784\u6210\u4e00\u4e2a\u7684 web \u5f00\u53d1\u6846\u67b6\uff1a\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4\uff0c\u4e00\u4e2a Express \u5e94\u7528\u5c31\u662f\u5728\u8c03\u7528\u5404\u79cd\u4e2d\u95f4\u4ef6\u3002",source:"@site/docs/study-notes/nodejs\u7b14\u8bb0/Express/\u4e2d\u95f4\u4ef6.md",sourceDirName:"study-notes/nodejs\u7b14\u8bb0/Express",slug:"/study-notes/nodejs\u7b14\u8bb0/Express/\u4e2d\u95f4\u4ef6",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/Express/\u4e2d\u95f4\u4ef6",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/nodejs\u7b14\u8bb0/Express/\u4e2d\u95f4\u4ef6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"\u7b80\u4ecb",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/Express/\u7b80\u4ecb"},next:{title:"\u8def\u7531\u5668",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/Express/\u8def\u7531\u5668"}},c={},l=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u5206\u7c7b",id:"\u5206\u7c7b",level:2}],d={toc:l};function m(e){var n=e.components,r=(0,s.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),(0,o.kt)("p",null,"Express \u662f\u4e00\u4e2a\u81ea\u8eab\u529f\u80fd\u6781\u7b80\uff0c\u5b8c\u5168\u662f\u7531\u8def\u7531\u548c\u4e2d\u95f4\u4ef6\u6784\u6210\u4e00\u4e2a\u7684 web \u5f00\u53d1\u6846\u67b6\uff1a\u4ece\u672c\u8d28\u4e0a\u6765\u8bf4\uff0c\u4e00\u4e2a Express \u5e94\u7528\u5c31\u662f\u5728\u8c03\u7528\u5404\u79cd\u4e2d\u95f4\u4ef6\u3002"),(0,o.kt)("p",null,"\u4e2d\u95f4\u4ef6\uff08Middleware\uff09 \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u8bbf\u95ee\u8bf7\u6c42\u5bf9\u8c61\uff08request\uff09, \u54cd\u5e94\u5bf9\u8c61\uff08response\uff09, \u548c web \u5e94\u7528\u4e2d\u5904\u4e8e\u8bf7\u6c42-\u54cd\u5e94\u5faa\u73af\u6d41\u7a0b\u4e2d\u7684\u4e2d\u95f4\u4ef6\uff0c\u4e00\u822c\u88ab\u547d\u540d\u4e3a next \u7684\u53d8\u91cf\u3002"),(0,o.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6267\u884c\u4efb\u4f55\u4ee3\u7801"),(0,o.kt)("li",{parentName:"ul"},"\u4fee\u6539\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u7ec8\u7ed3\u8bf7\u6c42-\u54cd\u5e94\u5faa\u73af"),(0,o.kt)("li",{parentName:"ul"},"\u8c03\u7528\u5806\u6808\u4e2d\u7684\u4e0b\u4e00\u4e2a\u4e2d\u95f4\u4ef6")),(0,o.kt)("h2",{id:"\u5206\u7c7b"},"\u5206\u7c7b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7ea7\u4e2d\u95f4\u4ef6\uff08\u8fc7\u6ee4\u975e\u6cd5\u7684\u8bf7\u6c42\uff0c\u4f8b\u5982\u9632\u76d7\u94fe\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u7b2c\u4e09\u65b9\u4e2d\u95f4\u4ef6\uff08\u901a\u8fc7npm\u4e0b\u8f7d\u7684\u4e2d\u95f4\u4ef6\uff0c\u4f8b\u5982body-parser\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u4e2d\u95f4\u4ef6\uff08express\u5185\u90e8\u5c01\u88c5\u597d\u7684\u4e2d\u95f4\u4ef6\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u8def\u7531\u5668\u4e2d\u95f4\u4ef6 \uff08Router\uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst qs = require('querystring');\n//\u521b\u5efa\u5e94\u7528\u5bf9\u8c61\nconst app = express();\n//\u2460 \u5f15\u5165body-parser\nconst bodyParser = require('body-parser');\n// \u2461 parse application/x-www-form-urlencoded\napp.use(bodyParser.urlencoded({extended: false}));\n\n//\u7b80\u6613\u7684\u81ea\u5b9a\u4e49\u8bf7\u6c42\u4f53\u5904\u7406\nlet bodyParser1 = function (request, response, next) {\n    //\u83b7\u53d6\u8bf7\u6c42\u4f53\n    let body = '';\n    request.on('data', chunk => {\n        body += chunk;\n    })\n    request.on('end', () => {\n        //\u89e3\u6790\n        const data = qs.parse(body);\n        //\u5c06\u8bf7\u6c42\u4f53\u5bf9\u8c61\u4f5c\u4e3a\u5c5e\u6027\u5b58\u50a8\u5230response\u5bf9\u8c61\u4e2d\n        request.body = data;\n        next();\n    })\n}\n\n//1\u3001\u9759\u6001\u8d44\u6e90\u670d\u52a1\u4e2d\u95f4\u4ef6\uff08\uff09\napp.use(express.static('./public'));\n\n//\u8bf7\u6c42\u4f53\u53c2\u6570\u7684\u83b7\u53d6 \u4e2d\u95f4\u4ef6 body-parser\napp.get('/from', (request, response) => {\n    //\u5c06\u67d0\u4e2a\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u54cd\u5e94\n    response.sendFile(__dirname + '/form.html');\n});\n\napp.post('/login', (request, response) => {\n    //\u83b7\u53d6\u8bf7\u6c42\u4f53 body-parser\n    //\u2462 request.body    \u83b7\u53d6\u8bf7\u6c42\u4f53\u4e2d\u7684\u67d0\u4e2a\u5c5e\u6027\n    console.log(request.body.username);\n    console.log(request.body.password);\n    response.send('\u8bf7\u6c42\u4f53\u63a5\u6536\u5b8c\u6bd5');\n})\n\napp.listen(80, () => {\n    console.log('\u670d\u52a1\u5df2\u7ecf\u542f\u52a8\uff0c\u7aef\u53e380\u76d1\u542c\u4e2d');\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u4e2d\u95f4\u4ef6\u5c31\u662f\u51fd\u6570\n\nconst express = require('express');\nconst moment = require(\"moment\");\nconst fs = require('fs');\nconst app = express();\n\n//1\u3001\u58f0\u660e\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570 next\u662f\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b\u7684\u503c\nlet record = function (request, response, next) {\n    //\u83b7\u53d6\u65f6\u95f4\n    let time = moment().format('YYYY-MM-DD hh:mm:ss');\n    //\u83b7\u53d6\u8def\u5f84\n    const path = request.url;\n    //\u62fc\u63a5\u8981\u5199\u5165\u7684\u5b57\u7b26\u4e32\n    let str = `[${time}]  ${path}\\r\\n`;\n    //\u5199\u5165\u6587\u4ef6\n    fs.writeFileSync('./access.log', str, {flag: 'a'});\n    //\u8c03\u7528next\u51fd\u6570\n    next();\n};\n\n//\u4e00\u3001\u8def\u7531\u4e2d\u95f4\u4ef6 \u68c0\u6d4b\u7528\u6237\nlet checkUser = function (request, response, next) {\n    //\u83b7\u53d6admin url \u53c2\u6570\n    let isAdmin = request.query.admin;\n    //\u5224\u65ad\n    if (isAdmin === '1') {\n        //\u6ee1\u8db3\u6761\u4ef6\n        next();\n    } else {\n        //\u8df3\u8f6c\u5230\u767b\u5f55\u9875\u9762\n        response.redirect('/login');\n    }\n}\n\n//2\u3001\u4f7f\u7528\u4e2d\u95f4\u4ef6 \u4e2d\u95f4\u4ef6\u7684\u914d\u7f6e\uff08\u5168\u5c40\u4e2d\u95f4\u4ef6\uff09\napp.use(record);\n\n//\u8def\u7531\n//\u5c06\u7528\u6237\u7684\u8bf7\u6c42\u8bb0\u5f55\u5728\u6587\u4ef6\u4e2d access.log [2022-1-14 10:10:10] /\napp.get('/', (request, response) => {\n    response.send('\u4e2d\u95f4\u4ef6');\n});\n\n//\u8def\u7531\u89c4\u5219 ?admin=1\n//\u4e8c\u3001\u6dfb\u52a0\u51fd\u6570\u81f3\u7b2c\u4e8c\u4e2a\u53c2\u6570\napp.get('/admin', checkUser, (request, response) => {\n    response.send('\u540e\u53f0\u9996\u9875');\n});\n\n//      ?admin=1\napp.get('/setting', checkUser, (request, response) => {\n    response.send('\u540e\u53f0\u8bbe\u7f6e');\n});\n\napp.get('/shuju', checkUser, (request, response) => {\n    response.send('\u540e\u53f0\u6570\u636e');\n});\n\napp.get('/home', (request, response) => {\n    response.send('\u524d\u7aef\u9996\u9875');\n});\n\napp.get('/cart', (request, response) => {\n    response.send('\u8d2d\u7269\u8f66');\n});\n\napp.get('/login', (request, response) => {\n    response.send('\u767b\u5f55\u9875\u9762');\n});\n\napp.listen(80);\n")))}m.isMDXComponent=!0}}]);