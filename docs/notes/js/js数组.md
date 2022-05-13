# Array 数组

**JavaScript**的 `Array` 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript
数组不一定是密集型的，这取决于它的使用方式。

JavaScript 数组的索引是从0开始的，第一个元素的索引为0，最后一个元素的索引等于该数组的 `length` 减1。

如果指定的索引是一个无效值，JavaScript 数组并不会报错，而是会返回 `undefined`。

## 创建数组

`let arr = new Array();` `let arr = [];`

创建一个指定大小的数组 `let arr = new Array(长度);`

创建数组的同时，向数组中添加元素 `let arr = [ele1, ele2, ...];` `let arr = new Array(ele1, ele2, ...);`

使用typeof检查一个数组时，会返回`'object'` 可以使用类方法（静态方法）`Array.isArray(对象)`检查一个对象是否是数组

## 静态方法

1. `Array.from()` 从类数组对象或者可迭代对象中创建一个新的数组实例
2. `Array.isArray()` 用来判断某个变量是否是一个数组对象
3. `Array.of()` 根据一组参数来创建新的数组实例，支持任意的参数数量和类型

## 实例属性

1. `Array.prototype.length` 数组中的元素个数，实际值是数组的最大索引+1，`length`的值可以修改。
2. `Array.prototype[@@unscopables]` 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 with 语句绑定的环境中

## 实例方法

1. `Array.prototype.concat()` 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
2. `Array.prototype.every()` 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
3. `Array.prototype.fill()` 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
4. `Array.prototype.filter()` 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
5. `Array.prototype.find()` 返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`
6. `Array.prototype.findIndex()` 返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回 `-1`
7. `Array.prototype.flat()` 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
8. `Array.prototype.flatMap()` 使用映射函数映射每个元素，然后将结果压缩成一个新数组
9. `Array.prototype.forEach()` 对数组的每个元素执行一次给定的函数
10. `Array.prototype.includes()` 判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`
11. `Array.prototype.indexOf()` 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 `-1`
12. `Array.prototype.join()` 将一个数组的所有元素连接成一个字符串并返回这个字符串。需要一个连接符作为参数，默认为`","`
13. `Array.prototype.keys()` 返回一个包含数组中每个索引键的 `Array Iterator` 对象
14. `Array.prototype.lastIndexOf()` 返回指定元素在数组中的最后一个的索引，如果不存在则返回 `-1`
15. `Array.prototype.map()` 返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
16. `Array.prototype.pop()` 从数组中删除最后一个元素，并返回该元素的值
17. `Array.prototype.push()` 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
18. `Array.prototype.reduce()` 对数组中的每个元素执行一个由您提供的`reducer`函数（升序执行），将其结果汇总为单个返回值
19. `Array.prototype.reduceRight()` 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
20. `Array.prototype.reverse()` 将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组
21. `Array.prototype.shift()` 从数组中删除第一个元素，并返回该元素的值
22. `Array.prototype.slice()` 提取源数组的一部分并返回一个新数组
23. `Array.prototype.some()` 测试数组中是不是至少有一个元素通过了被提供的函数测试
24. `Array.prototype.sort()` 对数组元素进行原地排序并返回此数组，默认按照`Unicode`编码进行排序,可以通过回调函数来指定排序规则
25. `Array.prototype.splice()` 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容
26. `Array.prototype.toLocaleString()` 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `Object.prototype.toLocaleString()` 方法转成字符串
27. `Array.prototype.toString()` 返回一个字符串表示指定的数组及其元素。数组中的元素将使用各自的 `Object.prototype.toString()` 方法转成字符串
28. `Array.prototype.unshift()` 将一个或多个元素添加到数组的头部，并返回该数组的新长度
29. `Array.prototype.values()` 返回一个新的 `Array Iterator` 对象，该对象包含数组每个索引的值
