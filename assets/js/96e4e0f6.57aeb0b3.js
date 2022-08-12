"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>D});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),O=o(n),D=a,M=O["".concat(u,".").concat(D)]||O[D]||m[D]||l;return n?r.createElement(M,i(i({ref:t},k),{},{components:n})):r.createElement(M,i({ref:t},k))}));function D(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},1099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:7},i="\u4e03\u3001\u865a\u62dfDOM",p={unversionedId:"interview-questions/vue/\u865a\u62dfDOM",id:"interview-questions/vue/\u865a\u62dfDOM",title:"\u4e03\u3001\u865a\u62dfDOM",description:"001 - \u5bf9\u865a\u62dfDOM\u7684\u7406\u89e3\uff1f",source:"@site/docs/interview-questions/vue/\u865a\u62dfDOM.md",sourceDirName:"interview-questions/vue",slug:"/interview-questions/vue/\u865a\u62dfDOM",permalink:"/docs/interview-questions/vue/\u865a\u62dfDOM",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/interview-questions/vue/\u865a\u62dfDOM.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"interview",previous:{title:"\u516d\u3001vue3",permalink:"/docs/interview-questions/vue/vue3"},next:{title:"Node.js\u9762\u8bd5\u9898",permalink:"/docs/interview-questions/nodejs\u9762\u8bd5\u9898"}},u={},o=[{value:"001 - \u5bf9\u865a\u62dfDOM\u7684\u7406\u89e3\uff1f",id:"001---\u5bf9\u865a\u62dfdom\u7684\u7406\u89e3",level:2},{value:"002 - \u865a\u62dfDOM\u7684\u89e3\u6790\u8fc7\u7a0b",id:"002---\u865a\u62dfdom\u7684\u89e3\u6790\u8fc7\u7a0b",level:2},{value:"003 - \u4e3a\u4ec0\u4e48\u8981\u7528\u865a\u62dfDOM",id:"003---\u4e3a\u4ec0\u4e48\u8981\u7528\u865a\u62dfdom",level:2},{value:"004 - \u865a\u62dfDOM\u771f\u7684\u6bd4\u771f\u5b9eDOM\u6027\u80fd\u597d\u5417",id:"004---\u865a\u62dfdom\u771f\u7684\u6bd4\u771f\u5b9edom\u6027\u80fd\u597d\u5417",level:2},{value:"005 - DIFF\u7b97\u6cd5\u7684\u539f\u7406",id:"005---diff\u7b97\u6cd5\u7684\u539f\u7406",level:2},{value:"006 - Vue\u4e2dkey\u7684\u4f5c\u7528",id:"006---vue\u4e2dkey\u7684\u4f5c\u7528",level:2},{value:"007 - \u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u7528index\u4f5c\u4e3akey?",id:"007---\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u7528index\u4f5c\u4e3akey",level:2},{value:"008 - vue\u4e2d\u7684key\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f\uff08key\u7684\u5185\u90e8\u539f\u7406\uff09",id:"008---vue\u4e2d\u7684key\u6709\u4ec0\u4e48\u4f5c\u7528key\u7684\u5185\u90e8\u539f\u7406",level:2}],k={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e03\u865a\u62dfdom"},"\u4e03\u3001\u865a\u62dfDOM"),(0,a.kt)("h2",{id:"001---\u5bf9\u865a\u62dfdom\u7684\u7406\u89e3"},"001 - \u5bf9\u865a\u62dfDOM\u7684\u7406\u89e3\uff1f"),(0,a.kt)("p",null,"\u865a\u62dfDOM\u5c31\u662f\u7528\u6765\u63cf\u8ff0\u771f\u5b9eDOM\u7684javaScript\u5bf9\u8c61\uff0c\u53ef\u4ee5\u5c06\u591a\u6b21\u4fee\u6539\u7684DOM\u4e00\u6b21\u6027\u6e32\u67d3\u5230\u9875\u9762\u4e0a\uff0c\u51cf\u5c11\u9875\u9762\u7684\u91cd\u6392\u91cd\u7ed8\uff0c\u63d0\u9ad8\u6e32\u67d3\u6027\u80fd\u3002 \u5728\u4ee3\u7801\u6e32\u67d3\u5230\u9875\u9762\u4e4b\u524d\uff0cvue\u4f1a\u628a\u4ee3\u7801\u8f6c\u6362\u6210\u4e00\u4e2a\u5bf9\u8c61\uff08\u865a\u62df\nDOM\uff09\u3002\u5728\u6bcf\u6b21\u6570\u636e\u53d1\u751f\u53d8\u5316\u524d\uff0c\u865a\u62dfDOM\u90fd\u4f1a\u7f13\u5b58\u4e00\u4efd\uff0c\u53d8\u5316\u4e4b\u65f6\uff0c\u73b0\u5728\u7684\u865a\u62dfDOM\u4f1a\u4e0e\u7f13\u5b58\u7684\u865a\u62dfDOM\u8fdb\u884c\u6bd4\u8f83\u3002\u5728vue\u5185\u90e8\u5c01\u88c5\u4e86diff\u7b97\u6cd5\uff0c\u901a\u8fc7\u8fd9\u4e2a\u7b97\u6cd5\u6765\u8fdb\u884c\u6bd4\u8f83\uff0c\u6e32\u67d3\u65f6\u4fee\u6539\u6539\u53d8\u7684\u53d8\u5316\uff0c\u539f\u5148\u6ca1\u6709\u53d1\u751f\u6539\u53d8\u7684\u901a\u8fc7\u539f\u5148\u7684\u6570\u636e\u8fdb\u884c\u6e32\u67d3\u3002"),(0,a.kt)("h2",{id:"002---\u865a\u62dfdom\u7684\u89e3\u6790\u8fc7\u7a0b"},"002 - \u865a\u62dfDOM\u7684\u89e3\u6790\u8fc7\u7a0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\u5bf9\u5c06\u8981\u63d2\u5165\u5230\u6587\u6863\u4e2d\u7684 DOM \u6811\u7ed3\u6784\u8fdb\u884c\u5206\u6790\uff0c\u4f7f\u7528 js \u5bf9\u8c61\u5c06\u5176\u8868\u793a\u51fa\u6765\u5e76\u5c06\u8fd9\u4e2a js \u5bf9\u8c61\u6811\u7ed9\u4fdd\u5b58\u4e0b\u6765\uff0c\u6700\u540e\u518d\u5c06 DOM \u7247\u6bb5\u63d2\u5165\u5230\u6587\u6863\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u9875\u9762\u7684\u72b6\u6001\u53d1\u751f\u6539\u53d8\uff0c\u9700\u8981\u5bf9\u9875\u9762\u7684 DOM \u7684\u7ed3\u6784\u8fdb\u884c\u8c03\u6574\u7684\u65f6\u5019\uff0c\u9996\u5148\u6839\u636e\u53d8\u66f4\u7684\u72b6\u6001\uff0c\u91cd\u65b0\u6784\u5efa\u8d77\u4e00\u68f5\u5bf9\u8c61\u6811\uff0c\u7136\u540e\u5c06\u8fd9\u68f5\u65b0\u7684\u5bf9\u8c61\u6811\u548c\u65e7\u7684\u5bf9\u8c61\u6811\u8fdb\u884c\u6bd4\u8f83\uff0c\u8bb0\u5f55\u4e0b\u4e24\u68f5\u6811\u7684\u7684\u5dee\u5f02\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u5c06\u8bb0\u5f55\u7684\u6709\u5dee\u5f02\u7684\u5730\u65b9\u5e94\u7528\u5230\u771f\u6b63\u7684 DOM \u6811\u4e2d\u53bb\uff0c\u8fd9\u6837\u89c6\u56fe\u5c31\u66f4\u65b0\u4e86\u3002")),(0,a.kt)("h2",{id:"003---\u4e3a\u4ec0\u4e48\u8981\u7528\u865a\u62dfdom"},"003 - \u4e3a\u4ec0\u4e48\u8981\u7528\u865a\u62dfDOM"),(0,a.kt)("p",null,"\u4fdd\u8bc1\u6027\u80fd\u4e0b\u9650\uff0c\u5728\u4e0d\u8fdb\u884c\u624b\u52a8\u4f18\u5316\u7684\u60c5\u51b5\u4e0b\uff0c\u63d0\u4f9b\u8fc7\u5f97\u53bb\u7684\u6027\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9875\u9762\u6e32\u67d3\u7684\u6d41\u7a0b"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89e3\u6790HTML -> \u751f\u6210DOM -> \u751f\u6210 CSSOM -> Layout -> Paint -> Compiler"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u6bd4\u4fee\u6539DOM\u65f6\u771f\u5b9eDOM\u64cd\u4f5c\u548c\u865a\u62dfDOM\u7684\u8fc7\u7a0b"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u771f\u5b9eDOM\u2236 \u751f\u6210HTML\u5b57\u7b26\u4e32\uff0b\u91cd\u5efa\u6240\u6709\u7684DOM\u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},"\u865a\u62dfDOM\u2236 \u751f\u6210vNode+ DOMDiff\uff0b\u5fc5\u8981\u7684dom\u66f4\u65b0")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8de8\u5e73\u53f0")," Virtual DOM\u672c\u8d28\u4e0a\u662fJavaScript\u7684\u5bf9\u8c61\uff0c\u5b83\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u8de8\u5e73\u53f0\u64cd\u4f5c\uff0c\u6bd4\u5982\u670d\u52a1\u7aef\u6e32\u67d3\u3001uni-app\u7b49\u3002"),(0,a.kt)("h2",{id:"004---\u865a\u62dfdom\u771f\u7684\u6bd4\u771f\u5b9edom\u6027\u80fd\u597d\u5417"},"004 - \u865a\u62dfDOM\u771f\u7684\u6bd4\u771f\u5b9eDOM\u6027\u80fd\u597d\u5417"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u6b21\u6e32\u67d3\u5927\u91cfDOM\u65f6\uff0c\u7531\u4e8e\u591a\u4e86\u4e00\u5c42\u865a\u62dfDOM\u7684\u8ba1\u7b97\uff0c\u4f1a\u6bd4innerHTML\u63d2\u5165\u6162\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b63\u5982\u5b83\u80fd\u4fdd\u8bc1\u6027\u80fd\u4e0b\u9650\uff0c\u5728\u771f\u5b9eDOM\u64cd\u4f5c\u7684\u65f6\u5019\u8fdb\u884c\u9488\u5bf9\u6027\u7684\u4f18\u5316\u65f6\uff0c\u8fd8\u662f\u66f4\u5feb\u7684\u3002")),(0,a.kt)("h2",{id:"005---diff\u7b97\u6cd5\u7684\u539f\u7406"},"005 - DIFF\u7b97\u6cd5\u7684\u539f\u7406"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u5bf9\u6bd4\u8282\u70b9\u672c\u8eab\uff0c\u5224\u65ad\u662f\u5426\u4e3a\u540c\u4e00\u8282\u70b9\uff0c\u5982\u679c\u4e0d\u4e3a\u76f8\u540c\u8282\u70b9\uff0c\u5219\u5220\u9664\u8be5\u8282\u70b9\u91cd\u65b0\u521b\u5efa\u8282\u70b9\u8fdb\u884c\u66ff\u6362"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e3a\u76f8\u540c\u8282\u70b9\uff0c\u8fdb\u884cpatchVnode\uff0c\u5224\u65ad\u5982\u4f55\u5bf9\u8be5\u8282\u70b9\u7684\u5b50\u8282\u70b9\u8fdb\u884c\u5904\u7406\uff0c\u5148\u5224\u65ad\u4e00\u65b9\u6709\u5b50\u8282\u70b9\u4e00\u65b9\u6ca1\u6709\u5b50\u8282\u70b9\u7684\u60c5\u51b5(\u5982\u679c\u65b0\u7684\u6ca1\u6709\u5b50\u8282\u70b9\uff0c\u5c06\u65e7\u7684\u5b50\u8282\u70b9\u79fb\u9664)"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u8f83\u5982\u679c\u90fd\u6709\u5b50\u8282\u70b9\uff0c\u5219\u8fdb\u884cupdateChildren\uff0c\u5224\u65ad\u5982\u4f55\u5bf9\u8fd9\u4e9b\u65b0\u8001\u8282\u70b9\u7684\u5b50\u8282\u70b9\u8fdb\u884c\u64cd\u4f5c\uff08diff\u6838\u5fc3\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5339\u914d\u65f6\uff0c\u627e\u5230\u76f8\u540c\u7684\u5b50\u8282\u70b9\uff0c\u9012\u5f52\u6bd4\u8f83\u5b50\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u5dee\u5f02\uff0c\u590d\u7528\u8282\u70b9")),(0,a.kt)("h2",{id:"006---vue\u4e2dkey\u7684\u4f5c\u7528"},"006 - Vue\u4e2dkey\u7684\u4f5c\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u79cd\u60c5\u51b5\u662f v-if \u4e2d\u4f7f\u7528 key\u3002\u7531\u4e8e Vue \u4f1a\u5c3d\u53ef\u80fd\u9ad8\u6548\u5730\u6e32\u67d3\u5143\u7d20\uff0c\u901a\u5e38\u4f1a\u590d\u7528\u5df2\u6709\u5143\u7d20\u800c\u4e0d\u662f\u4ece\u5934\u5f00\u59cb\u6e32\u67d3\u3002\u56e0\u6b64\u5f53\u4f7f\u7528 v-if \u6765\u5b9e\u73b0\u5143\u7d20\u5207\u6362\u7684\u65f6\u5019\uff0c\u5982\u679c\u5207\u6362\u524d\u540e\u542b\u6709\u76f8\u540c\u7c7b\u578b\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5143\u7d20\u5c31\u4f1a\u88ab\u590d\u7528\u3002\u5982\u679c\u662f\u76f8\u540c\u7684\ninput \u5143\u7d20\uff0c\u90a3\u4e48\u5207\u6362\u524d\u540e\u7528\u6237\u7684\u8f93\u5165\u4e0d\u4f1a\u88ab\u6e05\u9664\u6389\uff0c\u8fd9\u6837\u662f\u4e0d\u7b26\u5408\u9700\u6c42\u7684\u3002\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 key \u6765\u552f\u4e00\u7684\u6807\u8bc6\u4e00\u4e2a\u5143\u7d20\uff0c\u8fd9\u4e2a\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528 key \u7684\u5143\u7d20\u4e0d\u4f1a\u88ab\u590d\u7528\u3002\u8fd9\u4e2a\u65f6\u5019 key \u7684\u4f5c\u7528\u662f\u7528\u6765\u6807\u8bc6\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u79cd\u60c5\u51b5\u662f v-for \u4e2d\u4f7f\u7528 key\u3002\u7528 v-for \u66f4\u65b0\u5df2\u6e32\u67d3\u8fc7\u7684\u5143\u7d20\u5217\u8868\u65f6\uff0c\u5b83\u9ed8\u8ba4\u4f7f\u7528\u201c\u5c31\u5730\u590d\u7528\u201d\u7684\u7b56\u7565\u3002\u5982\u679c\u6570\u636e\u9879\u7684\u987a\u5e8f\u53d1\u751f\u4e86\u6539\u53d8\uff0cVue \u4e0d\u4f1a\u79fb\u52a8 DOM\n\u5143\u7d20\u6765\u5339\u914d\u6570\u636e\u9879\u7684\u987a\u5e8f\uff0c\u800c\u662f\u7b80\u5355\u590d\u7528\u6b64\u5904\u7684\u6bcf\u4e2a\u5143\u7d20\u3002\u56e0\u6b64\u901a\u8fc7\u4e3a\u6bcf\u4e2a\u5217\u8868\u9879\u63d0\u4f9b\u4e00\u4e2a key \u503c\uff0c\u6765\u4ee5\u4fbf Vue \u8ddf\u8e2a\u5143\u7d20\u7684\u8eab\u4efd\uff0c\u4ece\u800c\u9ad8\u6548\u7684\u5b9e\u73b0\u590d\u7528\u3002\u8fd9\u4e2a\u65f6\u5019 key \u7684\u4f5c\u7528\u662f\u4e3a\u4e86\u9ad8\u6548\u7684\u66f4\u65b0\u6e32\u67d3\u865a\u62df DOM\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u603b\u7ed3")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"vue\u4e3a\u4e86\u66f4\u9ad8\u6548\u7684\u6e32\u67d3\u5143\u7d20\uff0c\u4f1a\u5c3d\u53ef\u80fd\u7684\u590d\u7528\u5143\u7d20\uff0c\u800c\u975e\u4ece\u5934\u6e32\u67d3\uff0ckey\u53ef\u4ee5\u4e3a\u8282\u70b9\u6253\u6807\u8bb0\uff0c\u800c\u975e\u7b80\u5355\u7684\u590d\u7528\u8282\u70b9\u3002\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0cVue\u4f1a\u6839\u636e\u3010\u65b0\u6570\u636e\u3011\u751f\u6210\u3010\u65b0\u7684\u865a\u62dfDOM\u3011,\n\u968f\u540eVue\u8fdb\u884c\u3010\u65b0\u865a\u62dfDOM\u3011\u4e0e\u3010\u65e7\u865a\u62dfDOM\u3011\u7684\u5dee\u5f02\u6bd4\u8f83\uff0c\u6bd4\u8f83\u89c4\u5219"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e7\u865a\u62dfDOM\u4e2d\u627e\u5230\u4e86\u4e0e\u65b0\u865a\u62dfDOM\u76f8\u540c\u7684key"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u82e5\u865a\u62dfDOM\u4e2d\u5185\u5bb9\u6ca1\u53d8, \u76f4\u63a5\u4f7f\u7528\u4e4b\u524d\u7684\u771f\u5b9eDOM"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u865a\u62dfDOM\u4e2d\u5185\u5bb9\u53d8\u4e86, \u5219\u751f\u6210\u65b0\u7684\u771f\u5b9eDOM\uff0c\u968f\u540e\u66ff\u6362\u6389\u9875\u9762\u4e2d\u4e4b\u524d\u7684\u771f\u5b9eDOM"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65e7\u865a\u62dfDOM\u4e2d\u672a\u627e\u5230\u4e0e\u65b0\u865a\u62dfDOM\u76f8\u540c\u7684key"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7684\u771f\u5b9eDOM\uff0c\u968f\u540e\u6e32\u67d3\u5230\u5230\u9875\u9762")))))),(0,a.kt)("h2",{id:"007---\u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u7528index\u4f5c\u4e3akey"},"007 - \u4e3a\u4ec0\u4e48\u4e0d\u5efa\u8bae\u7528index\u4f5c\u4e3akey?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u82e5\u5bf9\u6570\u636e\u8fdb\u884c\uff1a\u9006\u5e8f\u6dfb\u52a0\u3001\u9006\u5e8f\u5220\u9664\u7b49\u7834\u574f\u987a\u5e8f\u64cd\u4f5c:\u4f1a\u4ea7\u751f\u6ca1\u6709\u5fc5\u8981\u7684\u771f\u5b9eDOM\u66f4\u65b0 ==> \u754c\u9762\u6548\u679c\u6ca1\u95ee\u9898, \u4f46\u6548\u7387\u4f4e"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u9006\u5e8f\u6dfb\u52a0\u3001\u9006\u5e8f\u5220\u9664\u7b49\u7834\u574f\u987a\u5e8f\u7684\u64cd\u4f5c\u4e14\u7ed3\u6784\u4e2d\u8fd8\u5305\u542b\u8f93\u5165\u7c7b\u7684DOM\uff1a\u4f1a\u4ea7\u751f\u9519\u8befDOM\u66f4\u65b0 ==> \u754c\u9762\u6709\u95ee\u9898")),(0,a.kt)("h2",{id:"008---vue\u4e2d\u7684key\u6709\u4ec0\u4e48\u4f5c\u7528key\u7684\u5185\u90e8\u539f\u7406"},"008 - vue\u4e2d\u7684key\u6709\u4ec0\u4e48\u4f5c\u7528\uff1f\uff08key\u7684\u5185\u90e8\u539f\u7406\uff09"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u865a\u62dfDOM\u4e2dkey\u7684\u4f5c\u7528\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"key\u662f\u865a\u62dfDOM\u5bf9\u8c61\u7684\u6807\u8bc6\uff0c\u5f53\u6570\u636e\u53d1\u751f\u53d8\u5316\u65f6\uff0cVue\u4f1a\u6839\u636e\u3010\u65b0\u6570\u636e\u3011\u751f\u6210\u3010\u65b0\u7684\u865a\u62dfDOM\u3011")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u968f\u540eVue\u8fdb\u884c\u3010\u65b0\u865a\u62dfDOM\u3011\u4e0e\u3010\u65e7\u865a\u62dfDOM\u3011\u7684\u5dee\u5f02\u6bd4\u8f83\uff0c\u6bd4\u8f83\u89c4\u5219\u5982\u4e0b\uff1a")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5bf9\u6bd4\u89c4\u5219\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u65e7\u865a\u62dfDOM\u4e2d\u627e\u5230\u4e86\u4e0e\u65b0\u865a\u62dfDOM\u76f8\u540c\u7684key\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u82e5\u865a\u62dfDOM\u4e2d\u5185\u5bb9\u6ca1\u53d8, \u76f4\u63a5\u4f7f\u7528\u4e4b\u524d\u7684\u771f\u5b9eDOM\uff01")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u82e5\u865a\u62dfDOM\u4e2d\u5185\u5bb9\u53d8\u4e86, \u5219\u751f\u6210\u65b0\u7684\u771f\u5b9eDOM\uff0c\u968f\u540e\u66ff\u6362\u6389\u9875\u9762\u4e2d\u4e4b\u524d\u7684\u771f\u5b9eDOM\u3002")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u65e7\u865a\u62dfDOM\u4e2d\u672a\u627e\u5230\u4e0e\u65b0\u865a\u62dfDOM\u76f8\u540c\u7684key"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u65b0\u7684\u771f\u5b9eDOM\uff0c\u968f\u540e\u6e32\u67d3\u5230\u5230\u9875\u9762\u3002"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7528index\u4f5c\u4e3akey\u53ef\u80fd\u4f1a\u5f15\u53d1\u7684\u95ee\u9898\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u82e5\u5bf9\u6570\u636e\u8fdb\u884c\uff1a\u9006\u5e8f\u6dfb\u52a0\u3001\u9006\u5e8f\u5220\u9664\u7b49\u7834\u574f\u987a\u5e8f\u64cd\u4f5c\uff1a\u4f1a\u4ea7\u751f\u6ca1\u6709\u5fc5\u8981\u7684\u771f\u5b9eDOM\u66f4\u65b0 ==> \u754c\u9762\u6548\u679c\u6ca1\u95ee\u9898, \u4f46\u6548\u7387\u4f4e\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u7ed3\u6784\u4e2d\u8fd8\u5305\u542b\u8f93\u5165\u7c7b\u7684DOM\uff1a\u4f1a\u4ea7\u751f\u9519\u8befDOM\u66f4\u65b0 ==> \u754c\u9762\u6709\u95ee\u9898\u3002")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f00\u53d1\u4e2d\u5982\u4f55\u9009\u62e9key?:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6700\u597d\u4f7f\u7528\u6bcf\u6761\u6570\u636e\u7684\u552f\u4e00\u6807\u8bc6\u4f5c\u4e3akey, \u6bd4\u5982id\u3001\u624b\u673a\u53f7\u3001\u8eab\u4efd\u8bc1\u53f7\u3001\u5b66\u53f7\u7b49\u552f\u4e00\u503c\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4e0d\u5b58\u5728\u5bf9\u6570\u636e\u7684\u9006\u5e8f\u6dfb\u52a0\u3001\u9006\u5e8f\u5220\u9664\u7b49\u7834\u574f\u987a\u5e8f\u64cd\u4f5c\uff0c\u4ec5\u7528\u4e8e\u6e32\u67d3\u5217\u8868\u7528\u4e8e\u5c55\u793a\uff0c\u4f7f\u7528index\u4f5c\u4e3akey\u662f\u6ca1\u6709\u95ee\u9898\u7684\u3002"))))))}m.isMDXComponent=!0}}]);