"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>_});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},i=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),y=l(o),_=r,m=y["".concat(c,".").concat(_)]||y[_]||u[_]||p;return o?n.createElement(m,a(a({ref:t},i),{},{components:o})):n.createElement(m,a({ref:t},i))}));function _(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,a=new Array(p);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<p;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},703:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const p={sidebar_position:4},a="\u56db\u3001\u539f\u578b",s={unversionedId:"interview-questions/JavaScript/prototype",id:"interview-questions/JavaScript/prototype",title:"\u56db\u3001\u539f\u578b",description:"001 - \u5bf9\u539f\u578b\u3001\u539f\u578b\u94fe\u7684\u7406\u89e3",source:"@site/docs/interview-questions/JavaScript/prototype.md",sourceDirName:"interview-questions/JavaScript",slug:"/interview-questions/JavaScript/prototype",permalink:"/docs/interview-questions/JavaScript/prototype",draft:!1,editUrl:"https://github.com/junjieweb/junjieweb.github.io/tree/main/docs/interview-questions/JavaScript/prototype.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"interview",previous:{title:"\u4e09\u3001JS\u57fa\u7840",permalink:"/docs/interview-questions/JavaScript/basis"},next:{title:"\u4e94\u3001\u5f02\u6b65\u7f16\u7a0b",permalink:"/docs/interview-questions/JavaScript/\u5f02\u6b65\u7f16\u7a0b"}},c={},l=[{value:"001 - \u5bf9\u539f\u578b\u3001\u539f\u578b\u94fe\u7684\u7406\u89e3",id:"001---\u5bf9\u539f\u578b\u539f\u578b\u94fe\u7684\u7406\u89e3",level:2},{value:"002 - \u539f\u578b\u4fee\u6539\u3001\u91cd\u5199",id:"002---\u539f\u578b\u4fee\u6539\u91cd\u5199",level:2},{value:"003 - \u539f\u578b\u94fe\u6307\u5411",id:"003---\u539f\u578b\u94fe\u6307\u5411",level:2},{value:"004 - \u539f\u578b\u94fe\u7684\u7ec8\u70b9\u662f\u4ec0\u4e48\uff1f\u5982\u4f55\u6253\u5370\u51fa\u539f\u578b\u94fe\u7684\u7ec8\u70b9\uff1f",id:"004---\u539f\u578b\u94fe\u7684\u7ec8\u70b9\u662f\u4ec0\u4e48\u5982\u4f55\u6253\u5370\u51fa\u539f\u578b\u94fe\u7684\u7ec8\u70b9",level:2},{value:"005 - \u5982\u4f55\u83b7\u5f97\u5bf9\u8c61\u975e\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff1f",id:"005---\u5982\u4f55\u83b7\u5f97\u5bf9\u8c61\u975e\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027",level:2}],i={toc:l};function u(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u56db\u539f\u578b"},"\u56db\u3001\u539f\u578b"),(0,r.kt)("h2",{id:"001---\u5bf9\u539f\u578b\u539f\u578b\u94fe\u7684\u7406\u89e3"},"001 - \u5bf9\u539f\u578b\u3001\u539f\u578b\u94fe\u7684\u7406\u89e3"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prototype",src:o(3997).Z,width:"1407",height:"716"})),(0,r.kt)("p",null,"\u5728JavaScript\u4e2d\u662f\u4f7f\u7528\u6784\u9020\u51fd\u6570\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u5bf9\u8c61\u7684\uff0c\u6bcf\u4e00\u4e2a\u6784\u9020\u51fd\u6570\u7684\u5185\u90e8\u90fd\u6709\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"prototype"),"\uff08\u539f\u578b\u5bf9\u8c61\uff09\n\u5c5e\u6027\uff0c\u5b83\u7684\u5c5e\u6027\u503c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5305\u542b\u4e86\u53ef\u4ee5\u7531\u8be5\u6784\u9020\u51fd\u6570\u7684\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u5f53\u4f7f\u7528\u6784\u9020\u51fd\u6570\u65b0\u5efa\u4e00\u4e2a\u5bf9\u8c61\u540e\uff0c\u5728\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5185\u90e8\u5c06\u5305\u542b\u4e00\u4e2a\u6307\u9488\uff0c\u8fd9\u4e2a\u6307\u9488\u6307\u5411\u6784\u9020\u51fd\u6570\u7684 prototype \u5c5e\u6027\u5bf9\u5e94\u7684\u503c\uff0c\u5728 ES5\n\u4e2d\u8fd9\u4e2a\u6307\u9488\u88ab\u79f0\u4e3a\u5bf9\u8c61\u7684\u539f\u578b\u3002\u4e00\u822c\u6765\u8bf4\u4e0d\u5e94\u8be5\u80fd\u591f\u83b7\u53d6\u5230\u8fd9\u4e2a\u503c\u7684\uff0c\u4f46\u662f\u73b0\u5728\u6d4f\u89c8\u5668\u4e2d\u90fd\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"__proto__")," \u5c5e\u6027\u6765\u8bbf\u95ee\u8fd9\u4e2a\u5c5e\u6027\uff08prototype\u539f\u578b\u5bf9\u8c61\uff09\uff0c\u4f46\u662f\u6700\u597d\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e2a\u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u4e0d\u662f\u89c4\u8303\u4e2d\u89c4\u5b9a\u7684\u3002ES5 \u4e2d\u65b0\u589e\u4e86\u4e00\u4e2a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Object.getPrototypeOf()"),"\n\u65b9\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u6765\u83b7\u53d6\u5bf9\u8c61\u7684\u539f\u578b\u3002\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u65f6\uff0c\u5982\u679c\u8fd9\u4e2a\u5bf9\u8c61\u5185\u90e8\u4e0d\u5b58\u5728\u8fd9\u4e2a\u5c5e\u6027\uff0c\u90a3\u4e48\u5b83\u5c31\u4f1a\u53bb\u5b83\u7684\u539f\u578b\u5bf9\u8c61\u91cc\u627e\u8fd9\u4e2a\u5c5e\u6027\uff0c\u8fd9\u4e2a\u539f\u578b\u5bf9\u8c61\u53c8\u4f1a\u6709\u81ea\u5df1\u7684\u539f\u578b\uff0c\u4e8e\u662f\u5c31\u8fd9\u6837\u4e00\u76f4\u627e\u4e0b\u53bb\uff0c\u4e5f\u5c31\u662f\u539f\u578b\u94fe\u7684\u6982\u5ff5\u3002\u539f\u578b\u94fe\u7684\u5c3d\u5934\u4e00\u822c\u6765\u8bf4\u90fd\u662f\nObject.prototype\uff08\u9664null\u5916\uff09"),(0,r.kt)("p",null,"\u7279\u70b9\uff1aJavaScript \u5bf9\u8c61\u662f\u901a\u8fc7\u5f15\u7528\u6765\u4f20\u9012\u7684\uff0c\u521b\u5efa\u7684\u6bcf\u4e2a\u65b0\u5bf9\u8c61\u5b9e\u4f53\u4e2d\u5e76\u6ca1\u6709\u4e00\u4efd\u5c5e\u4e8e\u81ea\u5df1\u7684\u539f\u578b\u526f\u672c\u3002\u5f53\u4fee\u6539\u539f\u578b\u65f6\uff0c\u4e0e\u4e4b\u76f8\u5173\u7684\u5bf9\u8c61\u4e5f\u4f1a\u7ee7\u627f\u8fd9\u4e00\u6539\u53d8\u3002"),(0,r.kt)("h2",{id:"002---\u539f\u578b\u4fee\u6539\u91cd\u5199"},"002 - \u539f\u578b\u4fee\u6539\u3001\u91cd\u5199"),(0,r.kt)("p",null,"\u4fee\u6539\uff1a\u5e76\u6ca1\u6709\u6539\u53d8\u6784\u9020\u51fd\u6570\u539f\u578b\u5bf9\u8c61\u5185\u90e8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"constructor")," \u6307\u5411\uff0c\u53ea\u662f\u5728\u539f\u578b\u5bf9\u8c61\u8eab\u4e0a\u65b0\u589e\u4e86\u5c5e\u6027\u6216\u8005\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n    this.name = name\n}\n\nPerson.prototype.getName = function () {\n}\nconst p = new Person('tom')\nconsole.log(p.__proto__ === Person.prototype) // true\nconsole.log(p.__proto__ === p.constructor.prototype) // true\n")),(0,r.kt)("p",null,"\u91cd\u5199\uff1a\u5c06\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u76f4\u63a5\u8fdb\u884c\u66ff\u6362\uff0c\u4fee\u6539\u4e86\u6784\u9020\u51fd\u6570\u5185\u90e8constructor\u7684\u6307\u5411\uff0c\u82e5\u60f3\u4ecd\u7136\u6307\u5411\u539f\u6765\u7684\u6784\u9020\u51fd\u6570\uff0c\u9700\u8981\u5728\u4fee\u6539\u7684\u539f\u578b\u5bf9\u8c61\u5185\u90e8\u91cd\u65b0\u5c06constructor\u6307\u5411\u8be5\u6784\u9020\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n    this.name = name\n}\n\n// \u539f\u578b\u5bf9\u8c61\u7684\u91cd\u5199\uff08\u5c06Person\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61 = \u4e00\u4e2a\u5bf9\u8c61\uff09\nPerson.prototype = {\n    say: () => {\n        console.log('hello')\n    }\n}\nconst p = new Person('tom')\nconsole.log(Person.prototype) // {say: \u0192}\nconsole.log(p.__proto__) // {say: \u0192}\nconsole.log(p.constructor) // \u0192 Object() { [native code] }\nconsole.log(p.constructor.prototype) // Object\u7684\u539f\u578b\u5bf9\u8c61\nconsole.log(p.__proto__ === Person.prototype) // true\nconsole.log(p.__proto__ === p.constructor.prototype) // false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n    this.name = name\n}\n\n// \u539f\u578b\u5bf9\u8c61\u7684\u91cd\u5199\uff08\u5c06Person\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61 = \u4e00\u4e2a\u5bf9\u8c61\uff09\nPerson.prototype = {\n    // \u6240\u4ee5\u91cd\u5199\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u65f6\uff0c\u9700\u8981\u5c06prototype\u5c5e\u6027\u4e2d\u7684 constructor \u6307\u56de\u539f\u6765\u7684\u6784\u9020\u51fd\u6570\n    constructor: Person,\n    say: () => {\n        console.log('hello')\n    }\n}\nconst p = new Person('tom')\nconsole.log(Person.prototype) // {constructor: \u0192 Person(name), say: \u0192}\nconsole.log(p.__proto__) // {constructor: \u0192 Person(name), say: \u0192}\nconsole.log(p.constructor) // Person\nconsole.log(p.constructor.prototype) // {constructor: \u0192 Person(name), say: \u0192}\n\nconsole.log(p.__proto__ === Person.prototype) // true\nconsole.log(p.__proto__ === p.constructor.prototype) // true\n")),(0,r.kt)("h2",{id:"003---\u539f\u578b\u94fe\u6307\u5411"},"003 - \u539f\u578b\u94fe\u6307\u5411"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n    this.name = name\n}\n\nconst p = new Person('tom')\nconsole.log(p.__proto__) // Person.prototype\nconsole.log(Person.prototype.__proto__) // Object.prototype\nconsole.log(p.__proto__.__proto__) // Object.prototype\nconsole.log(p.__proto__.constructor.prototype.__proto__) // Object.prototype\nconsole.log(Person.prototype.constructor.prototype.__proto__) // Object.prototype\nconsole.log(p.__proto__.constructor) // Person\nconsole.log(Person.prototype.constructor) // Person\n")),(0,r.kt)("h2",{id:"004---\u539f\u578b\u94fe\u7684\u7ec8\u70b9\u662f\u4ec0\u4e48\u5982\u4f55\u6253\u5370\u51fa\u539f\u578b\u94fe\u7684\u7ec8\u70b9"},"004 - \u539f\u578b\u94fe\u7684\u7ec8\u70b9\u662f\u4ec0\u4e48\uff1f\u5982\u4f55\u6253\u5370\u51fa\u539f\u578b\u94fe\u7684\u7ec8\u70b9\uff1f"),(0,r.kt)("p",null,"\u539f\u578b\u94fe\u7684\u7ec8\u70b9\uff1a\u7531\u4e8eObject\u662f\u6784\u9020\u51fd\u6570\uff0c\u539f\u578b\u94fe\u7ec8\u70b9\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype.__proto__"),"\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"Object.prototype.__proto__=== null // true"),"\uff0c\u6240\u4ee5\uff0c\u539f\u578b\u94fe\u7684\u7ec8\u70b9\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u4f55\u6253\u5370\u51fa\u539f\u578b\u94fe\u7684\u7ec8\u70b9")),(0,r.kt)("p",null,"\u539f\u578b\u94fe\u4e0a\u7684\u6240\u6709\u539f\u578b\u90fd\u662f\u5bf9\u8c61\uff0c\u6240\u6709\u7684\u5bf9\u8c61\u6700\u7ec8\u90fd\u662f\u7531Object\u6784\u9020\u7684\uff0c\u800cObject.prototype\u7684\u4e0b\u4e00\u7ea7\u662fObject.prototype.",(0,r.kt)("strong",{parentName:"p"},"proto")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Person(name) {\n    this.name = name\n}\n\nconst p = new Person('tom')\nconsole.log(Person.prototype.__proto__.__proto__) // null\nconsole.log(p.__proto__.__proto__.__proto__) // null\n")),(0,r.kt)("h2",{id:"005---\u5982\u4f55\u83b7\u5f97\u5bf9\u8c61\u975e\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027"},"005 - \u5982\u4f55\u83b7\u5f97\u5bf9\u8c61\u975e\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff1f"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"hasOwnProperty()")," \u65b9\u6cd5\u6765\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5c5e\u4e8e\u539f\u578b\u94fe\u7684\u5c5e\u6027\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hasOwnProperty()")," \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u793a\u5bf9\u8c61\u81ea\u8eab\u5c5e\u6027\u4e2d\u662f\u5426\u5177\u6709\u6307\u5b9a\u7684\u5c5e\u6027\uff08\u4e5f\u5c31\u662f\uff0c\u662f\u5426\u6709\u6307\u5b9a\u7684\u952e\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const object1 = {};\nobject1.property1 = 42;\n\nconsole.log(object1.hasOwnProperty('property1')); // true\nconsole.log(object1.hasOwnProperty('toString')); // false\nconsole.log(object1.hasOwnProperty('hasOwnProperty')); // false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function iterate(obj) {\n    let res = []\n    for (let key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            res.push(key + ': ' + obj[key])\n        }\n    }\n    return res\n}\n\nconst a = {name: 'tom', age: 12}\nconsole.log(iterate(a)) // ['name: tom', 'age: 12']\n")))}u.isMDXComponent=!0},3997:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prototype-3bbaf738582be5967fdc883d581b1899.png"}}]);