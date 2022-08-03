---
slug: welcome
title: Welcome
authors: [junjie]
tags: [ hello, docusaurus]
---

博客文章支持 [Docusaurus Markdown 功能](https://docusaurus.io/docs/markdown-features), 如 [MDX](https://mdxjs.com/).

:::tip

使用 React 的强大功能创建交互式博客文章。

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

:::
<!--truncate-->
[Docusaurus 博客功能](https://docusaurus.io/docs/blog)
由 [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)提供支持.

只需将 Markdown 文件（或文件夹）添加到 `blog` 目录。

可以将普通博客作者添加到 `authors.yml`.

可以从文件名中提取博客文章日期，例如：

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

博客文章文件夹可以方便地放置博客文章图片：

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

该博客也支持标签！

如果您不想要博客：只需删除此目录，并在 Docusaurus 配置中使用 `blog: false`。
