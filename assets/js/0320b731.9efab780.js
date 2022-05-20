"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4630],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=l,N=c["".concat(p,".").concat(d)]||c[d]||k[d]||i;return n?a.createElement(N,r(r({ref:t},m),{},{components:n})):a.createElement(N,r({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return k}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),r=["components"],o={sidebar_position:1},p="\u4e00\u3001\u6570\u636e\u7c7b\u578b",u={unversionedId:"interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b",id:"interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b",title:"\u4e00\u3001\u6570\u636e\u7c7b\u578b",description:"001 - JavaScript\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u4eec\u7684\u533a\u522b\uff1f",source:"@site/docs/interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b.mdx",sourceDirName:"interview-questions/JavaScript",slug:"/interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b",permalink:"/docs/interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JavaScript\u9762\u8bd5\u9898",permalink:"/docs/category/javascript\u9762\u8bd5\u9898"},next:{title:"\u4e8c\u3001ES6",permalink:"/docs/interview-questions/JavaScript/ES6"}},m={},k=[{value:"001 - JavaScript\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u4eec\u7684\u533a\u522b\uff1f",id:"001---javascript\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\u5b83\u4eec\u7684\u533a\u522b",level:2},{value:"002 - \u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b",id:"002---\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b",level:2},{value:"003 - \u5224\u65ad\u6570\u7ec4\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b",id:"003---\u5224\u65ad\u6570\u7ec4\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b",level:2},{value:"004 - <code>null</code>\u548c<code>undefined</code>\u533a\u522b",id:"004---null\u548cundefined\u533a\u522b",level:2},{value:"005 - \u5982\u4f55\u83b7\u53d6\u5b89\u5168\u7684 <code>undefined</code> \u503c\uff1f",id:"005---\u5982\u4f55\u83b7\u53d6\u5b89\u5168\u7684-undefined-\u503c",level:2},{value:"006 - <code>typeof NaN</code> \u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f",id:"006---typeof-nan-\u7684\u7ed3\u679c\u662f\u4ec0\u4e48",level:2},{value:"007 - <code>isNaN</code> \u548c <code>Number.isNaN</code> \u51fd\u6570\u7684\u533a\u522b\uff1f",id:"007---isnan-\u548c-numberisnan-\u51fd\u6570\u7684\u533a\u522b",level:2},{value:"008 - == \u64cd\u4f5c\u7b26\u7684\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219\uff1f",id:"008----\u64cd\u4f5c\u7b26\u7684\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219",level:2},{value:"009 - \u5176\u4ed6\u503c\u5230\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\u89c4\u5219\uff1f",id:"009---\u5176\u4ed6\u503c\u5230\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"010 - \u5176\u4ed6\u503c\u5230\u6570\u5b57\u503c\u7684\u8f6c\u6362\u89c4\u5219\uff1f",id:"010---\u5176\u4ed6\u503c\u5230\u6570\u5b57\u503c\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"011 - \u5176\u4ed6\u503c\u5230\u5e03\u5c14\u7c7b\u578b\u7684\u503c\u7684\u8f6c\u6362\u89c4\u5219\uff1f",id:"011---\u5176\u4ed6\u503c\u5230\u5e03\u5c14\u7c7b\u578b\u7684\u503c\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"012 - || \u548c &amp;&amp; \u64cd\u4f5c\u7b26\u7684\u8fd4\u56de\u503c\uff1f",id:"012----\u548c--\u64cd\u4f5c\u7b26\u7684\u8fd4\u56de\u503c",level:2},{value:"013 - Object.is(value1, value2) \u4e0e\u6bd4\u8f83\u64cd\u4f5c\u7b26 \u201c===\u201d\u3001\u201c==\u201d \u7684\u533a\u522b\uff1f",id:"013---objectisvalue1-value2-\u4e0e\u6bd4\u8f83\u64cd\u4f5c\u7b26--\u7684\u533a\u522b",level:2},{value:"014 - \u4ec0\u4e48\u662f JavaScript \u4e2d\u7684\u5305\u88c5\u7c7b\u578b\uff1f",id:"014---\u4ec0\u4e48\u662f-javascript-\u4e2d\u7684\u5305\u88c5\u7c7b\u578b",level:2},{value:"015 - +\u64cd\u4f5c\u7b26\u4ec0\u4e48\u65f6\u5019\u7528\u4e8e\u5b57\u7b26\u4e32\u7684\u62fc\u63a5\uff1f",id:"015---\u64cd\u4f5c\u7b26\u4ec0\u4e48\u65f6\u5019\u7528\u4e8e\u5b57\u7b26\u4e32\u7684\u62fc\u63a5",level:2},{value:"016 - \u4e3a\u4ec0\u4e48\u4f1a\u6709BigInt\u7684\u63d0\u6848\uff1f",id:"016---\u4e3a\u4ec0\u4e48\u4f1a\u6709bigint\u7684\u63d0\u6848",level:2},{value:"017 - object.assign\u548c\u6269\u5c55\u8fd0\u7b97\u6cd5\u662f\u6df1\u62f7\u8d1d\u8fd8\u662f\u6d45\u62f7\u8d1d\uff0c\u4e24\u8005\u533a\u522b",id:"017---objectassign\u548c\u6269\u5c55\u8fd0\u7b97\u6cd5\u662f\u6df1\u62f7\u8d1d\u8fd8\u662f\u6d45\u62f7\u8d1d\u4e24\u8005\u533a\u522b",level:2},{value:"018 - \u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u7a7a\u5bf9\u8c61",id:"018---\u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u7a7a\u5bf9\u8c61",level:2}],c={toc:k};function d(e){var t=e.components,o=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e00\u6570\u636e\u7c7b\u578b"},"\u4e00\u3001\u6570\u636e\u7c7b\u578b"),(0,i.kt)("h2",{id:"001---javascript\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\u5b83\u4eec\u7684\u533a\u522b"},"001 - JavaScript\u6709\u54ea\u4e9b\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u4eec\u7684\u533a\u522b\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32",(0,i.kt)("inlineCode",{parentName:"li"},"String")),(0,i.kt)("li",{parentName:"ul"},"\u6570\u5b57\u578b",(0,i.kt)("inlineCode",{parentName:"li"},"Number")),(0,i.kt)("li",{parentName:"ul"},"\u5e03\u5c14\u578b",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")),(0,i.kt)("li",{parentName:"ul"},"\u672a\u5b9a\u4e49",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Symbol")," (ES6\u65b0\u589e)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u578b",(0,i.kt)("inlineCode",{parentName:"li"},"Object")),(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u578b",(0,i.kt)("inlineCode",{parentName:"li"},"Array")),(0,i.kt)("li",{parentName:"ul"},"\u51fd\u6570\u578b",(0,i.kt)("inlineCode",{parentName:"li"},"Function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Date")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Math")),(0,i.kt)("li",{parentName:"ul"},"\u6b63\u5219",(0,i.kt)("inlineCode",{parentName:"li"},"RegExp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Map"),"(ES6\u65b0\u589e)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Set"),"(ES6\u65b0\u589e)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u533a\u522b")),(0,i.kt)("p",null,"\u4e24\u79cd\u7c7b\u578b\u7684\u533a\u522b\u5728\u4e8e\u5b58\u50a8\u4f4d\u7f6e\u7684\u4e0d\u540c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u76f4\u63a5\u5b58\u50a8\u5728\u6808\uff08stack\uff09\u4e2d\u7684\u7b80\u5355\u6570\u636e\u6bb5\uff0c\u5360\u636e\u7a7a\u95f4\u5c0f\u3001\u5927\u5c0f\u56fa\u5b9a\uff0c\u5c5e\u4e8e\u88ab\u9891\u7e41\u4f7f\u7528\u6570\u636e\uff0c\u6240\u4ee5\u653e\u5165\u6808\u4e2d\u5b58\u50a8"),(0,i.kt)("li",{parentName:"ul"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5b58\u50a8\u5728\u5806\uff08heap\uff09\u4e2d\u7684\u5bf9\u8c61\uff0c\u5360\u636e\u7a7a\u95f4\u5927\u3001\u5927\u5c0f\u4e0d\u56fa\u5b9a\u3002\u5982\u679c\u5b58\u50a8\u5728\u6808\u4e2d\uff0c\u5c06\u4f1a\u5f71\u54cd\u7a0b\u5e8f\u8fd0\u884c\u7684\u6027\u80fd\uff1b\n\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5728\u6808\u4e2d\u5b58\u50a8\u4e86\u6307\u9488\uff0c\u8be5\u6307\u9488\u6307\u5411\u5806\u4e2d\u8be5\u5b9e\u4f53\u7684\u8d77\u59cb\u5730\u5740\u3002\u5f53\u89e3\u91ca\u5668\u5bfb\u627e\u5f15\u7528\u503c\u65f6\uff0c\u4f1a\u9996\u5148\u68c0\u7d22\u5176\u5728\u6808\u4e2d\u7684\u5730\u5740\uff0c\u53d6\u5f97\u5730\u5740\u540e\u4ece\u5806\u4e2d\u83b7\u5f97\u5b9e\u4f53")),(0,i.kt)("h2",{id:"002---\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b"},"002 - \u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"typeof xxx"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u68c0\u6d4b\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff08\u9664",(0,i.kt)("inlineCode",{parentName:"li"},"Null"),"\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Null"),"\u4f1a\u88ab\u68c0\u6d4b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u5f15\u7528\u6570\u636e\u7c7b\u578b\u9664\uff08\u9664",(0,i.kt)("inlineCode",{parentName:"li"},"function"),"\u5916\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"function"),"\u4f1a\u88ab\u68c0\u6d4b\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"function"),"\uff09\u4f1a\u88ab\u68c0\u6d4b\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"object")),(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7ed3\u679c\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e14\u7c7b\u578b\u7b2c\u4e00\u4e2a\u5b57\u6bcd\u5747\u4e3a\u5c0f\u5199")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"typeof 1 // 'number'\ntypeof '1' // 'string'\ntypeof undefined // 'undefined'\ntypeof true // 'boolean'\ntypeof Symbol() // 'symbol'\ntypeof null // 'object'\ntypeof [] // 'object'\ntypeof {} // 'object'\ntypeof console // 'object'\ntypeof function () {} // 'function'\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"xxx instanceof constructor"))),(0,i.kt)("p",null,"\u9002\u7528\u4e8e\u7cbe\u51c6\u68c0\u6d4b\u5f15\u7528\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,"\u53ef\u4ee5\u6b63\u786e\u5224\u65ad\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u7528\u4e8e\u68c0\u6d4b\u6784\u9020\u51fd\u6570\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"prototype")," \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u67d0\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"object instanceof constructor"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"\u4e3a\u5b9e\u4f8b\u5bf9\u8c61\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"constructor"),"\u4e3a\u6784\u9020\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(1 instanceof Number) // false\nconsole.log(true instanceof Boolean) // false\nconsole.log('a' instanceof String) // false\nconsole.log([] instanceof Array) // true\nconsole.log(function () {} instanceof Function) // true\nconsole.log({} instanceof Object) // true\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Object.prototype.toString.call()"))),(0,i.kt)("p",null,"\u9002\u7528\u4e8e\u6240\u6709\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,"\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u7edf\u4e00\u8fd4\u56de\u683c\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"[object Xxx]")," \u7684\u5b57\u7b26\u4e32"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Object.prototype.toString({}) // '[object Object]'\nObject.prototype.toString.call({}) // '[object Object]' \u52a0\u4e0acall\u4e5f\u4e00\u6837\nObject.prototype.toString.call(1) // '[object Number]'\nObject.prototype.toString.call('a') // '[object String]'\nObject.prototype.toString.call(true) // '[object Boolean]'\nObject.prototype.toString.call(function () {}) // '[object Function]'\nObject.prototype.toString.call(null) // '[object Null]'\nObject.prototype.toString.call(undefined) // '[object Undefined]'\nObject.prototype.toString.call(/123/g) // '[object RegExp]'\nObject.prototype.toString.call(new Date()) // '[object Date]'\nObject.prototype.toString.call([]) // '[object Array]'\nObject.prototype.toString.call(document) // '[object HTMLDocument]'\nObject.prototype.toString.call(window) // '[object Window]'\n")),(0,i.kt)("h2",{id:"003---\u5224\u65ad\u6570\u7ec4\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b"},"003 - \u5224\u65ad\u6570\u7ec4\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"xxx instanceof constructor")," \u8fd4\u56de\u5e03\u5c14\u503c")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Object.prototype.toString.call()")," \u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"[object Xxx]")," \u7684\u5b57\u7b26\u4e32")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"arr.__proto__ === Array.prototype"),"(\u901a\u8fc7\u539f\u578b\u94fe\u505a\u5224\u65ad) \u8fd4\u56de\u5e03\u5c14\u503c")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7ES6\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Array.isArray(arr)"),"\u505a\u5224\u65ad \u8fd4\u56de\u5e03\u5c14\u503c")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.isPrototypeOf(arr)")," \u8fd4\u56de\u5e03\u5c14\u503c"))),(0,i.kt)("h2",{id:"004---null\u548cundefined\u533a\u522b"},"004 - ",(0,i.kt)("inlineCode",{parentName:"h2"},"null"),"\u548c",(0,i.kt)("inlineCode",{parentName:"h2"},"undefined"),"\u533a\u522b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Undefined")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Null")," \u90fd\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u4e24\u4e2a\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5206\u522b\u90fd\u53ea\u6709\u4e00\u4e2a\u503c\uff0c\u5c31\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u4ee3\u8868\u7684\u542b\u4e49\u662f\u672a\u5b9a\u4e49\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u4ee3\u8868\u7684\u542b\u4e49\u662f\u7a7a\u5bf9\u8c61\u3002\u4e00\u822c\u53d8\u91cf\u58f0\u660e\u4e86\u4f46\u8fd8\u6ca1\u6709\u5b9a\u4e49\u7684\u65f6\u5019\u4f1a\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"null")," \u4e3b\u8981\u7528\u4e8e\u8d4b\u503c\u7ed9\u4e00\u4e9b\u53ef\u80fd\u4f1a\u8fd4\u56de\u5bf9\u8c61\u7684\u53d8\u91cf\uff0c\u4f5c\u4e3a\u521d\u59cb\u5316\u3002"),(0,i.kt)("h2",{id:"005---\u5982\u4f55\u83b7\u53d6\u5b89\u5168\u7684-undefined-\u503c"},"005 - \u5982\u4f55\u83b7\u53d6\u5b89\u5168\u7684 ",(0,i.kt)("inlineCode",{parentName:"h2"},"undefined")," \u503c\uff1f"),(0,i.kt)("p",null,"\u56e0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u662f\u4e00\u4e2a\u6807\u8bc6\u7b26\uff0c\u6240\u4ee5\u53ef\u4ee5\u88ab\u5f53\u4f5c\u53d8\u91cf\u6765\u4f7f\u7528\u548c\u8d4b\u503c\uff0c\u4f46\u662f\u8fd9\u6837\u4f1a\u5f71\u54cd ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," \u7684\u6b63\u5e38\u5224\u65ad\u3002\u8868\u8fbe\u5f0f void ___ \u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u56e0\u6b64\u8fd4\u56de\u7ed3\u679c\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\n",(0,i.kt)("inlineCode",{parentName:"p"},"void")," \u5e76\u4e0d\u6539\u53d8\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\uff0c\u53ea\u662f\u8ba9\u8868\u8fbe\u5f0f\u4e0d\u8fd4\u56de\u503c\u3002\u56e0\u6b64\u53ef\u4ee5\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"void 0")," \u6765\u83b7\u5f97 ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"),(0,i.kt)("h2",{id:"006---typeof-nan-\u7684\u7ed3\u679c\u662f\u4ec0\u4e48"},"006 - ",(0,i.kt)("inlineCode",{parentName:"h2"},"typeof NaN")," \u7684\u7ed3\u679c\u662f\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NaN")," \u6307\u201c",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u662f\u4e00\u4e2a\u6570\u5b57"),'\u201d\uff08not a number\uff09\uff0cNaN \u662f\u4e00\u4e2a\u201c\u8b66\u6212\u503c\u201d\uff08sentinel value\uff0c\u6709\u7279\u6b8a\u7528\u9014\u7684\u5e38\u89c4\u503c\uff09\uff0c\u7528\u4e8e\u6307\u51fa\u6570\u5b57\u7c7b\u578b\u4e2d\u7684\u9519\u8bef\u60c5\u51b5\uff0c\u5373\u201c\u6267\u884c\u6570\u5b66\u8fd0\u7b97\u6ca1\u6709\u6210\u529f\uff0c\u8fd9\u662f\u5931\u8d25\u540e\u8fd4\u56de\u7684\u7ed3\u679c\u201d\u3002\n\u8fd4\u56de\u7684\u7ed3\u679c\u4e3a"number"\uff0cNaN \u662f\u4e00\u4e2a\u7279\u6b8a\u503c\uff0c\u5b83\u548c\u81ea\u8eab\u4e0d\u76f8\u7b49\uff0c\u662f\u552f\u4e00\u4e00\u4e2a\u975e\u81ea\u53cd\uff08\u81ea\u53cd\uff0creflexive\uff0c\u5373 x === x \u4e0d\u6210\u7acb\uff09\u7684\u503c\u3002\u800c ',(0,i.kt)("inlineCode",{parentName:"p"},"NaN !== NaN \u4e3a true"),"\u3002"),(0,i.kt)("h2",{id:"007---isnan-\u548c-numberisnan-\u51fd\u6570\u7684\u533a\u522b"},"007 - ",(0,i.kt)("inlineCode",{parentName:"h2"},"isNaN")," \u548c ",(0,i.kt)("inlineCode",{parentName:"h2"},"Number.isNaN")," \u51fd\u6570\u7684\u533a\u522b\uff1f"),(0,i.kt)("p",null,"\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"isNaN")," \u63a5\u6536\u53c2\u6570\u540e\uff0c\u4f1a\u5c1d\u8bd5\u5c06\u8fd9\u4e2a\u53c2\u6570\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u4efb\u4f55\u4e0d\u80fd\u88ab\u8f6c\u6362\u4e3a\u6570\u503c\u7684\u7684\u503c\uff0c\u90fd\u4f1a\u8fd4\u56de true\uff0c\u56e0\u6b64\u975e\u6570\u5b57\u503c\u4f20\u5165\u4e5f\u4f1a\u8fd4\u56de true \uff0c\u4f1a\u5f71\u54cd NaN \u7684\u5224\u65ad\u3002"),(0,i.kt)("p",null,"\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"Number.isNaN")," \u4f1a\u9996\u5148\u5224\u65ad\u4f20\u5165\u53c2\u6570\u662f\u5426\u4e3a\u6570\u5b57\uff0c\u5982\u679c\u662f\u6570\u5b57\u518d\u7ee7\u7eed\u5224\u65ad\u662f\u5426\u4e3a NaN \uff0c\u4e0d\u4f1a\u8fdb\u884c\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\uff0c\u8fd9\u79cd\u65b9\u6cd5\u5bf9\u4e8e NaN \u7684\u5224\u65ad\u66f4\u4e3a\u51c6\u786e\u3002"),(0,i.kt)("h2",{id:"008----\u64cd\u4f5c\u7b26\u7684\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219"},"008 - == \u64cd\u4f5c\u7b26\u7684\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u89c4\u5219\uff1f"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:n(8107).Z,width:"937",height:"397"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9996\u5148\u4f1a\u5224\u65ad\u4e24\u8005\u7c7b\u578b\u662f\u5426\u76f8\u540c\uff0c\u76f8\u540c\u7684\u8bdd\u5c31\u6bd4\u8f83\u4e24\u8005\u7684\u5927\u5c0f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u4e0d\u76f8\u540c\u7684\u8bdd\uff0c\u5c31\u4f1a\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u4f1a\u5148\u5224\u65ad\u662f\u5426\u5728\u5bf9\u6bd4 ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),"\uff0c\u662f\u7684\u8bdd\u5c31\u4f1a\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"li"},"true")),(0,i.kt)("li",{parentName:"ul"},"\u5224\u65ad\u4e24\u8005\u7c7b\u578b\u662f\u5426\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u662f\u7684\u8bdd\u5c31\u4f1a\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"\u5224\u65ad\u5176\u4e2d\u4e00\u65b9\u662f\u5426\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u662f\u7684\u8bdd\u5c31\u4f1a\u628a ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," \u8f6c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u518d\u8fdb\u884c\u5224\u65ad"),(0,i.kt)("li",{parentName:"ul"},"\u5224\u65ad\u5176\u4e2d\u4e00\u65b9\u662f\u5426\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," \u4e14\u53e6\u4e00\u65b9\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"number")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"symbol"),"\uff0c\u662f\u7684\u8bdd\u5c31\u4f1a\u628a ",(0,i.kt)("inlineCode",{parentName:"li"},"object")," \u8f6c\u4e3a\u539f\u59cb\u7c7b\u578b\u518d\u8fdb\u884c\u5224\u65ad")),(0,i.kt)("h2",{id:"009---\u5176\u4ed6\u503c\u5230\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\u89c4\u5219"},"009 - \u5176\u4ed6\u503c\u5230\u5b57\u7b26\u4e32\u7684\u8f6c\u6362\u89c4\u5219\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Null")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"Undefined")," \u7c7b\u578b \uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"null")," \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'"null"'),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'"undefined"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Boolean")," \u7c7b\u578b\uff0ctrue \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'"true"'),"\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"false")," \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},'"false"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Number")," \u7c7b\u578b\u7684\u503c\u76f4\u63a5\u8f6c\u6362\uff0c\u4e0d\u8fc7\u90a3\u4e9b\u6781\u5c0f\u548c\u6781\u5927\u7684\u6570\u5b57\u4f1a\u4f7f\u7528\u6307\u6570\u5f62\u5f0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Symbol")," \u7c7b\u578b\u7684\u503c\u76f4\u63a5\u8f6c\u6362\uff0c\u4f46\u662f\u53ea\u5141\u8bb8\u663e\u5f0f\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\uff0c\u4f7f\u7528\u9690\u5f0f\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u4f1a\u4ea7\u751f\u9519\u8bef"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u666e\u901a\u5bf9\u8c61\u6765\u8bf4\uff0c\u9664\u975e\u81ea\u884c\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()")," \u65b9\u6cd5\uff0c\u5426\u5219\u4f1a\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()"),"\uff08",(0,i.kt)("inlineCode",{parentName:"li"},"Object.prototype.toString()"),"\uff09\u6765\u8fd4\u56de\u5185\u90e8\u5c5e\u6027 [","[Class]","] \u7684\u503c\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"li"},'"[object Object]"'),"\n\u3002\u5982\u679c\u5bf9\u8c61\u6709\u81ea\u5df1\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"toString()")," \u65b9\u6cd5\uff0c\u5b57\u7b26\u4e32\u5316\u65f6\u5c31\u4f1a\u8c03\u7528\u8be5\u65b9\u6cd5\u5e76\u4f7f\u7528\u5176\u8fd4\u56de\u503c")),(0,i.kt)("h2",{id:"010---\u5176\u4ed6\u503c\u5230\u6570\u5b57\u503c\u7684\u8f6c\u6362\u89c4\u5219"},"010 - \u5176\u4ed6\u503c\u5230\u6570\u5b57\u503c\u7684\u8f6c\u6362\u89c4\u5219\uff1f"),(0,i.kt)("p",null,"\u4e3a\u4e86\u5c06\u503c\u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u57fa\u672c\u7c7b\u578b\u503c\uff0c\u62bd\u8c61\u64cd\u4f5c ToPrimitive \u4f1a\u9996\u5148\uff08\u901a\u8fc7\u5185\u90e8\u64cd\u4f5c DefaultValue\uff09\u68c0\u67e5\u8be5\u503c\u662f\u5426\u6709valueOf()\u65b9\u6cd5\u3002\u5982\u679c\u6709\u5e76\u4e14\u8fd4\u56de\u57fa\u672c\u7c7b\u578b\u503c\uff0c\u5c31\u4f7f\u7528\u8be5\u503c\u8fdb\u884c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u3002\u5982\u679c\u6ca1\u6709\u5c31\u4f7f\u7528\ntoString() \u7684\u8fd4\u56de\u503c\uff08\u5982\u679c\u5b58\u5728\uff09\u6765\u8fdb\u884c\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u3002\u5982\u679c valueOf() \u548c toString() \u5747\u4e0d\u8fd4\u56de\u57fa\u672c\u7c7b\u578b\u503c\uff0c\u4f1a\u4ea7\u751f TypeError \u9519\u8bef\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Undefined \u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a NaN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Null \u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Boolean \u7c7b\u578b\u7684\u503c\uff0ctrue \u8f6c\u6362\u4e3a 1\uff0cfalse \u8f6c\u6362\u4e3a 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"String \u7c7b\u578b\u7684\u503c\u8f6c\u6362\u5982\u540c\u4f7f\u7528 Number() \u51fd\u6570\u8fdb\u884c\u8f6c\u6362\uff0c\u5982\u679c\u5305\u542b\u975e\u6570\u5b57\u503c\u5219\u8f6c\u6362\u4e3a NaN\uff0c\u7a7a\u5b57\u7b26\u4e32\u4e3a 0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Symbol \u7c7b\u578b\u7684\u503c\u4e0d\u80fd\u8f6c\u6362\u4e3a\u6570\u5b57\uff0c\u4f1a\u62a5\u9519")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u8c61\uff08\u5305\u62ec\u6570\u7ec4\uff09\u4f1a\u9996\u5148\u88ab\u8f6c\u6362\u4e3a\u76f8\u5e94\u7684\u57fa\u672c\u7c7b\u578b\u503c\uff0c\u5982\u679c\u8fd4\u56de\u7684\u662f\u975e\u6570\u5b57\u7684\u57fa\u672c\u7c7b\u578b\u503c\uff0c\u5219\u518d\u9075\u5faa\u4ee5\u4e0a\u89c4\u5219\u5c06\u5176\u5f3a\u5236\u8f6c\u6362\u4e3a\u6570\u5b57")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u603b\u7ed3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u503c\u6709toString\uff08\uff09\u65b9\u6cd5\uff0c\u5219\u8c03\u7528\u8be5\u65b9\u6cd5\u5e76\u8fd4\u56de\u7ed3\u679c\uff1bnull\u8fd4\u56de\u201cnull\u201d\uff0cundefined\u8fd4\u56de\u201cundefined\u201d")))),(0,i.kt)("h2",{id:"011---\u5176\u4ed6\u503c\u5230\u5e03\u5c14\u7c7b\u578b\u7684\u503c\u7684\u8f6c\u6362\u89c4\u5219"},"011 - \u5176\u4ed6\u503c\u5230\u5e03\u5c14\u7c7b\u578b\u7684\u503c\u7684\u8f6c\u6362\u89c4\u5219\uff1f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"false")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"undefined"),(0,i.kt)("li",{parentName:"ul"},"null"),(0,i.kt)("li",{parentName:"ul"},"false"),(0,i.kt)("li",{parentName:"ul"},"+0\u3001-0 \u548c NaN"),(0,i.kt)("li",{parentName:"ul"},'""')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"true")," \u9664\u4ee5\u4e0a\u5916"),(0,i.kt)("h2",{id:"012----\u548c--\u64cd\u4f5c\u7b26\u7684\u8fd4\u56de\u503c"},"012 - || \u548c && \u64cd\u4f5c\u7b26\u7684\u8fd4\u56de\u503c\uff1f"),(0,i.kt)("p",null,"|| \u548c && \u9996\u5148\u4f1a\u5bf9\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u6267\u884c\u6761\u4ef6\u5224\u65ad\uff0c\u5982\u679c\u5176\u4e0d\u662f\u5e03\u5c14\u503c\u5c31\u5148\u5f3a\u5236\u8f6c\u6362\u4e3a\u5e03\u5c14\u7c7b\u578b\uff0c\u7136\u540e\u518d\u6267\u884c\u6761\u4ef6\u5224\u65ad\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e || \u6765\u8bf4\uff0c\u5982\u679c\u6761\u4ef6\u5224\u65ad\u7ed3\u679c\u4e3a true \u5c31\u8fd4\u56de\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u7684\u503c\uff0c\u5982\u679c\u4e3a false \u5c31\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570\u7684\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"&& \u5219\u76f8\u53cd\uff0c\u5982\u679c\u6761\u4ef6\u5224\u65ad\u7ed3\u679c\u4e3a true \u5c31\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u64cd\u4f5c\u6570\u7684\u503c\uff0c\u5982\u679c\u4e3a false \u5c31\u8fd4\u56de\u7b2c\u4e00\u4e2a\u64cd\u4f5c\u6570\u7684\u503c\u3002")),(0,i.kt)("h2",{id:"013---objectisvalue1-value2-\u4e0e\u6bd4\u8f83\u64cd\u4f5c\u7b26--\u7684\u533a\u522b"},"013 - Object.is(value1, value2) \u4e0e\u6bd4\u8f83\u64cd\u4f5c\u7b26 \u201c===\u201d\u3001\u201c==\u201d \u7684\u533a\u522b\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u53cc\u7b49\u53f7\uff08==\uff09\u8fdb\u884c\u76f8\u7b49\u5224\u65ad\u65f6\uff0c\u5982\u679c\u4e24\u8fb9\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5219\u4f1a\u8fdb\u884c\u5f3a\u5236\u7c7b\u578b\u8f6c\u5316\u540e\u518d\u8fdb\u884c\u6bd4\u8f83"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e09\u7b49\u53f7\uff08===\uff09\u8fdb\u884c\u76f8\u7b49\u5224\u65ad\u65f6\uff0c\u5982\u679c\u4e24\u8fb9\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\u65f6\uff0c\u4e0d\u4f1a\u505a\u5f3a\u5236\u7c7b\u578b\u51c6\u6362\uff0c\u76f4\u63a5\u8fd4\u56de false"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Object.is \u6765\u8fdb\u884c\u76f8\u7b49\u5224\u65ad\u65f6\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u548c\u4e09\u7b49\u53f7\u7684\u5224\u65ad\u76f8\u540c\uff0c\u5b83\u5904\u7406\u4e86\u4e00\u4e9b\u7279\u6b8a\u7684\u60c5\u51b5\uff0c\u6bd4\u5982 -0 \u548c +0 \u4e0d\u518d\u76f8\u7b49\uff0c\u4e24\u4e2a NaN \u662f\u76f8\u7b49\u7684")),(0,i.kt)("h2",{id:"014---\u4ec0\u4e48\u662f-javascript-\u4e2d\u7684\u5305\u88c5\u7c7b\u578b"},"014 - \u4ec0\u4e48\u662f JavaScript \u4e2d\u7684\u5305\u88c5\u7c7b\u578b\uff1f"),(0,i.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u57fa\u672c\u7c7b\u578b\u662f\u6ca1\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\uff0c\u4f46\u662f\u4e3a\u4e86\u4fbf\u4e8e\u64cd\u4f5c\u57fa\u672c\u7c7b\u578b\u7684\u503c\uff0c\u5728\u8c03\u7528\u57fa\u672c\u7c7b\u578b\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\u65f6 JavaScript \u4f1a\u5728\u540e\u53f0\u9690\u5f0f\u5730\u5c06\u57fa\u672c\u7c7b\u578b\u7684\u503c\u8f6c\u6362\u4e3a\u5bf9\u8c61\uff0c\u5982\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u8bbf\u95ee'abc'.length\u65f6\uff0cJavaScript \u5c06'abc'\u5728\u540e\u53f0\u8f6c\u6362\u6210String('abc')\uff0c\u7136\u540e\u518d\u8bbf\u95ee\u5176length\u5c5e\u6027\u3002"),(0,i.kt)("li",{parentName:"ul"},"JavaScript\u4e5f\u53ef\u4ee5\u4f7f\u7528Object\u51fd\u6570\u663e\u5f0f\u5730\u5c06\u57fa\u672c\u7c7b\u578b\u8f6c\u6362\u4e3a\u5305\u88c5\u7c7b\u578b\uff1a"),(0,i.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528valueOf\u65b9\u6cd5\u5c06\u5305\u88c5\u7c7b\u578b\u5012\u8f6c\u6210\u57fa\u672c\u7c7b\u578b\uff1a")),(0,i.kt)("h2",{id:"015---\u64cd\u4f5c\u7b26\u4ec0\u4e48\u65f6\u5019\u7528\u4e8e\u5b57\u7b26\u4e32\u7684\u62fc\u63a5"},"015 - +\u64cd\u4f5c\u7b26\u4ec0\u4e48\u65f6\u5019\u7528\u4e8e\u5b57\u7b26\u4e32\u7684\u62fc\u63a5\uff1f"),(0,i.kt)("p",null,"\u6839\u636e ES5 \u89c4\u8303\uff0c\u5982\u679c\u67d0\u4e2a\u64cd\u4f5c\u6570\u662f\u5b57\u7b26\u4e32\u6216\u8005\u80fd\u591f\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\u7684\u8bdd\uff0c+ \u5c06\u8fdb\u884c\u62fc\u63a5\u64cd\u4f5c\u3002\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u64cd\u4f5c\u6570\u662f\u5bf9\u8c61\uff08\u5305\u62ec\u6570\u7ec4\uff09\uff0c\u5219\u9996\u5148\u5bf9\u5176\u8c03\u7528 ToPrimitive\n\u62bd\u8c61\u64cd\u4f5c\uff0c\u8be5\u62bd\u8c61\u64cd\u4f5c\u518d\u8c03\u7528 [","[DefaultValue]","]\uff0c\u4ee5\u6570\u5b57\u4f5c\u4e3a\u4e0a\u4e0b\u6587\u3002\u5982\u679c\u4e0d\u80fd\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u5c06\u5176\u8f6c\u6362\u4e3a\u6570\u5b57\u7c7b\u578b\u6765\u8fdb\u884c\u8ba1\u7b97\u3002\u7b80\u5355\u6765\u8bf4\u5c31\u662f\uff0c\u5982\u679c +\n\u7684\u5176\u4e2d\u4e00\u4e2a\u64cd\u4f5c\u6570\u662f\u5b57\u7b26\u4e32\uff08\u6216\u8005\u901a\u8fc7\u4ee5\u4e0a\u6b65\u9aa4\u6700\u7ec8\u5f97\u5230\u5b57\u7b26\u4e32\uff09\uff0c\u5219\u6267\u884c\u5b57\u7b26\u4e32\u62fc\u63a5\uff0c\u5426\u5219\u6267\u884c\u6570\u5b57\u52a0\u6cd5\u3002\u90a3\u4e48\u5bf9\u4e8e\u9664\u4e86\u52a0\u6cd5\u7684\u8fd0\u7b97\u7b26\u6765\u8bf4\uff0c\u53ea\u8981\u5176\u4e2d\u4e00\u65b9\u662f\u6570\u5b57\uff0c\u90a3\u4e48\u53e6\u4e00\u65b9\u5c31\u4f1a\u88ab\u8f6c\u4e3a\u6570\u5b57\u3002"),(0,i.kt)("h2",{id:"016---\u4e3a\u4ec0\u4e48\u4f1a\u6709bigint\u7684\u63d0\u6848"},"016 - \u4e3a\u4ec0\u4e48\u4f1a\u6709BigInt\u7684\u63d0\u6848\uff1f"),(0,i.kt)("p",null,"avaScript\u4e2dNumber.MAX_SAFE_INTEGER\u8868\u793a\u6700\u2f24\u5b89\u5168\u6570\u5b57\uff0c\u8ba1\u7b97\u7ed3\u679c\u662f9007199254740991\uff0c\u5373\u5728\u8fd9\u4e2a\u6570\u8303\u56f4\u5185\u4e0d\u4f1a\u51fa\u73b0\u7cbe\u5ea6\u4e22\u5931\uff08\u2f29\u6570\u9664\u5916\uff09\u3002\u4f46\u662f\u2f00\u65e6\u8d85\u8fc7\u8fd9\u4e2a\u8303\u56f4\uff0cjs\u5c31\u4f1a\u51fa\u73b0\u8ba1\u7b97\u4e0d\u51c6\u786e\u7684\u60c5\u51b5\uff0c\u8fd9\u5728\u2f24\u6570\u8ba1\u7b97\u7684\u65f6\u5019\u4e0d\u5f97\u4e0d\u4f9d\u9760\u2f00\u4e9b\u7b2c\u4e09\u2f45\u5e93\u8fdb\u2f8f\u89e3\u51b3\uff0c\u56e0\u6b64\u5b98\u2f45\u63d0\u51fa\u4e86BigInt\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"017---objectassign\u548c\u6269\u5c55\u8fd0\u7b97\u6cd5\u662f\u6df1\u62f7\u8d1d\u8fd8\u662f\u6d45\u62f7\u8d1d\u4e24\u8005\u533a\u522b"},"017 - object.assign\u548c\u6269\u5c55\u8fd0\u7b97\u6cd5\u662f\u6df1\u62f7\u8d1d\u8fd8\u662f\u6d45\u62f7\u8d1d\uff0c\u4e24\u8005\u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Object.assign()\u65b9\u6cd5\u63a5\u6536\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f5c\u4e3a\u76ee\u6807\u5bf9\u8c61\uff0c\u540e\u9762\u7684\u6240\u6709\u53c2\u6570\u4f5c\u4e3a\u6e90\u5bf9\u8c61\u3002\u7136\u540e\u628a\u6240\u6709\u7684\u6e90\u5bf9\u8c61\u5408\u5e76\u5230\u76ee\u6807\u5bf9\u8c61\u4e2d\u3002\u5b83\u4f1a\u4fee\u6539\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u56e0\u6b64\u4f1a\u89e6\u53d1 ES6 setter\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6269\u5c55\u64cd\u4f5c\u7b26\uff08\u2026\uff09\u4f7f\u7528\u5b83\u65f6\uff0c\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e00\u4e2a\u503c\u90fd\u4f1a\u88ab\u62f7\u8d1d\u5230\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u6216\u5bf9\u8c61\u4e2d\u3002\u5b83\u4e0d\u590d\u5236\u7ee7\u627f\u7684\u5c5e\u6027\u6216\u7c7b\u7684\u5c5e\u6027\uff0c\u4f46\u662f\u5b83\u4f1a\u590d\u5236ES6\u7684 symbols \u5c5e\u6027\u3002")),(0,i.kt)("h2",{id:"018---\u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u7a7a\u5bf9\u8c61"},"018 - \u5982\u4f55\u5224\u65ad\u4e00\u4e2a\u5bf9\u8c61\u662f\u7a7a\u5bf9\u8c61"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528JSON\u81ea\u5e26\u7684JSON.stringify\u65b9\u6cd5\u6765\u5224\u65ad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528ES6\u65b0\u589e\u7684\u65b9\u6cd5Object.keys()\u6765\u5224\u65ad"))))}d.isMDXComponent=!0},8107:function(e,t,n){t.Z=n.p+"assets/images/==-9222213bbea8cc82a9678d9a2e595ff6.png"}}]);