---
title: "[element-ui] 穿梭框对象重复不添加方案"
description: "aaa=[{a1:1,a2:''},{a1:2,a2:''},{a1:3,a2:''},{a1:4,a2:''}] //所有数据列表 bbb=[{a1:1,a2"
pubDate: 2021-04-26
tags: ["Element UI", "JavaScript"]
category: "前端"
chunibyo: 2
---
```
    aaa=[{a1:1,a2:''},{a1:2,a2:''},{a1:3,a2:''},{a1:4,a2:''}]   //所有数据列表
    bbb=[{a1:1,a2:''}]      //右侧列表
    ccc=[{a1:2,a2:''},{a1:2,a2:''},{a1:1,a2:''},{a1:2,a2:''}]   //选中的数据

    let arr=bbb.map(item=>item.a1)

    ccc.forEach(item => {
         if(arr.indexOf(item.a1)===-1) {
            arr.push(item.a1)
            bbb.push(item)
         }
    });
    console.log(bbb);
    /*
    0: {a1: 1, a2: ""}
    1: {a1: 2, a2: ""}
    length: 2
    */
```
