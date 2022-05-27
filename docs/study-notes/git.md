---
sidebar_position: 6
---

# Git

**Git** 是一款开源免费的分布式的版本控制系统，是一个应用程序.

版本控制系统在项目开发中作用重大，主要的功能有以下几点:

- 代码备份
- 版本回退
- 协作开发
- 权限控制

## 起始配置

第一次使用 Git 的时候，会要求我们配置用户名和邮箱，用于表示开发者的信息, 注意命令之间的空格

- `git config --global user.name "Your Name"`
- `git config --global user.email "email@example.com" `

可以使用 `git config -l` 命令来查看配置信息

## 基本操作

1. 创建并进入空文件夹
2. 右键 => 点击 Git Bash Here 启动命令行
3. `git init` 仓库初始化
4. 创建一个初始化文件 index.html
5. `git add index.html` 将文件加入到暂存区
6. `git commit -m '注释'` 提交到仓库 m 是 message 单词的缩写
![](./img/git.png)

## .git 目录信息

- hooks 目录包含客户端或服务端的钩子脚本，在特定操作下自动执行
- info 信息文件夹. 包含一个全局性排除文件，可以配置文件忽略
- logs 保存日志信息
- objects 目录存储所有数据内容，本地的版本库存放位置
- refs 目录存储指向数据的提交对象的指针（分支）
- config 文件包含项目特有的配置选项
- description 用来显示对仓库的描述信息
- HEAD 文件指示目前被检出的分支
- index 暂存区文件，是一个二进制文件 (git ls-files)

:::danger 切记

不要手动去修改 .git 文件夹中的内容

:::

## 版本库的三个区域

- 工作区（代码编辑区）
- 暂存区（修改待提交区）
- 仓库区（代码保存区）


