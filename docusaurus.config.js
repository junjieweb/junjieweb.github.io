// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Junjie',
    tagline: 'Front-end Web Developer',
    url: 'https://junjieweb.github.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'junjieweb', // Usually your GitHub org/user name.
    projectName: 'junjieweb.github.io', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/junjieweb/junjieweb.github.io/tree/main',
                },
                blog: {
                    showReadingTime: true,
                    postsPerPage: 5,
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All our posts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/junjieweb/junjieweb.github.io/tree/main',
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
            liveCodeBlock: {
                playgroundPosition: 'bottom',
            },
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            announcementBar: {
                id: 'announcementBar-2', // Increment on change
                // content: `?????? If you like this site, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/junjieweb/junjieweb.github.io">GitHub</a>`,
                content: `?????? ????????????????????????????????? <a style="color: red" target="_blank" rel="noopener noreferrer" href="https://github.com/junjieweb/junjieweb.github.io">GitHub</a> ??????????????? ??? `,
                // isCloseable: false, // ???????????????
            },
            // image: 'img/docusaurus-soc.png',
            navbar: {
                title: 'Junjie',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/docusaurus_keytar.svg',
                    width: 32,
                    height: 32,
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'MDN',
                        position: 'left',
                        label: '????????????????',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'interview',
                        label: '??????????????????????????',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'UHF',
                        label: '????????????????????????????',
                    },
                    {to: '/website', label: '????????????????', position: 'left'},
                    {to: '/Tools-website', label: '????????????????', position: 'left'},
                    {to: '/blog', label: '????Blog', position: 'left'},
                    {
                        href: 'https://github.com/junjieweb/junjieweb.github.io',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '??????',
                        items: [
                            {
                                label: '??????',
                                to: '/docs/MDN',
                            },
                            {
                                label: '?????????',
                                to: '/docs/interview-questions/html?????????',
                            },
                            {
                                label: '????????????',
                                to: '/website',
                            },
                            {
                                label: '????????????',
                                to: '/Tools-website',
                            },
                        ],
                    },
                    {
                        title: '??????',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: ' Docusaurus',
                                href: 'https://docusaurus.io/zh-CN/',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                        ],
                    },
                    {
                        title: '??????',
                        items: [
                            {
                                label: '??????',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/junjieweb',
                            },
                            {
                                label: 'JetBrains Academy',
                                href: 'https://hyperskill.org/join/1ffe05030',
                            },
                        ],
                    },
                ],

                copyright: `Copyright ?? ${new Date().getFullYear()} junjieweb. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
