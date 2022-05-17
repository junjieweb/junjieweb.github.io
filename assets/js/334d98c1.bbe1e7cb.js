"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7183],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,u=function(e,t){if(null==e)return{};var n,a,u={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,u=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),k=u,v=c["".concat(o,".").concat(k)]||c[k]||s[k]||i;return n?a.createElement(v,r(r({ref:t},m),{},{components:n})):a.createElement(v,r({ref:t},m))}));function k(e,t){var n=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:u,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var a=n(7462),u=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:4},o="\u56db\u3001vuex",p={unversionedId:"interview-questions/vue/vuex",id:"interview-questions/vue/vuex",title:"\u56db\u3001vuex",description:"Vuex \u7684\u539f\u7406",source:"@site/docs/interview-questions/vue/vuex.md",sourceDirName:"interview-questions/vue",slug:"/interview-questions/vue/vuex",permalink:"/docs/interview-questions/vue/vuex",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/docs/interview-questions/vue/vuex.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4e09\u3001\u7ec4\u4ef6\u901a\u4fe1",permalink:"/docs/interview-questions/vue/\u7ec4\u4ef6\u95f4\u901a\u4fe1"},next:{title:"\u4e94\u3001router",permalink:"/docs/interview-questions/vue/vue-router"}},m={},s=[{value:"Vuex \u7684\u539f\u7406",id:"vuex-\u7684\u539f\u7406",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u7528 Vuex",id:"\u4e3a\u4ec0\u4e48\u8981\u7528-vuex",level:2},{value:"Vuex\u6709\u54ea\u51e0\u79cd\u5c5e\u6027\uff1f",id:"vuex\u6709\u54ea\u51e0\u79cd\u5c5e\u6027",level:2},{value:"Vuex\u4e2dactions\u548cmutations\u7684\u533a\u522b",id:"vuex\u4e2dactions\u548cmutations\u7684\u533a\u522b",level:2},{value:"\u4e3a\u4ec0\u4e48 Vuex \u7684 mutation \u4e2d\u4e0d\u80fd\u505a\u5f02\u6b65\u64cd\u4f5c\uff1f",id:"\u4e3a\u4ec0\u4e48-vuex-\u7684-mutation-\u4e2d\u4e0d\u80fd\u505a\u5f02\u6b65\u64cd\u4f5c",level:2},{value:"Vuex \u548c localStorage \u7684\u533a\u522b",id:"vuex-\u548c-localstorage-\u7684\u533a\u522b",level:2},{value:"Vuex\u548c\u5355\u7eaf\u7684\u5168\u5c40\u5bf9\u8c61\u6709\u4ec0\u4e48\u533a\u522b\uff1f",id:"vuex\u548c\u5355\u7eaf\u7684\u5168\u5c40\u5bf9\u8c61\u6709\u4ec0\u4e48\u533a\u522b",level:2},{value:"Vuex\u7684\u4e25\u683c\u6a21\u5f0f\u662f\u4ec0\u4e48,\u6709\u4ec0\u4e48\u4f5c\u7528\uff0c\u5982\u4f55\u5f00\u542f\uff1f",id:"vuex\u7684\u4e25\u683c\u6a21\u5f0f\u662f\u4ec0\u4e48\u6709\u4ec0\u4e48\u4f5c\u7528\u5982\u4f55\u5f00\u542f",level:2},{value:"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u6279\u91cf\u4f7f\u7528Vuex\u7684getter\u5c5e\u6027",id:"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u6279\u91cf\u4f7f\u7528vuex\u7684getter\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u91cd\u590d\u4f7f\u7528Vuex\u7684mutation",id:"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u91cd\u590d\u4f7f\u7528vuex\u7684mutation",level:2}],c={toc:s};function k(e){var t=e.components,n=(0,u.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u56dbvuex"},"\u56db\u3001vuex"),(0,i.kt)("h2",{id:"vuex-\u7684\u539f\u7406"},"Vuex \u7684\u539f\u7406"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"vuex\u6982\u8ff0")),(0,i.kt)("p",null,"Vuex \u662f\u4e00\u4e2a\u4e13\u4e3a Vue.js \u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u7684\u72b6\u6001\u7ba1\u7406\u6a21\u5f0f\u3002\u6bcf\u4e00\u4e2a Vuex \u5e94\u7528\u7684\u6838\u5fc3\u5c31\u662f store\uff08\u4ed3\u5e93\uff09\u3002\u201cstore\u201d \u57fa\u672c\u4e0a\u5c31\u662f\u4e00\u4e2a\u5bb9\u5668\uff0c\u5b83\u5305\u542b\u7740\u4f60\u7684\u5e94\u7528\u4e2d\u5927\u90e8\u5206\u7684\u72b6\u6001 ( state )\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vuex \u7684\u72b6\u6001\u5b58\u50a8\u662f\u54cd\u5e94\u5f0f\u7684\u3002\u5f53 Vue \u7ec4\u4ef6\u4ece store \u4e2d\u8bfb\u53d6\u72b6\u6001\u7684\u65f6\u5019\uff0c\u82e5 store \u4e2d\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u76f8\u5e94\u7684\u7ec4\u4ef6\u4e5f\u4f1a\u76f8\u5e94\u5730\u5f97\u5230\u9ad8\u6548\u66f4\u65b0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6539\u53d8 store \u4e2d\u7684\u72b6\u6001\u7684\u552f\u4e00\u9014\u5f84\u5c31\u662f\u663e\u5f0f\u5730\u63d0\u4ea4 (commit) mutation\u3002\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u5730\u8ddf\u8e2a\u6bcf\u4e00\u4e2a\u72b6\u6001\u7684\u53d8\u5316\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6838\u5fc3\u6d41\u7a0b\u53ca\u4e3b\u8981\u529f\u80fd")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vue Components \u662f vue \u7ec4\u4ef6\uff0c\u7ec4\u4ef6\u4f1a\u89e6\u53d1\uff08dispatch\uff09\u4e00\u4e9b\u4e8b\u4ef6\u6216\u52a8\u4f5c\uff0c\u4e5f\u5c31\u662f\u56fe\u4e2d\u7684 Actions;"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u4e2d\u53d1\u51fa\u7684\u52a8\u4f5c\uff0c\u80af\u5b9a\u662f\u60f3\u83b7\u53d6\u6216\u8005\u6539\u53d8\u6570\u636e\u7684\uff0c\u4f46\u662f\u5728 vuex \u4e2d\uff0c\u6570\u636e\u662f\u96c6\u4e2d\u7ba1\u7406\u7684\uff0c\u4e0d\u80fd\u76f4\u63a5\u53bb\u66f4\u6539\u6570\u636e\uff0c\u6240\u4ee5\u4f1a\u628a\u8fd9\u4e2a\u52a8\u4f5c\u63d0\u4ea4\uff08Commit\uff09\u5230 Mutations \u4e2d;"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u540e Mutations \u5c31\u53bb\u6539\u53d8\uff08Mutate\uff09State \u4e2d\u7684\u6570\u636e;"),(0,i.kt)("li",{parentName:"ul"},"\u5f53 State \u4e2d\u7684\u6570\u636e\u88ab\u6539\u53d8\u4e4b\u540e\uff0c\u5c31\u4f1a\u91cd\u65b0\u6e32\u67d3\uff08Render\uff09\u5230 Vue Components \u4e2d\u53bb\uff0c\u7ec4\u4ef6\u5c55\u793a\u66f4\u65b0\u540e\u7684\u6570\u636e\uff0c\u5b8c\u6210\u4e00\u4e2a\u6d41\u7a0b\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5404\u6a21\u5757\u5728\u6838\u5fc3\u6d41\u7a0b\u4e2d\u7684\u4e3b\u8981\u529f\u80fd")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Vue Components"),"\u2236 Vue\u7ec4\u4ef6\u3002HTML\u9875\u9762\u4e0a\uff0c\u8d1f\u8d23\u63a5\u6536\u7528\u6237\u64cd\u4f5c\u7b49\u4ea4\u4e92\u884c\u4e3a\uff0c\u6267\u884cdispatch\u65b9\u6cd5\u89e6\u53d1\u5bf9\u5e94action\u8fdb\u884c\u56de\u5e94\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dispatch"),"\u2236\u64cd\u4f5c\u884c\u4e3a\u89e6\u53d1\u65b9\u6cd5\uff0c\u662f\u552f\u4e00\u80fd\u6267\u884caction\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"actions"),"\u2236 \u64cd\u4f5c\u884c\u4e3a\u5904\u7406\u6a21\u5757\u3002\u8d1f\u8d23\u5904\u7406Vue\nComponents\u63a5\u6536\u5230\u7684\u6240\u6709\u4ea4\u4e92\u884c\u4e3a\u3002\u5305\u542b\u540c\u6b65/\u5f02\u6b65\u64cd\u4f5c\uff0c\u652f\u6301\u591a\u4e2a\u540c\u540d\u65b9\u6cd5\uff0c\u6309\u7167\u6ce8\u518c\u7684\u987a\u5e8f\u4f9d\u6b21\u89e6\u53d1\u3002\u5411\u540e\u53f0API\u8bf7\u6c42\u7684\u64cd\u4f5c\u5c31\u5728\u8fd9\u4e2a\u6a21\u5757\u4e2d\u8fdb\u884c\uff0c\u5305\u62ec\u89e6\u53d1\u5176\u4ed6action\u4ee5\u53ca\u63d0\u4ea4mutation\u7684\u64cd\u4f5c\u3002\u8be5\u6a21\u5757\u63d0\u4f9b\u4e86Promise\u7684\u5c01\u88c5\uff0c\u4ee5\u652f\u6301action\u7684\u94fe\u5f0f\u89e6\u53d1\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"commit"),"\u2236\u72b6\u6001\u6539\u53d8\u63d0\u4ea4\u64cd\u4f5c\u65b9\u6cd5\u3002\u5bf9mutation\u8fdb\u884c\u63d0\u4ea4\uff0c\u662f\u552f\u4e00\u80fd\u6267\u884cmutation\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mutations"),"\u2236\u72b6\u6001\u6539\u53d8\u64cd\u4f5c\u65b9\u6cd5\u3002\u662fVuex\u4fee\u6539state\u7684\u552f\u4e00\u63a8\u8350\u65b9\u6cd5\uff0c\u5176\u4ed6\u4fee\u6539\u65b9\u5f0f\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u5c06\u4f1a\u62a5\u9519\u3002\u8be5\u65b9\u6cd5\u53ea\u80fd\u8fdb\u884c\u540c\u6b65\u64cd\u4f5c\uff0c\u4e14\u65b9\u6cd5\u540d\u53ea\u80fd\u5168\u5c40\u552f\u4e00\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),"\u2236 \u9875\u9762\u72b6\u6001\u7ba1\u7406\u5bb9\u5668\u5bf9\u8c61\u3002\u96c6\u4e2d\u5b58\u50a8VueComponents\u4e2ddata\u5bf9\u8c61\u7684\u96f6\u6563\u6570\u636e\uff0c\u5168\u5c40\u552f\u4e00\uff0c\u4ee5\u8fdb\u884c\u7edf\u4e00\u7684\u72b6\u6001\u7ba1\u7406\u3002\u9875\u9762\u663e\u793a\u6240\u9700\u7684\u6570\u636e\u4ece\u8be5\u5bf9\u8c61\u4e2d\u8fdb\u884c\u8bfb\u53d6\uff0c\u5e76\u8fdb\u884c\u72b6\u6001\u66f4\u65b0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getters"),"\u2236 state\u5bf9\u8c61\u8bfb\u53d6\u65b9\u6cd5\u3002")),(0,i.kt)("p",null,"\u603b\u7ed3"),(0,i.kt)("p",null,"Vuex \u5b9e\u73b0\u4e86\u4e00\u4e2a\u5355\u5411\u6570\u636e\u6d41\uff0c\u5728\u5168\u5c40\u62e5\u6709\u4e00\u4e2a State \u5b58\u653e\u6570\u636e\uff0c\u5f53\u7ec4\u4ef6\u8981\u66f4\u6539 State \u4e2d\u7684\u6570\u636e\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7 Mutation \u63d0\u4ea4\u4fee\u6539\u4fe1\u606f\uff0c Mutation \u540c\u65f6\u63d0\u4f9b\u4e86\u8ba2\u9605\u8005\u6a21\u5f0f\u4f9b\u5916\u90e8\u63d2\u4ef6\u8c03\u7528\u83b7\u53d6 State\n\u6570\u636e\u7684\u66f4\u65b0\u3002\u800c\u5f53\u6240\u6709\u5f02\u6b65\u64cd\u4f5c(\u5e38\u89c1\u4e8e\u8c03\u7528\u540e\u7aef\u63a5\u53e3\u5f02\u6b65\u83b7\u53d6\u66f4\u65b0\u6570\u636e)\u6216\u6279\u91cf\u7684\u540c\u6b65\u64cd\u4f5c\u9700\u8981\u8d70 Action \uff0c\u4f46 Action \u4e5f\u662f\u65e0\u6cd5\u76f4\u63a5\u4fee\u6539 State \u7684\uff0c\u8fd8\u662f\u9700\u8981\u901a\u8fc7Mutation\n\u6765\u4fee\u6539State\u7684\u6570\u636e\u3002\u6700\u540e\uff0c\u6839\u636e State \u7684\u53d8\u5316\uff0c\u6e32\u67d3\u5230\u89c6\u56fe\u4e0a\u3002"),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u8981\u7528-vuex"},"\u4e3a\u4ec0\u4e48\u8981\u7528 Vuex"),(0,i.kt)("p",null,'\u5bf9\u4e8e\u591a\u5c42\u5d4c\u5957\u7684\u7ec4\u4ef6\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u91c7\u53d6\u4f20\u53c2\u6216\u8005\u7ec4\u4ef6\u95f4\u901a\u4fe1\u7684\u65b9\u5f0f\u5c06\u4f1a\u975e\u5e38\u7e41\u7410\uff0c\u800c\u4e14\u901a\u5e38\u4f1a\u5bfc\u81f4\u4ee3\u7801\u65e0\u6cd5\u7ef4\u62a4\u3002\u6240\u4ee5\u9700\u8981\u628a\u7ec4\u4ef6\u7684\u5171\u4eab\u72b6\u6001\u62bd\u53d6\u51fa\u6765\uff0c\u4ee5\u4e00\u4e2a\u5168\u5c40\u5355\u4f8b\u6a21\u5f0f\u7ba1\u7406\u3002\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u7ec4\u4ef6\u6811\u6784\u6210\u4e86\u4e00\u4e2a\u5de8\u5927\u7684"\u89c6\u56fe"\n\uff0c\u4e0d\u7ba1\u5728\u6811\u7684\u54ea\u4e2a\u4f4d\u7f6e\uff0c\u4efb\u4f55\u7ec4\u4ef6\u90fd\u80fd\u83b7\u53d6\u72b6\u6001\u6216\u8005\u89e6\u53d1\u884c\u4e3a\u3002\u53e6\u5916\uff0c\u901a\u8fc7\u5b9a\u4e49\u548c\u9694\u79bb\u72b6\u6001\u7ba1\u7406\u4e2d\u7684\u5404\u79cd\u6982\u5ff5\u5e76\u5f3a\u5236\u9075\u5b88\u4e00\u5b9a\u7684\u89c4\u5219\uff0c\u4ee3\u7801\u5c06\u4f1a\u53d8\u5f97\u66f4\u7ed3\u6784\u5316\u4e14\u6613\u7ef4\u62a4\u3002\u800c\u4e14vuex\u4e2d\u7684\u6570\u636e\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u53ea\u8981vuex\u4e2d\u7684\u6570\u636e\u66f4\u65b0\uff0c\u4f9d\u8d56\u4ed6\u7684\u6570\u636e\u7684\u7ec4\u4ef6\u4e5f\u4f1a\u8ddf\u7740\u66f4\u65b0\u3002'),(0,i.kt)("h2",{id:"vuex\u6709\u54ea\u51e0\u79cd\u5c5e\u6027"},"Vuex\u6709\u54ea\u51e0\u79cd\u5c5e\u6027\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"state => \u57fa\u672c\u6570\u636e(\u6570\u636e\u6e90\u5b58\u653e\u5730)"),(0,i.kt)("li",{parentName:"ul"},"getters => \u4ece\u57fa\u672c\u6570\u636e\u6d3e\u751f\u51fa\u6765\u7684\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"mutations => \u63d0\u4ea4\u66f4\u6539\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u540c\u6b65"),(0,i.kt)("li",{parentName:"ul"},"actions => \u50cf\u4e00\u4e2a\u88c5\u9970\u5668\uff0c\u5305\u88f9mutations\uff0c\u4f7f\u4e4b\u53ef\u4ee5\u5f02\u6b65\u3002"),(0,i.kt)("li",{parentName:"ul"},"modules => \u6a21\u5757\u5316Vuex")),(0,i.kt)("h2",{id:"vuex\u4e2dactions\u548cmutations\u7684\u533a\u522b"},"Vuex\u4e2dactions\u548cmutations\u7684\u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"mutations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"mutation\u4e2d\u7684\u64cd\u4f5c\u662f\u4e00\u7cfb\u5217\u7684\u540c\u6b65\u51fd\u6570\uff0c\u7528\u4e8e\u4fee\u6539state\u4e2d\u7684\u53d8\u91cf\u7684\u7684\u72b6\u6001\u3002\u5f53\u4f7f\u7528vuex\u65f6\u9700\u8981\u901a\u8fc7commit\u6765\u63d0\u4ea4\u9700\u8981\u64cd\u4f5c\u7684\u5185\u5bb9\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"actions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Action \u53ef\u4ee5\u5305\u542b\u4efb\u610f\u5f02\u6b65\u64cd\u4f5c\uff0cAction \u63d0\u4ea4\u7684\u662f mutation\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u53d8\u66f4\u72b6\u6001\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u533a\u522b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mutation\u4e13\u6ce8\u4e8e\u4fee\u6539State\uff0c\u7406\u8bba\u4e0a\u662f\u4fee\u6539State\u7684\u552f\u4e00\u9014\u5f84\uff1bAction\u4e1a\u52a1\u4ee3\u7801\u3001\u5f02\u6b65\u8bf7\u6c42\u3002"),(0,i.kt)("li",{parentName:"ul"},"Mutation\uff1a\u5fc5\u987b\u540c\u6b65\u6267\u884c\uff1bAction\uff1a\u53ef\u4ee5\u5f02\u6b65\uff0c\u4f46\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5cState\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u89c6\u56fe\u66f4\u65b0\u65f6\uff0c\u5148\u89e6\u53d1actions\uff0cactions\u518d\u89e6\u53d1mutations")))),(0,i.kt)("h2",{id:"\u4e3a\u4ec0\u4e48-vuex-\u7684-mutation-\u4e2d\u4e0d\u80fd\u505a\u5f02\u6b65\u64cd\u4f5c"},"\u4e3a\u4ec0\u4e48 Vuex \u7684 mutation \u4e2d\u4e0d\u80fd\u505a\u5f02\u6b65\u64cd\u4f5c\uff1f"),(0,i.kt)("p",null,"\u6bcf\u4e2amutation\u6267\u884c\u5b8c\u6210\u540e\u90fd\u4f1a\u5bf9\u5e94\u5230\u4e00\u4e2a\u65b0\u7684\u72b6\u6001\u53d8\u66f4\uff0c\u8fd9\u6837devtools\u5c31\u53ef\u4ee5\u5c06\u65b0\u7684\u72b6\u6001\u5b58\u4e0b\u6765\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5b9e\u73b0 \u6570\u636e\u7684\u66f4\u65b0\n\u4e86\u3002\u5982\u679cmutation\u652f\u6301\u5f02\u6b65\u64cd\u4f5c\uff0c\u5c31\u6ca1\u6709\u529e\u6cd5\u77e5\u9053\u72b6\u6001\u662f\u4f55\u65f6\u66f4\u65b0\u7684\uff0c\u65e0\u6cd5\u5f88\u597d\u7684\u8fdb\u884c\u72b6\u6001\u7684\u8ffd\u8e2a\uff0c\u7ed9\u8c03\u8bd5\u5e26\u6765\u56f0\u96be\u3002"),(0,i.kt)("h2",{id:"vuex-\u548c-localstorage-\u7684\u533a\u522b"},"Vuex \u548c localStorage \u7684\u533a\u522b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b58\u50a8\u4f4d\u7f6e\u533a\u522b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"vuex\u5b58\u50a8\u5728\u5185\u5b58\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"localstorage \u5219\u4ee5\u6587\u4ef6\u7684\u65b9\u5f0f\u5b58\u50a8\u5728\u672c\u5730\uff0c\u53ea\u80fd\u5b58\u50a8\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5b58\u50a8\u5bf9\u8c61\u9700\u8981 JSON\u7684stringify\u548cparse\u65b9\u6cd5\u8fdb\u884c\u5904\u7406\u3002 \u8bfb\u53d6\u5185\u5b58\u6bd4\u8bfb\u53d6\u786c\u76d8\u901f\u5ea6\u8981\u5feb"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5e94\u7528\u573a\u666f\u533a\u522b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Vuex \u662f\u4e00\u4e2a\u4e13\u4e3a Vue.js \u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u7684\u72b6\u6001\u7ba1\u7406\u6a21\u5f0f\u3002\u5b83\u91c7\u7528\u96c6\u4e2d\u5f0f\u5b58\u50a8\u7ba1\u7406\u5e94\u7528\u7684\u6240\u6709\u7ec4\u4ef6\u7684\u72b6\u6001\uff0c\u5e76\u4ee5\u76f8\u5e94\u7684\u89c4\u5219\u4fdd\u8bc1\u72b6\u6001\u4ee5\u4e00\u79cd\u53ef\u9884\u6d4b\u7684\u65b9\u5f0f\u53d1\u751f\u53d8\u5316\u3002vuex\u7528\u4e8e\u7ec4\u4ef6\u4e4b\u95f4\u7684\u4f20\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"localstorage\u662f\u672c\u5730\u5b58\u50a8\uff0c\u662f\u5c06\u6570\u636e\u5b58\u50a8\u5230\u6d4f\u89c8\u5668\u7684\u65b9\u6cd5\uff0c\u4e00\u822c\u662f\u5728\u8de8\u9875\u9762\u4f20\u9012\u6570\u636e\u65f6\u4f7f\u7528 \u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u54cd\u5e94\u5f0f\u533a\u522b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Vuex\u80fd\u505a\u5230\u6570\u636e\u7684\u54cd\u5e94\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"localstorage\u4e0d\u80fd\u505a\u5230\u6570\u636e\u7684\u54cd\u5e94\u5f0f"),(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e0d\u53d8\u7684\u6570\u636e\u786e\u5b9e\u53ef\u4ee5\u7528localstorage\u53ef\u4ee5\u4ee3\u66ffvuex\uff0c\u4f46\u662f\u5f53\u4e24\u4e2a\u7ec4\u4ef6\u5171\u7528\u4e00\u4e2a\u6570\u636e\u6e90\uff08\u5bf9\u8c61\u6216\u6570\u7ec4\uff09\u65f6\uff0c\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u7ec4\u4ef6\u6539\u53d8\u4e86\u8be5\u6570\u636e\u6e90\uff0c\u5e0c\u671b\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u54cd\u5e94\u8be5\u53d8\u5316\u65f6\uff0clocalstorage\u65e0\u6cd5\u505a\u5230")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u65f6\u6548\u533a\u522b"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5237\u65b0\u9875\u9762\u65f6vuex\u5b58\u50a8\u7684\u503c\u4f1a\u4e22\u5931"),(0,i.kt)("li",{parentName:"ul"},"\u5237\u65b0\u9875\u9762\u65f6localstorage\u5b58\u50a8\u7684\u503c\u4e0d\u4f1a\u4e22\u5931")))),(0,i.kt)("h2",{id:"vuex\u548c\u5355\u7eaf\u7684\u5168\u5c40\u5bf9\u8c61\u6709\u4ec0\u4e48\u533a\u522b"},"Vuex\u548c\u5355\u7eaf\u7684\u5168\u5c40\u5bf9\u8c61\u6709\u4ec0\u4e48\u533a\u522b\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vuex \u7684\u72b6\u6001\u5b58\u50a8\u662f\u54cd\u5e94\u5f0f\u7684\u3002\u5f53 Vue \u7ec4\u4ef6\u4ece store \u4e2d\u8bfb\u53d6\u72b6\u6001\u7684\u65f6\u5019\uff0c\u82e5 store \u4e2d\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff0c\u90a3\u4e48\u76f8\u5e94\u7684\u7ec4\u4ef6\u4e5f\u4f1a\u76f8\u5e94\u5730\u5f97\u5230\u9ad8\u6548\u66f4\u65b0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u76f4\u63a5\u6539\u53d8 store \u4e2d\u7684\u72b6\u6001\u3002\u6539\u53d8 store \u4e2d\u7684\u72b6\u6001\u7684\u552f\u4e00\u9014\u5f84\u5c31\u662f\u663e\u5f0f\u5730\u63d0\u4ea4 (commit) mutation\u3002\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u5730\u8ddf\u8e2a\u6bcf\u4e00\u4e2a\u72b6\u6001\u7684\u53d8\u5316\u3002")),(0,i.kt)("h2",{id:"vuex\u7684\u4e25\u683c\u6a21\u5f0f\u662f\u4ec0\u4e48\u6709\u4ec0\u4e48\u4f5c\u7528\u5982\u4f55\u5f00\u542f"},"Vuex\u7684\u4e25\u683c\u6a21\u5f0f\u662f\u4ec0\u4e48,\u6709\u4ec0\u4e48\u4f5c\u7528\uff0c\u5982\u4f55\u5f00\u542f\uff1f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e25\u683c\u6a21\u5f0f\u4f5c\u7528"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u65e0\u8bba\u4f55\u65f6\u53d1\u751f\u4e86\u72b6\u6001\u53d8\u66f4\u4e14\u4e0d\u662f\u7531mutation\u51fd\u6570\u5f15\u8d77\u7684\uff0c\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\u3002\u8fd9\u80fd\u4fdd\u8bc1\u6240\u6709\u7684\u72b6\u6001\u53d8\u66f4\u90fd\u80fd\u88ab\u8c03\u8bd5\u5de5\u5177\u8ddf\u8e2a\u5230\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5f00\u542f\u65b9\u5f0f"))),(0,i.kt)("h2",{id:"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u6279\u91cf\u4f7f\u7528vuex\u7684getter\u5c5e\u6027"},"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u6279\u91cf\u4f7f\u7528Vuex\u7684getter\u5c5e\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528mapGetters\u8f85\u52a9\u51fd\u6570, \u5229\u7528\u5bf9\u8c61\u5c55\u5f00\u8fd0\u7b97\u7b26\u5c06getter\u6df7\u5165computed \u5bf9\u8c61\u4e2d")),(0,i.kt)("h2",{id:"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u91cd\u590d\u4f7f\u7528vuex\u7684mutation"},"\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u91cd\u590d\u4f7f\u7528Vuex\u7684mutation"),(0,i.kt)("p",null,"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528\uff0c\u7136\u540e\u8c03\u7528this.setNumber(10)\u76f8\u5f53\u8c03\u7528this.$store.commit('SET_NUMBER',10)"))}k.isMDXComponent=!0}}]);