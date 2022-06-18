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

### 常用命令

#### 数据库集合命令

操作集合时，如果集合不存在则会自动创建集合

1. 显示所有的数据库 `show dbs` 或 `show databases`
2. （创建）切换到指定的数据库 `use 数据库名`
3. 显示当前所在的数据库 `db`
4. 删除当前数据库（先切换再删除） `use project_1` `db.dropDatabase()`
5. 显示当前数据库中的所有集合 `db.createCollection('user'); //创建集合` `show collections`
6. 删除当前集合 `db.collection.drop() // db.集合名称.drop()`
7. 重命名集合 `db.collection.renameCollection('newName')`

#### 文档命令

**插入文档** `db.collection.insert(文档对象); // db.集合名称.insert`

**查询文档** `db.collection.find(查询条件)` `db.collection.findOne(查询条件)`

**更新文档**

```shell
db.collection.update(查询条件,新的文档,配置对象)   
# 更新一个
db.collection.updateOne(查询条件,要更新的内容[,配置对象]) 
# 批量更新
db.collection.updateMany(查询条件,要更新的内容[,配置对象])
# eg
db.students.update({name:'xiaohigh'},{$set:{age:19}})
# 配置对象
{
    # 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入
    upsert: <boolean>,   
    # 可选，mongodb 默认是false,只更新找到的第一条记录，如果为true, 就把按条件查出来多条记录全部更新
    multi: <boolean>
}
```

**删除文档** `db.collection.remove(查询条件)`

#### 条件控制




