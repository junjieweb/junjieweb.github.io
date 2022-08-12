"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),g=i,f=s["".concat(p,".").concat(g)]||s[g]||m[g]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={slug:"git",title:"Git\u5386\u53f2\u7248\u672c\u56de\u6eda",authors:"junjie",tags:["Git"]},a="git\u5386\u53f2\u7248\u672c\u56de\u6eda",l={permalink:"/blog/git",editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/blog/2021-09-05-git\u56de\u9000.md",source:"@site/blog/2021-09-05-git\u56de\u9000.md",title:"Git\u5386\u53f2\u7248\u672c\u56de\u6eda",description:"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55 \u5982\u679c\u5185\u5bb9\u504f\u591a\uff0c\u9700\u8981\u4f7f\u7528\u65b9\u5411\u952e\u4e0a\u4e0b\u6eda\u52a8\uff0c\u6309q\u9000\u51fa",date:"2021-09-05T00:00:00.000Z",formattedDate:"2021\u5e749\u67085\u65e5",tags:[{label:"Git",permalink:"/blog/tags/git"}],readingTime:1.96,hasTruncateMarker:!0,authors:[{name:"Junjie",title:"Front End Web Developer",url:"https://github.com/junjieweb",imageURL:"https://github.com/junjieweb.png",key:"junjie"}],frontMatter:{slug:"git",title:"Git\u5386\u53f2\u7248\u672c\u56de\u6eda",authors:"junjie",tags:["Git"]},prevItem:{title:"JavaScript\u6570\u7ec4\u65b9\u6cd5",permalink:"/blog/2021/09/10/js\u6570\u7ec4\u65b9\u6cd5"},nextItem:{title:"WebStorm \u952e\u76d8\u5feb\u6377\u952e",permalink:"/blog/2021/09/03/WebStorm\u952e\u76d8\u5feb\u6377\u952e"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55")," \u5982\u679c\u5185\u5bb9\u504f\u591a\uff0c\u9700\u8981\u4f7f\u7528\u65b9\u5411\u952e\u4e0a\u4e0b\u6eda\u52a8\uff0c\u6309q\u9000\u51fa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git log")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git log --oneline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git reflog")," \u67e5\u770b\u6240\u6709\u64cd\u4f5c\u8bb0\u5f55")))}m.isMDXComponent=!0}}]);