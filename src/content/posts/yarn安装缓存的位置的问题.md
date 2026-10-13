---
title: "yarn安装缓存的位置的问题"
description: "yarn和npm一样，默认安装的全局包和缓存都在C盘里： npm的cache默认在：C:\\Users\\用户\\AppData\\Roaming\\npm yarn的c"
pubDate: 2022-07-30
tags: ["Yarn", "环境"]
category: "工程化"
chunibyo: 2
---
yarn和npm一样，默认安装的全局包和缓存都在C盘里：
npm的cache默认在：C:\Users\用户\AppData\Roaming\npm
yarn的cache默认在：C:\Users\用户\AppData\Local\Yarn

```
yarn config  set global-folder "新缓存路径"
yarn config set cache-folder "新缓存路径"
```
