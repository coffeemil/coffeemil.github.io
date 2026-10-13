---
title: "day01_手写memoize记忆函数"
description: "手写Lodash中的memoize记忆函数 // 求圆的面积 function getArea(r) { console.log('执行了getArea'); "
pubDate: 2022-04-07
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
#### 手写Lodash中的memoize记忆函数

```
// 求圆的面积
function getArea(r) {
    console.log('执行了getArea');
    return Math.PI * r * r
}
// 记忆函数
function memoize(fn) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(fn, arguments)
        return cache[key]
    }
}

const getAreaUseMemoize = memoize(getArea)

const r1 = getAreaUseMemoize(15)
const r2 = getAreaUseMemoize(15)
const r3 = getAreaUseMemoize(15)

console.log(r1);
console.log(r2);
console.log(r3);
// 执行了getArea
// 706.8583470577034
// 706.8583470577034
// 706.8583470577034
```
