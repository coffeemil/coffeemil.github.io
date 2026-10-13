---
title: "[element-ui] 表格功能实现(删除选中)"
description: "表格删除选中的行实现，这里利用到了 __ob__ 对象。 1.多选删除 //arr数组集合[{}] delArr要删除的数组[] export function"
pubDate: 2021-04-23
tags: ["Element UI"]
category: "前端"
chunibyo: 2
---
表格删除选中的行实现，这里利用到了 __ob__  对象。

1.多选删除

```
//arr数组集合[{}]   delArr要删除的数组[]export function delMultipleBox(arr, delArr) {    return delArr.map((n) => n.__ob__.dep.id).forEach(        (n) => {            arr.some((item, index) => {                if (item.__ob__.dep.id == n) {                    arr.splice(index, 1);                }            });        }    );}
```
