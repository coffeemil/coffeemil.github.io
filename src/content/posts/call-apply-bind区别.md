---
title: "call , apply , bind区别"
description: "function a(a, b) { this.aa = 1; console.log(this, a, b); } function b(a, b) { th"
pubDate: 2022-08-16
tags: ["JavaScript"]
category: "笔记"
chunibyo: 2
---
```
function a(a, b) {
    this.aa = 1;
    console.log(this, a, b);

}
function b(a, b) {
    this.bb = 2;
    console.log(this, a, b);
}
function c(a, b) {
    this.cc = 2;
    console.log(this, a, b);
}

// 改变函数指针
// call 立即执行 与apply类似区别在参数
const aaa = a.call(this, '这是call11', '这是call2');
// apply 立即执行 与call类似区别在参数装到数组里面
const bbb = b.apply(this, ['这是apply1', '这是apply2']);
// bind 不会立即执行，参数与call一致
const ccc = c.bind(this, 'bind1', 'bind2');
ccc()
```

```
{ aa: 1 } 这是call11 这是call2
{ aa: 1, bb: 2 } 这是apply1 这是apply2
{ aa: 1, bb: 2, cc: 2 } bind1 bind2
```
