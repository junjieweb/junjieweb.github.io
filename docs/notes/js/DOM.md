# DOM

**文档对象模型**
在浏览器标签中当前载入的文档用文档对象模型来表示。这是一个由浏览器生成的“树结构”，使编程语言可以很容易的访问HTML结构 —
例如浏览器自己在呈现页面时，使用它将样式和其他信息应用于正确的元素，而页面呈现完成以后，开发人员可以用JavaScript操作DOM。

## DOM 查询

#### 通过 `document` 对象查询

- 根据`id`获取一个元素节点对象 `document.getElementById()`
- 根据`class`属性值获取一组元素节点对象 `document.getElementsByClassName()`
- 根据`标签名`获取一组元素节点对象 `document.getElementsByTagName()`
- 获取页面中的所有元素 `document.getElementsByTagName('*')`
- 根据元素的`name`属性获取一组元素节点对象（主要用于表单） `document.getElementsByName()`
- 根据选择器字符串获取符合条件的第一个元素 `document.querySelector()`
- 根据选择器字符获取符合条件的所有元素 `document.querySelectorAll()`
- 获取页面的根元素（`html`）`document.documentElement`
- 获取页面的`body`元素 `document.body`

#### 通过 `element` 进行查询

- 根据标签名获取元素中的指定的后代元素 `element.getElementsByTagName()`
- 获取当前元素的所有子节点 `element.childNodes`
- 获取当前元素的所有子元素 `element.children`
- 获取第一个子节点 `element.firstChild`
- 获取第一个子元素 `element.firstElementChild`
- 获取最后一个子节点 `element.lastChild`
- 获取最后一个子元素 `element.lastElementChild`
- 获取当前元素的父元素 `element.parentNode`
- 获取前一个兄弟节点 `element.previousSibling`
- 获取前一个兄弟元素 `element.previousElementSibling`
- 获取后一个兄弟节点 `element.nextSibling`
- 获取后一个兄弟元素 `element.nextElementSibling`

## 元素中的属性

#### 读取

- `element.name`
- `element.value`
- `element.id`
- `element.className`

#### 设置

- `element.name = xxx;`
- `element.value = xxx;`
- `element.id = xxx;`
- `element.className = xxx;`

#### 其他属性

`innerHTML`标签内部的HTML代码，带标签

`innerText`标签内部的文本内容，不带标签

#### 读取一个标签内部的文本

- `element.innerHTML`
- `element.innerText`
- `element.textContent`
- `element.firstChild.nodeValue`

## 创建元素

创建一个新元素 `document.createElement('标签名')`

创建一个新的文本节点 `document.createTextNode('文本内容')`

## 插入元素

- 向父节点中插入一个子节点 `父节点.appendChild(子节点);`
- 向元素的指定位置插入子元素 `元素.insertAdjacentElement('位置',元素);`
- 向元素的指定位置插入HTML代码 `元素.insertAdjacentHTML('位置','HTML代码');`
- 向元素的指定位置插入文本内容 `元素.insertAdjacentText('位置','文本内容');`
    - 位置需要一个字符串作为参数：
        - `'beforebegin'` 开始标签前，成为当前元素的前一个兄弟元素
        - `'afterbegin'` 开始标签后，成为当前元素的第一个子元素
        - `'beforeend'` 结束标签前，成为当前元素的最后一个子元素
        - `'afterend'` 结束标签后，成为当前元素的后一个兄弟元素
- 使用新节点替换旧节点 `父节点.replaceChild(新节点,旧节点);`
- 将新节点插入到旧节点的前面 `父节点.inserBefore(新节点,旧节点);`

## 复制元素

将节点进行浅复制（只复制节点本身） `节点.cloneNode()`

对节点进行深复制（复制节点本身及所有的后代节点） `节点.cloneNode(true)`

## 删除元素

`子节点.parentNode.removeChild(子节点);`

`子节点.remove();`

## 事件 Event

### 事件对象

当事件的回调函数被调用时，浏览器每次都会传递一个对象作为参数，这个对象就是事件对象

事件对象中存储了事件相关的一切信息：事件触发时，哪个鼠标按键被按下、哪个键盘上的按键被按下、鼠标滚动的方向...

要获取事件对象，只需在事件的回调函数中定义一个形参即可

### 事件的冒泡（bubble）

冒泡指事件的向上传导，子元素上事件触发时，会同时导致其祖先元素上的同类事件也被触发。冒泡的存在简化了代码的编写。但是有时我们不希望冒泡的存在，可以通过事件对象来取消冒泡：

1. 通过`cancelBubble`属性来取消冒泡 `event.cancelBubble = true;`
2. 通过`stopPropagation()`方法来取消冒泡 `event.stopPropagation();`

### 事件的传播

事件的传播分成了三个阶段：

1. 事件的捕获
    - 指事件从最外层元素（window）向内部元素进行事件的捕获
    - 默认情况下，捕获阶段不会触发事件
    - 如果希望在捕获时触发事件，可以将`addEventListener()`的第三个参数设置为`true`
