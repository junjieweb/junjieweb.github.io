---
sidebar_position: 7
---

# Git

## 简介

Git 是一个免费的、开源的分布式版本控制系统，可以快速高效地处理从小型到大型的各种项目。

Git 易于学习，占地面积小，性能极快。 它具有廉价的本地库，方便的暂存区域和多个工作流分支等特性。其性能优于
Subversion、CVS、Perforce 和 ClearCase 等版本控制工具。

版本控制系统在项目开发中作用重大，主要的功能有以下几点:

- 代码备份
- 版本回退
- 协作开发
- 权限控制

## 版本控制

版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。版本控制其实最重要的是可以记录文件修改历史记录，从而让用户能够查看历史版本，方便版本切换。

### 版本控制工具

#### 集中式版本控制工具

CVS、SVN(Subversion)、VSS...

集中化的版本控制系统诸如 CVS、SVN 等，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。多年以来，这已成为版本控制系统的标准做法。

这种做法带来了许多好处，每个人都可以在一定程度上看到项目中的其他人正在做些什么。而管理员也可以轻松掌控每个开发者的权限，并且管理一个集中化的版本控制系统，要远比在各个客户端上维护本地数据库来得轻松容易。

事分两面，有好有坏。这么做显而易见的缺点是中央服务器的单点故障。如果服务器宕机一小时，那么在这一小时内，谁都无法提交更新，也就无法协同工作。
![](./img/集中式版本控制.png)

#### 分布式版本控制工具

Git、Mercurial、Bazaar、Darcs...

像 Git 这种分布式版本控制工具，客户端提取的不是最新版本的文件快照，而是把代码仓库完整地镜像下来（本地库）。
这样任何一处协同工作用的文件发生故障，事后都可以用其他客户端的本地仓库进行恢复。因为每个客户端的每一次文件提取操作，实际上都是一次对整个文件仓库的完整备份。

分布式的版本控制系统出现之后,解决了集中式版本控制系统的缺陷:

1. 服务器断网的情况下也可以进行开发（因为版本控制是在本地进行的）
2. 每个客户端保存的也都是整个完整的项目（包含历史记录，更加安全）

![](./img/分布式版本控制.png)

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

## git commit 注释

### [约定式提交](https://www.conventionalcommits.org/zh-hans/)

### [Commit types](https://github.com/pvdlg/conventional-changelog-metahub#commit-types)

| Commit Type | Title                             | Description                                                                                                                                     | Emoji | Release                        | Include in changelog |
|:-----------:|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|:-----:|--------------------------------|:--------------------:|
|   `feat`    | Features                          | A new feature                                                                                                                                   |   ✨   | `minor`                        |        `true`        |
|    `fix`    | Bug Fixes <br/>Bug 修复             | A bug Fix                                                                                                                                       |  🐛   | `patch`                        |        `true`        |
|   `docs`    | Documentation <br/>文档             | Documentation only changes <br/>仅文档更改                                                                                                           |  📚   | `patch` if `scope` is `readme` |        `true`        |
|   `style`   | Styles                            | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)<br/>不影响代码含义的更改（空格、格式、缺少分号等）              |  💎   | -                              |        `true`        |
| `refactor`  | Code Refactoring<br/>代码重构         | A code change that neither fixes a bug nor adds a feature<br/>既不修复错误也不添加功能的代码更改                                                                 |  📦   | -                              |        `true`        |
|   `perf`    | Performance Improvements<br/>性能改进 | A code change that improves performance<br/>提高性能的代码更改                                                                                           |  🚀   | `patch`                        |        `true`        |
|   `test`    | Tests<br/>测试                      | Adding missing tests or correcting existing tests<br/>添加缺失的测试或纠正现有的测试                                                                           |  🚨   | -                              |        `true`        |
|   `build`   | Builds<br/>构建                     | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)<br/>影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm） |  🛠   | `patch`                        |        `true`        |
|    `ci`     | Continuous Integrations           | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)                                     |  ⚙️   | -                              |        `true`        |
|   `chore`   | Chores                            | Other changes that don't modify src or test files<br/>不修改 src 或测试文件的其他更改                                                                        |  ♻️   | -                              |        `true`        |
|  `revert`   | Reverts<br/>还原                    | Reverts a previous commit <br/>恢复之前的提交                                                                                                          |  🗑   | -                              |        `true`        |

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

