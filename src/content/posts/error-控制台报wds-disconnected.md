---
title: "[error] 控制台报[WDS] Disconnected！"
description: "不影响代码运行 1. 问题：Vue运行项目时，控制台报 [WDS] Disconnected！不影响代码运行。 2. 解决方法：将config文件夹下的inde"
pubDate: 2021-08-03
tags: ["Webpack"]
category: "笔记"
chunibyo: 2
---
```
不影响代码运行1. 问题：Vue运行项目时，控制台报 [WDS] Disconnected！不影响代码运行。
2. 解决方法：将config文件夹下的index.js中的host: '0.0.0.0',改为host: '127.0.0.1',重新启动，刷新页面或者重新启动即可
3. 解释：因为用了全局代理软件，所以要把host:改成127.0.0.1

附：全局代理，连接成功以后，您本机的IP地址全部改变了（即是代理地区的IP）
局部代理，只是针对浏览器或软件改变，查询到的ip还是本地的，但能正常访问国外的网页（注：局部代理只多国外线路有用）
————————————————
原文链接：https://blog.csdn.net/qq_42724424/article/details/116210904
```