2. 目标元素（触发事件的元素） 事件捕获到目标元素，捕获停止
3. 事件的冒泡：从目标元素开始向外层的元素进行事件的冒泡。默认情况下，冒泡时事件会被触发

### 事件的委派（事件的委托）

当需要为多个元素绑定相同地响应函数时，可以统一将事件绑定给它们共同的祖先元素，这样只需要绑定一次，即可让所有元素都具有该事件，即使元素是新增的也会具有该事件

### 事件函数

`addEventListener()` 为元素添加事件的响应函数。参数：

1. 要绑定的事件的字符串（不要on）
2. 事件的回调函数
3. 是否在捕获阶段触发事件，默认为false

`removeEventListener()` 用来移除元素上的指定事件

`event.target` 表示触发事件的对象

### 鼠标事件

- `mousedown` 鼠标按下
- `mousemove` 鼠标移动
- `mouseup` 鼠标松开
- `contextmenu` 表示鼠标右键菜单.
    - 点击右键弹出菜单，是默认行为.可以通过取消它的默认行为，来禁用菜单
- `wheel` 鼠标滚轮事件

```javascript
// 获取滚轮滚动的方向
document.addEventListener('wheel', function (event) {
    //event.deltaY  获取滚轮的垂直滚动方向
    console.log(event.deltaY);
    if (event.deltaY > 0) {
        console.log('向下滚');
    } else {
        console.log('向上滚');
    }
    //event.deltaX 获取鼠标滚轮的水平滚动方向
    console.log(event.deltaX);
});
```

### 键盘事件

`keydown` `keyup` `keypress`

> 键盘事件只能绑定给可以获取焦点的元素或`document`

如果按着某个键不松开，键盘按下事件会连续触发，但是第一次和第二次触发之间的间隔会比较长，这么设计是为了防止用户误操作

`event.key` 用来获取当前是哪个按键被按下

## JS 操作 CSS

### 操作内联样式

`元素.style.样式名` 读取样式

`元素.style.样式名 = 样式值;` 设置样式

> **注意**：通过`style`属性所读取和设置的样式都是内联样式，所以通过它所设置的样式通常会立即生效
> 如果样式名不符合标识符的规范，需要对样式名进行修改（去掉-，-后的字母大写）
>
> 例如：` background-color ---> backgroundColor` `border-left-width ==> borderLeftWidth`

#### `getComputedStyle()` 获取当前的生效的样式

**参数**

1. 要获取样式的元素
2. 要获取的伪类（没有可以不写）

**返回值**： 一个包含了当前元素所有生效的样式的对象

> **注意**：该方法获取的样式全都是只读的，无法修改

#### 其他的样式相关的属性：

`clientWidth` `clientHeight` 获取的是内容区和内边距的总大小

`offsetWidth` `offsetHeight` 获取的是内容区、内边距和边框的总大小

`offsetParent` 获取当前元素的定位父元素,离当前元素最近的开启了定位的祖先元素，如果所有的祖先元素都没有开启定位，则返回body

`offsetLeft` `offsetTop` 当前元素距离其定位父元素的距离

`scrollHeight` `scrollWidth` 获取元素滚动区域的大小

> **注意**：
> 1. 以上属性都是只读属性，无法修改。
> 2. 以上属性所获取的值都是不带单位的值，可以直接参与运算

`scrollTop` `scrollLeft` 获取（设置）垂直和水平滚动条滚动的距离

判断滚动条是否到底

- 垂直：`scrollHeight - scrollTop === clientHeight`
- 水平：`scrollWidth - scrollLeft === clientWidth`

### 修改`class`

当修改的样式过多时，可以通过修改元素的class属性来影响元素的样式

`classList`可以用来返回当前元素的所有类,`classList`的类型是`DOMTokenList`

`classList`中的方法：

- `add()` 用来向元素中添加一个或多个类
- `remove()` 用来移除元素中的一个类
- `replace()` 用来使用一个新的class替换旧的class
- `toggle()` 切换一个元素的class，有则删除，没有则添加
- `contains()` 检查一个元素是否含有某个class，如果包含返回true，否则返回false

## 定时器

**`setTimeout()`** 延时调用，可以用来在指定时间后调用函数。参数一：回调函数，要调用的函数，参数二：时间（毫秒）。

`clearTimeout()` 关闭延时调用

**`setInterval()`** 定时调用，参数一：回调函数，要调用的函数，参数二：时间（毫秒）。返回一个定时器的id。

`clearInterval()` 用来关闭定时器，参数为定时器的id，根据id将定时器关闭

`setTimeout()`和`setInterval()`本质上是一样的，是相互替代的

```javascript
let num = 0;
let h1 = document.getElementsByTagName('h1')[0];
let timer = setInterval(function () {
    num++;
    h1.innerHTML = num;
    if (num === 10) {
        clearInterval(timer);
    }
}, 1000);

setTimeout(function test() {
    num++;
    h1.innerHTML = num;
    if (num === 10) {
        return;
    }
    setTimeout(test, 1000);
}, 1000);
```
