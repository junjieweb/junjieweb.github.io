---
sidebar_position: 5
---

# 教程介绍

让我们在不到 5 分钟的时间内发现 Docusaurus。

## 入门

通过创建一个新站点开始。

或立即尝试 Docusaurus **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) 版本 14 或以上：
  - 安装 Node.js 时，建议您选中所有与依赖项相关的复选框。

## 生成新站点

使用经典模板生成一个新的 Docusaurus 站点。

运行命令后，经典模板将自动添加到您的项目中：

```bash
npm init docusaurus@latest my-website classic
```

您可以将此命令键入命令提示符、Powershell、终端或代码编辑器的任何其他集成终端。

该命令还会安装运行 Docusaurus 所需的所有必要依赖项。

## 启动您的网站

运行开发服务器：

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
