# BOM

`BOM`（浏览器对象模型）中为我们提供了一组对象，用来完成对浏览器的各种操作

BOM 对象都是 `window` 对象的属性，所以可以直接访问

## `Windown`

`Windown` 代表的是浏览器窗口

## `History`

`History` 代表的是浏览器的历史记录（前进后退按钮）,由于隐私的原因，无法访问具体的历史记录，只能控制浏览器向前向后翻页

- `history.length` 当前访问的页面的数量
- `history.forward()` 切换到前边访问的网址
- `history.back()` 相当于浏览器的回退按钮
- `history.go()` 调转到指定的历史记录

## `Location`

`Location` 代表的是浏览器的地址栏, 如果直接读取`location`，则可以获取到地址栏的信息. 如果修改`location`的值，则浏览器会自动跳转到新的页面. 通过这种方式跳转页面，会浏览历史记录，可以通过回退按钮退回

`assign()` 用来跳转地址，和直接修改location是一样的
`replace()` 用来跳转地址，它不会产生历史记录，无法通过回退按钮回退
`location.reload()` 用来重新加载网页，相当于网页的刷新按钮

## `Navigator`

`Navigator` 代表的是浏览器的信息，通过 `Navigator` 来识别不同的浏览器，在 `Navigator` 中大部分属性都没有什么使用价值

`navigator.userAgent` 用户代理，返回的是一个字符串，用来表示浏览器的信息

## `Screen`

`Screen` 代表的是设备的屏幕信息
