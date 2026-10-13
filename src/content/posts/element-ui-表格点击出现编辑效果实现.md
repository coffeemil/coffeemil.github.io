---
title: "[element-ui] 表格点击出现编辑效果实现"
description: "效果图 单击之后出现编辑效果 部分实现代码        {{ scope.row.sharePremRate | persentSign }}%       "
pubDate: 2021-05-24
tags: ["Element UI"]
category: "前端"
chunibyo: 2
---
效果图

![](https://img2020.cnblogs.com/blog/2169554/202105/2169554-20210524001747713-1804471193.png)

单击之后出现编辑效果

![](https://img2020.cnblogs.com/blog/2169554/202105/2169554-20210524001754873-1267747006.png)

部分实现代码

```
　　                                                                                                  {{ scope.row.sharePremRate | persentSign }}%

                                    　　

```

逻辑部分

```
data(){　　return{　　　　dataSet1:[],　　　　dataSet2:[],　　　　dataSet3:[],　　　　dataSet4:[],　　　　dataSet5:[],　　　　dataSet6:[],　　　　dataSet7:[],　　　　currentEditRow: {},　　}},methods:{//单击编辑效果
editCtrl(row, filedNmae,data) {　　　 this.currentEditRow.isEdit=''
      this.currentEditRow = row;
      row.isEdit = filedNmae;//这里要强制刷新所有el-tabel组件
    for(let i=1;i

```

```

<div v-loading='loading' class="app-container pb50" @mousedown="showEditTable(false)">

```

                 {{ row.alloSi | comdifyFormat }}

```

```

```

```

```

```

```

```
        //单击触发编辑表格
        showEditTable(boolean, row, cell) {
            //判断什么状态可以编辑
            if (!this.isShow('create')) return

            if (boolean) {
                //取消之前的编辑状态
                if (this.enableEdit.cell) {
                    this.enableEdit.row[this.enableEdit.cell] = false
                }
                //激活编辑状态
                this.enableEdit.row = row
                this.enableEdit.cell = cell
                row[cell] = true
            } else {
                //取消之前的编辑状态
                this.enableEdit.row[this.enableEdit.cell] = false
            }
            this.$forceUpdate()
        },
```
