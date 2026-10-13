---
title: "day01_闭包"
description: "闭包 - 闭包 (Closure):可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员 - 闭包的本质：函数在执行的时候会放到一个执行栈上"
pubDate: 2022-04-06
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
#### 闭包

-
闭包 (Closure):可以在另一个作用域中调用一个函数的内部函数并访问到该函数的作用域中的成员

-
闭包的本质：函数在执行的时候会放到一个执行栈上当函数执行完毕后会从执行栈上移除，但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问到外部函数的成员

##### 案例:求平方

```
function makePower(power) {    return function (number) {        return Math.pow(number, power)    }}// 求2的立方const power2 = makePower(2)// 求3的立方const power3 = makePower(3)​console.log(power2(2))   // 4console.log(power2(3))   // 9console.log(power2(4))   // 16console.log(power3(2))   // 8
```