## 常用命令

1. `git init` 仓库初始化
2. `git add -A` 添加所有新文件到暂存区，添加的是修改，而不是文件
3. `git commit -m '注释'` 提交修改并注释
4. `git status` 版本状态查看，如果显示的是红色修改，表明此修改只存在于工作区。如果显示的是绿色修改，表明此修改只存在于工作区和暂存区
5. `git diff` 查看工作区与暂存区的差异（不显示新增文件）显示做了哪些修改
6. `git diff --cached` 查看暂存区与仓库的差异
7. `git ls-files` 查看暂存区的文件内容
8. `git clone` 克隆仓库
9. `git pull` 拉取指定仓库的指定分支 `git pull origin master`
10. `git branch` 查看分支
    - `git branch name` 创建
    - `git branch -d name` 删除分支
    - `git merge name` 分支合并
    - `git checkout name` 切换分支
    - `git checkout -b name` 创建并切换
11. `git remote` 远程仓库别名管理
    - `add` 新增别名
    - `remove` 移除别名
    - `rename` 重命名别名
12. `git push` 将本地仓库的『分支』推送到远端仓库
    - `git push -u origin master`
    - `git push dev master`
    - `git push dev master:main`

## 历史版本回滚

查看历史记录

- `git log` 或 `git log --oneline`
- 如果内容偏多，需要使用方向键上下滚动，按q退出

根据版本号进行回滚

- `git reset --hard b98cff07d643fb81036b3df15e289aa595844e80`
- 进行版本回退时，不需要使用完整的哈希字符串，前七位即可
- 版本切换之前，要提交当前的代码状态到仓库

找不到版本号的情况

- 查看所有操作记录
- `git reflog`

## 配置忽略文件

#### 仓库中没有提交该文件

项目中有些文件不应该存储到版本库中，Git 中需要创建一个文件 `.gitignore` 配置忽略，一般与 .git 目录同级。

常见情况有：

1. 临时文件
2. 多媒体文件，如音频、视频。
3. 编辑器生成的配置文件（.idea）
4. npm 安装的第三方模块
    ```
   # 忽略所有的 .idea 文件夹
   .idea
   # 忽略所有以 .test 结尾的文件
   *.test
   # 忽略 node_modules 文件和文件夹
   /node_modules
   ```

`.gitignore` 可以在子文件夹下创建

#### 仓库中已经提交该文件

对于已经加入到版本库的文件，可以在版本库中删除该文件 `git rm --cached .idea`

然后在 `.gitignore` 中配置忽略, add和commit提交即可

如果 `.gitignore` 创建失败, 可以使用『编辑器』或者『命令行』方式创建

git 会默认忽略空文件夹

## 分支

分支是 Git 重要的功能特性之一，开发人员可以在主开发线的基础上分离出新的开发线。branch

基本操作

- 创建分支 `git branch name` name 为分支的名称

- 查看分支 `git branch`

- 切换分支 `git checkout name`

- 合并分支 `git merge name`

- 删除分支 `git branch -d name`

- 创建并切换分支 `git checkout -b name`

- 注意：每次在切换分支前，提交以下当前分支

## 冲突

当多个分支修改同一个文件后，合并分支的时候就会产生冲突。冲突的解决非常简单，『将内容修改为最终想要的结果』，然后继续执行 git
add 与 git commit 就可以了。

1. `git status` 定位有冲突的文件
2. 修改冲突文件的内容，为最终正确的样子
3. `git add` 和 `git commit`

## GitFlow

**GitFlow** 是团队开发的一种最佳实践，将代码划分为以下几个分支
![](./img/GitFlow.png)

- **`Master`** 主分支。上面只保存正式发布的版本
- **`Hotfix`** 线上代码 Bug 修复分支。开发完后需要合并回Master和Develop分支，同时在Master上打一个tag
- **`Feather`** 功能分支。当开发某个功能时，创建一个单独的分支，开发完毕后再合并到 dev 分支
- **`Release`** 分支。待发布分支，Release分支基于Develop分支创建，在这个Release分支上测试，修改Bug
- **`Develop`** 开发分支。开发者都在这个分支上提交代码

:::tip 首次克隆完代码后，需要切换到开发分支

```
//查看所有分支
git branch -a
//切换分支
git checkout dev
```

:::
