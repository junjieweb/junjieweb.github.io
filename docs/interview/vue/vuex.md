# 四、vuex

### **Vuex 的原理**

-

    - vuex概述

        - Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

            - ● Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
            - ● 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

    - 核心流程及主要功能

        - ● Vue Components 是 vue 组件，组件会触发（dispatch）一些事件或动作，也就是图中的 Actions;
        - ● 在组件中发出的动作，肯定是想获取或者改变数据的，但是在 vuex 中，数据是集中管理的，不能直接去更改数据，所以会把这个动作提交（Commit）到 Mutations 中;
        - ● 然后 Mutations 就去改变（Mutate）State 中的数据;
        - ● 当 State 中的数据被改变之后，就会重新渲染（Render）到 Vue Components 中去，组件展示更新后的数据，完成一个流程。

    - 各模块在核心流程中的主要功能

        - ● Vue Components∶ Vue组件。HTML页面上，负责接收用户操作等交互行为，执行dispatch方法触发对应action进行回应。
        - ● dispatch∶操作行为触发方法，是唯一能执行action的方法。
        - ● actions∶ 操作行为处理模块。负责处理Vue
          Components接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台API请求的操作就在这个模块中进行，包括触发其他action以及提交mutation的操作。该模块提供了Promise的封装，以支持action的链式触发。
        - ● commit∶状态改变提交操作方法。对mutation进行提交，是唯一能执行mutation的方法。
        - ● mutations∶状态改变操作方法。是Vuex修改state的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。
        - ● state∶ 页面状态管理容器对象。集中存储Vuecomponents中data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，并进行状态更新。
        - ● getters∶ state对象读取方法。

    - 总结

        - Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 提交修改信息， Mutation 同时提供了订阅者模式供外部插件调用获取 State
          数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走 Action ，但 Action 也是无法直接修改 State 的，还是需要通过Mutation
          来修改State的数据。最后，根据 State 的变化，渲染到视图上。

### **为什么要用 Vuex**

- 对于多层嵌套的组件之间传递数据采取传参或者组件间通信的方式将会非常繁琐，而且通常会导致代码无法维护。所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的"视图"
  ，不管在树的哪个位置，任何组件都能获取状态或者触发行为。另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，代码将会变得更结构化且易维护。而且vuex中的数据是响应式的，只要vuex中的数据更新，依赖他的数据的组件也会跟着更新。

### **Vuex有哪几种属性？**

- state => 基本数据(数据源存放地)
- getters => 从基本数据派生出来的数据
- mutations => 提交更改数据的方法，同步
- actions => 像一个装饰器，包裹mutations，使之可以异步。
- modules => 模块化Vuex

### ** Vuex中actions和mutations的区别**

- mutations

    - mutation中的操作是一系列的同步函数，用于修改state中的变量的的状态。当使用vuex时需要通过commit来提交需要操作的内容。

- actions

    - Action 可以包含任意异步操作，Action 提交的是 mutation，而不是直接变更状态。

- 区别

    - Mutation专注于修改State，理论上是修改State的唯一途径；Action业务代码、异步请求。
    - Mutation：必须同步执行；Action：可以异步，但不能直接操作State。
    - 在视图更新时，先触发actions，actions再触发mutations

### **为什么 Vuex 的 mutation 中不能做异步操作？**

- 每个mutation执行完成后都会对应到一个新的状态变更，这样devtools就可以将新的状态存下来，然后就可以实现 数据的更新
  了。如果mutation支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

### **Vuex 和 localStorage 的区别**

- 存储位置区别

    - ● vuex存储在内存中
    - ● localstorage 则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要 JSON的stringify和parse方法进行处理。 读取内存比读取硬盘速度要快

- 应用场景区别

    - ● Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex用于组件之间的传值。
    - ● localstorage是本地存储，是将数据存储到浏览器的方法，一般是在跨页面传递数据时使用 。

- 响应式区别

    - Vuex能做到数据的响应式

    - localstorage不能做到数据的响应式

      对于不变的数据确实可以用localstorage可以代替vuex，但是当两个组件共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage无法做到

- 时效区别

    - 刷新页面时vuex存储的值会丢失
    - 刷新页面时localstorage存储的值不会丢失

### **Vuex和单纯的全局对象有什么区别？**

- Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
- 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化。

### **Vuex的严格模式是什么,有什么作用，如何开启？**

- 严格模式作用

    - 在严格模式下，无论何时发生了状态变更且不是由mutation函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

- 开启方式

    -

### **如何在组件中批量使用Vuex的getter属性**

- 使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中

    -

### **如何在组件中重复使用Vuex的mutation**

- **在组件中使用，然后调用this.setNumber(10)相当调用this.$store.commit('SET_NUMBER',10)**
