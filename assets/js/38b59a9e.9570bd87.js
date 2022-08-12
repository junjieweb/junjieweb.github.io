"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,g=c["".concat(s,".").concat(u)]||c[u]||p[u]||r;return t?o.createElement(g,l(l({ref:n},m),{},{components:t})):o.createElement(g,l({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(7462),a=(t(7294),t(3905));const r={sidebar_position:6},l="MongoDB",i={unversionedId:"study-notes/nodejs\u7b14\u8bb0/MongoDB",id:"study-notes/nodejs\u7b14\u8bb0/MongoDB",title:"MongoDB",description:"\u7b80\u4ecb",source:"@site/docs/study-notes/nodejs\u7b14\u8bb0/MongoDB.md",sourceDirName:"study-notes/nodejs\u7b14\u8bb0",slug:"/study-notes/nodejs\u7b14\u8bb0/MongoDB",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/MongoDB",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/study-notes/nodejs\u7b14\u8bb0/MongoDB.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"\u4f1a\u8bdd\u63a7\u5236",permalink:"/docs/study-notes/nodejs\u7b14\u8bb0/Express/\u4f1a\u8bdd\u63a7\u5236"},next:{title:"Vue ",permalink:"/docs/category/vue-"}},s={},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u4e0b\u8f7d\u5b89\u88c5",id:"\u4e0b\u8f7d\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5",id:"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5",level:3},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:3},{value:"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4",id:"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4",level:4},{value:"\u6587\u6863\u547d\u4ee4",id:"\u6587\u6863\u547d\u4ee4",level:4},{value:"\u6761\u4ef6\u63a7\u5236",id:"\u6761\u4ef6\u63a7\u5236",level:4},{value:"\u8fd0\u7b97\u7b26",id:"\u8fd0\u7b97\u7b26",level:5},{value:"\u903b\u8f91\u6216",id:"\u903b\u8f91\u6216",level:5},{value:"\u6b63\u5219\u5339\u914d",id:"\u6b63\u5219\u5339\u914d",level:5},{value:"Mongoose",id:"mongoose",level:2},{value:"\u4f7f\u7528\u6d41\u7a0b",id:"\u4f7f\u7528\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:3},{value:"CRUD",id:"crud",level:3},{value:"\u6dfb\u52a0",id:"\u6dfb\u52a0",level:4},{value:"\u6279\u91cf\u6dfb\u52a0",id:"\u6279\u91cf\u6dfb\u52a0",level:4},{value:"\u5220\u9664",id:"\u5220\u9664",level:4},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:4},{value:"\u8bfb\u53d6",id:"\u8bfb\u53d6",level:4},{value:"\u4e2a\u6027\u5316\u8bfb\u53d6",id:"\u4e2a\u6027\u5316\u8bfb\u53d6",level:4},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u56fe\u5f62\u5316\u64cd\u4f5c",id:"\u56fe\u5f62\u5316\u64cd\u4f5c",level:3},{value:"mongodb \u914d\u7f6e\u5bc6\u7801",id:"mongodb-\u914d\u7f6e\u5bc6\u7801",level:3},{value:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08RDBS\uff09",id:"\u5173\u7cfb\u578b\u6570\u636e\u5e93rdbs",level:3},{value:"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08NoSQL not only SQL \uff09",id:"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93nosql-not-only-sql-",level:3}],m={toc:d};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"MongoDB \u662f\u4e3a\u5feb\u901f\u5f00\u53d1\u4e92\u8054\u7f51 Web \u5e94\u7528\u800c\u8bbe\u8ba1\u7684\u6570\u636e\u5e93\u7cfb\u7edf\uff0c\u5b98\u65b9\u5730\u5740 ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/"},"https://www.mongodb.com/")),(0,a.kt)("p",null,"\u6570\u636e\u5e93\uff08DataBase\uff09\u662f\u6309\u7167\u6570\u636e\u7ed3\u6784\u6765\u7ec4\u7ec7\u3001\u5b58\u50a8\u548c\u7ba1\u7406\u6570\u636e\u7684\u4ed3\u5e93\u3002\u662f\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("h2",{id:"\u4e0b\u8f7d\u5b89\u88c5"},"\u4e0b\u8f7d\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/try/download/community"},(0,a.kt)("strong",{parentName:"a"},"\u70b9\u8fd9\u91cc\u53bb\u4e0b\u8f7d"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u7684\u9ed8\u8ba4\u4f4d\u7f6e"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\MongoDB")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b89\u88c5\u5b8c\u6bd5\u540e\u8fdb\u884c\u51e0\u4e2a\u64cd\u4f5c")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u65b9\u4fbf\u5728\u547d\u4ee4\u884c\u4e0b\u8fd0\u884c\uff0c\u53ef\u4ee5\u914d\u7f6e mongodb \u547d\u4ee4\u7684\u73af\u5883\u53d8\u91cf PATH",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6b64\u7535\u8111 -> \u5c5e\u6027 -> \u9ad8\u7ea7\u7cfb\u7edf\u8bbe\u7f6e -> \u73af\u5883\u53d8\u91cf -> \u53cc\u51fb Path -> \u65b0\u5efa -> \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"mongod.exe")," \u6240\u5728\u6587\u4ef6\u5939\u8def\u5f84"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Program Files\\MongoDB\\Server\\3.2\\bin")))),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u9ed8\u8ba4\u7684\u4ed3\u5e93\u6587\u4ef6\u5939 ",(0,a.kt)("inlineCode",{parentName:"li"},"c:\\data\\db")),(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"mongod")," \u542f\u52a8\u6570\u636e\u5e93\u670d\u52a1\u5668"),(0,a.kt)("li",{parentName:"ol"},"\u53e6\u8d77\u4e00\u4e2a\u547d\u4ee4\u884c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"mongo"))),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5"},"\u4e09\u4e2a\u91cd\u8981\u6982\u5ff5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u5e93\uff08database\uff09 \u6570\u636e\u5e93\u662f\u4e00\u4e2a\u4ed3\u5e93\uff0c\u5728\u4ed3\u5e93\u4e2d\u53ef\u4ee5\u5b58\u653e\u96c6\u5408"),(0,a.kt)("li",{parentName:"ol"},"\u96c6\u5408\uff08collection\uff09 \u96c6\u5408\u7c7b\u4f3c\u4e8eJS\u4e2d\u7684\u6570\u7ec4\uff0c\u5728\u96c6\u5408\u4e2d\u53ef\u4ee5\u5b58\u653e\u6587\u6863"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u6863\uff08document\uff09 \u6587\u6863\u6570\u636e\u5e93\u4e2d\u7684\u6700\u5c0f\u5355\u4f4d\uff0c\u7c7b\u4f3c\u4e8e JS \u4e2d\u7684\u5bf9\u8c61\uff0c\u5728 MongoDB \u4e2d\u6bcf\u4e00\u6761\u6570\u636e\u90fd\u662f\u4e00\u4e2a JS \u7684\u5bf9\u8c61")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6474).Z,width:"1030",height:"684"})),(0,a.kt)("h3",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("h4",{id:"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4"},"\u6570\u636e\u5e93\u96c6\u5408\u547d\u4ee4"),(0,a.kt)("p",null,"\u64cd\u4f5c\u96c6\u5408\u65f6\uff0c\u5982\u679c\u96c6\u5408\u4e0d\u5b58\u5728\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u96c6\u5408"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u663e\u793a\u6240\u6709\u7684\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"show dbs")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"show databases")),(0,a.kt)("li",{parentName:"ol"},"\uff08\u521b\u5efa\uff09\u5207\u6362\u5230\u6307\u5b9a\u7684\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"use \u6570\u636e\u5e93\u540d")),(0,a.kt)("li",{parentName:"ol"},"\u663e\u793a\u5f53\u524d\u6240\u5728\u7684\u6570\u636e\u5e93 ",(0,a.kt)("inlineCode",{parentName:"li"},"db")),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f53\u524d\u6570\u636e\u5e93\uff08\u5148\u5207\u6362\u518d\u5220\u9664\uff09 ",(0,a.kt)("inlineCode",{parentName:"li"},"use project_1")," ",(0,a.kt)("inlineCode",{parentName:"li"},"db.dropDatabase()")),(0,a.kt)("li",{parentName:"ol"},"\u663e\u793a\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u7684\u6240\u6709\u96c6\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"db.createCollection('user'); //\u521b\u5efa\u96c6\u5408")," ",(0,a.kt)("inlineCode",{parentName:"li"},"show collections")),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u5f53\u524d\u96c6\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"db.collection.drop() // db.\u96c6\u5408\u540d\u79f0.drop()")),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u547d\u540d\u96c6\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"db.collection.renameCollection('newName')"))),(0,a.kt)("h4",{id:"\u6587\u6863\u547d\u4ee4"},"\u6587\u6863\u547d\u4ee4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d2\u5165\u6587\u6863")," ",(0,a.kt)("inlineCode",{parentName:"p"},"db.collection.insert(\u6587\u6863\u5bf9\u8c61); // db.\u96c6\u5408\u540d\u79f0.insert")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u67e5\u8be2\u6587\u6863")," ",(0,a.kt)("inlineCode",{parentName:"p"},"db.collection.find(\u67e5\u8be2\u6761\u4ef6)")," ",(0,a.kt)("inlineCode",{parentName:"p"},"db.collection.findOne(\u67e5\u8be2\u6761\u4ef6)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u66f4\u65b0\u6587\u6863")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"db.collection.update(\u67e5\u8be2\u6761\u4ef6,\u65b0\u7684\u6587\u6863,\u914d\u7f6e\u5bf9\u8c61)   \n# \u66f4\u65b0\u4e00\u4e2a\ndb.collection.updateOne(\u67e5\u8be2\u6761\u4ef6,\u8981\u66f4\u65b0\u7684\u5185\u5bb9[,\u914d\u7f6e\u5bf9\u8c61]) \n# \u6279\u91cf\u66f4\u65b0\ndb.collection.updateMany(\u67e5\u8be2\u6761\u4ef6,\u8981\u66f4\u65b0\u7684\u5185\u5bb9[,\u914d\u7f6e\u5bf9\u8c61])\n# eg\ndb.students.update({name:'xiaohigh'},{$set:{age:19}})\n# \u914d\u7f6e\u5bf9\u8c61\n{\n    # \u53ef\u9009\uff0c\u8fd9\u4e2a\u53c2\u6570\u7684\u610f\u601d\u662f\uff0c\u5982\u679c\u4e0d\u5b58\u5728update\u7684\u8bb0\u5f55\uff0c\u662f\u5426\u63d2\u5165objNew,true\u4e3a\u63d2\u5165\uff0c\u9ed8\u8ba4\u662ffalse\uff0c\u4e0d\u63d2\u5165\n    upsert: <boolean>,   \n    # \u53ef\u9009\uff0cmongodb \u9ed8\u8ba4\u662ffalse,\u53ea\u66f4\u65b0\u627e\u5230\u7684\u7b2c\u4e00\u6761\u8bb0\u5f55\uff0c\u5982\u679c\u4e3atrue, \u5c31\u628a\u6309\u6761\u4ef6\u67e5\u51fa\u6765\u591a\u6761\u8bb0\u5f55\u5168\u90e8\u66f4\u65b0\n    multi: <boolean>\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5220\u9664\u6587\u6863")," ",(0,a.kt)("inlineCode",{parentName:"p"},"db.collection.remove(\u67e5\u8be2\u6761\u4ef6)")),(0,a.kt)("h4",{id:"\u6761\u4ef6\u63a7\u5236"},"\u6761\u4ef6\u63a7\u5236"),(0,a.kt)("h5",{id:"\u8fd0\u7b97\u7b26"},"\u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,"\u5728 mongodb \u4e0d\u80fd > < >=  <= !== \u7b49\u8fd0\u7b97\u7b26\uff0c\u9700\u8981\u4f7f\u7528\u66ff\u4ee3\u7b26\u53f7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">"),"   \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$gt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),"   \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$lt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),"   \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$gte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),"   \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$lte")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=="),"   \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"$ne"))),(0,a.kt)("h5",{id:"\u903b\u8f91\u6216"},"\u903b\u8f91\u6216"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$in")," \u6ee1\u8db3\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.students.find({age:{$in:[18,24,26]}}) //   \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$or")," \u903b\u8f91\u6216\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.students.find({$or: [{age: 18}, {age: 24}]});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$and")," \u903b\u8f91\u4e0e\u7684\u60c5\u51b5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});\n")),(0,a.kt)("h5",{id:"\u6b63\u5219\u5339\u914d"},"\u6b63\u5219\u5339\u914d"),(0,a.kt)("p",null,"\u6761\u4ef6\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 JS \u7684\u6b63\u5219\u8bed\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"db.students.find({name: /imissyou/});\n")),(0,a.kt)("h2",{id:"mongoose"},"Mongoose"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.mongoosejs.net/"},(0,a.kt)("strong",{parentName:"a"},"Mongoose"))," \u662f\u4e00\u4e2a\u5bf9\u8c61\u6587\u6863\u6a21\u578b\uff08ODM\uff09\u5e93\uff0c\u5b83\u5bf9Node\u539f\u751f\u7684MongoDB\u6a21\u5757\u8fdb\u884c\u4e86\u8fdb\u4e00\u6b65\u7684\u4f18\u5316\u5c01\u88c5\uff0c\u5e76\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u7528"),"\uff1a\u4f7f\u7528\u4ee3\u7801\u64cd\u4f5c mongodb \u6570\u636e\u5e93"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u6d41\u7a0b"},"\u4f7f\u7528\u6d41\u7a0b"),(0,a.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u4e0b\u4f7f\u7528 npm \u6216\u8005\u5176\u4ed6\u5305\u7ba1\u7406\u5de5\u5177\u5b89\u88c5\uff08cnpm yarn\uff09",(0,a.kt)("inlineCode",{parentName:"p"},"npm install mongoose --save")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//1. \u5b89\u88c5\n//2. \u5f15\u5165mongoose \u6a21\u5757\nconst mongoose = require('mongoose');\n\n//3. \u8fde\u63a5\u6570\u636e\u5e93 connect    project  \u6570\u636e\u5e93\u7684\u540d\u79f0\nmongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});\n\n//4. \u8bbe\u7f6e\u8fde\u63a5\u6210\u529f\u7684\u56de\u8c03\nmongoose.connection.on('open', () => {\n    //5. \u521b\u5efa\u6587\u6863\u7ed3\u6784\u5bf9\u8c61  new Person\n    const UserSchema = new mongoose.Schema({\n        username: String,\n        password: String,\n        age: Number\n    });\n    //6. \u521b\u5efa\u6587\u6863\u6a21\u578b\u5bf9\u8c61\n    const UserModel = mongoose.model('users', UserSchema);\n    //7. \u6570\u636e\u64cd\u4f5c\n    UserModel.create({\n        username: 'tom',\n        password: '123456',\n        age: 28\n    }, (err, data) => {\n        if (err) throw err;\n        //\u82e5\u6ca1\u6709\u9519\u8bef\n        console.log(data);\n        //8. \u9009\u505a  \u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\n        mongoose.connection.close();\n    });\n});\n")),(0,a.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,a.kt)("p",null,"\u6587\u6863\u7ed3\u6784\u53ef\u9009\u7684\u5b57\u6bb5\u7c7b\u578b\u5217\u8868"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"String")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Number")),(0,a.kt)("li",{parentName:"ul"},"Date"),(0,a.kt)("li",{parentName:"ul"},"Buffer"),(0,a.kt)("li",{parentName:"ul"},"Boolean"),(0,a.kt)("li",{parentName:"ul"},"Mixed \u4efb\u610f\u7c7b\u578b\uff08\u4f7f\u7528 mongoose.Schema.Types.Mixed \u8bbe\u7f6e\uff09"),(0,a.kt)("li",{parentName:"ul"},"ObjectId"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Array")),(0,a.kt)("li",{parentName:"ul"},"Decimal128\uff084.3\u7248\u672c\u540e\u52a0\u5165\uff09")),(0,a.kt)("h3",{id:"crud"},"CRUD"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u7684\u57fa\u672c\u64cd\u4f5c\u5305\u62ec\u56db\u4e2a\uff0c\u589e\u52a0\uff08create\uff09\uff0c\u5220\u9664\uff08delete\uff09\uff0c\u4fee\u6539\uff08update\uff09\uff0c\u67e5\uff08read\uff09"),(0,a.kt)("h4",{id:"\u6dfb\u52a0"},"\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//1. \u5b89\u88c5\n//2. \u5f15\u5165mongoose \u6a21\u5757\nconst mongoose = require('mongoose');\n\n//3. \u8fde\u63a5\u6570\u636e\u5e93 connect    project  \u6570\u636e\u5e93\u7684\u540d\u79f0\nmongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});\n\n//4. \u8bbe\u7f6e\u8fde\u63a5\u6210\u529f\u7684\u56de\u8c03\nmongoose.connection.on('open', () => {\n    //5. \u521b\u5efa\u6587\u6863\u7ed3\u6784\u5bf9\u8c61  new Person\n    const UserSchema = new mongoose.Schema({\n        username: String,\n        password: String,\n        age: Number\n    });\n    //6. \u521b\u5efa\u6587\u6863\u6a21\u578b\u5bf9\u8c61\n    const UserModel = mongoose.model('users', UserSchema);\n    //7. \u6570\u636e\u64cd\u4f5c\n    UserModel.create({\n        username: 'tom',\n        password: '123456',\n        age: 28\n    }, (err, data) => {\n        if (err) throw err;\n        //\u82e5\u6ca1\u6709\u9519\u8bef\n        console.log(data);\n        //8. \u9009\u505a  \u5173\u95ed\u6570\u636e\u5e93\u8fde\u63a5\n        mongoose.connection.close();\n    });\n\n});\n")),(0,a.kt)("h4",{id:"\u6279\u91cf\u6dfb\u52a0"},"\u6279\u91cf\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"//2.\u5f15\u5165\u6a21\u5757\nconst mongoose = require('mongoose');\nconst {Schema} = mongoose;\n\n//3.\u8fde\u63a5\u6570\u636e\u5e93                                   \u6570\u636e\u5e93\u540d\u79f0\nmongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});\n\n//4.\u7ed1\u5b9a\u8fde\u63a5\u6210\u529f\u7684\u56de\u8c03\nmongoose.connection.on('open', () => {\n    //5.\u521b\u5efa\u6587\u6863\u7684\u7ed3\u6784\u5bf9\u8c61\n    const StarSchema = new Schema({\n        name: String,\n        age: Number,\n        tags: Array\n    });\n    //6.\u521b\u5efa\u6587\u6863\u6a21\u578b\u5bf9\u8c61                      \u96c6\u5408\u540d\u79f0\n    const StarModel = mongoose.model('star', StarSchema);\n    //7.\u6279\u91cf\u63d2\u5165\n    StarModel.insertMany([\n        {\n            name: '\u83dc\u9e21',\n            age: 35,\n            tags: ['\u5531', '\u8df3', 'rap', '\u7bee\u7403']\n        },\n        {\n            name: '\u9a6c\u4fdd\u56fd',\n            age: 67,\n            tags: ['\u4e0d\u8bb2\u4e94\u7684', '\u5927\u610f\u4e86', '\u6211\u6ca1\u6709\u95ea']\n        },\n        {\n            name: '\u9a6c\u8001\u5e08',\n            age: 35,\n            tags: ['\u9b3c\u5200', '\u8d70\u4f4d', '\u8bc8\u80e1']\n        }\n    ], (err, data) => {\n        if (err) throw err;\n        //\u5982\u679c\u6210\u529f\uff0c\u8f93\u51fadata\n        console.log(data);\n        //\u9009\u505a\n        mongoose.connection.close();\n    });\n});\n")),(0,a.kt)("h4",{id:"\u5220\u9664"},"\u5220\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const mongoose = require('mongoose');\nconst {Schema} = mongoose;\n\nmongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});\n\nmongoose.connection.on('open', () => {\n    //\u7ed3\u6784\u5bf9\u8c61\n    const StarSchema = new Schema({\n        name: String,\n        age: Number,\n        tags: Array\n    });\n    //\u521b\u5efa\u6a21\u578b\u5bf9\u8c61\n    const StarModel = mongoose.model('stars', StarSchema);\n    //\u6587\u6863\u5220\u9664\n    // StarModel.deleteOne({name: '\u9a6c\u4fdd\u56fd'}, (err, data) => {\n    //     if (err) throw err;\n    //     //\u6839\u636e\u5220\u9664\u6570\u636e\u7684\u6570\u91cf \u5224\u65ad\u5220\u9664\u662f\u5426\u6210\u529f\n    //     if (data.deletedCount >= 1) {\n    //         console.log('\u5220\u9664\u6210\u529f');\n    //     } else {\n    //         console.log('\u5220\u9664\u5931\u8d25');\n    //     }\n    //     console.log(data);\n    //     //\u5173\u95ed\u8fde\u63a5\n    //     mongoose.connection.close();\n    // });\n\n    //\u6279\u91cf\u5220\u9664\n    StarModel.deleteMany({name: '\u9a6c\u8001\u5e08'}, (err, data) => {\n        console.log(data);\n    })\n});\n\n")),(0,a.kt)("h4",{id:"\u66f4\u65b0"},"\u66f4\u65b0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const mongoose = require('mongoose');\nconst {Schema} = mongoose;\n\nmongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});\n\nmongoose.connection.on('open', () => {\n    const StarSchema = new Schema({\n        name: String,\n        age: Number,\n        tags: Array\n    });\n\n    //\u521b\u5efa\u6a21\u578b\u5bf9\u8c61\n    const StarModel = mongoose.model('stars', StarSchema);\n\n    //\u66f4\u65b0\n    // StarModel.updateOne({name: '\u83dc\u9e21'}, {name: 'kun'}, (err, data) => {\n    //     if (err) throw err;\n    //     console.log(data);\n    // });\n\n    StarModel.updateMany({name: '\u83dc\u9e21'}, {name: 'kun'}, (err, data) => {\n        if (err) throw err;\n        console.log(data);\n    });\n});\n")),(0,a.kt)("h4",{id:"\u8bfb\u53d6"},"\u8bfb\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const mongoose = require('mongoose');\nconst {Schema} = mongoose;\n\nmongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});\n\nmongoose.connection.on('open', () => {\n    const StarSchema = new Schema({\n        name: String,\n        age: Number,\n        tags: Array\n    });\n\n    //\u521b\u5efa\u6a21\u578b\u5bf9\u8c61\n    const StarModel = mongoose.model('stars', StarSchema);\n\n    //\u8bfb\u53d6\u6570\u636e\n    // StarModel.find({name: '\u9a6c\u4fdd\u56fd'}, (err, data) => {\n    //     if (err) throw err;\n    //     //\u8f93\u51fa\u8bfb\u53d6\u51fa\u6765\u7684\u6570\u636e\n    //     console.log(data);\n    // });\n\n    //\u8bfb\u53d6\u5355\u6761\u6570\u636e\n    // StarModel.findOne({name: 'kun'}, (err, data) => {\n    //     if (err) throw err;\n    //     //\u8f93\u51fa\u8bfb\u53d6\u51fa\u6765\u7684\u6570\u636e\n    //     console.log(data);\n    // });\n\n    //\u6839\u636eid\u83b7\u53d6\u6570\u636e\n    StarModel.findById('61e2da2f1b74d538782e791c', (err, data) => {\n        if (err) throw err;\n        console.log(data);\n    });\n\n});\n")),(0,a.kt)("h4",{id:"\u4e2a\u6027\u5316\u8bfb\u53d6"},"\u4e2a\u6027\u5316\u8bfb\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const mongoose = require('mongoose');\nconst {Schema} = mongoose;\n\nmongoose.connect('mongodb://127.0.0.1:27017/data', {useNewUrlParser: true, useUnifiedTopology: true});\n\nmongoose.connection.on('open', () => {\n    //\u521b\u5efa\u7ed3\u6784\u5bf9\u8c61\n    const SongSchema = new Schema({\n        language: String,\n        hot: Number,\n        title: String,\n        author: String,\n        duration: Number\n    });\n    //\u521b\u5efa\u6a21\u578b\u5bf9\u8c61\n    const SongModel = mongoose.model('songs', SongSchema);\n\n    //\u8bfb\u53d6\u6570\u636e  {} \u8868\u793a\u4e0d\u52a0\u6761\u4ef6\n    // SongModel.find({}, (err, data) => {\n    //     if (err) throw err;\n    //     console.log(data);\n    // })\n\n    //\u5b57\u6bb5\uff08\u5c5e\u6027\uff09\u7b5b\u9009\n    // SongModel.find().select({author: 1, title: 1, _id: 0}).exec((err, data) => {\n    //     if (err) throw err;\n    //     console.log(data);\n    // });\n\n    //\u6570\u636e\u6392\u5e8f  1 \u4e3a\u5347\u5e8f -1 \u4e3a\u964d\u5e8f\n    // SongModel.find().sort({hot: -1}).select({hot: 1, title: 1}).exec((err, data) => {\n    //     if (err) throw err;\n    //     console.log(data);\n    // });\n\n    //\u6570\u636e\u622a\u53d6  \u964d\u5e8f\u8bfb\u53d610\u6761\u6570\u636e\n    //skip \u8df3\u8fc7 n \u6761\n    //limit \u53d6\u51fa n \u6761\n    SongModel.find()\n        .select({hot: 1, title: 1, _id: 0})\n        .sort({hot: -1})\n        .skip(0).limit(10)\n        .exec((err, data) => {\n            if (err) throw err;\n            console.log(data);\n        });\n});\n")),(0,a.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,a.kt)("h3",{id:"\u56fe\u5f62\u5316\u64cd\u4f5c"},"\u56fe\u5f62\u5316\u64cd\u4f5c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://studio3t.com/download/"},(0,a.kt)("strong",{parentName:"a"},"Studio 3T"))),(0,a.kt)("h3",{id:"mongodb-\u914d\u7f6e\u5bc6\u7801"},"mongodb \u914d\u7f6e\u5bc6\u7801"),(0,a.kt)("p",null,"\u4e00\u3001\u542f\u52a8 mongod \u5e26\u9a8c\u8bc1\u9009\u9879"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mongod --auth\n")),(0,a.kt)("p",null,"\u4e8c\u3001\u521b\u5efa\u7528\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'use admin\ndb.createUser({user:"admin",pwd:"password",roles:["root"]})\n')),(0,a.kt)("p",null,"\u4e09\u3001\u8fde\u63a5 mongod \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'mongo\nuse admin\ndb.auth("admin", "password")\n')),(0,a.kt)("p",null,"\u56db\u3001mongoose \u8fde\u63a5\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mongoose.connect('mongodb://admin:password@localhost/prepare?authSource=admin');\n")),(0,a.kt)("h3",{id:"\u5173\u7cfb\u578b\u6570\u636e\u5e93rdbs"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08RDBS\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u8868\u6709"),"\uff1aMySQL\u3001Oracle\u3001DB2\u3001SQL Server..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u70b9"),"\uff1a\u5173\u7cfb\u7d27\u5bc6\uff0c\u90fd\u662f\u8868"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6613\u4e8e\u7ef4\u62a4\uff1a\u90fd\u662f\u4f7f\u7528\u8868\u7ed3\u6784\uff0c\u683c\u5f0f\u4e00\u81f4\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65b9\u4fbf\uff1a\u901a\u7528\uff0c\u53ef\u7528\u4e8e\u590d\u6742\u67e5\u8be2\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u9ad8\u7ea7\u67e5\u8be2\uff1a\u53ef\u7528\u4e8e\u4e00\u4e2a\u8868\u4ee5\u53ca\u591a\u4e2a\u8868\u4e4b\u95f4\u975e\u5e38\u590d\u6742\u7684\u67e5\u8be2\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8bfb\u5199\u6027\u80fd\u6bd4\u8f83\u5dee\uff0c\u5c24\u5176\u662f\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6548\u7387\u8bfb\u5199\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6709\u56fa\u5b9a\u7684\u8868\u7ed3\u6784\uff0c\u5b57\u6bb5\u4e0d\u53ef\u968f\u610f\u66f4\u6539\uff0c\u7075\u6d3b\u5ea6\u7a0d\u6b20\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u9ad8\u5e76\u53d1\u8bfb\u5199\u9700\u6c42\uff0c\u4f20\u7edf\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6765\u8bf4\uff0c\u786c\u76d8I/O\u662f\u4e00\u4e2a\u5f88\u5927\u7684\u74f6\u9888\u3002")),(0,a.kt)("h3",{id:"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93nosql-not-only-sql-"},"\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff08NoSQL not only SQL \uff09"),(0,a.kt)("p",null,"\u4ee3\u8868\u6709\uff1aMongoDB\u3001Redis..."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u70b9\uff1a")," \u5173\u7cfb\u4e0d\u7d27\u5bc6\uff0c\u6709\u6587\u6863\uff0c\u6709\u952e\u503c\u5bf9"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u683c\u5f0f\u7075\u6d3b\uff1a\u5b58\u50a8\u6570\u636e\u7684\u683c\u5f0f\u53ef\u4ee5\u662fkey,value\u5f62\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u901f\u5ea6\u5feb\uff1anosql\u53ef\u4ee5\u5185\u5b58\u4f5c\u4e3a\u8f7d\u4f53\uff0c\u800c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u53ea\u80fd\u4f7f\u7528\u786c\u76d8\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6613\u7528\uff1anosql\u6570\u636e\u5e93\u90e8\u7f72\u7b80\u5355\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u4e8b\u52a1\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u590d\u6742\u67e5\u8be2\u65f6\u8bed\u53e5\u8fc7\u4e8e\u7e41\u7410\u3002")))}p.isMDXComponent=!0},6474:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/mongodb-f782118abd35d01970c5f1a78941f3aa.png"}}]);