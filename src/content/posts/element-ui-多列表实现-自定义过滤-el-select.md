---
title: "[element-ui] 多列表实现+自定义过滤 el-select"
description: "自定义多列表，自定义过滤     {{item.dictValue}} {{item.dictLabel}}     过滤函数 filterMethod(que"
pubDate: 2021-06-09
tags: ["Element UI"]
category: "前端"
chunibyo: 2
---
自定义多列表，自定义过滤

```

             {{item.dictValue}}

             {{item.dictLabel}}

```

过滤函数

```
        filterMethod(query) {
            if (query == '') {
                this.options= this.list
            }
            else {
                let result = []
                this.list.forEach(item => {
                    if (item.dictValue.includes(query)) result.push(item)
                })
                this.options= result
            }
        },
```
