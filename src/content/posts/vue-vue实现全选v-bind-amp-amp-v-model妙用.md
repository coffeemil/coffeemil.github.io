---
title: "[vue] vue实现全选(v-bind &amp;&amp; v-model妙用)"
description: "v-bind 和 v-model 连用的妙用 实现checkbox全选，取消全选   全选    {{ item.name }} //:value 和 v-mo"
pubDate: 2021-03-31
tags: ["Vue", "JavaScript"]
category: "前端"
chunibyo: 2
---
v-bind  和  v-model 连用的妙用  实现checkbox全选，取消全选

```

    全选

      -
        {{ item.name }}　　　　　//:value 和 v-model 一起使用会自动将选中的值放入数组，vue底层早已实现好，直接调用就可以

    {{ arr }}

export default {
  methods: {},
  computed: {
    all: {
      set(e){
        if(e) this.arr=this.list.map(item=>item.id)
        else this.arr=[]
      },
      get() {
        return this.list.length === this.arr.length;
      },
    },
  },
  data() {
    return {
      arr: [],
      list: [
        {
          id: 1,
          name: "张三",
          age: 18,
        },
        {
          id: 2,
          name: "李四",
          age: 20,
        },
        {
          id: 3,
          name: "李五",
          age: 20,
        },
      ],
    };
  },
};

```
