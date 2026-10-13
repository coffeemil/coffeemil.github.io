---
title: "[vue-router] 路由懒加载"
description: "路由懒加载 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载"
pubDate: 2021-03-27
tags: ["Vue", "Vue Router"]
category: "前端"
chunibyo: 2
---
## 路由懒加载

当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

如何定义一个能够被 Webpack 自动代码分割的异步组件?

```
const Foo = () => import('./Foo.vue')
```

没有使用路由懒加载，会在首次加载一起加载到app.js中。路由跳转不会再请求

使用路由懒加载，首次加载app.js体积明显减小。路由跳转会再次发送请求，size为prefetch cache

## 把组件按组分块

有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中，

一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)

```
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
```

Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。
