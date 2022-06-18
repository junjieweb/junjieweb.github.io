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

##### 运算符

在 mongodb 不能 > < >=  <= !== 等运算符，需要使用替代符号

* `>`   使用 `$gt`
* `<`   使用 `$lt`
* `>=`   使用 `$gte`
* `<=`   使用 `$lte`
* `!==`   使用 `$ne`

##### 逻辑或

`$in` 满足其中一个即可

```
db.students.find({age:{$in:[18,24,26]}}) //   
```

`$or` 逻辑或的情况

```js
db.students.find({$or: [{age: 18}, {age: 24}]});
```

`$and` 逻辑与的情况

```
db.students.find({$and: [{age: {$lt:20}}, {age: {$gt: 15}}]});
```

##### 正则匹配

条件中可以直接使用 JS 的正则语法

```js
db.students.find({name: /imissyou/});
```

## Mongoose

[**Mongoose**](http://www.mongoosejs.net/) 是一个对象文档模型（ODM）库，它对Node原生的MongoDB模块进行了进一步的优化封装，并提供了更多的功能。

**作用**：使用代码操作 mongodb 数据库

### 使用流程

在命令行下使用 npm 或者其他包管理工具安装（cnpm yarn）`npm install mongoose --save`

```javascript
//1. 安装
//2. 引入mongoose 模块
const mongoose = require('mongoose');

//3. 连接数据库 connect    project  数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

//4. 设置连接成功的回调
mongoose.connection.on('open', () => {
    //5. 创建文档结构对象  new Person
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        age: Number
    });
    //6. 创建文档模型对象
    const UserModel = mongoose.model('users', UserSchema);
    //7. 数据操作
    UserModel.create({
        username: 'tom',
        password: '123456',
        age: 28
    }, (err, data) => {
        if (err) throw err;
        //若没有错误
        console.log(data);
        //8. 选做  关闭数据库连接
        mongoose.connection.close();
    });
});
```

### 数据类型

文档结构可选的字段类型列表

- **String**
- **Number**
- Date
- Buffer
- Boolean
- Mixed 任意类型（使用 mongoose.Schema.Types.Mixed 设置）
- ObjectId
- **Array**
- Decimal128（4.3版本后加入）

### CRUD

数据库的基本操作包括四个，增加（create），删除（delete），修改（update），查（read）

#### 添加

```javascript
//1. 安装
//2. 引入mongoose 模块
const mongoose = require('mongoose');

//3. 连接数据库 connect    project  数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

//4. 设置连接成功的回调
mongoose.connection.on('open', () => {
    //5. 创建文档结构对象  new Person
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        age: Number
    });
    //6. 创建文档模型对象
    const UserModel = mongoose.model('users', UserSchema);
    //7. 数据操作
    UserModel.create({
        username: 'tom',
        password: '123456',
        age: 28
    }, (err, data) => {
        if (err) throw err;
        //若没有错误
        console.log(data);
        //8. 选做  关闭数据库连接
        mongoose.connection.close();
    });

});
```

#### 批量添加

```javascript
//2.引入模块
const mongoose = require('mongoose');
const {Schema} = mongoose;

//3.连接数据库                                   数据库名称
mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

//4.绑定连接成功的回调
mongoose.connection.on('open', () => {
    //5.创建文档的结构对象
    const StarSchema = new Schema({
        name: String,
        age: Number,
        tags: Array
    });
    //6.创建文档模型对象                      集合名称
    const StarModel = mongoose.model('star', StarSchema);
    //7.批量插入
    StarModel.insertMany([
        {
            name: '菜鸡',
            age: 35,
            tags: ['唱', '跳', 'rap', '篮球']
        },
        {
            name: '马保国',
            age: 67,
            tags: ['不讲五的', '大意了', '我没有闪']
        },
        {
            name: '马老师',
            age: 35,
            tags: ['鬼刀', '走位', '诈胡']
        }
    ], (err, data) => {
        if (err) throw err;
        //如果成功，输出data
        console.log(data);
        //选做
        mongoose.connection.close();
    });
});
```

#### 删除

```javascript
const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    //结构对象
    const StarSchema = new Schema({
        name: String,
        age: Number,
        tags: Array
    });
    //创建模型对象
    const StarModel = mongoose.model('stars', StarSchema);
    //文档删除
    // StarModel.deleteOne({name: '马保国'}, (err, data) => {
    //     if (err) throw err;
    //     //根据删除数据的数量 判断删除是否成功
    //     if (data.deletedCount >= 1) {
    //         console.log('删除成功');
    //     } else {
    //         console.log('删除失败');
    //     }
    //     console.log(data);
    //     //关闭连接
    //     mongoose.connection.close();
    // });

    //批量删除
    StarModel.deleteMany({name: '马老师'}, (err, data) => {
        console.log(data);
    })
});

```

#### 更新

```javascript
const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    const StarSchema = new Schema({
        name: String,
        age: Number,
        tags: Array
    });

    //创建模型对象
    const StarModel = mongoose.model('stars', StarSchema);

    //更新
    // StarModel.updateOne({name: '菜鸡'}, {name: 'kun'}, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    StarModel.updateMany({name: '菜鸡'}, {name: 'kun'}, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
```

#### 读取

```javascript
const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    const StarSchema = new Schema({
        name: String,
        age: Number,
        tags: Array
    });

    //创建模型对象
    const StarModel = mongoose.model('stars', StarSchema);

    //读取数据
    // StarModel.find({name: '马保国'}, (err, data) => {
    //     if (err) throw err;
    //     //输出读取出来的数据
    //     console.log(data);
    // });

    //读取单条数据
    // StarModel.findOne({name: 'kun'}, (err, data) => {
    //     if (err) throw err;
    //     //输出读取出来的数据
    //     console.log(data);
    // });

    //根据id获取数据
    StarModel.findById('61e2da2f1b74d538782e791c', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

});
```

#### 个性化读取

```javascript
const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/data', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('open', () => {
    //创建结构对象
    const SongSchema = new Schema({
        language: String,
        hot: Number,
        title: String,
        author: String,
        duration: Number
    });
    //创建模型对象
    const SongModel = mongoose.model('songs', SongSchema);

    //读取数据  {} 表示不加条件
    // SongModel.find({}, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // })

    //字段（属性）筛选
    // SongModel.find().select({author: 1, title: 1, _id: 0}).exec((err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    //数据排序  1 为升序 -1 为降序
    // SongModel.find().sort({hot: -1}).select({hot: 1, title: 1}).exec((err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // });

    //数据截取  降序读取10条数据
    //skip 跳过 n 条
    //limit 取出 n 条
    SongModel.find()
        .select({hot: 1, title: 1, _id: 0})
        .sort({hot: -1})
        .skip(0).limit(10)
        .exec((err, data) => {
            if (err) throw err;
            console.log(data);
        });
});
```

## 附录

### 图形化操作

[**Studio 3T**](https://studio3t.com/download/)

### mongodb 配置密码

一、启动 mongod 带验证选项

```sh
mongod --auth
```

二、创建用户

```sh
use admin
db.createUser({user:"admin",pwd:"password",roles:["root"]})
```

三、连接 mongod 服务

```shell
mongo
use admin
db.auth("admin", "password")
```

四、mongoose 连接操作

```js
mongoose.connect('mongodb://admin:password@localhost/prepare?authSource=admin');
```

### 关系型数据库（RDBS）

**代表有**：MySQL、Oracle、DB2、SQL Server...

**特点**：关系紧密，都是表

**优点：**

1. 易于维护：都是使用表结构，格式一致；
2. 使用方便：通用，可用于复杂查询；
3. 高级查询：可用于一个表以及多个表之间非常复杂的查询。

**缺点：**

1. 读写性能比较差，尤其是海量数据的高效率读写；
2. 有固定的表结构，字段不可随意更改，灵活度稍欠；
3. 高并发读写需求，传统关系型数据库来说，硬盘I/O是一个很大的瓶颈。

### 非关系型数据库（NoSQL not only SQL ）

代表有：MongoDB、Redis...

**特点：** 关系不紧密，有文档，有键值对

**优点：**

1. 格式灵活：存储数据的格式可以是key,value形式。
2. 速度快：nosql可以内存作为载体，而关系型数据库只能使用硬盘；
3. 易用：nosql数据库部署简单。

**缺点：**

1. 不支持事务；
2. 复杂查询时语句过于繁琐。
