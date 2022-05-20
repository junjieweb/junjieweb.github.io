"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1174],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||l[d]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},p="Vuex",u={unversionedId:"study-notes/vue\u7b14\u8bb0/vuex",id:"study-notes/vue\u7b14\u8bb0/vuex",title:"Vuex",description:"1.\u6982\u5ff5",source:"@site/docs/study-notes/vue\u7b14\u8bb0/vuex.md",sourceDirName:"study-notes/vue\u7b14\u8bb0",slug:"/study-notes/vue\u7b14\u8bb0/vuex",permalink:"/docs/study-notes/vue\u7b14\u8bb0/vuex",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/vue\u7b14\u8bb0/vuex.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vue-CLI",permalink:"/docs/study-notes/vue\u7b14\u8bb0/vue2_cli"},next:{title:"Vue-Router",permalink:"/docs/study-notes/vue\u7b14\u8bb0/vue-router"}},m={},l=[{value:"1.\u6982\u5ff5",id:"1\u6982\u5ff5",level:3},{value:"2.\u4f55\u65f6\u4f7f\u7528\uff1f",id:"2\u4f55\u65f6\u4f7f\u7528",level:3},{value:"3.\u642d\u5efavuex\u73af\u5883",id:"3\u642d\u5efavuex\u73af\u5883",level:3},{value:"4.\u57fa\u672c\u4f7f\u7528",id:"4\u57fa\u672c\u4f7f\u7528",level:3},{value:"5.getters\u7684\u4f7f\u7528",id:"5getters\u7684\u4f7f\u7528",level:3},{value:"6.\u56db\u4e2amap\u65b9\u6cd5\u7684\u4f7f\u7528",id:"6\u56db\u4e2amap\u65b9\u6cd5\u7684\u4f7f\u7528",level:3},{value:"7.\u6a21\u5757\u5316+\u547d\u540d\u7a7a\u95f4",id:"7\u6a21\u5757\u5316\u547d\u540d\u7a7a\u95f4",level:3}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vuex"},"Vuex"),(0,o.kt)("h3",{id:"1\u6982\u5ff5"},"1.\u6982\u5ff5"),(0,o.kt)("p",null,"\u5728Vue\u4e2d\u5b9e\u73b0\u96c6\u4e2d\u5f0f\u72b6\u6001\uff08\u6570\u636e\uff09\u7ba1\u7406\u7684\u4e00\u4e2aVue\u63d2\u4ef6\uff0c\u5bf9vue\u5e94\u7528\u4e2d\u591a\u4e2a\u7ec4\u4ef6\u7684\u5171\u4eab\u72b6\u6001\u8fdb\u884c\u96c6\u4e2d\u5f0f\u7684\u7ba1\u7406\uff08\u8bfb/\u5199\uff09\uff0c\u4e5f\u662f\u4e00\u79cd\u7ec4\u4ef6\u95f4\u901a\u4fe1\u7684\u65b9\u5f0f\uff0c\u4e14\u9002\u7528\u4e8e\u4efb\u610f\u7ec4\u4ef6\u95f4\u901a\u4fe1\u3002"),(0,o.kt)("h3",{id:"2\u4f55\u65f6\u4f7f\u7528"},"2.\u4f55\u65f6\u4f7f\u7528\uff1f"),(0,o.kt)("p",null,"\u591a\u4e2a\u7ec4\u4ef6\u9700\u8981\u5171\u4eab\u6570\u636e\u65f6"),(0,o.kt)("h3",{id:"3\u642d\u5efavuex\u73af\u5883"},"3.\u642d\u5efavuex\u73af\u5883"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa\u6587\u4ef6\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"src/store/index.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u5f15\u5165Vue\u6838\u5fc3\u5e93\nimport Vue from 'vue'\n//\u5f15\u5165Vuex\nimport Vuex from 'vuex'\n//\u5e94\u7528Vuex\u63d2\u4ef6\nVue.use(Vuex)\n\n//\u51c6\u5907actions\u5bf9\u8c61\u2014\u2014\u54cd\u5e94\u7ec4\u4ef6\u4e2d\u7528\u6237\u7684\u52a8\u4f5c\nconst actions = {}\n//\u51c6\u5907mutations\u5bf9\u8c61\u2014\u2014\u4fee\u6539state\u4e2d\u7684\u6570\u636e\nconst mutations = {}\n//\u51c6\u5907state\u5bf9\u8c61\u2014\u2014\u4fdd\u5b58\u5177\u4f53\u7684\u6570\u636e\nconst state = {}\n\n//\u521b\u5efa\u5e76\u66b4\u9732store\nexport default new Vuex.Store({\n actions,\n mutations,\n state\n})\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"main.js"),"\u4e2d\u521b\u5efavm\u65f6\u4f20\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u914d\u7f6e\u9879"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5f15\u5165store\nimport store from './store'\n\n// \u521b\u5efavm\nnew Vue({\n el:'#app',\n render: h => h(App),\n store\n})\n")))),(0,o.kt)("h3",{id:"4\u57fa\u672c\u4f7f\u7528"},"4.\u57fa\u672c\u4f7f\u7528"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u6570\u636e\u3001\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"actions"),"\u3001\u914d\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"mutations"),"\uff0c\u64cd\u4f5c\u6587\u4ef6",(0,o.kt)("inlineCode",{parentName:"p"},"store.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u5f15\u5165Vue\u6838\u5fc3\u5e93\nimport Vue from 'vue'\n//\u5f15\u5165Vuex\nimport Vuex from 'vuex'\n//\u5f15\u7528Vuex\nVue.use(Vuex)\n\nconst actions = {\n    //\u54cd\u5e94\u7ec4\u4ef6\u4e2d\u52a0\u7684\u52a8\u4f5c\n jia(context,value){\n  // console.log('actions\u4e2d\u7684jia\u88ab\u8c03\u7528\u4e86',miniStore,value)\n  context.commit('JIA',value)\n },\n}\n\nconst mutations = {\n    //\u6267\u884c\u52a0\n JIA(state,value){\n  // console.log('mutations\u4e2d\u7684JIA\u88ab\u8c03\u7528\u4e86',state,value)\n  state.sum += value\n }\n}\n\n//\u521d\u59cb\u5316\u6570\u636e\nconst state = {\n   sum:0\n}\n\n//\u521b\u5efa\u5e76\u66b4\u9732store\nexport default new Vuex.Store({\n actions,\n mutations,\n state,\n})\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u4e2d\u8bfb\u53d6vuex\u4e2d\u7684\u6570\u636e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"$store.state.sum"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u4e2d\u4fee\u6539vuex\u4e2d\u7684\u6570\u636e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"$store.dispatch('action\u4e2d\u7684\u65b9\u6cd5\u540d',\u6570\u636e)")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"$store.commit('mutations\u4e2d\u7684\u65b9\u6cd5\u540d',\u6570\u636e)")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\u82e5\u6ca1\u6709\u7f51\u7edc\u8bf7\u6c42\u6216\u5176\u4ed6\u4e1a\u52a1\u903b\u8f91\uff0c\u7ec4\u4ef6\u4e2d\u4e5f\u53ef\u4ee5\u8d8a\u8fc7actions\uff0c\u5373\u4e0d\u5199",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),"\uff0c\u76f4\u63a5\u7f16\u5199",(0,o.kt)("inlineCode",{parentName:"p"},"commit"))))),(0,o.kt)("h3",{id:"5getters\u7684\u4f7f\u7528"},"5.getters\u7684\u4f7f\u7528"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6982\u5ff5\uff1a\u5f53state\u4e2d\u7684\u6570\u636e\u9700\u8981\u7ecf\u8fc7\u52a0\u5de5\u540e\u518d\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528getters\u52a0\u5de5\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"store.js"),"\u4e2d\u8ffd\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"getters"),"\u914d\u7f6e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"......\n\nconst getters = {\n bigSum(state){\n  return state.sum * 10\n }\n}\n\n//\u521b\u5efa\u5e76\u66b4\u9732store\nexport default new Vuex.Store({\n ......\n getters\n})\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u4e2d\u8bfb\u53d6\u6570\u636e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"$store.getters.bigSum")))),(0,o.kt)("h3",{id:"6\u56db\u4e2amap\u65b9\u6cd5\u7684\u4f7f\u7528"},"6.\u56db\u4e2amap\u65b9\u6cd5\u7684\u4f7f\u7528"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",null,"mapState\u65b9\u6cd5\uff1a"),"\u7528\u4e8e\u5e2e\u52a9\u6211\u4eec\u6620\u5c04```state```\u4e2d\u7684\u6570\u636e\u4e3a\u8ba1\u7b97\u5c5e\u6027",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"computed: {\n    //\u501f\u52a9mapState\u751f\u6210\u8ba1\u7b97\u5c5e\u6027\uff1asum\u3001school\u3001subject\uff08\u5bf9\u8c61\u5199\u6cd5\uff09\n     ...mapState({sum:'sum',school:'school',subject:'subject'}),\n         \n    //\u501f\u52a9mapState\u751f\u6210\u8ba1\u7b97\u5c5e\u6027\uff1asum\u3001school\u3001subject\uff08\u6570\u7ec4\u5199\u6cd5\uff09\n    ...mapState(['sum','school','subject']),\n},\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",null,"mapGetters\u65b9\u6cd5\uff1a"),"\u7528\u4e8e\u5e2e\u52a9\u6211\u4eec\u6620\u5c04```getters```\u4e2d\u7684\u6570\u636e\u4e3a\u8ba1\u7b97\u5c5e\u6027",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"computed: {\n    //\u501f\u52a9mapGetters\u751f\u6210\u8ba1\u7b97\u5c5e\u6027\uff1abigSum\uff08\u5bf9\u8c61\u5199\u6cd5\uff09\n    ...mapGetters({bigSum:'bigSum'}),\n\n    //\u501f\u52a9mapGetters\u751f\u6210\u8ba1\u7b97\u5c5e\u6027\uff1abigSum\uff08\u6570\u7ec4\u5199\u6cd5\uff09\n    ...mapGetters(['bigSum'])\n},\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",null,"mapActions\u65b9\u6cd5\uff1a"),"\u7528\u4e8e\u5e2e\u52a9\u6211\u4eec\u751f\u6210\u4e0e```actions```\u5bf9\u8bdd\u7684\u65b9\u6cd5\uff0c\u5373\uff1a\u5305\u542b```$store.dispatch(xxx)```\u7684\u51fd\u6570",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"methods:{\n    //\u9760mapActions\u751f\u6210\uff1aincrementOdd\u3001incrementWait\uff08\u5bf9\u8c61\u5f62\u5f0f\uff09\n    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})\n\n    //\u9760mapActions\u751f\u6210\uff1aincrementOdd\u3001incrementWait\uff08\u6570\u7ec4\u5f62\u5f0f\uff09\n    ...mapActions(['jiaOdd','jiaWait'])\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",null,"mapMutations\u65b9\u6cd5\uff1a"),"\u7528\u4e8e\u5e2e\u52a9\u6211\u4eec\u751f\u6210\u4e0e```mutations```\u5bf9\u8bdd\u7684\u65b9\u6cd5\uff0c\u5373\uff1a\u5305\u542b```$store.commit(xxx)```\u7684\u51fd\u6570",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"methods:{\n    //\u9760mapActions\u751f\u6210\uff1aincrement\u3001decrement\uff08\u5bf9\u8c61\u5f62\u5f0f\uff09\n    ...mapMutations({increment:'JIA',decrement:'JIAN'}),\n    \n    //\u9760mapMutations\u751f\u6210\uff1aJIA\u3001JIAN\uff08\u5bf9\u8c61\u5f62\u5f0f\uff09\n    ...mapMutations(['JIA','JIAN']),\n}\n")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1amapActions\u4e0emapMutations\u4f7f\u7528\u65f6\uff0c\u82e5\u9700\u8981\u4f20\u9012\u53c2\u6570\u9700\u8981\uff1a\u5728\u6a21\u677f\u4e2d\u7ed1\u5b9a\u4e8b\u4ef6\u65f6\u4f20\u9012\u597d\u53c2\u6570\uff0c\u5426\u5219\u53c2\u6570\u662f\u4e8b\u4ef6\u5bf9\u8c61\u3002")),(0,o.kt)("h3",{id:"7\u6a21\u5757\u5316\u547d\u540d\u7a7a\u95f4"},"7.\u6a21\u5757\u5316+\u547d\u540d\u7a7a\u95f4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u76ee\u7684\uff1a\u8ba9\u4ee3\u7801\u66f4\u597d\u7ef4\u62a4\uff0c\u8ba9\u591a\u79cd\u6570\u636e\u5206\u7c7b\u66f4\u52a0\u660e\u786e\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"store.js")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const countAbout = {\n  namespaced:true,//\u5f00\u542f\u547d\u540d\u7a7a\u95f4\n  state:{x:1},\n  mutations: { ... },\n  actions: { ... },\n  getters: {\n    bigSum(state){\n       return state.sum * 10\n    }\n  }\n}\n\nconst personAbout = {\n  namespaced:true,//\u5f00\u542f\u547d\u540d\u7a7a\u95f4\n  state:{ ... },\n  mutations: { ... },\n  actions: { ... }\n}\n\nconst store = new Vuex.Store({\n  modules: {\n    countAbout,\n    personAbout\n  }\n})\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5f00\u542f\u547d\u540d\u7a7a\u95f4\u540e\uff0c\u7ec4\u4ef6\u4e2d\u8bfb\u53d6state\u6570\u636e\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u65b9\u5f0f\u4e00\uff1a\u81ea\u5df1\u76f4\u63a5\u8bfb\u53d6\nthis.$store.state.personAbout.list\n//\u65b9\u5f0f\u4e8c\uff1a\u501f\u52a9mapState\u8bfb\u53d6\uff1a\n...mapState('countAbout',['sum','school','subject']),\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5f00\u542f\u547d\u540d\u7a7a\u95f4\u540e\uff0c\u7ec4\u4ef6\u4e2d\u8bfb\u53d6getters\u6570\u636e\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u65b9\u5f0f\u4e00\uff1a\u81ea\u5df1\u76f4\u63a5\u8bfb\u53d6\nthis.$store.getters['personAbout/firstPersonName']\n//\u65b9\u5f0f\u4e8c\uff1a\u501f\u52a9mapGetters\u8bfb\u53d6\uff1a\n...mapGetters('countAbout',['bigSum'])\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5f00\u542f\u547d\u540d\u7a7a\u95f4\u540e\uff0c\u7ec4\u4ef6\u4e2d\u8c03\u7528dispatch"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u65b9\u5f0f\u4e00\uff1a\u81ea\u5df1\u76f4\u63a5dispatch\nthis.$store.dispatch('personAbout/addPersonWang',person)\n//\u65b9\u5f0f\u4e8c\uff1a\u501f\u52a9mapActions\uff1a\n...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5f00\u542f\u547d\u540d\u7a7a\u95f4\u540e\uff0c\u7ec4\u4ef6\u4e2d\u8c03\u7528commit"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//\u65b9\u5f0f\u4e00\uff1a\u81ea\u5df1\u76f4\u63a5commit\nthis.$store.commit('personAbout/ADD_PERSON',person)\n//\u65b9\u5f0f\u4e8c\uff1a\u501f\u52a9mapMutations\uff1a\n...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),\n")))))}d.isMDXComponent=!0}}]);