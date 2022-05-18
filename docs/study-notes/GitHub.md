---
sidebar_position: 6
---

# GitHub

GitHub 是一个 Git 仓库管理网站。可以创建远程中心仓库，为多人合作开发提供便利。

**目的**：借助GitHub托管项目代码。

## 基本概念

`Repositories`（仓库）：用来存放项目代码，每个项目对应一个仓库。

`Star`（星星/收藏）：收藏项目。

`Fork`：复制克隆项目，fork的项目是独立存在的。

`Pull requests`：基于fork，发起请求。

`Watch`（关注）：只要这个项目更新了，会第一时间收到通知。

`Issue`（事务卡片）：发现代码BUG，讨论解决方案。

## 使用

GitHub 远程仓库使用流程较为简单，主要有以下几种场景：

### 本地有仓库

1. 注册激活账号
2. 创建仓库
3. 获取仓库的地址
4. 本地配置远程仓库的地址 `git remote add origin <GitHub仓库地址>`
5. 本地提交（确认代码已经提交到本地仓库）
6. 将本地仓库内容推送到远程仓库 `git push -u origin main` 提交添加 `-u` 之后，后续提交时可以不需要再添加别名与分支名

### 本地没有仓库

1. 注册并激活账号
2. 克隆仓库 `git clone <GitHub仓库地址>` 克隆代码后，本地仓库会默认有一个远程地址的配置，名为origin
3. 增加和修改代码
4. 本地提交 `git add -A` `git commit -m '注释'`
5. 推送到远程 `git push`

### 多人合作

- 账号仓库配置
- GitHub 团队协作开发也比较容易管理，可以创建一个组织
    - 首页 -> 右上角 + 号-> new Organization
    - 免费计划
    - 填写组织名称和联系方式（不用使用中文名称）
    - 邀请其他开发者进入组织（会有邮件邀请）
    - 点击组织右侧的 settings 设置
    - 左侧 Member privileges
    - 右侧 Base permissions 设置 write 👌

#### 协作流程

**第一次**

1. 得到 Git 远程仓库的地址和账号密码
2. 将代码克隆到本地 `git clone`
3. 切换分支 `git checkout -b dev`
4. 开发代码
5. 本地提交 `git add -A` `git commit -m '注释'`
6. 合并分支 `git checkout master` `git merge dev`
7. 更新本地代码 `git pull`
8. 提交代码 `git push`

**第二次**

1. 更新代码 `git checkout master` `git pull`
2. 切换合并分支 `git checkout dev` `git merge master`
3. 开发功能
4. 本地提交 `git add -A` `git commit -m '注释'`
5. 合并分支 `git checkout master` `git merge dev`
6. 更新本地代码 `git pull`
7. 提交代码 `git push`

:::tip
`git clone` 会将仓库的所有的分支全部下载下来

`git pull` 只会拉取指定的分支内容
:::
