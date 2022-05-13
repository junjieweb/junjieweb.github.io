# 四、场景应用

## 001 - 实现一个三角形

CSS绘制三角形主要用到的是border属性，也就是边框。平时在给盒子设置边框时，往往都设置很窄，就可能误以为边框是由矩形组成的。实际上，border属性是由三角形组成的

```css
div {
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: orange blue red green;
}
```

想要哪个把其他方向的颜色设置成透明（transparent）就行了
<div style="width: 0;height: 0;border: 100px solid;border-color: orange skyblue seagreen red"></div>

## 002 - 实现一个扇形

用CSS实现扇形的思路和三角形基本一致，就是多了一个圆角的样式，实现一个90°的扇形

```css
div {
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: orange blue red green;
    border-radius: 100px;
}
```

想要哪个把其他方向的颜色设置成透明（transparent）就行了
<div style="width: 0;height: 0;border: 100px solid;border-color: orange skyblue seagreen red;border-radius: 100px"></div>

## 003 - 实现一个宽高自适应的正方形

**vw方式**

```css
div {
    width: 10%;
    height: 10vw;
    background: tomato;
}
```

**利用元素的margin/padding百分比是相对父元素width的性质来实现**

```css
div {
    width: 20%;
    height: 0;
    padding-top: 20%;
    background: orange;
}
```

**利用子元素的margin-top的值来实现**

```css
.square {
    width: 30%;
    overflow: hidden;
    background: yellow;
}

.square::after {
    content: '';
    display: block;
    margin-top: 100%;
}
```

## 004 - 画一条0.5px的线

采用transform: scale()的方式 `transform: scale(0.5,0.5)`

采用meta viewport的方式

`<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"/>`

## 005 - 设置小于12px的字体

使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size-adjust:
none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。

使用css3的transform缩放属性-webkit-transform:scale(0.5); 注意-webkit-transform:scale(0.75)
;收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/inline-block/...；

使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。

## 006 - 如何解决1px问题

1px 问题指的是：在一些 Retina屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px 并不能和移动设备上的 1px 划等号。

**原因**

- window.devicePixelRatio = 设备的物理像素 / CSS像素。
- 打开 Chrome 浏览器，启动移动端调试模式，在控制台去输出这个 devicePixelRatio 的值。这里选中 iPhone6/7/8 这系列的机型，输出的结果就是2：
- 这就意味着设置的 1px CSS 像素，在这个设备上实际会用 2 个物理像素单元来进行渲染，所以实际看到的一定会比 1px 粗一些。

**解决方案**

- 直接写 0.5px

    - 目前为止最简单的一种方法。这种方法的缺陷在于兼容性不行，IOS 系统需要8及以上的版本，安卓系统则直接不兼容。

- 伪元素先放大后缩小

    - 思路是先放大、后缩小：在目标元素的后面追加一个 ::after 伪元素，让这个元素布局为 absolute 之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border值设为 1px。接着借助
      CSS 动画特效中的放缩能力，把整个伪元素缩小为原来的 50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而 border 也缩小为了 1px 的二分之一，间接地实现了 0.5px 的效果。

        - 这个方法的可行性会更高，兼容性也更好。唯一的缺点是代码会变多。

- 思路三：viewport 缩放来解决

    - <meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">

    - 整个页面被缩放了。这时 1px 已经被处理成物理像素大小，这样的大小在手机上显示边框很合适。但是，一些原本不需要被缩小的内容，比如文字、图片等，也被无差别缩小掉了。


