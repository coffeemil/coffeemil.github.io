---
title: "vue2配置sass全局共享变量"
description: "安装依赖 yarn add sass-loader@8.x vue.config.js module.exports={ css: { loaderOption"
pubDate: 2022-07-25
tags: ["Vue", "Sass"]
category: "前端"
chunibyo: 2
---
安装依赖

```
yarn add  sass-loader@8.x
```

vue.config.js

```
module.exports={　　css: {
　　    loaderOptions: {
 　　     sass: {
     　　   prependData: `@import "@/assets/styles/variables.scss";`
     　　 }
    　　}
  　}}
```
