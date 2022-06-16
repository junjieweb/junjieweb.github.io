"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6484],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return N}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=o(n),N=i,c=u["".concat(m,".").concat(N)]||u[N]||k[N]||l;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function N(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],p={sidebar_position:7},m="Git",o={unversionedId:"study-notes/git",id:"study-notes/git",title:"Git",description:"\u7b80\u4ecb",source:"@site/docs/study-notes/git.md",sourceDirName:"study-notes",slug:"/study-notes/git",permalink:"/docs/study-notes/git",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/git.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"TypeScript",permalink:"/docs/study-notes/ts\u7b14\u8bb0"},next:{title:"GitHub",permalink:"/docs/study-notes/GitHub"}},d={},k=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u7248\u672c\u63a7\u5236",id:"\u7248\u672c\u63a7\u5236",level:2},{value:"\u7248\u672c\u63a7\u5236\u5de5\u5177",id:"\u7248\u672c\u63a7\u5236\u5de5\u5177",level:3},{value:"\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177",id:"\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177",level:4},{value:"\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177",id:"\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177",level:4},{value:"\u8d77\u59cb\u914d\u7f6e",id:"\u8d77\u59cb\u914d\u7f6e",level:2},{value:"\u57fa\u672c\u64cd\u4f5c",id:"\u57fa\u672c\u64cd\u4f5c",level:2},{value:"git commit \u6ce8\u91ca",id:"git-commit-\u6ce8\u91ca",level:2},{value:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4",level:3},{value:"Commit types",id:"commit-types",level:3},{value:".git \u76ee\u5f55\u4fe1\u606f",id:"git-\u76ee\u5f55\u4fe1\u606f",level:2},{value:"\u7248\u672c\u5e93\u7684\u4e09\u4e2a\u533a\u57df",id:"\u7248\u672c\u5e93\u7684\u4e09\u4e2a\u533a\u57df",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u5386\u53f2\u7248\u672c\u56de\u6eda",id:"\u5386\u53f2\u7248\u672c\u56de\u6eda",level:2},{value:"\u914d\u7f6e\u5ffd\u7565\u6587\u4ef6",id:"\u914d\u7f6e\u5ffd\u7565\u6587\u4ef6",level:2},{value:"\u4ed3\u5e93\u4e2d\u6ca1\u6709\u63d0\u4ea4\u8be5\u6587\u4ef6",id:"\u4ed3\u5e93\u4e2d\u6ca1\u6709\u63d0\u4ea4\u8be5\u6587\u4ef6",level:4},{value:"\u4ed3\u5e93\u4e2d\u5df2\u7ecf\u63d0\u4ea4\u8be5\u6587\u4ef6",id:"\u4ed3\u5e93\u4e2d\u5df2\u7ecf\u63d0\u4ea4\u8be5\u6587\u4ef6",level:4},{value:"\u5206\u652f",id:"\u5206\u652f",level:2},{value:"\u51b2\u7a81",id:"\u51b2\u7a81",level:2},{value:"GitFlow",id:"gitflow",level:2}],u={toc:k};function N(e){var t=e.components,p=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"git"},"Git"),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Git \u662f\u4e00\u4e2a\u514d\u8d39\u7684\u3001\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u53ef\u4ee5\u5feb\u901f\u9ad8\u6548\u5730\u5904\u7406\u4ece\u5c0f\u578b\u5230\u5927\u578b\u7684\u5404\u79cd\u9879\u76ee\u3002"),(0,l.kt)("p",null,"Git \u6613\u4e8e\u5b66\u4e60\uff0c\u5360\u5730\u9762\u79ef\u5c0f\uff0c\u6027\u80fd\u6781\u5feb\u3002 \u5b83\u5177\u6709\u5ec9\u4ef7\u7684\u672c\u5730\u5e93\uff0c\u65b9\u4fbf\u7684\u6682\u5b58\u533a\u57df\u548c\u591a\u4e2a\u5de5\u4f5c\u6d41\u5206\u652f\u7b49\u7279\u6027\u3002\u5176\u6027\u80fd\u4f18\u4e8e Subversion\u3001CVS\u3001Perforce \u548c ClearCase \u7b49\u7248\u672c\u63a7\u5236\u5de5\u5177\u3002"),(0,l.kt)("p",null,"\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\u4f5c\u7528\u91cd\u5927\uff0c\u4e3b\u8981\u7684\u529f\u80fd\u6709\u4ee5\u4e0b\u51e0\u70b9:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u5907\u4efd"),(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u56de\u9000"),(0,l.kt)("li",{parentName:"ul"},"\u534f\u4f5c\u5f00\u53d1"),(0,l.kt)("li",{parentName:"ul"},"\u6743\u9650\u63a7\u5236")),(0,l.kt)("h2",{id:"\u7248\u672c\u63a7\u5236"},"\u7248\u672c\u63a7\u5236"),(0,l.kt)("p",null,"\u7248\u672c\u63a7\u5236\u662f\u4e00\u79cd\u8bb0\u5f55\u6587\u4ef6\u5185\u5bb9\u53d8\u5316\uff0c\u4ee5\u4fbf\u5c06\u6765\u67e5\u9605\u7279\u5b9a\u7248\u672c\u4fee\u8ba2\u60c5\u51b5\u7684\u7cfb\u7edf\u3002\u7248\u672c\u63a7\u5236\u5176\u5b9e\u6700\u91cd\u8981\u7684\u662f\u53ef\u4ee5\u8bb0\u5f55\u6587\u4ef6\u4fee\u6539\u5386\u53f2\u8bb0\u5f55\uff0c\u4ece\u800c\u8ba9\u7528\u6237\u80fd\u591f\u67e5\u770b\u5386\u53f2\u7248\u672c\uff0c\u65b9\u4fbf\u7248\u672c\u5207\u6362\u3002"),(0,l.kt)("h3",{id:"\u7248\u672c\u63a7\u5236\u5de5\u5177"},"\u7248\u672c\u63a7\u5236\u5de5\u5177"),(0,l.kt)("h4",{id:"\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177"},"\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177"),(0,l.kt)("p",null,"CVS\u3001SVN(Subversion)\u3001VSS..."),(0,l.kt)("p",null,"\u96c6\u4e2d\u5316\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u8bf8\u5982 CVS\u3001SVN \u7b49\uff0c\u90fd\u6709\u4e00\u4e2a\u5355\u4e00\u7684\u96c6\u4e2d\u7ba1\u7406\u7684\u670d\u52a1\u5668\uff0c\u4fdd\u5b58\u6240\u6709\u6587\u4ef6\u7684\u4fee\u8ba2\u7248\u672c\uff0c\u800c\u534f\u540c\u5de5\u4f5c\u7684\u4eba\u4eec\u90fd\u901a\u8fc7\u5ba2\u6237\u7aef\u8fde\u5230\u8fd9\u53f0\u670d\u52a1\u5668\uff0c\u53d6\u51fa\u6700\u65b0\u7684\u6587\u4ef6\u6216\u8005\u63d0\u4ea4\u66f4\u65b0\u3002\u591a\u5e74\u4ee5\u6765\uff0c\u8fd9\u5df2\u6210\u4e3a\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7684\u6807\u51c6\u505a\u6cd5\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u505a\u6cd5\u5e26\u6765\u4e86\u8bb8\u591a\u597d\u5904\uff0c\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u770b\u5230\u9879\u76ee\u4e2d\u7684\u5176\u4ed6\u4eba\u6b63\u5728\u505a\u4e9b\u4ec0\u4e48\u3002\u800c\u7ba1\u7406\u5458\u4e5f\u53ef\u4ee5\u8f7b\u677e\u638c\u63a7\u6bcf\u4e2a\u5f00\u53d1\u8005\u7684\u6743\u9650\uff0c\u5e76\u4e14\u7ba1\u7406\u4e00\u4e2a\u96c6\u4e2d\u5316\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u8981\u8fdc\u6bd4\u5728\u5404\u4e2a\u5ba2\u6237\u7aef\u4e0a\u7ef4\u62a4\u672c\u5730\u6570\u636e\u5e93\u6765\u5f97\u8f7b\u677e\u5bb9\u6613\u3002"),(0,l.kt)("p",null,"\u4e8b\u5206\u4e24\u9762\uff0c\u6709\u597d\u6709\u574f\u3002\u8fd9\u4e48\u505a\u663e\u800c\u6613\u89c1\u7684\u7f3a\u70b9\u662f\u4e2d\u592e\u670d\u52a1\u5668\u7684\u5355\u70b9\u6545\u969c\u3002\u5982\u679c\u670d\u52a1\u5668\u5b95\u673a\u4e00\u5c0f\u65f6\uff0c\u90a3\u4e48\u5728\u8fd9\u4e00\u5c0f\u65f6\u5185\uff0c\u8c01\u90fd\u65e0\u6cd5\u63d0\u4ea4\u66f4\u65b0\uff0c\u4e5f\u5c31\u65e0\u6cd5\u534f\u540c\u5de5\u4f5c\u3002\n",(0,l.kt)("img",{src:n(1090).Z,width:"965",height:"696"})),(0,l.kt)("h4",{id:"\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177"},"\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177"),(0,l.kt)("p",null,"Git\u3001Mercurial\u3001Bazaar\u3001Darcs..."),(0,l.kt)("p",null,"\u50cf Git \u8fd9\u79cd\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u5de5\u5177\uff0c\u5ba2\u6237\u7aef\u63d0\u53d6\u7684\u4e0d\u662f\u6700\u65b0\u7248\u672c\u7684\u6587\u4ef6\u5feb\u7167\uff0c\u800c\u662f\u628a\u4ee3\u7801\u4ed3\u5e93\u5b8c\u6574\u5730\u955c\u50cf\u4e0b\u6765\uff08\u672c\u5730\u5e93\uff09\u3002\n\u8fd9\u6837\u4efb\u4f55\u4e00\u5904\u534f\u540c\u5de5\u4f5c\u7528\u7684\u6587\u4ef6\u53d1\u751f\u6545\u969c\uff0c\u4e8b\u540e\u90fd\u53ef\u4ee5\u7528\u5176\u4ed6\u5ba2\u6237\u7aef\u7684\u672c\u5730\u4ed3\u5e93\u8fdb\u884c\u6062\u590d\u3002\u56e0\u4e3a\u6bcf\u4e2a\u5ba2\u6237\u7aef\u7684\u6bcf\u4e00\u6b21\u6587\u4ef6\u63d0\u53d6\u64cd\u4f5c\uff0c\u5b9e\u9645\u4e0a\u90fd\u662f\u4e00\u6b21\u5bf9\u6574\u4e2a\u6587\u4ef6\u4ed3\u5e93\u7684\u5b8c\u6574\u5907\u4efd\u3002"),(0,l.kt)("p",null,"\u5206\u5e03\u5f0f\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u51fa\u73b0\u4e4b\u540e,\u89e3\u51b3\u4e86\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7684\u7f3a\u9677:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u65ad\u7f51\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u8fdb\u884c\u5f00\u53d1\uff08\u56e0\u4e3a\u7248\u672c\u63a7\u5236\u662f\u5728\u672c\u5730\u8fdb\u884c\u7684\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u6bcf\u4e2a\u5ba2\u6237\u7aef\u4fdd\u5b58\u7684\u4e5f\u90fd\u662f\u6574\u4e2a\u5b8c\u6574\u7684\u9879\u76ee\uff08\u5305\u542b\u5386\u53f2\u8bb0\u5f55\uff0c\u66f4\u52a0\u5b89\u5168\uff09")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(6406).Z,width:"908",height:"783"})),(0,l.kt)("h2",{id:"\u8d77\u59cb\u914d\u7f6e"},"\u8d77\u59cb\u914d\u7f6e"),(0,l.kt)("p",null,"\u7b2c\u4e00\u6b21\u4f7f\u7528 Git \u7684\u65f6\u5019\uff0c\u4f1a\u8981\u6c42\u6211\u4eec\u914d\u7f6e\u7528\u6237\u540d\u548c\u90ae\u7bb1\uff0c\u7528\u4e8e\u8868\u793a\u5f00\u53d1\u8005\u7684\u4fe1\u606f, \u6ce8\u610f\u547d\u4ee4\u4e4b\u95f4\u7684\u7a7a\u683c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'git config --global user.name "Your Name"')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'git config --global user.email "email@example.com" '))),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"git config -l")," \u547d\u4ee4\u6765\u67e5\u770b\u914d\u7f6e\u4fe1\u606f"),(0,l.kt)("h2",{id:"\u57fa\u672c\u64cd\u4f5c"},"\u57fa\u672c\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5e76\u8fdb\u5165\u7a7a\u6587\u4ef6\u5939"),(0,l.kt)("li",{parentName:"ol"},"\u53f3\u952e => \u70b9\u51fb Git Bash Here \u542f\u52a8\u547d\u4ee4\u884c"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git init")," \u4ed3\u5e93\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u5316\u6587\u4ef6 index.html"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git add index.html")," \u5c06\u6587\u4ef6\u52a0\u5165\u5230\u6682\u5b58\u533a"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git commit -m '\u6ce8\u91ca'")," \u63d0\u4ea4\u5230\u4ed3\u5e93 m \u662f message \u5355\u8bcd\u7684\u7f29\u5199\n",(0,l.kt)("img",{src:n(8020).Z,width:"1318",height:"489"}))),(0,l.kt)("h2",{id:"git-commit-\u6ce8\u91ca"},"git commit \u6ce8\u91ca"),(0,l.kt)("h3",{id:"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4"},(0,l.kt)("a",{parentName:"h3",href:"https://www.conventionalcommits.org/zh-hans/"},"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4")),(0,l.kt)("h3",{id:"commit-types"},(0,l.kt)("a",{parentName:"h3",href:"https://github.com/pvdlg/conventional-changelog-metahub#commit-types"},"Commit types")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Commit Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Emoji"),(0,l.kt)("th",{parentName:"tr",align:null},"Release"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Include in changelog"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"feat")),(0,l.kt)("td",{parentName:"tr",align:null},"Features"),(0,l.kt)("td",{parentName:"tr",align:null},"A new feature"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2728"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minor")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"fix")),(0,l.kt)("td",{parentName:"tr",align:null},"Bug Fixes"),(0,l.kt)("td",{parentName:"tr",align:null},"A bug Fix"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udc1b"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"docs")),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Documentation only changes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udcda"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch")," if ",(0,l.kt)("inlineCode",{parentName:"td"},"scope")," is ",(0,l.kt)("inlineCode",{parentName:"td"},"readme")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"Styles"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udc8e"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"refactor")),(0,l.kt)("td",{parentName:"tr",align:null},"Code Refactoring"),(0,l.kt)("td",{parentName:"tr",align:null},"A code change that neither fixes a bug nor adds a feature"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udce6"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"perf")),(0,l.kt)("td",{parentName:"tr",align:null},"Performance Improvements"),(0,l.kt)("td",{parentName:"tr",align:null},"A code change that improves performance"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\ude80"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"test")),(0,l.kt)("td",{parentName:"tr",align:null},"Tests"),(0,l.kt)("td",{parentName:"tr",align:null},"Adding missing tests or correcting existing tests"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udea8"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"build")),(0,l.kt)("td",{parentName:"tr",align:null},"Builds"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\udee0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"patch")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"ci")),(0,l.kt)("td",{parentName:"tr",align:null},"Continuous Integrations"),(0,l.kt)("td",{parentName:"tr",align:null},"Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2699\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"chore")),(0,l.kt)("td",{parentName:"tr",align:null},"Chores"),(0,l.kt)("td",{parentName:"tr",align:null},"Other changes that don't modify src or test files"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u267b\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"revert")),(0,l.kt)("td",{parentName:"tr",align:null},"Reverts"),(0,l.kt)("td",{parentName:"tr",align:null},"Reverts a previous commit"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud83d\uddd1"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h2",{id:"git-\u76ee\u5f55\u4fe1\u606f"},".git \u76ee\u5f55\u4fe1\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hooks \u76ee\u5f55\u5305\u542b\u5ba2\u6237\u7aef\u6216\u670d\u52a1\u7aef\u7684\u94a9\u5b50\u811a\u672c\uff0c\u5728\u7279\u5b9a\u64cd\u4f5c\u4e0b\u81ea\u52a8\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},"info \u4fe1\u606f\u6587\u4ef6\u5939. \u5305\u542b\u4e00\u4e2a\u5168\u5c40\u6027\u6392\u9664\u6587\u4ef6\uff0c\u53ef\u4ee5\u914d\u7f6e\u6587\u4ef6\u5ffd\u7565"),(0,l.kt)("li",{parentName:"ul"},"logs \u4fdd\u5b58\u65e5\u5fd7\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"objects \u76ee\u5f55\u5b58\u50a8\u6240\u6709\u6570\u636e\u5185\u5bb9\uff0c\u672c\u5730\u7684\u7248\u672c\u5e93\u5b58\u653e\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"refs \u76ee\u5f55\u5b58\u50a8\u6307\u5411\u6570\u636e\u7684\u63d0\u4ea4\u5bf9\u8c61\u7684\u6307\u9488\uff08\u5206\u652f\uff09"),(0,l.kt)("li",{parentName:"ul"},"config \u6587\u4ef6\u5305\u542b\u9879\u76ee\u7279\u6709\u7684\u914d\u7f6e\u9009\u9879"),(0,l.kt)("li",{parentName:"ul"},"description \u7528\u6765\u663e\u793a\u5bf9\u4ed3\u5e93\u7684\u63cf\u8ff0\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"HEAD \u6587\u4ef6\u6307\u793a\u76ee\u524d\u88ab\u68c0\u51fa\u7684\u5206\u652f"),(0,l.kt)("li",{parentName:"ul"},"index \u6682\u5b58\u533a\u6587\u4ef6\uff0c\u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6 (git ls-files)")),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u5207\u8bb0")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0d\u8981\u624b\u52a8\u53bb\u4fee\u6539 .git \u6587\u4ef6\u5939\u4e2d\u7684\u5185\u5bb9"))),(0,l.kt)("h2",{id:"\u7248\u672c\u5e93\u7684\u4e09\u4e2a\u533a\u57df"},"\u7248\u672c\u5e93\u7684\u4e09\u4e2a\u533a\u57df"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u533a\uff08\u4ee3\u7801\u7f16\u8f91\u533a\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u6682\u5b58\u533a\uff08\u4fee\u6539\u5f85\u63d0\u4ea4\u533a\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4ed3\u5e93\u533a\uff08\u4ee3\u7801\u4fdd\u5b58\u533a\uff09")),(0,l.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git init")," \u4ed3\u5e93\u521d\u59cb\u5316"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git add -A")," \u6dfb\u52a0\u6240\u6709\u65b0\u6587\u4ef6\u5230\u6682\u5b58\u533a\uff0c\u6dfb\u52a0\u7684\u662f\u4fee\u6539\uff0c\u800c\u4e0d\u662f\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git commit -m '\u6ce8\u91ca'")," \u63d0\u4ea4\u4fee\u6539\u5e76\u6ce8\u91ca"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git status")," \u7248\u672c\u72b6\u6001\u67e5\u770b\uff0c\u5982\u679c\u663e\u793a\u7684\u662f\u7ea2\u8272\u4fee\u6539\uff0c\u8868\u660e\u6b64\u4fee\u6539\u53ea\u5b58\u5728\u4e8e\u5de5\u4f5c\u533a\u3002\u5982\u679c\u663e\u793a\u7684\u662f\u7eff\u8272\u4fee\u6539\uff0c\u8868\u660e\u6b64\u4fee\u6539\u53ea\u5b58\u5728\u4e8e\u5de5\u4f5c\u533a\u548c\u6682\u5b58\u533a"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git diff")," \u67e5\u770b\u5de5\u4f5c\u533a\u4e0e\u6682\u5b58\u533a\u7684\u5dee\u5f02\uff08\u4e0d\u663e\u793a\u65b0\u589e\u6587\u4ef6\uff09\u663e\u793a\u505a\u4e86\u54ea\u4e9b\u4fee\u6539"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git diff --cached")," \u67e5\u770b\u6682\u5b58\u533a\u4e0e\u4ed3\u5e93\u7684\u5dee\u5f02"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git ls-files")," \u67e5\u770b\u6682\u5b58\u533a\u7684\u6587\u4ef6\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git clone")," \u514b\u9686\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git pull")," \u62c9\u53d6\u6307\u5b9a\u4ed3\u5e93\u7684\u6307\u5b9a\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"li"},"git pull origin master")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git branch")," \u67e5\u770b\u5206\u652f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git branch name")," \u521b\u5efa"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git branch -d name")," \u5220\u9664\u5206\u652f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git merge name")," \u5206\u652f\u5408\u5e76"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git checkout name")," \u5207\u6362\u5206\u652f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git checkout -b name")," \u521b\u5efa\u5e76\u5207\u6362"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git remote")," \u8fdc\u7a0b\u4ed3\u5e93\u522b\u540d\u7ba1\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add")," \u65b0\u589e\u522b\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")," \u79fb\u9664\u522b\u540d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rename")," \u91cd\u547d\u540d\u522b\u540d"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git push")," \u5c06\u672c\u5730\u4ed3\u5e93\u7684\u300e\u5206\u652f\u300f\u63a8\u9001\u5230\u8fdc\u7aef\u4ed3\u5e93",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git push -u origin master")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git push dev master")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git push dev master:main"))))),(0,l.kt)("h2",{id:"\u5386\u53f2\u7248\u672c\u56de\u6eda"},"\u5386\u53f2\u7248\u672c\u56de\u6eda"),(0,l.kt)("p",null,"\u67e5\u770b\u5386\u53f2\u8bb0\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git log")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"git log --oneline")),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5185\u5bb9\u504f\u591a\uff0c\u9700\u8981\u4f7f\u7528\u65b9\u5411\u952e\u4e0a\u4e0b\u6eda\u52a8\uff0c\u6309q\u9000\u51fa")),(0,l.kt)("p",null,"\u6839\u636e\u7248\u672c\u53f7\u8fdb\u884c\u56de\u6eda"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git reset --hard b98cff07d643fb81036b3df15e289aa595844e80")),(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u884c\u7248\u672c\u56de\u9000\u65f6\uff0c\u4e0d\u9700\u8981\u4f7f\u7528\u5b8c\u6574\u7684\u54c8\u5e0c\u5b57\u7b26\u4e32\uff0c\u524d\u4e03\u4f4d\u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u5207\u6362\u4e4b\u524d\uff0c\u8981\u63d0\u4ea4\u5f53\u524d\u7684\u4ee3\u7801\u72b6\u6001\u5230\u4ed3\u5e93")),(0,l.kt)("p",null,"\u627e\u4e0d\u5230\u7248\u672c\u53f7\u7684\u60c5\u51b5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6240\u6709\u64cd\u4f5c\u8bb0\u5f55"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git reflog"))),(0,l.kt)("h2",{id:"\u914d\u7f6e\u5ffd\u7565\u6587\u4ef6"},"\u914d\u7f6e\u5ffd\u7565\u6587\u4ef6"),(0,l.kt)("h4",{id:"\u4ed3\u5e93\u4e2d\u6ca1\u6709\u63d0\u4ea4\u8be5\u6587\u4ef6"},"\u4ed3\u5e93\u4e2d\u6ca1\u6709\u63d0\u4ea4\u8be5\u6587\u4ef6"),(0,l.kt)("p",null,"\u9879\u76ee\u4e2d\u6709\u4e9b\u6587\u4ef6\u4e0d\u5e94\u8be5\u5b58\u50a8\u5230\u7248\u672c\u5e93\u4e2d\uff0cGit \u4e2d\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," \u914d\u7f6e\u5ffd\u7565\uff0c\u4e00\u822c\u4e0e .git \u76ee\u5f55\u540c\u7ea7\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u60c5\u51b5\u6709\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e34\u65f6\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u591a\u5a92\u4f53\u6587\u4ef6\uff0c\u5982\u97f3\u9891\u3001\u89c6\u9891\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u5668\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\uff08.idea\uff09"),(0,l.kt)("li",{parentName:"ol"},"npm \u5b89\u88c5\u7684\u7b2c\u4e09\u65b9\u6a21\u5757",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"# \u5ffd\u7565\u6240\u6709\u7684 .idea \u6587\u4ef6\u5939\n.idea\n# \u5ffd\u7565\u6240\u6709\u4ee5 .test \u7ed3\u5c3e\u7684\u6587\u4ef6\n*.test\n# \u5ffd\u7565 node_modules \u6587\u4ef6\u548c\u6587\u4ef6\u5939\n/node_modules\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," \u53ef\u4ee5\u5728\u5b50\u6587\u4ef6\u5939\u4e0b\u521b\u5efa"),(0,l.kt)("h4",{id:"\u4ed3\u5e93\u4e2d\u5df2\u7ecf\u63d0\u4ea4\u8be5\u6587\u4ef6"},"\u4ed3\u5e93\u4e2d\u5df2\u7ecf\u63d0\u4ea4\u8be5\u6587\u4ef6"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u52a0\u5165\u5230\u7248\u672c\u5e93\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u5728\u7248\u672c\u5e93\u4e2d\u5220\u9664\u8be5\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"git rm --cached .idea")),(0,l.kt)("p",null,"\u7136\u540e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," \u4e2d\u914d\u7f6e\u5ffd\u7565, add\u548ccommit\u63d0\u4ea4\u5373\u53ef"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore")," \u521b\u5efa\u5931\u8d25, \u53ef\u4ee5\u4f7f\u7528\u300e\u7f16\u8f91\u5668\u300f\u6216\u8005\u300e\u547d\u4ee4\u884c\u300f\u65b9\u5f0f\u521b\u5efa"),(0,l.kt)("p",null,"git \u4f1a\u9ed8\u8ba4\u5ffd\u7565\u7a7a\u6587\u4ef6\u5939"),(0,l.kt)("h2",{id:"\u5206\u652f"},"\u5206\u652f"),(0,l.kt)("p",null,"\u5206\u652f\u662f Git \u91cd\u8981\u7684\u529f\u80fd\u7279\u6027\u4e4b\u4e00\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5728\u4e3b\u5f00\u53d1\u7ebf\u7684\u57fa\u7840\u4e0a\u5206\u79bb\u51fa\u65b0\u7684\u5f00\u53d1\u7ebf\u3002branch"),(0,l.kt)("p",null,"\u57fa\u672c\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"p"},"git branch name")," name \u4e3a\u5206\u652f\u7684\u540d\u79f0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u770b\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"p"},"git branch"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5207\u6362\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"p"},"git checkout name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5408\u5e76\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"p"},"git merge name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5220\u9664\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"p"},"git branch -d name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u5e76\u5207\u6362\u5206\u652f ",(0,l.kt)("inlineCode",{parentName:"p"},"git checkout -b name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u6bcf\u6b21\u5728\u5207\u6362\u5206\u652f\u524d\uff0c\u63d0\u4ea4\u4ee5\u4e0b\u5f53\u524d\u5206\u652f"))),(0,l.kt)("h2",{id:"\u51b2\u7a81"},"\u51b2\u7a81"),(0,l.kt)("p",null,"\u5f53\u591a\u4e2a\u5206\u652f\u4fee\u6539\u540c\u4e00\u4e2a\u6587\u4ef6\u540e\uff0c\u5408\u5e76\u5206\u652f\u7684\u65f6\u5019\u5c31\u4f1a\u4ea7\u751f\u51b2\u7a81\u3002\u51b2\u7a81\u7684\u89e3\u51b3\u975e\u5e38\u7b80\u5355\uff0c\u300e\u5c06\u5185\u5bb9\u4fee\u6539\u4e3a\u6700\u7ec8\u60f3\u8981\u7684\u7ed3\u679c\u300f\uff0c\u7136\u540e\u7ee7\u7eed\u6267\u884c git add \u4e0e git commit \u5c31\u53ef\u4ee5\u4e86\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git status")," \u5b9a\u4f4d\u6709\u51b2\u7a81\u7684\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539\u51b2\u7a81\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u4e3a\u6700\u7ec8\u6b63\u786e\u7684\u6837\u5b50"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"git add")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"git commit"))),(0,l.kt)("h2",{id:"gitflow"},"GitFlow"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"GitFlow")," \u662f\u56e2\u961f\u5f00\u53d1\u7684\u4e00\u79cd\u6700\u4f73\u5b9e\u8df5\uff0c\u5c06\u4ee3\u7801\u5212\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\u5206\u652f\n",(0,l.kt)("img",{src:n(8604).Z,width:"1942",height:"1211"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Master"))," \u4e3b\u5206\u652f\u3002\u4e0a\u9762\u53ea\u4fdd\u5b58\u6b63\u5f0f\u53d1\u5e03\u7684\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Hotfix"))," \u7ebf\u4e0a\u4ee3\u7801 Bug \u4fee\u590d\u5206\u652f\u3002\u5f00\u53d1\u5b8c\u540e\u9700\u8981\u5408\u5e76\u56deMaster\u548cDevelop\u5206\u652f\uff0c\u540c\u65f6\u5728Master\u4e0a\u6253\u4e00\u4e2atag"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Feather"))," \u529f\u80fd\u5206\u652f\u3002\u5f53\u5f00\u53d1\u67d0\u4e2a\u529f\u80fd\u65f6\uff0c\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u5206\u652f\uff0c\u5f00\u53d1\u5b8c\u6bd5\u540e\u518d\u5408\u5e76\u5230 dev \u5206\u652f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Release"))," \u5206\u652f\u3002\u5f85\u53d1\u5e03\u5206\u652f\uff0cRelease\u5206\u652f\u57fa\u4e8eDevelop\u5206\u652f\u521b\u5efa\uff0c\u5728\u8fd9\u4e2aRelease\u5206\u652f\u4e0a\u6d4b\u8bd5\uff0c\u4fee\u6539Bug"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Develop"))," \u5f00\u53d1\u5206\u652f\u3002\u5f00\u53d1\u8005\u90fd\u5728\u8fd9\u4e2a\u5206\u652f\u4e0a\u63d0\u4ea4\u4ee3\u7801")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u9996\u6b21\u514b\u9686\u5b8c\u4ee3\u7801\u540e\uff0c\u9700\u8981\u5207\u6362\u5230\u5f00\u53d1\u5206\u652f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre"},"//\u67e5\u770b\u6240\u6709\u5206\u652f\ngit branch -a\n//\u5207\u6362\u5206\u652f\ngit checkout dev\n")))))}N.isMDXComponent=!0},8604:function(e,t,n){t.Z=n.p+"assets/images/GitFlow-87647e3b1d2a193569068e3659e11d23.png"},8020:function(e,t,n){t.Z=n.p+"assets/images/git-0c24e7f371dc6e94e1d9c0b59c8fee62.png"},6406:function(e,t,n){t.Z=n.p+"assets/images/\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236-7eeb61833e21869e969525b7f8f861f4.png"},1090:function(e,t,n){t.Z=n.p+"assets/images/\u96c6\u4e2d\u5f0f\u7248\u672c\u63a7\u5236-f8ff7b3cff9e716b4b7c25d5a760924e.png"}}]);