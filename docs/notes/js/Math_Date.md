# Math & Date

## Math

Math是一个用来进行数学运算的工具类，工具类不需要创建对象，可以直接使用。在Math中包含了一组数学运算相关的常量和方法

1. `Math.PI` 获取圆周率
2. `Math.abs()` 获取一个数的绝对值
3. `Math.ceil()` 对一个数向上取整
4. `Math.floor()` 对一个数向下取整
5. `Math.round()` 对一个数进行四舍五入取整
6. `Math.random()` 生成一个0-1之间的随机数
7. `Math.pow(x,y)` 求x的y次幂
8. `Math.sqrt()` 求一个数的平方根
9. `Math.max()` 取多个值中的较大值
10. `math.min()` 取多个值中的较小值

## Date

Date是表示日期的对象，在JS中所有的时间相关的都使用Date来表示

创建一个表示当前日期的对象 `let d = new Date();`

创建一个指定日期的对象 `let d = new Date('月/日/四位年 时:分:秒');`

#### 对象的方法

1. `d.getDay()` 获取当前是周几，返回值0-6，0表示周日
2. `d.getDate()` 获取当前是几日
3. `d.getMonth()` 获取当前是几月，返回值0-11，0表示1月
4. `d.getFullYear()` 获取当前的年份
5. `d.getTime()` 获取当前日期的时间戳
6. `Date.now()` 获取当前的时间戳（代码执行的这一刻）
