"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1574],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=r,N=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5196:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},o="\u4e8c\u3001ES6",u={unversionedId:"interview-questions/JavaScript/ES6",id:"interview-questions/JavaScript/ES6",title:"\u4e8c\u3001ES6",description:"001 - let const var\u7684\u533a\u522b",source:"@site/docs/interview-questions/JavaScript/ES6.md",sourceDirName:"interview-questions/JavaScript",slug:"/interview-questions/JavaScript/ES6",permalink:"/docs/interview-questions/JavaScript/ES6",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/interview-questions/JavaScript/ES6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"interview",previous:{title:"\u4e00\u3001\u6570\u636e\u7c7b\u578b",permalink:"/docs/interview-questions/JavaScript/\u6570\u636e\u7c7b\u578b"},next:{title:"\u4e09\u3001JS\u57fa\u7840",permalink:"/docs/interview-questions/JavaScript/basis"}},s={},m=[{value:"001 - <code>let</code> <code>const</code> <code>var</code>\u7684\u533a\u522b",id:"001---let-const-var\u7684\u533a\u522b",level:2},{value:"002 - const\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u4fee\u6539\u5417",id:"002---const\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u4fee\u6539\u5417",level:2},{value:"003 - \u5982\u679cnew\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837",id:"003---\u5982\u679cnew\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837",level:2},{value:"004 - \u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",id:"004---\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",level:2},{value:"005 - \u7bad\u5934\u51fd\u6570\u7684this\u6307\u5411\u54ea\u2fa5\uff1f",id:"005---\u7bad\u5934\u51fd\u6570\u7684this\u6307\u5411\u54ea",level:2},{value:"006 - \u6269\u5c55\u8fd0\u7b97\u7b26\u7684\u4f5c\u7528\u53ca\u4f7f\u7528\u573a\u666f",id:"006---\u6269\u5c55\u8fd0\u7b97\u7b26\u7684\u4f5c\u7528\u53ca\u4f7f\u7528\u573a\u666f",level:2},{value:"007 - \u5bf9\u5bf9\u8c61\u4e0e\u6570\u7ec4\u7684\u89e3\u6784\u7684\u7406\u89e3",id:"007---\u5bf9\u5bf9\u8c61\u4e0e\u6570\u7ec4\u7684\u89e3\u6784\u7684\u7406\u89e3",level:2},{value:"008 - \u5982\u4f55\u63d0\u53d6\u9ad8\u5ea6\u5d4c\u5957\u7684\u5bf9\u8c61\u91cc\u7684\u6307\u5b9a\u5c5e\u6027\uff1f",id:"008---\u5982\u4f55\u63d0\u53d6\u9ad8\u5ea6\u5d4c\u5957\u7684\u5bf9\u8c61\u91cc\u7684\u6307\u5b9a\u5c5e\u6027",level:2},{value:"009 - \u5bf9 rest \u53c2\u6570\u7684\u7406\u89e3",id:"009---\u5bf9-rest-\u53c2\u6570\u7684\u7406\u89e3",level:2},{value:"010 - ES6\u4e2d\u6a21\u677f\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406",id:"010---es6\u4e2d\u6a21\u677f\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406",level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4e8ces6"},"\u4e8c\u3001ES6"),(0,l.kt)("h2",{id:"001---let-const-var\u7684\u533a\u522b"},"001 - ",(0,l.kt)("inlineCode",{parentName:"h2"},"let")," ",(0,l.kt)("inlineCode",{parentName:"h2"},"const")," ",(0,l.kt)("inlineCode",{parentName:"h2"},"var"),"\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u533a\u522b\u4e3b\u8981\u4f53\u73b0\u5728\u4e03\u4e2a\u65b9\u9762"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5426\u6709\u5757\u7ea7\u4f5c\u7528\u57df\uff1a\u5757\u4f5c\u7528\u57df\u7531 { }\u5305\u62ec\uff0clet\u548cconst\u5177\u6709\u5757\u7ea7\u4f5c\u7528\u57df\uff0cvar\u4e0d\u5b58\u5728\u5757\u7ea7\u4f5c\u7528\u57df\u3002\u5757\u7ea7\u4f5c\u7528\u57df\u89e3\u51b3\u4e86ES5\u4e2d\u7684\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5185\u5c42\u53d8\u91cf\u53ef\u80fd\u8986\u76d6\u5916\u5c42\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u7528\u6765\u8ba1\u6570\u7684\u5faa\u73af\u53d8\u91cf\u6cc4\u9732\u4e3a\u5168\u5c40\u53d8\u91cf"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5426\u5b58\u5728\u53d8\u91cf\u63d0\u5347"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"var\u5b58\u5728\u53d8\u91cf\u63d0\u5347"),(0,l.kt)("li",{parentName:"ul"},"let\u3001const\u4e0d\u5b58\u5728\u53d8\u91cf\u63d0\u5347\uff0c\u5373\u53d8\u91cf\u53ea\u80fd\u5728\u58f0\u660e\u4e4b\u540e\u4f7f\u7528\uff0c\u5426\u5728\u4f1a\u62a5\u9519"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5426\u6dfb\u52a0\u5168\u5c40\u5c5e\u6027"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7684\u5168\u5c40\u5bf9\u8c61\u662fwindow\uff0cNode\u7684\u5168\u5c40\u5bf9\u8c61\u662fglobal\u3002var\u58f0\u660e\u7684\u53d8\u91cf\u4e3a\u5168\u5c40\u53d8\u91cf\uff0c\u5e76\u4e14\u4f1a\u5c06\u8be5\u53d8\u91cf\u6dfb\u52a0\u4e3a\u5168\u5c40\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u4f46\u662flet\u548cconst\u4e0d\u4f1a\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u80fd\u5426\u91cd\u590d\u58f0\u660e\u53d8\u91cf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"var\u53ef\u4ee5\u91cd\u590d\u58f0\u660e\u53d8\u91cf\uff0c\u540e\u58f0\u660e\u7684\u540c\u540d\u53d8\u91cf\u4f1a\u8986\u76d6\u4e4b\u524d\u58f0\u660e\u7684\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"const\u548clet\u4e0d\u5141\u8bb8\u91cd\u590d\u58f0\u660e\u53d8\u91cf"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5426\u5b58\u5728\u6682\u65f6\u6027\u6b7b\u533a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528let\u3001const\u547d\u4ee4\u58f0\u660e\u53d8\u91cf\u4e4b\u524d\uff0c\u8be5\u53d8\u91cf\u90fd\u662f\u4e0d\u53ef\u7528\u7684\u3002\u8fd9\u5728\u8bed\u6cd5\u4e0a\uff0c\u79f0\u4e3a\u6682\u65f6\u6027\u6b7b\u533a let a = a/const a = a\uff08\u4f1a\u62a5\u9519\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528var\u58f0\u660e\u7684\u53d8\u91cf\u4e0d\u5b58\u5728\u6682\u65f6\u6027\u6b7b\u533a\uff1avar a = a\uff08\u4e0d\u4f1a\u62a5\u9519\uff09"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u662f\u5426\u5fc5\u987b\u8bbe\u7f6e\u521d\u59cb\u503c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"var\u548clet\u4e0d\u9700\u8981\u8d4b\u521d\u59cb\u503c\uff0c\u53ea\u58f0\u660e\u5c31\u53ef\u4ee5"),(0,l.kt)("li",{parentName:"ul"},"const\u58f0\u660e\u65f6\u5fc5\u987b\u8d4b\u521d\u59cb\u503c\uff0c\u5426\u5219\u4f1a\u62a5\u9519"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u80fd\u5426\u6539\u53d8\u6307\u9488\u6307\u5411\uff08\u91cd\u590d\u8d4b\u503c\uff09"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"let\u521b\u5efa\u7684\u53d8\u91cf\u662f\u53ef\u4ee5\u66f4\u6539\u6307\u9488\u6307\u5411\uff08\u53ef\u4ee5\u91cd\u65b0\u8d4b\u503c\uff09"),(0,l.kt)("li",{parentName:"ul"},"const\u58f0\u660e\u7684\u53d8\u91cf\u662f\u4e0d\u5141\u8bb8\u6539\u53d8\u6307\u9488\u7684\u6307\u5411")))),(0,l.kt)("h2",{id:"002---const\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u4fee\u6539\u5417"},"002 - const\u5bf9\u8c61\u7684\u5c5e\u6027\u53ef\u4ee5\u4fee\u6539\u5417"),(0,l.kt)("p",null,"const\u4fdd\u8bc1\u7684\u5e76\u4e0d\u662f\u53d8\u91cf\u7684\u503c\u4e0d\u80fd\u6539\u52a8\uff0c\u800c\u662f\u53d8\u91cf\u6307\u5411\u7684\u90a3\u4e2a\u5185\u5b58\u5730\u5740\u4e0d\u80fd\u6539\u52a8\u3002\u5bf9\u4e8e\u57fa\u672c\u7c7b\u578b\u7684\u6570\u636e\uff08\u6570\u503c\u3001\u5b57\u7b26\u4e32\u3001\u5e03\u5c14\u503c\uff09\uff0c\u5176\u503c\u5c31\u4fdd\u5b58\u5728\u53d8\u91cf\u6307\u5411\u7684\u90a3\u4e2a\u5185\u5b58\u5730\u5740\uff0c\u56e0\u6b64\u7b49\u540c\u4e8e\u5e38\u91cf\uff1b\u4f46\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u7684\u6570\u636e\uff08\u4e3b\u8981\u662f\u5bf9\u8c61\u548c\u6570\u7ec4\uff09\u6765\u8bf4\uff0c\u53d8\u91cf\u6307\u5411\u6570\u636e\u7684\u5185\u5b58\u5730\u5740\uff0c\u4fdd\u5b58\u7684\u53ea\u662f\u4e00\u4e2a\u6307\u9488\uff0cconst\u53ea\u80fd\u4fdd\u8bc1\u8fd9\u4e2a\u6307\u9488\u662f\u56fa\u5b9a\u4e0d\u53d8\u7684\uff0c\u81f3\u4e8e\u5b83\u6307\u5411\u7684\u6570\u636e\u7ed3\u6784\u662f\u4e0d\u662f\u53ef\u53d8\u7684\uff0c\u5c31\u5b8c\u5168\u4e0d\u80fd\u63a7\u5236\u4e86\u3002"),(0,l.kt)("h2",{id:"003---\u5982\u679cnew\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837"},"003 - \u5982\u679cnew\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u7684\u4f1a\u600e\u4e48\u6837"),(0,l.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u662fES6\u4e2d\u7684\u63d0\u51fa\u6765\u7684\uff0c\u5b83\u6ca1\u6709prototype\uff0c\u4e5f\u6ca1\u6709\u81ea\u5df1\u7684this\u6307\u5411\uff0c\u66f4\u4e0d\u53ef\u4ee5\u4f7f\u7528arguments\u53c2\u6570\uff0c\u6240\u4ee5\u4e0d\u80fdNew\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\uff1bnew\u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6784\u9020\u51fd\u6570\u7684\u4f5c\u7528\u57df\u8d4b\u7ed9\u65b0\u5bf9\u8c61\uff08\u4e5f\u5c31\u662f\u5c06\u5bf9\u8c61\u7684",(0,l.kt)("strong",{parentName:"li"},"proto"),"\u5c5e\u6027\u6307\u5411\u6784\u9020\u51fd\u6570\u7684prototype\u5c5e\u6027\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6307\u5411\u6784\u9020\u51fd\u6570\u4e2d\u7684\u4ee3\u7801\uff0c\u6784\u9020\u51fd\u6570\u4e2d\u7684this\u6307\u5411\u8be5\u5bf9\u8c61\uff08\u4e5f\u5c31\u662f\u4e3a\u8fd9\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u548c\u65b9\u6cd5\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u65b0\u7684\u5bf9\u8c61 \u6240\u4ee5\uff0c\u4e0a\u9762\u7684\u7b2c\u4e8c\u3001\u4e09\u6b65\uff0c\u7bad\u5934\u51fd\u6570\u90fd\u662f\u6ca1\u6709\u529e\u6cd5\u6267\u884c\u7684\u3002")),(0,l.kt)("h2",{id:"004---\u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b"},"004 - \u7bad\u5934\u51fd\u6570\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u666e\u901a\u51fd\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"let fn = function(){}")," \u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"function fn(){}")),(0,l.kt)("p",null,"\u7bad\u5934\u51fd\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"let fn = () => {}")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u6bd4\u666e\u901a\u51fd\u6570\u66f4\u52a0\u7b80\u6d01"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u7701\u53bb\u53c2\u6570\u7684\u62ec\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fd\u6570\u4f53\u7684\u8fd4\u56de\u503c\u53ea\u6709\u4e00\u53e5\uff0c\u53ef\u4ee5\u7701\u7565\u5927\u62ec\u53f7\uff0c\u4e14\u5fc5\u987b\u7701\u7565return"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684this"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684this\uff0c \u6240\u4ee5\u5b83\u6ca1\u6709\u81ea\u5df1\u7684this\uff0c\u5b83\u53ea\u4f1a\u5728\u81ea\u5df1\u4f5c\u7528\u57df\u7684\u4e0a\u4e00\u5c42\u7ee7\u627fthis\u3002\u6240\u4ee5\u7bad\u5934\u51fd\u6570\u4e2dthis\u7684\u6307\u5411\u5728\u5b83\u5728\u5b9a\u4e49\u65f6\u5df2\u7ecf\u786e\u5b9a\u4e86\uff0c\u4e4b\u540e\u4e0d\u4f1a\u6539\u53d8\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"call()\u3001apply()\u3001bind()\u7b49\u65b9\u6cd5\u4e0d\u80fd\u6539\u53d8\u7bad\u5934\u51fd\u6570\u4e2dthis\u7684\u6307\u5411"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570\u7684this\u6307\u5411\u8981\u4e48\u662fwindow\uff0c\u8981\u4e48\u662f\u4ed6\u7684\u5916\u5c42"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u4f7f\u7528"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570\u662fES6\u4e2d\u7684\u63d0\u51fa\u6765\u7684\uff0c\u5b83\u6ca1\u6709prototype\uff0c\u4e5f\u6ca1\u6709\u81ea\u5df1\u7684this\u6307\u5411\uff0c\u66f4\u4e0d\u53ef\u4ee5\u4f7f\u7528arguments\u53c2\u6570\uff0c\u6240\u4ee5\u4e0d\u80fdNew\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\uff1bnew\u64cd\u4f5c\u7b26\u7684\u5b9e\u73b0\u6b65\u9aa4\u5982\u4e0b\uff1a")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u6784\u9020\u51fd\u6570\u7684\u4f5c\u7528\u57df\u8d4b\u7ed9\u65b0\u5bf9\u8c61\uff08\u4e5f\u5c31\u662f\u5c06\u5bf9\u8c61\u7684",(0,l.kt)("strong",{parentName:"li"},"proto"),"\u5c5e\u6027\u6307\u5411\u6784\u9020\u51fd\u6570\u7684prototype\u5c5e\u6027\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6307\u5411\u6784\u9020\u51fd\u6570\u4e2d\u7684\u4ee3\u7801\uff0c\u6784\u9020\u51fd\u6570\u4e2d\u7684this\u6307\u5411\u8be5\u5bf9\u8c61\uff08\u4e5f\u5c31\u662f\u4e3a\u8fd9\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u548c\u65b9\u6cd5\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u65b0\u7684\u5bf9\u8c61 \u6240\u4ee5\uff0c\u4e0a\u9762\u7684\u7b2c\u4e8c\u3001\u4e09\u6b65\uff0c\u7bad\u5934\u51fd\u6570\u90fd\u662f\u6ca1\u6709\u529e\u6cd5\u6267\u884c\u7684\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570\u6ca1\u6709\u81ea\u5df1\u7684arguments\u5bf9\u8c61\u3002\u5728\u7bad\u5934\u51fd\u6570\u4e2d\u8bbf\u95eearguments\u5b9e\u9645\u4e0a\u83b7\u5f97\u7684\u662f\u5b83\u5916\u5c42\u51fd\u6570\u7684arguments\u503c\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u6ca1\u6709prototype")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u7528\u4f5cGenerator\u51fd\u6570\uff0c\u4e0d\u80fd\u4f7f\u7528yield\u5173\u952e\u5b57"))),(0,l.kt)("h2",{id:"005---\u7bad\u5934\u51fd\u6570\u7684this\u6307\u5411\u54ea"},"005 - \u7bad\u5934\u51fd\u6570\u7684this\u6307\u5411\u54ea\u2fa5\uff1f"),(0,l.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u4e0d\u540c\u4e8e\u4f20\u7edfJavaScript\u4e2d\u7684\u51fd\u6570\uff0c\u7bad\u5934\u51fd\u6570\u5e76\u6ca1\u6709\u5c5e\u4e8e\u2f83\u2f30\u7684this\uff0c\u5b83\u6240\u8c13\u7684this\u662f\u6355\u83b7\u5176\u6240\u5728\u4e0a\u4e0b\u2f42\u7684 this \u503c\uff0c\u4f5c\u4e3a\u2f83\u2f30\u7684 this\n\u503c\uff0c\u5e76\u4e14\u7531\u4e8e\u6ca1\u6709\u5c5e\u4e8e\u2f83\u2f30\u7684this\uff0c\u6240\u4ee5\u662f\u4e0d\u4f1a\u88abnew\u8c03\u2f64\u7684\uff0c\u8fd9\u4e2a\u6240\u8c13\u7684this\u4e5f\u4e0d\u4f1a\u88ab\u6539\u53d8\u3002\u7bad\u5934\u51fd\u6570\u7684this\u6307\u5411\u5916\u5c42\u51fd\u6570\u7684this"),(0,l.kt)("h2",{id:"006---\u6269\u5c55\u8fd0\u7b97\u7b26\u7684\u4f5c\u7528\u53ca\u4f7f\u7528\u573a\u666f"},"006 - \u6269\u5c55\u8fd0\u7b97\u7b26\u7684\u4f5c\u7528\u53ca\u4f7f\u7528\u573a\u666f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u6269\u5c55\u8fd0\u7b97\u7b26")),(0,l.kt)("p",null,"\u5bf9\u8c61\u7684\u6269\u5c55\u8fd0\u7b97\u7b26(...)\u7528\u4e8e\u53d6\u51fa\u53c2\u6570\u5bf9\u8c61\u4e2d\u7684\u6240\u6709\u53ef\u904d\u5386\u5c5e\u6027\uff0c\u62f7\u8d1d\u5230\u5f53\u524d\u5bf9\u8c61\u4e4b\u4e2d\u3002\u6269\u5c55\u8fd0\u7b97\u7b26\u5bf9\u5bf9\u8c61\u5b9e\u4f8b\u7684\u62f7\u8d1d\u5c5e\u4e8e\u6d45\u62f7\u8d1d"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"let obj = {...obj1\uff0cobj2}"),"\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign({}\uff0c{})"),"\u7c7b\u4f3c\uff0c\u82e5\u540e\u9762\u7684\u5bf9\u8c61\u4e0e\u524d\u9762\u7684\u5bf9\u8c61\u6709\u540c\u540d\u5c5e\u6027\uff0c\u5219\u540e\u9762\u7684\u8986\u76d6\u524d\u9762\u7684"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u6269\u5c55\u8fd0\u7b97\u7b26")),(0,l.kt)("p",null,"\u6570\u7ec4\u7684\u6269\u5c55\u8fd0\u7b97\u7b26\u53ef\u4ee5\u5c06\u4e00\u4e2a\u6570\u7ec4\u8f6c\u4e3a\u7528\u9017\u53f7\u5206\u9694\u7684\u53c2\u6570\u5e8f\u5217\uff0c\u4e14\u6bcf\u6b21\u53ea\u80fd\u5c55\u5f00\u4e00\u5c42\u6570\u7ec4\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528Math\u51fd\u6570\u83b7\u53d6\u6570\u7ec4\u4e2d\u7279\u5b9a\u7684\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const numbers = [9, 4, 7, 1];\n\nMath.min(...numbers); // 1\n\nMath.max(...numbers); // 9\n")),(0,l.kt)("h2",{id:"007---\u5bf9\u5bf9\u8c61\u4e0e\u6570\u7ec4\u7684\u89e3\u6784\u7684\u7406\u89e3"},"007 - \u5bf9\u5bf9\u8c61\u4e0e\u6570\u7ec4\u7684\u89e3\u6784\u7684\u7406\u89e3"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6570\u7ec4\u7684\u89e3\u6784")),(0,l.kt)("p",null,"\u5728\u89e3\u6784\u6570\u7ec4\u65f6\uff0c\u4ee5\u5143\u7d20\u7684\u4f4d\u7f6e\u4e3a\u5339\u914d\u6761\u4ef6\u6765\u63d0\u53d6\u60f3\u8981\u7684\u6570\u636e\u7684"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5bf9\u8c61\u7684\u89e3\u6784")),(0,l.kt)("p",null,"\u5728\u89e3\u6784\u5bf9\u8c61\u65f6\uff0c\u662f\u4ee5\u5c5e\u6027\u7684\u540d\u79f0\u4e3a\u5339\u914d\u6761\u4ef6\uff0c\u6765\u63d0\u53d6\u60f3\u8981\u7684\u6570\u636e\u7684"),(0,l.kt)("h2",{id:"008---\u5982\u4f55\u63d0\u53d6\u9ad8\u5ea6\u5d4c\u5957\u7684\u5bf9\u8c61\u91cc\u7684\u6307\u5b9a\u5c5e\u6027"},"008 - \u5982\u4f55\u63d0\u53d6\u9ad8\u5ea6\u5d4c\u5957\u7684\u5bf9\u8c61\u91cc\u7684\u6307\u5b9a\u5c5e\u6027\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const school = {\n    classes: {\n        stu: {\n            name: 'Bob',\n            age: 24,\n        }\n    }\n}\nconst {classes: {stu: {name}}} = school\n")),(0,l.kt)("h2",{id:"009---\u5bf9-rest-\u53c2\u6570\u7684\u7406\u89e3"},"009 - \u5bf9 rest \u53c2\u6570\u7684\u7406\u89e3"),(0,l.kt)("p",null,"\u6269\u5c55\u8fd0\u7b97\u7b26\uff08...args)\u88ab\u7528\u5728\u51fd\u6570\u5f62\u53c2\u4e0a\u65f6\uff0c\u5b83\u8fd8\u53ef\u4ee5\u628a\u4e00\u4e2a\u5206\u79bb\u7684\u53c2\u6570\u5e8f\u5217\u6574\u5408\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u4fbf\u4e8e\u4f7f\u7528\u6570\u7ec4\u7684\u904d\u5386\u7b49\u65b9\u6cd5\u3010\u4e0earguments\u7c7b\u4f3c\uff0c\u4f46\u662farguments\u662f\u4ee5\u5bf9\u8c61\u5f62\u5f0f\u3011"),(0,l.kt)("h2",{id:"010---es6\u4e2d\u6a21\u677f\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406"},"010 - ES6\u4e2d\u6a21\u677f\u8bed\u6cd5\u4e0e\u5b57\u7b26\u4e32\u5904\u7406"),(0,l.kt)("p",null,"\u5141\u8bb8\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"${}"),"\u7684\u65b9\u5f0f\u5d4c\u5165\u53d8\u91cf\uff0c\u4f18\u52bf\u6709\u4e24\u4e2a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u6a21\u677f\u5b57\u7b26\u4e32\u4e2d\uff0c\u7a7a\u683c\u3001\u7f29\u8fdb\u3001\u6362\u884c\u90fd\u4f1a\u88ab\u4fdd\u7559\uff0c\u53ef\u4ee5\u8bc6\u522bhtml\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u677f\u5b57\u7b26\u4e32\u5b8c\u5168\u652f\u6301\u201c\u8fd0\u7b97\u201d\u5f0f\u7684\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"${}"),"\u91cc\u5b8c\u6210\u4e00\u4e9b\u8ba1\u7b97")))}k.isMDXComponent=!0}}]);