"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,N=s["".concat(p,".").concat(d)]||s[d]||k[d]||r;return n?l.createElement(N,i(i({ref:t},m),{},{components:n})):l.createElement(N,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="Node",o={unversionedId:"study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840",id:"study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840",title:"Node",description:"Node.js \u662f\u4e00\u4e2a\u57fa\u4e8e Chrome V8 \u5f15\u64ce\u7684 JavaScript \u8fd0\u884c\u73af\u5883\uff0c\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/docs/study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840.md",sourceDirName:"study-notes/nodejs\u7b14\u8bb0",slug:"/study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/nodejs\u7b14\u8bb0/\u57fa\u7840.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Node",permalink:"/docs/category/node"},next:{title:"\u5305\u7ba1\u7406\u5668",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/\u5305\u7ba1\u7406\u5668"}},p={},u=[{value:"Buffer\uff08\u7f13\u51b2\u5668\uff09",id:"buffer\u7f13\u51b2\u5668",level:2},{value:"\u521b\u5efaBuffer",id:"\u521b\u5efabuffer",level:3},{value:"Buffer\u8bfb\u53d6\u548c\u5199\u5165",id:"buffer\u8bfb\u53d6\u548c\u5199\u5165",level:3},{value:"\u6587\u4ef6\u7cfb\u7edf fs",id:"\u6587\u4ef6\u7cfb\u7edf-fs",level:2},{value:"\u6587\u4ef6\u5199\u5165",id:"\u6587\u4ef6\u5199\u5165",level:3},{value:"\u6587\u4ef6\u8bfb\u53d6",id:"\u6587\u4ef6\u8bfb\u53d6",level:3},{value:"\u6587\u4ef6\u5220\u9664",id:"\u6587\u4ef6\u5220\u9664",level:3},{value:"\u79fb\u52a8\u6587\u4ef6 + \u91cd\u547d\u540d",id:"\u79fb\u52a8\u6587\u4ef6--\u91cd\u547d\u540d",level:3},{value:"\u6587\u4ef6\u5939\u64cd\u4f5c",id:"\u6587\u4ef6\u5939\u64cd\u4f5c",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"unicode \u5b57\u7b26\u96c6",id:"unicode-\u5b57\u7b26\u96c6",level:3}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node"},"Node"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/"},(0,a.kt)("strong",{parentName:"a"},"Node.js"))," \u662f\u4e00\u4e2a\u57fa\u4e8e Chrome V8 \u5f15\u64ce\u7684 JavaScript \u8fd0\u884c\u73af\u5883\uff0c\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728 CMD \u547d\u4ee4\u884c\u7a97\u53e3\u4e0b\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"node -v"),"\uff0c\u5982\u663e\u793a\u7248\u672c\u53f7\u5219\u8bc1\u660e\u5b89\u88c5\u6210\u529f\uff0c\u53cd\u4e4b\u5b89\u88c5\u5931\u8d25\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\uff1a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs")," \u73af\u5883\u4e0b\uff0c\u4e0d\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"BOM")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"DOM")," \uff0c\u4e5f\u6ca1\u6709\u5168\u5c40\u5bf9\u8c61 ",(0,a.kt)("inlineCode",{parentName:"p"},"window"),"\uff0c\u5168\u5c40\u5bf9\u8c61\u7684\u540d\u5b57\u53eb ",(0,a.kt)("inlineCode",{parentName:"p"},"global"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a")," \u89e3\u6790\u8fd0\u884cJS\u4ee3\u7801\uff0c\u64cd\u4f5c\u7cfb\u7edf\u8d44\u6e90\uff0c\u5982\u5185\u5b58\u3001\u786c\u76d8\u3001\u7f51\u7edc\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e94\u7528\u573a\u666f")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"APP \u63a5\u53e3\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u9875\u804a\u5929\u5ba4"),(0,a.kt)("li",{parentName:"ul"},"\u52a8\u6001\u7f51\u7ad9, \u4e2a\u4eba\u535a\u5ba2, \u8bba\u575b, \u5546\u57ce\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u7684Web\u670d\u52a1\uff0c\u4f8b\u5982\u670d\u52a1\u5668\u7aef\u7684\u8bf7\u6c42\uff08\u722c\u866b\uff09\uff0c\u4ee3\u7406\u8bf7\u6c42\uff08\u8de8\u57df\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u524d\u7aef\u9879\u76ee\u6253\u5305(webpack, gulp)")),(0,a.kt)("h2",{id:"buffer\u7f13\u51b2\u5668"},"Buffer\uff08\u7f13\u51b2\u5668\uff09"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")," \u662f\u4e00\u4e2a\u548c\u6570\u7ec4\u7c7b\u4f3c\u7684\u5bf9\u8c61\uff0c\u4e0d\u540c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")," \u662f\u4e13\u95e8\u7528\u6765\u4fdd\u5b58\u4e8c\u8fdb\u5236\u6570\u636e\u7684"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5927\u5c0f\u56fa\u5b9a\uff1a\u5728\u521b\u5efa\u65f6\u5c31\u786e\u5b9a\u4e86\uff0c\u4e14\u65e0\u6cd5\u8c03\u6574"),(0,a.kt)("li",{parentName:"ul"},"\u6027\u80fd\u8f83\u597d\uff1a\u76f4\u63a5\u5bf9\u8ba1\u7b97\u673a\u7684\u5185\u5b58\u8fdb\u884c\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5143\u7d20\u5927\u5c0f\u4e3a 1 \u5b57\u8282\uff08byte\uff09")),(0,a.kt)("h3",{id:"\u521b\u5efabuffer"},"\u521b\u5efaBuffer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Buffer.alloc")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5b89\u5168\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Buffer.allocUnsafe")),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6570\u7ec4\u548c\u5b57\u7b26\u4e32\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Buffer.from"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//Buffer \u7684\u58f0\u660e\u521b\u5efa\nconst buf_1 = Buffer.alloc(10);\nconst buf_2 = Buffer.allocUnsafe(10);\nconst buf_3 = Buffer.from('hello world');//from \u6765\u81ea\nconsole.log(buf_1);\nconsole.log(buf_2);\nconsole.log(buf_3);\n\n//Buffer\u5185\u5bb9\u7684\u8bfb\u53d6\u548c\u8bbe\u7f6e\n//\u83b7\u53d6\u7b2c\u4e00\u4e2a\u5b57\u8282\u7684\u5185\u5bb9\nconsole.log(buf_3[0]);\n\n//\u901a\u8fc7\u6570\u5b57\u83b7\u53d6\u5bf9\u5e94\u7684ASCII\u5b57\u7b26\nconsole.log(String.fromCharCode(105));\n//\u901a\u8fc7ASCII\u83b7\u53d6\u5bf9\u5e94\u7684\u7f16\u53f7\nconsole.log('a'.charCodeAt());\n//\u5c06Buffer\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\nconsole.log(buf_3.toString());\n\n//\u8bbe\u7f6e\nbuf_3[0] = 99;\nconsole.log(buf_3.toString());\n\n//\u83b7\u53d6buffer\u5b58\u50a8\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32\u8868\u793a\n\n//\u5173\u4e8e\u6ea2\u51fa  \u820d\u53bb\u9ad8\u4e8e8\u4f4d\u7684\u5185\u5bb9   0001 0010 1100 ==> 0010 1100 ==>\nbuf_3[0] = 300;\nconsole.log(buf_3);\nconsole.log(buf_3.toString());\n\n//\u5173\u4e8e\u4e2d\u6587\uff0c\u4e00\u4e2aUTF-8\u4e2d\u6587\u5b57\u7b26\u5360\u636e\u4e09\u4e2a\u5b57\u8282\nconst buf_4 = Buffer.from('\u6211\u7231\u4f60');\nconsole.log(buf_4);\n\n//\u5b57\u7b26\u96c6\n")),(0,a.kt)("h3",{id:"buffer\u8bfb\u53d6\u548c\u5199\u5165"},"Buffer\u8bfb\u53d6\u548c\u5199\u5165"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"[]")," \u7684\u65b9\u5f0f\u5bf9\u6570\u636e\u8fdb\u884c\u5904\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"toString")," \u65b9\u6cd5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"Buffer")," \u8f93\u51fa\u4e3a\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[]")," \u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"buffer")," \u8fdb\u884c\u8bfb\u53d6\u548c\u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toString()")," \u5c06 Buffer \u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u6ea2\u51fa\uff1a")," \u6ea2\u51fa\u7684\u9ad8\u4f4d\u6570\u636e\u4f1a\u820d\u5f03\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u4e2d\u6587\uff1a")," \u4e00\u4e2a UTF-8 \u7684\u4e2d\u6587\u5b57\u7b26\u5927\u591a\u6570\u60c5\u51b5\u90fd\u662f\u5360 3 \u4e2a\u5b57\u8282\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u5355\u4f4d\u6362\u7b97\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1Bit \u5bf9\u5e94\u7684\u662f 1 \u4e2a\u4e8c\u8fdb\u5236\u4f4d"),(0,a.kt)("li",{parentName:"ul"},"8 Bit = 1 \u5b57\u8282\uff08Byte\uff09"),(0,a.kt)("li",{parentName:"ul"},"1024Byte = 1KB"),(0,a.kt)("li",{parentName:"ul"},"1024KB = 1MB"),(0,a.kt)("li",{parentName:"ul"},"1024MB = 1GB"),(0,a.kt)("li",{parentName:"ul"},"1024GB = 1TB"),(0,a.kt)("li",{parentName:"ul"},"\u5e73\u65f6\u6240\u8bf4\u7684\u7f51\u901f 10M 20M 100M \u8fd9\u91cc\u6307\u7684\u662f Bit \uff0c\u6240\u4ee5\u7406\u8bba\u4e0b\u8f7d\u901f\u5ea6 \u9664\u4ee5 8 \u624d\u662f\u6b63\u5e38\u7684\u7406\u89e3\u7684\u4e0b\u8f7d\u901f\u5ea6")),(0,a.kt)("h2",{id:"\u6587\u4ef6\u7cfb\u7edf-fs"},"\u6587\u4ef6\u7cfb\u7edf fs"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fs")," \u5168\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"file system"),"\uff0c\u662f NodeJS \u4e2d\u7684\u5185\u7f6e\u6a21\u5757\uff0c\u53ef\u4ee5\u5bf9\u8ba1\u7b97\u673a\u4e2d\u7684\u6587\u4ef6\u8fdb\u884c\u589e\u5220\u6539\u67e5\u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5982\u4f55\u5224\u5b9a\u56de\u8c03\u7684\u6267\u884c\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65\u7684?")," \u5c1d\u8bd5\u5728\u56de\u8c03\u4e2d\u8fdb\u884c\u5185\u5bb9\u8f93\u51fa, \u7136\u540e\u5728\u56de\u8c03\u540e\u4e5f\u8fdb\u884c\u8f93\u51fa, \u7136\u540e\u5bf9\u6bd4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5173\u4e8e\u540c\u6b65API\u4e0e\u5f02\u6b65 API\u7684\u9009\u62e9\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8981\u505a\u670d\u52a1, \u9700\u8981\u4f7f\u7528\u300e\u5f02\u6b65\u300f"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u505a\u6587\u4ef6\u76f8\u5173\u7684\u5904\u7406, \u4e0d\u6d89\u53ca\u4e3a\u7528\u6237\u63d0\u4f9b\u670d\u52a1, \u53ef\u4ee5\u4f7f\u7528\u540c\u6b65API(\u7b80\u5355\u5199\u5165, \u8bfb\u53d6)")),(0,a.kt)("h3",{id:"\u6587\u4ef6\u5199\u5165"},"\u6587\u4ef6\u5199\u5165"),(0,a.kt)("p",null,"\u9700\u8981\u6301\u4e45\u5316\u4fdd\u5b58\u6570\u636e\u7684\u65f6\u5019\uff0c\u9700\u8981\u60f3\u5230\u6587\u4ef6\u5199\u5165\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u7b80\u5355\u7684\u5199\u5165\u6b21\u6570\u8f83\u5c11\u7684\u60c5\u51b5, \u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"writeFile")," , \u5982\u679c\u662f\u6279\u91cf\u8981\u5199\u5165\u7684\u573a\u666f,\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"createWriteStream")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5355\u5199\u5165")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.writeFile(file, data, [,options], callback);")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.writeFileSync(file, data);")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," \u9009\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"encoding")," ",(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"'utf8'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode"),(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"0o666")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flag")," ",(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"'w'"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d41\u5f0f\u5199\u5165")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.createWriteStream(path[, options])"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"flags"),"   ",(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"'w'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"encoding "),(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"'utf8'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode"),"   ",(0,a.kt)("strong",{parentName:"li"},"\u9ed8\u8ba4\u503c:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"0o666")))),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"li"},"open")," ",(0,a.kt)("inlineCode",{parentName:"li"},"close")," ",(0,a.kt)("inlineCode",{parentName:"li"},"eg"),":  ",(0,a.kt)("inlineCode",{parentName:"li"},"ws.on('open', function(){});"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//1\u3001\u5f15\u5165fs\nconst fs = require('fs');\n\n//2\u3001\u521b\u5efa\u5199\u5165\u6d41\u5bf9\u8c61\nconst ws = fs.createWriteStream('./home.html');\n\n//3\u3001\u6267\u884c\u5199\u5165\nws.write('\u5de7\u5408\u662f\u4e0a\u5e1d\u9ed8\u9ed8\u64cd\u63a7\u4e16\u754c\u7684\u65b9\u5f0f\u3002');\nws.write('\u8046\u542c\u96e8\u843d\u7684\u58f0\u97f3\uff0c\u4fef\u770b\u51cb\u96f6\u7684\u843d\u53f6\u3002\u4f2b\u7ec6\u96e8\u4e4b\u4e2d\uff0c\u611f\u96e8\u843d\u4e4b\u6b87\u3002');\n\n//4\u3001\u5173\u95ed\u5199\u5165\u6d41\nws.close();\n\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5199\u5165\u6587\u4ef6\u573a\u666f")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u65e5\u5fd7(\u7a0b\u5e8f\u65e5\u8bb0) \u5982 Git"),(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ol"},"\u7f51\u76d8"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u5668\u4fdd\u5b58\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u89c6\u9891\u5f55\u5236")),(0,a.kt)("h3",{id:"\u6587\u4ef6\u8bfb\u53d6"},"\u6587\u4ef6\u8bfb\u53d6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u5355\u8bfb\u53d6")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.readFile(file, function(err, data){})")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.readFileSync(file)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d41\u5f0f\u8bfb\u53d6")," ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.createReadStream();")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//1\u3001\u5f15\u5165fs\u6a21\u5757\nconst fs = require('fs');\n\n//2\u3001\u521b\u5efa\u8bfb\u53d6\u6d41\u5bf9\u8c61\nconst rs = fs.createReadStream('./index.html');\n\n//3\u3001\u7ed1\u5b9a\u4e8b\u4ef6 when \u5f53...\u65f6\u5019\n//chunk \u5757   \u5f53\u8bfb\u53d6\u5b8c\u4e00\u5757\u6570\u636e\u540e\u89e6\u53d1\nrs.on('data', chunk => {\n    console.log(chunk.toString());\n});\n\n//\u8bfb\u53d6\u6d41\u6253\u5f00\u7684\u65f6\u5019\u89e6\u53d1\nrs.on('open', () => {\n    console.log('\u8bfb\u53d6\u6d41\u6253\u5f00\u4e86');\n})\n\nrs.close();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="json\u8bfb\u53d6"',title:'"json\u8bfb\u53d6"'},"//1\u3001\u5f15\u5165\u6a21\u5757\nconst fs = require('fs');\n\n//2\u3001\u8bfb\u53d6\nfs.readFile('data.json', (err, data) => {\n    if (err) throw err;\n    //\u5c06Buffer\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u5e76\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\n    let str = data.toString();\n    //\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5bf9\u8c61\n    let dataJSON = JSON.parse(str);\n    console.log(dataJSON);\n})\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u5c0f\u6587\u4ef6\u8bfb\u53d6\u548c\u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"readFile"),(0,a.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u5927\u6587\u4ef6\u8bfb\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"createReadStream"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bfb\u53d6\u6587\u4ef6\u573a\u666f")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u7a0b\u5e8f\u8fd0\u884c"),(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u8bfb\u53d6\uff08\u6570\u636e\u5e93\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u65e5\u5fd7 (git log)"),(0,a.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u5668\u6253\u5f00\u6587\u4ef6")),(0,a.kt)("h3",{id:"\u6587\u4ef6\u5220\u9664"},"\u6587\u4ef6\u5220\u9664"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.unlink('./test.log', function(err){});")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.unlinkSync('./move.txt');"))),(0,a.kt)("h3",{id:"\u79fb\u52a8\u6587\u4ef6--\u91cd\u547d\u540d"},"\u79fb\u52a8\u6587\u4ef6 + \u91cd\u547d\u540d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.rename('./1.log', '2.log', function(err){})")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fs.renameSync('1.log','2.log')"))),(0,a.kt)("h3",{id:"\u6587\u4ef6\u5939\u64cd\u4f5c"},"\u6587\u4ef6\u5939\u64cd\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir")," \u521b\u5efa\u6587\u4ef6\u5939",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recursive")," \u662f\u5426\u9012\u5f52\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode")," \u6743\u9650 \u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"0o777")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"callback")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rmdir")," \u5220\u9664\u6587\u4ef6\u5939"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readdir")," \u8bfb\u53d6\u6587\u4ef6\u5939")),(0,a.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,a.kt)("h3",{id:"unicode-\u5b57\u7b26\u96c6"},"unicode \u5b57\u7b26\u96c6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.tamasoft.co.jp/en/general-info/unicode.html"},"https://www.tamasoft.co.jp/en/general-info/unicode.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/whiteyun/archive/2010/07/06/1772218.html"},"https://www.cnblogs.com/whiteyun/archive/2010/07/06/1772218.html")))),(0,a.kt)("iframe",{src:"https://www.tamasoft.co.jp/en/general-info/unicode.html",width:"100%",height:"500px",frameborder:"0"}))}k.isMDXComponent=!0}}]);