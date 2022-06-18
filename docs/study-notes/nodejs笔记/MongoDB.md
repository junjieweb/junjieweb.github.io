---
sidebar_position: 6
---

# MongoDB

## 简介

MongoDB 是为快速开发互联网 Web 应用而设计的数据库系统，官方地址 <https://www.mongodb.com/>

数据库（DataBase）是按照数据结构来组织、存储和管理数据的仓库。是一个应用程序。

## 下载安装

[**点这里去下载**](https://www.mongodb.com/try/download/community)

**安装的默认位置**：`C:\Program Files\MongoDB`

**安装完毕后进行几个操作**

1. 为了方便在命令行下运行，可以配置 mongodb 命令的环境变量 PATH
    - 此电脑 -> 属性 -> 高级系统设置 -> 环境变量 -> 双击 Path -> 新建 -> 设置 `mongod.exe` 所在文件夹路径
    - `C:\Program Files\MongoDB\Server\3.2\bin`
2. 创建默认的仓库文件夹 `c:\data\db`
3. 打开命令行窗口输入 `mongod` 启动数据库服务器
4. 另起一个命令行运行 `mongo`

## 使用

### 三个重要概念

1. 数据库（database） 数据库是一个仓库，在仓库中可以存放集合
2. 集合（collection） 集合类似于JS中的数组，在集合中可以存放文档
3. 文档（document） 文档数据库中的最小单位，类似于 JS 中的对象，在 MongoDB 中每一条数据都是一个 JS 的对象

![](./img/mongodb.png)



