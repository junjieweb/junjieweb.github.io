import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-d13d2106","/notes/css.html",{"title":"CSS"},["/notes/css","/notes/css.md"]],
  ["v-699783b2","/notes/html.html",{"title":"HTML"},["/notes/html","/notes/html.md"]],
  ["v-e8b6c472","/notes/",{"title":"笔记"},["/notes/index.html","/notes/README.md"]],
  ["v-a91e9eee","/resume/",{"title":"个人简历"},["/resume/index.html","/resume/README.md"]],
  ["v-2d4091dc","/notes/vue/vue3.html",{"title":"Vue3快速上手"},["/notes/vue/vue3","/notes/vue/vue3.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
