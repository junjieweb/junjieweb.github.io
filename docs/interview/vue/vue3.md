# 六、vue3

## 001 - Vue3.0有什么更新

- 监测机制的改变

    - 3.0 将带来基于代理 Proxy的 observer 实现，提供全语言覆盖的反应性跟踪。
    - 消除了 Vue 2 当中基于 Object.defineProperty 的实现所存在的很多限制

        - 检测属性的添加和删除；
        - 检测数组索引和长度的变更；
        - 支持 Map、Set、WeakMap 和 WeakSet。

- 模板

    - 作用域插槽，2.x 的机制导致作用域插槽变了，父组件会重新渲染，而 3.0 把作用域插槽改成了函数的方式，这样只会影响子组件的重新渲染，提升了渲染的性能。
    - 同时，对于 render 函数的方面，vue3.0 也进行一系列更改来方便习惯直接使用 api 来生成 vdom 。

- 对象式的组件声明方式

    - vue2.x 中的组件是通过声明的方式传入一系列 option，和 TypeScript 的结合需要通过一些装饰器的方式来做，虽然能实现功能，但是比较麻烦。
    - 3.0 修改了组件的声明方式，这样使得和 TypeScript 的结合变得很容易

- 其它方面的更改

    - 支持自定义渲染器，从而使得 weex 可以通过自定义渲染器的方式来扩展，而不是直接 fork 源码来改的方式。
    - 支持 Fragment（多个根节点）和 Protal（在 dom 其他部分渲染组建内容）组件，针对一些特殊的场景做了处理。
    - 基于 tree shaking 优化，提供了更多的内置功能。

## 002 - defineProperty和proxy的区别

- defineProperty

    - Vue 在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这样当追踪数据发生变化时，setter 会被自动调用。
    - 存在的问题

        -
            1. 添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过$set 来调用Object.defineProperty()处理。
        -
            2. 无法监控到数组下标和长度的变化。

- proxy

    - Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

- defineProperty和proxy的区别

    -
        1. Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。
    -
        2. Proxy 可以监听数组的变化。

## 003 - Vue3.0 为什么要用 proxy？

- 在 Vue2 中， 0bject.defineProperty 会改变原始数据，而 Proxy 是创建对象的虚拟表示，并提供 set 、get 和 deleteProperty
  等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点∶

    - ● 不需用使用 Vue.$set 或 Vue.$delete 触发响应式。
    - ● 全方位的数组变化检测，消除了Vue2 无效的边界情况。
    - ● 支持 Map，Set，WeakMap 和 WeakSet。

- Proxy 实现的响应式原理与 Vue2的实现原理相同，实现方式大同小异∶

    - ● get 收集依赖
    - ● set、delete 等触发依赖
    - ● 对于集合类型，就是对集合对象的方法做一层包装：原方法执行后执行依赖相关的收集或触发逻辑。

## 004 - Vue 3.0 中的 Vue Composition API？

- 在 Vue2 中，代码是 Options API 风格的，也就是通过填充 (option) data、methods、computed 等属性来完成一个 Vue 组件。造成了几个问题：

    1. 由于 Options API 不够灵活的开发方式，使得Vue开发缺乏优雅的方法来在组件间共用代码。

    2. Vue 组件过于依赖this上下文，Vue 背后的一些小技巧使得 Vue 组件的开发看起来与 JavaScript 的开发原则相悖，比如在methods
       中的this竟然指向组件实例来不指向methods所在的对象。这也使得 TypeScript 在Vue2 中很不好用。

- Vue3 中，舍弃了 Options API，转而投向 Composition API。Composition API本质上是将 Options API 背后的机制暴露给用户直接使用，这样用户就拥有了更多的灵活性，也使得 Vue3
  更适合于 TypeScript 结合。

    - **Vue Composition API 使得 Vue3 的开发风格更接近于原生 JavaScript，带给开发者更多地灵活性**
