"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},l="Math && Date",o={unversionedId:"study-notes/js\u7b14\u8bb0/Math_Date",id:"study-notes/js\u7b14\u8bb0/Math_Date",title:"Math && Date",description:"Math",source:"@site/docs/study-notes/js\u7b14\u8bb0/Math_Date.md",sourceDirName:"study-notes/js\u7b14\u8bb0",slug:"/study-notes/js\u7b14\u8bb0/Math_Date",permalink:"/docs/study-notes/js\u7b14\u8bb0/Math_Date",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/js\u7b14\u8bb0/Math_Date.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Object \u5bf9\u8c61",permalink:"/docs/study-notes/js\u7b14\u8bb0/js\u5bf9\u8c61"},next:{title:"DOM",permalink:"/docs/study-notes/js\u7b14\u8bb0/DOM"}},p={},s=[{value:"Math",id:"math",level:2},{value:"Date",id:"date",level:2},{value:"\u5bf9\u8c61\u7684\u65b9\u6cd5",id:"\u5bf9\u8c61\u7684\u65b9\u6cd5",level:4}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"math--date"},"Math && Date"),(0,r.kt)("h2",{id:"math"},"Math"),(0,r.kt)("p",null,"Math\u662f\u4e00\u4e2a\u7528\u6765\u8fdb\u884c\u6570\u5b66\u8fd0\u7b97\u7684\u5de5\u5177\u7c7b\uff0c\u5de5\u5177\u7c7b\u4e0d\u9700\u8981\u521b\u5efa\u5bf9\u8c61\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002\u5728Math\u4e2d\u5305\u542b\u4e86\u4e00\u7ec4\u6570\u5b66\u8fd0\u7b97\u76f8\u5173\u7684\u5e38\u91cf\u548c\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.PI")," \u83b7\u53d6\u5706\u5468\u7387"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.abs()")," \u83b7\u53d6\u4e00\u4e2a\u6570\u7684\u7edd\u5bf9\u503c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.ceil()")," \u5bf9\u4e00\u4e2a\u6570\u5411\u4e0a\u53d6\u6574"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.floor()")," \u5bf9\u4e00\u4e2a\u6570\u5411\u4e0b\u53d6\u6574"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.round()")," \u5bf9\u4e00\u4e2a\u6570\u8fdb\u884c\u56db\u820d\u4e94\u5165\u53d6\u6574"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.random()")," \u751f\u6210\u4e00\u4e2a0-1\u4e4b\u95f4\u7684\u968f\u673a\u6570"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.pow(x,y)")," \u6c42x\u7684y\u6b21\u5e42"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.sqrt()")," \u6c42\u4e00\u4e2a\u6570\u7684\u5e73\u65b9\u6839"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Math.max()")," \u53d6\u591a\u4e2a\u503c\u4e2d\u7684\u8f83\u5927\u503c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"math.min()")," \u53d6\u591a\u4e2a\u503c\u4e2d\u7684\u8f83\u5c0f\u503c")),(0,r.kt)("h2",{id:"date"},"Date"),(0,r.kt)("p",null,"Date\u662f\u8868\u793a\u65e5\u671f\u7684\u5bf9\u8c61\uff0c\u5728JS\u4e2d\u6240\u6709\u7684\u65f6\u95f4\u76f8\u5173\u7684\u90fd\u4f7f\u7528Date\u6765\u8868\u793a"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8868\u793a\u5f53\u524d\u65e5\u671f\u7684\u5bf9\u8c61 ",(0,r.kt)("inlineCode",{parentName:"p"},"let d = new Date();")),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u65e5\u671f\u7684\u5bf9\u8c61 ",(0,r.kt)("inlineCode",{parentName:"p"},"let d = new Date('\u6708/\u65e5/\u56db\u4f4d\u5e74 \u65f6:\u5206:\u79d2');")),(0,r.kt)("h4",{id:"\u5bf9\u8c61\u7684\u65b9\u6cd5"},"\u5bf9\u8c61\u7684\u65b9\u6cd5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"d.getDay()")," \u83b7\u53d6\u5f53\u524d\u662f\u5468\u51e0\uff0c\u8fd4\u56de\u503c0-6\uff0c0\u8868\u793a\u5468\u65e5"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"d.getDate()")," \u83b7\u53d6\u5f53\u524d\u662f\u51e0\u65e5"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"d.getMonth()")," \u83b7\u53d6\u5f53\u524d\u662f\u51e0\u6708\uff0c\u8fd4\u56de\u503c0-11\uff0c0\u8868\u793a1\u6708"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"d.getFullYear()")," \u83b7\u53d6\u5f53\u524d\u7684\u5e74\u4efd"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"d.getTime()")," \u83b7\u53d6\u5f53\u524d\u65e5\u671f\u7684\u65f6\u95f4\u6233"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Date.now()")," \u83b7\u53d6\u5f53\u524d\u7684\u65f6\u95f4\u6233\uff08\u4ee3\u7801\u6267\u884c\u7684\u8fd9\u4e00\u523b\uff09")))}m.isMDXComponent=!0}}]);