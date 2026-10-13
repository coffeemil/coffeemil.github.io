---
title: "[vue-router] 编程式导航params、query"
description: "两种获取地址参数方法 //query方式 this.$route.query.变量 //动态路由方式 this.$route.params.变量 编程式导航 跳"
pubDate: 2021-03-28
tags: ["Vue", "Vue Router"]
category: "前端"
chunibyo: 2
---
## 两种获取地址参数方法

```
//query方式this.$route.query.变量//动态路由方式this.$route.params.变量
```

## 编程式导航

跳转传参 this.$router.push({

path:'',　　     //可手写地址

name:''           //name需要在路由上面配置name属性才可以使用

params:{}　　//动态路由方式传参，如果使用path方式params会被忽略掉

query:{}　  　//query方式传参

})

//使用动态路由方式需额外配置路由 配置路由格式    /路由/:变量

```
   routes:[{
          path:'cate',
          component:()=>import('@/views/cate'),　　
          name:'cate1',　　　　　 //这是路由上的name属性　　　　　　　　　　　　　　　　　　　　　　　　　alias:'cate2'　　　　　//配置alias 相当于给path加了一个别名　　　　　　　　　　　
        }]
```
