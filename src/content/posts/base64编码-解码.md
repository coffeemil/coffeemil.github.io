---
title: "base64编码/解码"
description: "base64编码/解码 var str = \"RUNOOB\"; var enc = window.btoa(str); //编码 var dec = windo"
pubDate: 2022-07-14
tags: ["Base64", "JavaScript"]
category: "JavaScript"
chunibyo: 2
---
base64编码/解码

```
var str = "RUNOOB";
var enc = window.btoa(str); //编码
var dec = window.atob(enc); //解码

var res = "编码字符串为: " + enc + "
" + "解码后字符串为: " + dec;
```
