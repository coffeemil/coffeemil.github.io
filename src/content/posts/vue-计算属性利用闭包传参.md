---
title: "[vue] 计算属性利用闭包传参"
description: "vue中的computed无法直接像methos一样传参，但我们可以使用利用闭包 computed:{ getDisabled(){ return (row)="
pubDate: 2021-04-10
tags: ["Vue", "JavaScript"]
category: "前端"
chunibyo: 2
---
vue中的computed无法直接像methos一样传参，但我们可以使用利用闭包

```
  computed:{
    getDisabled(){
        return (row)=>{
            return row.id=1
        }
    }
  }
```
