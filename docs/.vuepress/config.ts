import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    base: '/',
    lang: 'zh-CN',
    title: 'Junjie',
    description: 'Front-end developer',
    dest:'docs/dist',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://www.github.com/junjieweb',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: '笔记',
                link: '/notes'
            },
            {
                text: '简历',
                link: '/resume/'
            },
            {
                text: 'VuePress',
                link: 'https://v2.vuepress.vuejs.org/zh'
            },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],
        sidebar: {
            '/notes': [
                {
                    text: 'HTML',
                    collapsible: true,
                    children: ['/notes/html.md'],
                },
                {
                    text: 'CSS',
                    collapsible: true,
                    children: ['/notes/css.md'],
                },
                {
                    text: 'Vue',
                    collapsible: true,
                    children: ['/notes/vue/vue3'],
                },
            ],
        },
    },
})
