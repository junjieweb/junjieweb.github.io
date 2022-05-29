# Website

该网站是使用现代静态网站生成器 [Docusaurus 2](https://docusaurus.io/) 构建的。

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

此命令启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，而无需重新启动服务器。

### Build

```
$ npm run build
```

此命令将静态内容生成到“build”目录中，并且可以使用任何静态内容托管服务提供服务。

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub 页面进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式。
