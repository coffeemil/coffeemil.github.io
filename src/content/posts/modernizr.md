---
title: "Modernizr"
description: "Modernizr 官网：https://modernizr.com/ 读音：猫的奶侄儿 Modernizr是一套JavaScript 函式庫，用來偵測瀏覽器是"
pubDate: 2022-05-09
tags: ["Modernizr"]
category: "笔记"
chunibyo: 2
---
**Modernizr**

官网：[https://modernizr.com/](https://modernizr.com/)

读音：猫的奶侄儿

**Modernizr**是一套[JavaScript](https://zh.wikipedia.org/wiki/JavaScript) [函式庫](https://zh.wikipedia.org/wiki/%E5%87%BD%E5%BC%8F%E5%BA%AB)，用來偵測[瀏覽器](https://zh.wikipedia.org/wiki/%E7%80%8F%E8%A6%BD%E5%99%A8)是否支持[HTML5](https://zh.wikipedia.org/wiki/HTML5)與[CSS3](https://zh.wikipedia.org/wiki/CSS#CSS3)等規格。如果浏览器不支持，Modernizr会使用其他的解决方法来进行模拟。

Modernizr會自動執行。不需要呼叫modernizr_init()之類的函式。執行時會建立一個名為Modernizr的元件，裡面包含了一組測試結果是否支援的布林值。舉例來說，如果瀏覽器支援Canvas API，Modernizr.canvas屬性的值就會是true；如果瀏覽器不支援Canvas API，Modernizr.canvas屬性的值就會是false：

```
  if (Modernizr.canvas) {
    // 開始畫圖吧！
  } else {
    // 瀏覽器不支援原生的畫板。
  }
```

Modernizr JavaScript範例：

```

    Modernizr - Javascript Example

      $(document).ready(function() {
        if(Modernizr.websockets) {
          $("#result").html('你的瀏覽器支援Web Sockets');
        } else {
          $("#result").html('你的瀏覽器不支援Web Sockets');
        }
      });

```

Modernizr CSS範例：

```

    Modernizr - CSS Example

      div.wsno, div.wsyes { display: none }
      .no-websockets div.wsno { display: block }
      .websockets div.wsyes { display: block }

      你的瀏覽器不支援WebSockets。

      你的瀏覽器支援WebSockets。

```
