"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(t),u=l,N=d["".concat(o,".").concat(u)]||d[u]||k[u]||p;return t?a.createElement(N,r(r({ref:n},s),{},{components:t})):a.createElement(N,r({ref:n},s))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=t.length,r=new Array(p);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var m=2;m<p;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3607:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var a=t(7462),l=(t(7294),t(3905));const p={sidebar_position:2},r="\u5305\u7ba1\u7406\u5668",i={unversionedId:"study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668",id:"study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668",title:"\u5305\u7ba1\u7406\u5668",description:"\u5305\u7ba1\u7406\u5668\u53c8\u79f0\u8f6f\u4ef6\u5305\u7ba1\u7406\u7cfb\u7edf\uff0c\u662f\u4e00\u79cd\u5de5\u5177\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5\u3001\u5220\u9664\u3001\u5347\u7ea7\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u8f6f\u4ef6\u5305\u3002",source:"@site/docs/study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668.md",sourceDirName:"study-notes/nodejs\u7b14\u8bb0",slug:"/study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Node",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840"},next:{title:"HTTP \u534f\u8bae",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/HTTP\u534f\u8bae"}},o={},m=[{value:"NPM",id:"npm",level:2},{value:"\u4f7f\u7528\u6d41\u7a0b",id:"\u4f7f\u7528\u6d41\u7a0b",level:3},{value:"\u4f7f\u7528npm\u6267\u884c\u811a\u672c",id:"\u4f7f\u7528npm\u6267\u884c\u811a\u672c",level:3},{value:"\u5c01\u88c5NPM\u5305",id:"\u5c01\u88c5npm\u5305",level:3},{value:"npm\u914d\u7f6e\u955c\u50cf\u5730\u5740",id:"npm\u914d\u7f6e\u955c\u50cf\u5730\u5740",level:3},{value:"CNPM",id:"cnpm",level:2},{value:"yarn",id:"yarn",level:2},{value:"Cyarn",id:"cyarn",level:2},{value:"\u5173\u4e8e\u7248\u672c\u53f7",id:"\u5173\u4e8e\u7248\u672c\u53f7",level:2}],s={toc:m};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5305\u7ba1\u7406\u5668"},"\u5305\u7ba1\u7406\u5668"),(0,l.kt)("p",null,"\u5305\u7ba1\u7406\u5668\u53c8\u79f0\u8f6f\u4ef6\u5305\u7ba1\u7406\u7cfb\u7edf\uff0c\u662f\u4e00\u79cd\u5de5\u5177\uff0c\u5b83\u5141\u8bb8\u7528\u6237\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5\u3001\u5220\u9664\u3001\u5347\u7ea7\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u8f6f\u4ef6\u5305\u3002"),(0,l.kt)("h2",{id:"npm"},"NPM"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NPM"),"(Node Package Manager), Node \u7684\u5305\u7ba1\u7406\u5668\uff0c\u4e5f\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002\u5b89\u88c5\u5b8c nodejs \u4e4b\u540e\u4f1a\u81ea\u52a8\u5b89\u88c5 npm\u3002"),(0,l.kt)("p",null,"Node.js \u7684\u5305\u57fa\u672c\u9075\u5faa CommonJS \u89c4\u8303\uff0c\u5c06\u4e00\u7ec4\u76f8\u5173\u7684\u6a21\u5757\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u5f62\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u5de5\u5177\u3002\n\u901a\u8fc7 NPM \u53ef\u4ee5\u5bf9 Node \u7684\u5de5\u5177\u5305\u8fdb\u884c\u641c\u7d22\u3001\u4e0b\u8f7d\u3001\u5b89\u88c5\u3001\u5220\u9664\u3001\u4e0a\u4f20\u3002\u501f\u52a9\u522b\u4eba\u5199\u597d\u7684\u5305\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u7684\u5f00\u53d1\u66f4\u52a0\u65b9\u4fbf\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," \u76ee\u5f55\u662f\u4e0d\u80fd\u8fdb\u5165 Git \u4ed3\u5e93\u7684"),(0,l.kt)("p",null,"\u67e5\u770b npm \u7684\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm -v"),"\u3002\n\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm init --yes"),"\u3002\n\u8fd0\u884c\u540e\u4f1a\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "1-npm",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n')),(0,l.kt)("admonition",{title:"\u6ce8\u610f\uff1a",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u751f\u6210\u7684\u5305\u540d\u4e0d\u80fd\u4f7f\u7528\u4e2d\u6587\u3001\u5927\u5199\uff01",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e0d\u80fd\u4f7f\u7528 npm \u4f5c\u4e3a\u5305\u7684\u540d\u5b57")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html"},"\u5173\u4e8e\u5f00\u6e90\u8bc1\u4e66\u6269\u5c55\u9605\u8bfb")),(0,l.kt)("p",null,"\u641c\u7d22\u5305 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm search jquery")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm s jquery"),"\n\u4e00\u822c\u5728\u641c\u7d22\u5de5\u5177\u5305\u7684\u65f6\u5019\uff0c\u4f1a\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"https://www.npmjs.com/")," \u641c\u7d22"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u5de5\u5177\u5305")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install jquery")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm i jquery")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\u5e76\u5728 package.json \u4e2d\u4fdd\u5b58\u5305\u7684\u4fe1\u606f(dependencies \u5c5e\u6027)\nnpm install jquery --save\nnpm install jquery -S\n \n# \u5b89\u88c5\u5e76\u5728 package.json \u4e2d\u4fdd\u5b58\u5305\u7684\u4fe1\u606f(devDependencies \u5c5e\u6027)\nnpm install babel --save-dev\nnpm install babel -D\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5168\u5c40\u5b89\u88c5")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install less -g")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install nodemon -g")),(0,l.kt)("p",null,"\u5168\u5c40\u5b89\u88c5\u4e00\u822c\u7528\u4e8e\u5b89\u88c5\u5168\u5c40\u5de5\u5177\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"cnpm"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"gulp")," \u7b49\u3002\n\u5168\u5c40\u5b89\u88c5\u547d\u4ee4\u5728\u4efb\u610f\u7684\u547d\u4ee4\u884c\u4e0b, \u90fd\u53ef\u4ee5\u6267\u884c\u3002",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"npm root -g")," \u67e5\u770b\u5168\u5c40\u5b89\u88c5\u7684\u76ee\u5f55\u7684\u4f4d\u7f6e\uff0c\u5168\u5c40\u547d\u4ee4\u7684\u5b89\u88c5\u4f4d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Users\\\u4f60\u7684\u7528\u6237\u540d\\AppData\\Roaming\\npm")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u4f9d\u8d56")," \u6839\u636e package.json \u4e2d\u7684\u4f9d\u8d56\u58f0\u660e\uff0c \u5b89\u88c5\u5de5\u5177\u5305"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"npm i")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"npm install")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"npm i --production")," // \u53ea\u5b89\u88c5 dependencies \u4e2d\u7684\u4f9d\u8d56")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u79fb\u9664\u5305")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm remove jquery")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4f4d\u5230\u4e00\u4e2a\u6587\u4ef6\u5939\u4e0b(\u65b0\u5efa\u6216\u8005\u5df2\u7ecf\u5b58\u5728\u7684)"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8\u547d\u4ee4\u884c\u5c06\u5de5\u4f5c\u76ee\u5f55\u5b9a\u4f4d\u5230\u7b2c\u4e00\u6b65\u7684\u6587\u4ef6\u4e2d\u7684"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"npm init")," (\u53ea\u9700\u8981\u8fd0\u884c\u4e00\u6b21)"),(0,l.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"npm i \u5305\u540d")," \u5b89\u88c5\u5de5\u5177\u5305")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"npm\u6e05\u9664\u7f13\u5b58")),(0,l.kt)("p",null,"npm i \u5b89\u88c5\u5305\u9519\u8bef\u7684\u65f6\u5019, \u53ef\u4ee5\u5c1d\u8bd5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm cache clean")),(0,l.kt)("h3",{id:"\u4f7f\u7528npm\u6267\u884c\u811a\u672c"},"\u4f7f\u7528npm\u6267\u884c\u811a\u672c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f16\u5199js\u811a\u672c"),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6epackage.json\uff08\u5982\u679c\u6ca1\u6709package.json, \u5219\u8fd0\u884c npm init\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0script\u4e2d\u7684\u5c5e\u6027",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "server": "node app.js"\n  }\n}\n'))),(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \u540e\u5c31\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"npm run server")," \u8fd0\u884c app.js")),(0,l.kt)("h3",{id:"\u5c01\u88c5npm\u5305"},"\u5c01\u88c5NPM\u5305"),(0,l.kt)("p",null,"\u521b\u5efa\u81ea\u5df1\u7684 NPM \u5305\u53ef\u4ee5\u5e2e\u52a9\u4ee3\u7801\u8fdb\u884c\u8fed\u4ee3\u8fdb\u5316\uff0c\u4f7f\u7528\u6b65\u9aa4\u4e5f\u6bd4\u8f83\u7b80\u5355"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u4e3a\u5b98\u65b9\u7684\u5730\u5740 ",(0,l.kt)("inlineCode",{parentName:"li"},"npm config set registry https://registry.npmjs.org/")),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6587\u4ef6\u5939\uff0c\u5e76\u521b\u5efa\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"li"},"index.js"),"\uff0c \u5728\u6587\u4ef6\u4e2d\u58f0\u660e\u51fd\u6570\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"module.exports")," \u66b4\u9732"),(0,l.kt)("li",{parentName:"ol"},"npm \u521d\u59cb\u5316\u5de5\u5177\u5305\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \u586b\u5199\u5305\u7684\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ol"},"\u8d26\u53f7\u6ce8\u518c\uff08\u6fc0\u6d3b\u8d26\u53f7\uff09,",(0,l.kt)("strong",{parentName:"li"},"\u5b8c\u6210\u90ae\u7bb1\u9a8c\u8bc1")),(0,l.kt)("li",{parentName:"ol"},"\u547d\u4ee4\u884c\u4e0b \u300e",(0,l.kt)("inlineCode",{parentName:"li"},"npm login"),"\u300f \u586b\u5199\u76f8\u5173\u7528\u6237\u4fe1\u606f (\u4e00\u5b9a\u8981\u5728\u5305\u7684\u6587\u4ef6\u5939\u4e0b\u8fd0\u884c)"),(0,l.kt)("li",{parentName:"ol"},"\u547d\u4ee4\u884c\u4e0b\u300e ",(0,l.kt)("inlineCode",{parentName:"li"},"npm publish"),"\u300f \u63d0\u4ea4\u5305 \ud83d\udc4c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"npm \u6709\u5783\u573e\u68c0\u6d4b\u673a\u5236\uff0c\u5982\u679c\u540d\u5b57\u7b80\u5355\u6216\u505a\u6d4b\u8bd5\u63d0\u4ea4\uff0c\u5f88\u53ef\u80fd\u4f1a\u88ab\u62d2\u7edd\u63d0\u4ea4"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c1d\u8bd5\u6539\u4e00\u4e0b\u5305\u7684\u540d\u79f0\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u5347\u7ea7 NPM \u5305\uff0c\u9700\u8981\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u7684\u7248\u672c\u53f7\u4fee\u6539\uff0c\u53ea\u9700\u8981\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"npm publish")," \u5c31\u53ef\u4ee5\u80fd\u63d0\u4ea4",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5305\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," \u4e2d\u7248\u672c\u53f7"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"npm publish")," \u63d0\u4ea4")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5220\u9664NPM\u5305")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm unpublish \u5305\u540d --force")),(0,l.kt)("h3",{id:"npm\u914d\u7f6e\u955c\u50cf\u5730\u5740"},"npm\u914d\u7f6e\u955c\u50cf\u5730\u5740"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"//\u6dd8\u5b9d\u955c\u50cf\nnpm config set registry https://registry.npm.taobao.org\n//\u5b98\u65b9\u955c\u50cf   \nnpm config set registry https://registry.npmjs.org/\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5728\u53d1\u5e03\u5de5\u5177\u7684\u65f6\u5019, \u4e00\u5b9a\u8981\u5c06\u4ed3\u5e93\u5730\u5740\u4fee\u6539\u4e3a\u5b98\u65b9\u7684\u5730\u5740")),(0,l.kt)("h2",{id:"cnpm"},"CNPM"),(0,l.kt)("p",null,"cnpm \u662f\u6dd8\u5b9d\u5bf9\u56fd\u5916 npm \u670d\u52a1\u5668\u7684\u4e00\u4e2a\u5b8c\u6574\u955c\u50cf\u7248\u672c\uff0c\u4e5f\u5c31\u662f\u6dd8\u5b9d npm \u955c\u50cf\uff0c\u7f51\u7ad9\u5730\u5740 ",(0,l.kt)("inlineCode",{parentName:"p"},"http://npm.taobao.org/")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install -g cnpm --registry=https://registry.npm.taobao.org")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528")," \u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 cnpm \u547d\u4ee4\u6765\u7ba1\u7406\u5305\uff0c\u4f7f\u7528\u65b9\u6cd5\u8ddf npm \u4e00\u6837 ",(0,l.kt)("inlineCode",{parentName:"p"},"cnpm install lodash")),(0,l.kt)("p",null,"cnpm \u5b89\u88c5\u65f6\u4e00\u5b9a\u8981\u52a0 -S \u9009\u9879"),(0,l.kt)("h2",{id:"yarn"},"yarn"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"yarn")," \u662f Facebook \u5f00\u6e90\u7684\u65b0\u7684\u5305\u7ba1\u7406\u5668\uff0c\u53ef\u4ee5\u7528\u6765\u4ee3\u66ff npm\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"yarn \u76f8\u6bd4\u4e8e npm \u6709\u51e0\u4e2a\u7279\u70b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u672c\u5730\u7f13\u5b58\u3002\u5b89\u88c5\u8fc7\u7684\u5305\u4e0b\u6b21\u4e0d\u4f1a\u8fdb\u884c\u8fdc\u7a0b\u5b89\u88c5"),(0,l.kt)("li",{parentName:"ul"},"\u5e76\u884c\u4e0b\u8f7d\u3002\u4e00\u6b21\u4e0b\u8f7d\u591a\u4e2a\u5305\uff0c\u800c npm \u662f\u4e32\u884c\u4e0b\u8f7d"),(0,l.kt)("li",{parentName:"ul"},"\u7cbe\u51c6\u7684\u7248\u672c\u63a7\u5236\u3002\u4fdd\u8bc1\u6bcf\u6b21\u5b89\u88c5\u8ddf\u4e0a\u6b21\u90fd\u662f\u4e00\u6837\u7684")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b89\u88c5")," ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install --global yarn")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u76f8\u5173\u547d\u4ee4")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn --version")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn init")," //\u751f\u6210package.json"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn global add package")," \uff08\u5168\u5c40\u5b89\u88c5\uff09 \u5168\u5c40\u5b89\u88c5\u8def\u5f84\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\\u4f60\u7684\u7528\u6237\u540d\\AppData\\Local\\Yarn\\bin")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn global remove less")," \uff08\u5168\u5c40\u5220\u9664\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn add package")," \uff08\u5c40\u90e8\u5b89\u88c5\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn add package --dev")," \uff08\u76f8\u5f53\u4e8enpm\u4e2d\u7684--save-dev\uff09"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn remove package")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn list")," //\u5217\u51fa\u5df2\u7ecf\u5b89\u88c5\u7684\u5305\u540d \u7528\u7684\u5f88\u5c11"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn info packageName")," //\u83b7\u53d6\u5305\u7684\u6709\u5173\u4fe1\u606f \u51e0\u4e4e\u4e0d\u7528"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"yarn")," //\u5b89\u88c5package.json\u4e2d\u7684\u6240\u6709\u4f9d\u8d56")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"yarn \u4fee\u6539\u4ed3\u5e93\u5730\u5740")," ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn config set registry https://registry.npm.taobao.org")),(0,l.kt)("h2",{id:"cyarn"},"Cyarn"),(0,l.kt)("p",null,"\u8ddf npm \u4e0e cnpm \u7684\u5173\u7cfb\u4e00\u6837\uff0c\u53ef\u4ee5\u4e3a yarn \u8bbe\u7f6e\u56fd\u5185\u7684\u6dd8\u5b9d\u955c\u50cf\uff0c\u63d0\u5347\u5b89\u88c5\u7684\u901f\u5ea6\u3002\u914d\u7f6e\u540e\uff0c\u53ea\u9700\u5c06yarn\u6539\u4e3acyarn\u4f7f\u7528\u5373\u53ef\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},'npm install cyarn -g --registry "https://registry.npm.taobao.org"')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"yarn.lock")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"package-lock.json")," \u9501\u6587\u4ef6\uff0c\u7528\u6765\u9501\u4f4f\u7248\u672c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u662f\u505a\u9879\u76ee\u7684\u65f6\u5019, \u4e00\u5b9a\u8981\u6709\u5b83\u3002"),(0,l.kt)("h2",{id:"\u5173\u4e8e\u7248\u672c\u53f7"},"\u5173\u4e8e\u7248\u672c\u53f7"),(0,l.kt)("p",null,"\u7248\u672c\u683c\u5f0f\uff1a\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"^3.0.0"'),"\uff1a\u9501\u5b9a\u4e3b\u7248\u672c\uff0c\u4ee5\u540e\u5b89\u88c5\u5305\u7684\u65f6\u5019\uff0c\u4fdd\u8bc1\u5305\u662f3.x.x\u7248\u672c\uff0cx\u9ed8\u8ba4\u53d6\u6700\u65b0\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"~3.2.x"'),"\uff1a\u9501\u5b9a\u5c0f\u7248\u672c\uff0c\u4ee5\u540e\u5b89\u88c5\u5305\u7684\u65f6\u5019\uff0c\u4fdd\u8bc1\u5305\u662f3.1.x\u7248\u672c\uff0cx\u9ed8\u8ba4\u53d6\u6700\u65b0\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"3.1.1"'),"\uff1a\u9501\u5b9a\u5b8c\u6574\u7248\u672c\uff0c\u4ee5\u540e\u5b89\u88c5\u5305\u7684\u65f6\u5019\uff0c\u4fdd\u8bc1\u5305\u5fc5\u987b\u662f3.1.1\u7248\u672c\u3002")),(0,l.kt)("p",null,"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\u7684\u5de5\u5177\u5305 ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn add jquery@1.11.2")))}k.isMDXComponent=!0}}]);