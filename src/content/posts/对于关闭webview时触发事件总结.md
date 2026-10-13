---
title: "对于关闭webview时触发事件总结"
description: "1. 使用sdk自己提供的webview自带的callback 2. 监听 visibilityChange 判断 document.visibilitySta"
pubDate: 2025-12-03
tags: ["WebView"]
category: "移动端"
chunibyo: 2
---
1. 使用sdk自己提供的webview自带的callback

2. 监听 visibilityChange

判断  document.visibilityState   是否为   visible

[https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event)

3.  监听 resume事件 （未实践测试）

当一个 WebView 界面重新回到栈顶时，例如从后台被唤起、锁屏界面恢复、从下一页面回退，会触发页面恢复运行（resume）事件。
