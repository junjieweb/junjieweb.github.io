import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "Junjie",
    url: "https://junjieweb.github.io/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: {
      '/notes/': [
          {
              text: 'MDN',
              // collapsible: true,
              children: [
                  '/notes/MDN/MDN.md',
                  '/notes/MDN/line.md',
              ],
          },
          {
              text: '🔶HTML',
              // collapsible: true,
              children: [
                  '/notes/html/README.md',
              ],
          },
          {
              text: '🏳️‍🌈CSS',
              // collapsible: true,
              children: [
                  '/notes/css/css_base.md',
                  '/notes/css/定位与浮动.md',
                  '/notes/css/弹性盒.md',
                  '/notes/css/媒体查询.md',
              ],
          },
          {
              text: '🟨JavaScript',
              // collapsible: true,
              children: [
                  '/notes/js/README.md',
                  '/notes/js/js基础.md',
                  '/notes/js/js函数.md',
                  '/notes/js/js数组.md',
                  '/notes/js/js对象.md',
                  '/notes/js/Math_Date.md',
                  '/notes/js/DOM.md',
                  '/notes/js/BOM.md',
                  '/notes/js/包装类.md',
                  '/notes/js/正则表达式.md',
                  '/notes/js/ES6.md',
              ],
          },
          {
              text: '🔵Less',
              // collapsible: true,
              children: [
                  '/notes/less.md',
              ],
          },
          {
              text: '🟩VUE',
              // collapsible: true,
              children: [
                  '/notes/vue/vue2_base.md',
                  '/notes/vue/vue2_cli.md',
                  '/notes/vue/vuex.md',
                  '/notes/vue/vue-router.md',
                  '/notes/vue/vue3.md',
              ],
          },
      ],
      '/interview/': [
          {
              text: 'HTML面试题',
              // collapsible: true,
              children: [
                  '/interview/html/',
              ],
          },
          {
              text: 'CSS面试题',
              // collapsible: true,
              children: [
                  '/interview/css/basis',
                  '/interview/css/position_float',
                  '/interview/css/layout',
                  '/interview/css/application',
              ],
          },
          {
              text: 'JavaScript',
              // collapsible: true,
              children: [
                  '/interview/JavaScript/数据类型.md',
                  '/interview/JavaScript/ES6.md',
                  '/interview/JavaScript/basis.md',
                  '/interview/JavaScript/prototype.md',
                  '/interview/JavaScript/async.md',
                  '/interview/JavaScript/scope.md',
                  '/interview/JavaScript/this.md',
                  '/interview/JavaScript/object.md',
                  '/interview/JavaScript/gc.md',
              ],
          },
          {
              text: 'NodeJS',
              // collapsible: true,
              children: [
                  '/interview/node/README.md',
              ],
          },
          {
              text: 'Vue',
              // collapsible: true,
              children: [
                  '/interview/vue/basis.md',
                  '/interview/vue/生命周期.md',
                  '/interview/vue/组件间通信.md',
                  '/interview/vue/vuex.md',
                  '/interview/vue/vue-router.md',
                  '/interview/vue/vue3.md',
                  '/interview/vue/虚拟DOM.md',
              ],
          },
          {
              text: '浏览器原理',
              // collapsible: true,
              children: [
                  '/interview/browser.md',
              ],
          },
          {
              text: '计算机网络',
              // collapsible: true,
              children: [
                  '/interview/computer-network.md',
              ],
          }, {
              text: '前端工程化',
              // collapsible: true,
              children: [
                  '/interview/前端工程化.md',
              ],
          }, {
              text: '性能优化',
              // collapsible: true,
              children: [
                  '/interview/性能优化.md',
              ],
          },
      ],
      '/web/': [
          {
              text: '网站导航',
              // collapsible: true,
              children: [
                  '/web/README.md',
              ],
          },
      ],
  },

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "Front-end Web Developer",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "https://example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    /*comment: {
      /!**
       * Using giscus
       *!/
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /!**
       * Using twikoo
       *!/
      // type: "twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /!**
       * Using Waline
       *!/
      // type: "waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },*/

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
