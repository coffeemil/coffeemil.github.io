---
title: "[js]柯理化函数"
description: "什么是柯理化？ 柯理化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数且返回结果的新函数的"
pubDate: 2021-11-16
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
什么是柯理化？

柯理化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数且返回结果的新函数的技术。

普通函数

```
//函数定义
function add(a,b){
return a + b
}
//函数调用
add(1, 2);
```

柯理化函数

```
//函数定义
function add(a){undefined
return function(b){undefined
return a + b;
}
}
//函数调用
add(1)(2);
```
