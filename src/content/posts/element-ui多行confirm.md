---
title: "[element-ui]多行confirm"
description: "vue封装多行confirm import { Message, MessageBox, Notification, Loading } from 'eleme"
pubDate: 2021-11-16
tags: ["Element UI"]
category: "前端"
chunibyo: 2
---
vue封装多行confirm

```
 import { Message, MessageBox, Notification, Loading } from 'element-ui'  // 确认窗体
  confirm(content,that) {
    if(Array.isArray(content) && that) {
      const newDatas = []
      const h = that.$createElement
      for (const i in content) {
        newDatas.push(h('p', null, content[i]))
      }
      content=h('div', null, newDatas)
    }
    return MessageBox.confirm(content, "系统提示", {
      // 调换确定取消位置
      cancelButtonClass: 'cancelbtn',
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: "warning",
    })
  },
```

 使用方法

```
const context = ['111111111', '222222222']
confirm(context, this)
```

  // 确认窗体

  confirm(content,that) {

    if(Array.isArray(content) && that) {

      const newDatas = []

      const h = that.$createElement

      for (const i in content) {

        newDatas.push(h('p', null, content[i]))

      }

      content=h('div', null, newDatas)

    }

    return MessageBox.confirm(content, "系统提示", {

      // 调换确定取消位置

      cancelButtonClass: 'cancelbtn',

      confirmButtonText: '确定',

      cancelButtonText: '取消',

      type: "warning",

    })

  },
