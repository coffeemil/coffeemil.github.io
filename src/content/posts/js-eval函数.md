---
title: "[js] eval函数"
description: "eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。 如果参数是一个表达式，eval() 函数将执行表达式。如果参数是Javascr"
pubDate: 2022-05-08
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
eval() 函数计算 JavaScript 字符串，并把它作为脚本代码来执行。

如果参数是一个表达式，eval() 函数将执行表达式。如果参数是Javascript语句，eval()将执行 Javascript 语句。

**eval(*string*)**

```
eval("x=10;y=20;document.write(x*y)");
document.write("
" + eval("2+2"));
document.write("
" + eval(x+17));// 200// 4// 2
```
