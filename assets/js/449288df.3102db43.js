"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8725],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=o(r),c=a,N=k["".concat(u,".").concat(c)]||k[c]||s[c]||i;return r?n.createElement(N,l(l({ref:t},m),{},{components:r})):n.createElement(N,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:6},l="\u516d\u3001vue3",p={unversionedId:"interview-questions/vue/vue3",id:"interview-questions/vue/vue3",title:"\u516d\u3001vue3",description:"001 - Vue3.0\u6709\u4ec0\u4e48\u66f4\u65b0",source:"@site/docs/interview-questions/vue/vue3.md",sourceDirName:"interview-questions/vue",slug:"/interview-questions/vue/vue3",permalink:"/docs/interview-questions/vue/vue3",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/interview-questions/vue/vue3.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"interview",previous:{title:"\u4e94\u3001router",permalink:"/docs/interview-questions/vue/vue-router"},next:{title:"\u4e03\u3001\u865a\u62dfDOM",permalink:"/docs/interview-questions/vue/\u865a\u62dfDOM"}},u={},o=[{value:"001 - Vue3.0\u6709\u4ec0\u4e48\u66f4\u65b0",id:"001---vue30\u6709\u4ec0\u4e48\u66f4\u65b0",level:2},{value:"002 - defineProperty\u548cproxy\u7684\u533a\u522b",id:"002---defineproperty\u548cproxy\u7684\u533a\u522b",level:2},{value:"003 - Vue3.0 \u4e3a\u4ec0\u4e48\u8981\u7528 proxy\uff1f",id:"003---vue30-\u4e3a\u4ec0\u4e48\u8981\u7528-proxy",level:2},{value:"004 - Vue 3.0 \u4e2d\u7684 Vue Composition API\uff1f",id:"004---vue-30-\u4e2d\u7684-vue-composition-api",level:2}],m={toc:o};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u516dvue3"},"\u516d\u3001vue3"),(0,a.kt)("h2",{id:"001---vue30\u6709\u4ec0\u4e48\u66f4\u65b0"},"001 - Vue3.0\u6709\u4ec0\u4e48\u66f4\u65b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76d1\u6d4b\u673a\u5236\u7684\u6539\u53d8"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3.0 \u5c06\u5e26\u6765\u57fa\u4e8e\u4ee3\u7406 Proxy\u7684 observer \u5b9e\u73b0\uff0c\u63d0\u4f9b\u5168\u8bed\u8a00\u8986\u76d6\u7684\u53cd\u5e94\u6027\u8ddf\u8e2a\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d88\u9664\u4e86 Vue 2 \u5f53\u4e2d\u57fa\u4e8e Object.defineProperty \u7684\u5b9e\u73b0\u6240\u5b58\u5728\u7684\u5f88\u591a\u9650\u5236"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u5c5e\u6027\u7684\u6dfb\u52a0\u548c\u5220\u9664\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u68c0\u6d4b\u6570\u7ec4\u7d22\u5f15\u548c\u957f\u5ea6\u7684\u53d8\u66f4\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Map\u3001Set\u3001WeakMap \u548c WeakSet\u3002"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6a21\u677f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u7528\u57df\u63d2\u69fd\uff0c2.x \u7684\u673a\u5236\u5bfc\u81f4\u4f5c\u7528\u57df\u63d2\u69fd\u53d8\u4e86\uff0c\u7236\u7ec4\u4ef6\u4f1a\u91cd\u65b0\u6e32\u67d3\uff0c\u800c 3.0 \u628a\u4f5c\u7528\u57df\u63d2\u69fd\u6539\u6210\u4e86\u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u8fd9\u6837\u53ea\u4f1a\u5f71\u54cd\u5b50\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\uff0c\u63d0\u5347\u4e86\u6e32\u67d3\u7684\u6027\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u65f6\uff0c\u5bf9\u4e8e render \u51fd\u6570\u7684\u65b9\u9762\uff0cvue3.0 \u4e5f\u8fdb\u884c\u4e00\u7cfb\u5217\u66f4\u6539\u6765\u65b9\u4fbf\u4e60\u60ef\u76f4\u63a5\u4f7f\u7528 api \u6765\u751f\u6210 vdom \u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u8c61\u5f0f\u7684\u7ec4\u4ef6\u58f0\u660e\u65b9\u5f0f"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"vue2.x \u4e2d\u7684\u7ec4\u4ef6\u662f\u901a\u8fc7\u58f0\u660e\u7684\u65b9\u5f0f\u4f20\u5165\u4e00\u7cfb\u5217 option\uff0c\u548c TypeScript \u7684\u7ed3\u5408\u9700\u8981\u901a\u8fc7\u4e00\u4e9b\u88c5\u9970\u5668\u7684\u65b9\u5f0f\u6765\u505a\uff0c\u867d\u7136\u80fd\u5b9e\u73b0\u529f\u80fd\uff0c\u4f46\u662f\u6bd4\u8f83\u9ebb\u70e6\u3002"),(0,a.kt)("li",{parentName:"ul"},"3.0 \u4fee\u6539\u4e86\u7ec4\u4ef6\u7684\u58f0\u660e\u65b9\u5f0f\uff0c\u8fd9\u6837\u4f7f\u5f97\u548c TypeScript \u7684\u7ed3\u5408\u53d8\u5f97\u5f88\u5bb9\u6613"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5176\u5b83\u65b9\u9762\u7684\u66f4\u6539"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668\uff0c\u4ece\u800c\u4f7f\u5f97 weex \u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u6e32\u67d3\u5668\u7684\u65b9\u5f0f\u6765\u6269\u5c55\uff0c\u800c\u4e0d\u662f\u76f4\u63a5 fork \u6e90\u7801\u6765\u6539\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 Fragment\uff08\u591a\u4e2a\u6839\u8282\u70b9\uff09\u548c Protal\uff08\u5728 dom \u5176\u4ed6\u90e8\u5206\u6e32\u67d3\u7ec4\u5efa\u5185\u5bb9\uff09\u7ec4\u4ef6\uff0c\u9488\u5bf9\u4e00\u4e9b\u7279\u6b8a\u7684\u573a\u666f\u505a\u4e86\u5904\u7406\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e tree shaking \u4f18\u5316\uff0c\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u5185\u7f6e\u529f\u80fd\u3002")))),(0,a.kt)("h2",{id:"002---defineproperty\u548cproxy\u7684\u533a\u522b"},"002 - defineProperty\u548cproxy\u7684\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defineProperty"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vue \u5728\u5b9e\u4f8b\u521d\u59cb\u5316\u65f6\u904d\u5386 data \u4e2d\u7684\u6240\u6709\u5c5e\u6027\uff0c\u5e76\u4f7f\u7528 Object.defineProperty \u628a\u8fd9\u4e9b\u5c5e\u6027\u5168\u90e8\u8f6c\u4e3a getter/setter\u3002\u8fd9\u6837\u5f53\u8ffd\u8e2a\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0csetter \u4f1a\u88ab\u81ea\u52a8\u8c03\u7528\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b58\u5728\u7684\u95ee\u9898"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u6216\u5220\u9664\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0cVue \u68c0\u6d4b\u4e0d\u5230\u3002\u56e0\u4e3a\u6dfb\u52a0\u6216\u5220\u9664\u7684\u5bf9\u8c61\u6ca1\u6709\u5728\u521d\u59cb\u5316\u8fdb\u884c\u54cd\u5e94\u5f0f\u5904\u7406\uff0c\u53ea\u80fd\u901a\u8fc7$set \u6765\u8c03\u7528Object.defineProperty()\u5904\u7406\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u76d1\u63a7\u5230\u6570\u7ec4\u4e0b\u6807\u548c\u957f\u5ea6\u7684\u53d8\u5316\u3002"))))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"proxy"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Vue3 \u4f7f\u7528 Proxy \u6765\u76d1\u63a7\u6570\u636e\u7684\u53d8\u5316\u3002Proxy \u662f ES6 \u4e2d\u63d0\u4f9b\u7684\u529f\u80fd\uff0c\u5176\u4f5c\u7528\u4e3a\uff1a\u7528\u4e8e\u5b9a\u4e49\u57fa\u672c\u64cd\u4f5c\u7684\u81ea\u5b9a\u4e49\u884c\u4e3a\uff08\u5982\u5c5e\u6027\u67e5\u627e\uff0c\u8d4b\u503c\uff0c\u679a\u4e3e\uff0c\u51fd\u6570\u8c03\u7528\u7b49\uff09"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defineProperty\u548cproxy\u7684\u533a\u522b"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Proxy \u76f4\u63a5\u4ee3\u7406\u6574\u4e2a\u5bf9\u8c61\u800c\u975e\u5bf9\u8c61\u5c5e\u6027\uff0c\u8fd9\u6837\u53ea\u9700\u505a\u4e00\u5c42\u4ee3\u7406\u5c31\u53ef\u4ee5\u76d1\u542c\u540c\u7ea7\u7ed3\u6784\u4e0b\u7684\u6240\u6709\u5c5e\u6027\u53d8\u5316\uff0c\u5305\u62ec\u65b0\u589e\u5c5e\u6027\u548c\u5220\u9664\u5c5e\u6027\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Proxy \u53ef\u4ee5\u76d1\u542c\u6570\u7ec4\u7684\u53d8\u5316\u3002")))))),(0,a.kt)("h2",{id:"003---vue30-\u4e3a\u4ec0\u4e48\u8981\u7528-proxy"},"003 - Vue3.0 \u4e3a\u4ec0\u4e48\u8981\u7528 proxy\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 Vue2 \u4e2d\uff0c 0bject.defineProperty \u4f1a\u6539\u53d8\u539f\u59cb\u6570\u636e\uff0c\u800c Proxy \u662f\u521b\u5efa\u5bf9\u8c61\u7684\u865a\u62df\u8868\u793a\uff0c\u5e76\u63d0\u4f9b set \u3001get \u548c deleteProperty\n\u7b49\u5904\u7406\u5668\uff0c\u8fd9\u4e9b\u5904\u7406\u5668\u53ef\u5728\u8bbf\u95ee\u6216\u4fee\u6539\u539f\u59cb\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u65f6\u8fdb\u884c\u62e6\u622a\uff0c\u6709\u4ee5\u4e0b\u7279\u70b9\u2236"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u25cf \u4e0d\u9700\u7528\u4f7f\u7528 Vue.$set \u6216 Vue.$delete \u89e6\u53d1\u54cd\u5e94\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u25cf \u5168\u65b9\u4f4d\u7684\u6570\u7ec4\u53d8\u5316\u68c0\u6d4b\uff0c\u6d88\u9664\u4e86Vue2 \u65e0\u6548\u7684\u8fb9\u754c\u60c5\u51b5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u25cf \u652f\u6301 Map\uff0cSet\uff0cWeakMap \u548c WeakSet\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Proxy \u5b9e\u73b0\u7684\u54cd\u5e94\u5f0f\u539f\u7406\u4e0e Vue2\u7684\u5b9e\u73b0\u539f\u7406\u76f8\u540c\uff0c\u5b9e\u73b0\u65b9\u5f0f\u5927\u540c\u5c0f\u5f02\u2236"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u25cf get \u6536\u96c6\u4f9d\u8d56"),(0,a.kt)("li",{parentName:"ul"},"\u25cf set\u3001delete \u7b49\u89e6\u53d1\u4f9d\u8d56"),(0,a.kt)("li",{parentName:"ul"},"\u25cf \u5bf9\u4e8e\u96c6\u5408\u7c7b\u578b\uff0c\u5c31\u662f\u5bf9\u96c6\u5408\u5bf9\u8c61\u7684\u65b9\u6cd5\u505a\u4e00\u5c42\u5305\u88c5\uff1a\u539f\u65b9\u6cd5\u6267\u884c\u540e\u6267\u884c\u4f9d\u8d56\u76f8\u5173\u7684\u6536\u96c6\u6216\u89e6\u53d1\u903b\u8f91\u3002")))),(0,a.kt)("h2",{id:"004---vue-30-\u4e2d\u7684-vue-composition-api"},"004 - Vue 3.0 \u4e2d\u7684 Vue Composition API\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 Vue2 \u4e2d\uff0c\u4ee3\u7801\u662f Options API \u98ce\u683c\u7684\uff0c\u4e5f\u5c31\u662f\u901a\u8fc7\u586b\u5145 (option) data\u3001methods\u3001computed \u7b49\u5c5e\u6027\u6765\u5b8c\u6210\u4e00\u4e2a Vue \u7ec4\u4ef6\u3002\u9020\u6210\u4e86\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7531\u4e8e Options API \u4e0d\u591f\u7075\u6d3b\u7684\u5f00\u53d1\u65b9\u5f0f\uff0c\u4f7f\u5f97Vue\u5f00\u53d1\u7f3a\u4e4f\u4f18\u96c5\u7684\u65b9\u6cd5\u6765\u5728\u7ec4\u4ef6\u95f4\u5171\u7528\u4ee3\u7801\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Vue \u7ec4\u4ef6\u8fc7\u4e8e\u4f9d\u8d56this\u4e0a\u4e0b\u6587\uff0cVue \u80cc\u540e\u7684\u4e00\u4e9b\u5c0f\u6280\u5de7\u4f7f\u5f97 Vue \u7ec4\u4ef6\u7684\u5f00\u53d1\u770b\u8d77\u6765\u4e0e JavaScript \u7684\u5f00\u53d1\u539f\u5219\u76f8\u6096\uff0c\u6bd4\u5982\u5728methods\n\u4e2d\u7684this\u7adf\u7136\u6307\u5411\u7ec4\u4ef6\u5b9e\u4f8b\u6765\u4e0d\u6307\u5411methods\u6240\u5728\u7684\u5bf9\u8c61\u3002\u8fd9\u4e5f\u4f7f\u5f97 TypeScript \u5728Vue2 \u4e2d\u5f88\u4e0d\u597d\u7528\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Vue3 \u4e2d\uff0c\u820d\u5f03\u4e86 Options API\uff0c\u8f6c\u800c\u6295\u5411 Composition API\u3002Composition API\u672c\u8d28\u4e0a\u662f\u5c06 Options API \u80cc\u540e\u7684\u673a\u5236\u66b4\u9732\u7ed9\u7528\u6237\u76f4\u63a5\u4f7f\u7528\uff0c\u8fd9\u6837\u7528\u6237\u5c31\u62e5\u6709\u4e86\u66f4\u591a\u7684\u7075\u6d3b\u6027\uff0c\u4e5f\u4f7f\u5f97 Vue3\n\u66f4\u9002\u5408\u4e8e TypeScript \u7ed3\u5408\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vue Composition API \u4f7f\u5f97 Vue3 \u7684\u5f00\u53d1\u98ce\u683c\u66f4\u63a5\u8fd1\u4e8e\u539f\u751f JavaScript\uff0c\u5e26\u7ed9\u5f00\u53d1\u8005\u66f4\u591a\u5730\u7075\u6d3b\u6027"))))))}s.isMDXComponent=!0}}]);