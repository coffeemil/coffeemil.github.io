---
title: "day01_手写ES6高阶函数(forEach、map、filter、every、some)"
description: "高阶函数 - 可以把函数作为参数传递给另一个函数 - 可以把函数作为另一个函数的返回结果 forEach function forEach(list, fn) "
pubDate: 2022-04-06
tags: ["JavaScript", "ES6"]
category: "JavaScript"
chunibyo: 2
---
#### 高阶函数

-
可以把函数作为参数传递给另一个函数

-
可以把函数作为另一个函数的返回结果

##### forEach

```
function forEach(list, fn) {    for (let i = 0; i  { console.log(item) })
```

##### filter

```
function filter(list, fn) {    const r = []    for (let i = 0; i  { return item % 2 == 0 })console.log(result)
```

##### map

```
function map(list, fn) {    const r = []    for (let i = 0; i  { return item * 2 })console.log(result)
```

##### some

```
function some(list, fn) {    for (let i = 0; i  { return item === 3 })console.log(result)
```

##### every

```
function every(list, fn) {    for (let i = 0; i  { return item === 1 })console.log(result)
```
