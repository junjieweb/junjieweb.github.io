// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// 注意：类型注释允许类型检查和 IDE 自动完成

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Junjie',
    tagline: 'Embraces Open Source',
    url: 'https://junjieweb.github.io/',
    baseUrl: '/',
    favicon: '/img/favicon.ico',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    trailingSlash: false,

    organizationName: 'junjieweb',
    projectName: 'junjieweb.github.io',
    deploymentBranch: 'gh-pages',
    githubHost: 'github.com',
    // githubPort: '22',

    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // 请将此更改为您的存储库。
                    // Remove this to remove the "edit this page" links.
                    // 删除它以删除“编辑此页面”链接。
                    editUrl:
                        'https://github.com/junjieweb/junjieweb.github.io',
                },
                blog: {
                    // blogTitle: 'Junjie 博客！',
                    blogDescription: '这是个用 Docusaurus 搭建的博客！',
                    postsPerPage: 'ALL',
                    showReadingTime: true,
                    blogSidebarTitle: '全部博文',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Junjie',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                    href: '/'
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'web',
                        position: 'left',
                        label: 'Docs',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/junjieweb',
                        // label: 'GitHub',
                        position: 'right',
                        className: "header-github-link",
                        "aria-label": "GitHub profile",
                    },

                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Notes',
                                to: '/docs/web',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'Docusaurus',
                                href: 'https://docusaurus.io/zh-CN/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/junjieweb',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Junjie, junjieweb. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
