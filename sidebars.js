/**
 * Creating a sidebar enables you to: 创建侧边栏使您能够：
 - create an ordered group of docs 创建一个有序的文档组
 - render a sidebar for each doc of that group 为该组的每个文档呈现一个侧边栏
 - provide next/previous navigation 提供下一个上一个导航

 The sidebars can be generated from the filesystem, or explicitly defined here.
 侧边栏可以从文件系统生成，也可以在此处显式定义。
 Create as many sidebars as you want. 创建任意数量的侧边栏。
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    // 默认情况下，Docusaurus 从 docs 文件夹结构中生成一个侧边栏
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually 但是您可以手动创建侧边栏
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
    docs: [
        '编程简介',
        'MDN',
        'MDN-line',
        {
            type: 'autogenerated',
            dirName: 'study-notes',
        },
        'intro',
    ],
    interview: [
        {
            type: 'autogenerated',
            dirName: 'interview-questions'
        }
    ],
    UHF: [
        {
            type: 'autogenerated',
            dirName: 'UHFInterviewQuestions',
        },
    ],

};

module.exports = sidebars;
