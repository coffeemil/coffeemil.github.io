---
title: "[vue Debugger] sourcemap"
description: "//浏览器种显示源码 打开 config/index.js 并找到 devtool property。将其更新为： 如果你使用的是 Vue CLI 2，请设置并"
pubDate: 2021-06-08
tags: ["Vue", "调试"]
category: "前端"
chunibyo: 2
---
//浏览器种显示源码

```
打开 config/index.js 并找到 devtool property。将其更新为：

如果你使用的是 Vue CLI 2，请设置并更新 config/index.js 内的 devtool property：

devtool: 'source-map',

如果你使用的是 Vue CLI 3，请设置并更新 vue.config.js 内的 devtool property：

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
```

//debugger配置

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "vuejs: chrome",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "breakOnLoad": true,
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    },
    {
      "type": "firefox",
      "request": "launch",
      "name": "vuejs: firefox",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}/src",
      "pathMappings": [{ "url": "webpack:///src/", "path": "${webRoot}/" }]
    }
  ]
}
```
