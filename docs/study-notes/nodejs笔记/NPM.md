---
sidebar_position: 2
---

# NPM

**NPM**(Node Package Manager), Node 的包管理器，也是一个应用程序。安装完 nodejs 之后会自动安装 npm。

Node.js 的包基本遵循 CommonJS 规范，将一组相关的模块组合在一起，形成一个完整的工具。
通过 NPM 可以对 Node 的工具包进行搜索、下载、安装、删除、上传。借助别人写好的包，可以让我们的开发更加方便。

`node_modules` 目录是不能进入 Git 仓库的

查看 npm 的版本 `npm -v`。
初始化 `npm init` 或 `npm init --yes`。
运行后会创建 `package.json` 配置文件。

```json
{
  "name": "1-npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

:::tip 注意：
生成的包名不能使用中文、大写！     
不能使用 npm 作为包的名字
:::

[关于开源证书扩展阅读](http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html)

搜索包 `npm search jquery` 或 `npm s jquery`
一般在搜索工具包的时候，会到 https://www.npmjs.com/ 搜索

**安装工具包** `npm install jquery` 或 `npm i jquery`

```shell
# 安装并在 package.json 中保存包的信息(dependencies 属性)
npm install jquery --save
npm install jquery -S
 
# 安装并在 package.json 中保存包的信息(devDependencies 属性)
npm install babel --save-dev
npm install babel -D
```

**全局安装** `npm install less -g` `npm install nodemon -g`

全局安装一般用于安装全局工具，如 `cnpm`，`yarn`，`webpack`，`gulp` 等。
全局安装命令在任意的命令行下, 都可以执行。  
`npm root -g` 查看全局安装的目录的位置，全局命令的安装位置 `C:\Users\你的用户名\AppData\Roaming\npm`

**安装依赖** 根据 package.json 中的依赖声明， 安装工具包

- `npm i`
- `npm install`
- `npm i --production` // 只安装 dependencies 中的依赖

**移除包** `npm remove jquery`

**使用流程**

1. 定位到一个文件夹下(新建或者已经存在的)
2. 启动命令行将工作目录定位到第一步的文件中的
3. 运行 `npm init` (只需要运行一次)
4. 运行 `npm i 包名` 安装工具包

**封装NPM包**（创建自己的 NPM 包可以帮助代码进行迭代进化，使用步骤也比较简单）

1. 修改为官方的地址 `npm config set registry https://registry.npmjs.org/`
2. 创建文件夹，并创建文件 `index.js`， 在文件中声明函数，使用 `module.exports` 暴露
3. npm 初始化工具包，`package.json` 填写包的信息
4. 账号注册（激活账号）,==完成邮箱验证==
5. 命令行下 『`npm login`』 填写相关用户信息 (一定要在包的文件夹下运行)
6. 命令行下『 `npm publish`』 提交包 👌

- npm 有垃圾检测机制，如果名字简单或做测试提交，很可能会被拒绝提交
- 可以尝试改一下包的名称来解决这个问题
- 升级 NPM 包，需要修改 package.json 中的版本号修改，只需要执行『npm publish』就可以能提交
    1. 修改包代码
    2. 修改 package.json 中版本号
    3. npm publish 提交

删除NPM包 `npm unpublish 包名 --force`
