export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "repo": "https://www.github.com/junjieweb",
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "笔记",
      "link": "/notes"
    },
    {
      "text": "简历",
      "link": "/resume/"
    },
    {
      "text": "VuePress",
      "link": "https://v2.vuepress.vuejs.org/zh"
    }
  ],
  "sidebar": {
    "/notes": [
      {
        "text": "三剑客",
        "collapsible": true,
        "children": [
          "/notes/html.md",
          "/notes/css.md"
        ]
      },
      {
        "text": "Vue",
        "collapsible": true,
        "children": [
          "/notes/vue/vue3"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
