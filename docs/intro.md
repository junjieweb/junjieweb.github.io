---
sidebar_position: 8
slug: intro
---

# Docusaurus 基本教程

## 快速开始

安装 Node.js，并创建新的 Docusaurus 站点：`npx create-docusaurus@latest my-website classic`

运行网站：

```shell
cd my-website
npx docusaurus start
```

打开 `http://localhost:3000` 并遵循教程。

## 创建一个页面

将 Markdown 或 React 文件添加到 `src/pages` 以创建独立页面：

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

### 创建你的第一个 React 页面

创建一个文件在 `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
    return (
        <Layout>
            <h1>My React page</h1>
            <p>This is a React page</p>
        </Layout>
    );
}
```

一个新页面现在可以在 `http://localhost:3000/my-react-page`.

### 创建您的第一个 Markdown 页面

创建一个文件在 `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

现在提供了一个新页面。 `http://localhost:3000/my-markdown-page`.

## 创建博客文章

Docusaurus 为每篇博客文章创建一个页面，还创建一个博客索引页面、一个标签系统、一个 RSS 提要......

### 创建您的第一个帖子

在以下位置创建文件 `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜，你已经发了你的第一篇文章！

随意玩耍和编辑这篇文章。
```

一个新的博客文章现在可以在 `http://localhost:3000/blog/greetings`.

## 创建文档

文档是通过以下方式连接的页面组：

- a **sidebar**
- **previous/next navigation**
- **版本控制**

### 创建您的第一个文档

创建一个markdown文件 `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

现在提供了一个新文档。 `http://localhost:3000/docs/hello`.

### 配置侧边栏

Docusaurus 会自动从 `docs` 文件夹中创建一个侧边栏。

添加元数据以自定义侧边栏标签和位置：

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

也可以在 `sidebars.js` 中显式创建侧边栏：

```js title="sidebars.js"
module.exports = {
    tutorialSidebar: [
        {
            type: 'category',
            label: 'Tutorial',
            // highlight-next-line
            items: ['hello'],
        },
    ],
};
```

## 翻译您的网站

让我们翻译 `docs/intro.md` 到法语。

### 配置 i18n

调整 `docusaurus.config.js` 添加对 `fr` 语言环境的支持:

```js title="docusaurus.config.js"
module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
    },
};
```

### 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

用法语翻译 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` .

### 启动您的本地化网站

在法语语言环境中启动您的网站：

```bash
npm run start -- --locale fr
```

您可以通过 `http://localhost:3000/fr/` 访问您的本地化站点，并且会翻译 `Getting Started` 页面。

:::caution 警告

在开发中，您一次只能使用一种语言环境。

:::

### 添加区域设置下拉菜单

要跨语言无缝导航，请添加区域设置下拉菜单。

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
    themeConfig: {
        navbar: {
            items: [
                // highlight-start
                {
                    type: 'localeDropdown',
                },
                // highlight-end
            ],
        },
    },
};
```

### 建立您的本地化网站

为特定语言环境构建您的站点：

```bash
npm run build -- --locale fr
```

或者构建您的站点以同时包含所有语言环境：

```bash
npm run build
```

## 管理文档版本

Docusaurus 可以管理您的文档的多个版本。

### 创建文档版本

发布项目的 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

您的文档现在有 2 个版本：

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

### 添加版本下拉菜单

要跨版本无缝导航，请添加版本下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
module.exports = {
    themeConfig: {
        navbar: {
            items: [
                // highlight-start
                {
                    type: 'docsVersionDropdown',
                },
                // highlight-end
            ],
        },
    },
};
```

文档版本下拉菜单出现在您的导航栏中：

### 更新现有版本

可以在各自的文件夹中编辑版本化文档：

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`

## 部署您的网站

Docusaurus 是一个静态站点生成器（也称为 **[Jamstack](https://jamstack.org/)**).

它将您的网站构建为简单的静态 HTML、JavaScript 和 CSS 文件。

### Build 你的网站

构建您的生产站点：

```bash
npm run build
```

静态文件在 `build` 文件夹中生成。

### 部署您的网站

在本地测试您的生产版本：

```bash
npm run serve
```

The `build` folder is now served at `http://localhost:3000/`.

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read
the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).

## Markdown 功能

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional
features**.

### Front Matter

Markdown 文档顶部有元数据，称为 [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

### 代码块

语法高亮支持 Markdown 代码块。

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return <h1>Hello, Docusaurus!</h1>;
}
```

### Admonitions

Docusaurus 有一种特殊的语法来创建警告和标注：

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

### MDX 和 React 组件

[MDX](https://mdxjs.com/) 可以使您的文档更具交互性，并允许在 Markdown 中使用任何 React 组件：

```mdx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
```

export const Highlight = ({children, color}) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '20px',
            color: '#fff',
            padding: '10px',
            cursor: 'pointer',
        }}
        onClick={() => {
            alert(`You clicked the color ${color} with label ${children}`);
        }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
