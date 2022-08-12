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
                // content: `⭐️ If you like this site, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/junjieweb/junjieweb.github.io">GitHub</a>`,
                content: `⭐️ 如果你喜欢这个网站，在 <a style="color: red" target="_blank" rel="noopener noreferrer" href="https://github.com/junjieweb/junjieweb.github.io">GitHub</a> 上给它一颗 ⭐ `,
                // isCloseable: false, // 是否可关闭
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
                        label: '📒前端笔记',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'interview',
                        label: '👨‍💻前端面试题',
                    },
                    {
                        type: 'docSidebar',
                        position: 'left',
                        sidebarId: 'UHF',
                        label: '🚀超高频前端面试题',
                    },
                    {to: '/website', label: '🌐网站导航', position: 'left'},
                    {to: '/Tools-website', label: '🧰工具网站', position: 'left'},
                    {to: '/blog', label: '📑Blog', position: 'left'},
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
                        title: '文档',
                        items: [
                            {
                                label: '笔记',
                                to: '/docs/MDN',
                            },
                            {
                                label: '面试题',
                                to: '/docs/interview-questions/html面试题',
                            },
                            {
                                label: '网站导航',
                                to: '/website',
                            },
                            {
                                label: '工具网站',
                                to: '/Tools-website',
                            },
                        ],
                    },
                    {
                        title: '社区',
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
                        title: '更多',
                        items: [
                            {
                                label: '博客',
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

                copyright: `Copyright © ${new Date().getFullYear()} junjieweb. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: 'XHH7NZ65U3',
                apiKey: 'b2e3221f9193e9af53da2eaaf72fb14a',
                indexName: 'junjieweb',
                contextualSearch: true,
                rateLimit: 8,
                startUrls: ['https://junjieweb.github.io/'],
                sitemaps: ['https://junjieweb.github.io/sitemap.xml'],
                ignoreCanonicalTo: true,
                discoveryPatterns: ['https://junjieweb.github.io/**'],
                actions: [
                    {
                        indexName: 'junjieweb',
                        pathsToMatch: ['https://junjieweb.github.io/**'],
                        recordExtractor: ({ $, helpers }) => {
                            // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
                            const lvl0 =
                                $(
                                    '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
                                )
                                    .last()
                                    .text() || 'Documentation';

                            return helpers.docsearch({
                                recordProps: {
                                    lvl0: {
                                        selectors: '',
                                        defaultValue: lvl0,
                                    },
                                    lvl1: ['header h1', 'article h1'],
                                    lvl2: 'article h2',
                                    lvl3: 'article h3',
                                    lvl4: 'article h4',
                                    lvl5: 'article h5, article td:first-child',
                                    lvl6: 'article h6',
                                    content: 'article p, article li, article td:last-child',
                                },
                                indexHeadings: true,
                                aggregateContent: true,
                                recordVersion: 'v3',
                            });
                        },
                    },
                ],
                initialIndexSettings: {
                    YOUR_INDEX_NAME: {
                        attributesForFaceting: [
                            'type',
                            'lang',
                            'language',
                            'version',
                            'docusaurus_tag',
                        ],
                        attributesToRetrieve: [
                            'hierarchy',
                            'content',
                            'anchor',
                            'url',
                            'url_without_anchor',
                            'type',
                        ],
                        attributesToHighlight: ['hierarchy', 'content'],
                        attributesToSnippet: ['content:10'],
                        camelCaseAttributes: ['hierarchy', 'content'],
                        searchableAttributes: [
                            'unordered(hierarchy.lvl0)',
                            'unordered(hierarchy.lvl1)',
                            'unordered(hierarchy.lvl2)',
                            'unordered(hierarchy.lvl3)',
                            'unordered(hierarchy.lvl4)',
                            'unordered(hierarchy.lvl5)',
                            'unordered(hierarchy.lvl6)',
                            'content',
                        ],
                        distinct: true,
                        attributeForDistinct: 'url',
                        customRanking: [
                            'desc(weight.pageRank)',
                            'desc(weight.level)',
                            'asc(weight.position)',
                        ],
                        ranking: [
                            'words',
                            'filters',
                            'typo',
                            'attribute',
                            'proximity',
                            'exact',
                            'custom',
                        ],
                        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
                        highlightPostTag: '</span>',
                        minWordSizefor1Typo: 3,
                        minWordSizefor2Typos: 7,
                        allowTyposOnNumericTokens: false,
                        minProximity: 1,
                        ignorePlurals: true,
                        advancedSyntax: true,
                        attributeCriteriaComputedByMinProximity: true,
                        removeWordsIfNoResults: 'allOptional',
                        separatorsToIndex: '_',
                    },
                },
            },
        }),
};

module.exports = config;
