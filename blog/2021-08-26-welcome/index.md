---
slug: welcome
title: Welcome
authors: [junjie]
tags: [ hello, docusaurus]
---

博客文章支持 [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), 如 [MDX](https://mdxjs.com/).

:::tip

使用 React 的强大功能创建交互式博客文章。

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

:::
<!--truncate-->
[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.