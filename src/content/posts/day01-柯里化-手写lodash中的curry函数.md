---
title: "day01_柯里化、手写Lodash中的curry函数"
description: "柯里化 - 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变） - 然后返回一个新的函数接收剩余的参数，返回结果 手写Lodash中的c"
pubDate: 2022-04-10
tags: ["JavaScript", "Lodash"]
category: "JavaScript"
chunibyo: 2
---
#### 柯里化

-
当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）

-
然后返回一个新的函数接收剩余的参数，返回结果

#### 手写Lodash中的curry函数

```
function curry(fn) {
    return function curriedFn(...args) {
        if (args.length

#####
