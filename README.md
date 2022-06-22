# Website

该网站是使用现代静态网站生成器 [Docusaurus 2](https://docusaurus.io/) 构建的。

主要记录了一些个人的前端笔记，以及收集的一些前端面试题。

### 安装

```
$ npm install
```

### 本地开发

```
$ npm start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，而无需重新启动服务器。

### 构建打包

```
$ npm run build
```

此命令将静态内容生成到“build”目录中，并且可以使用任何静态内容托管服务提供服务。

### 部署

使用 SSH：

```
$ USE_SSH=true yarn deploy
```

不使用 SSH：

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub 页面进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式。
