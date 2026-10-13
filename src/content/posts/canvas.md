---
title: "canvas"
description: "canvas { border: 1px solid #333; }        //获取画布 let canvas = document.getElemen"
pubDate: 2022-01-12
tags: ["Canvas"]
category: "笔记"
chunibyo: 2
---
```

        canvas {
            border: 1px solid #333;
        }

    //获取画布
    let canvas = document.getElementById("canvas");

    //获取上下文
    let ctx = canvas.getContext("2d");

    ctx.translate(300,200)

    //绘制大圆
    ctx.arc(0,0,200,0,Math.PI*2,false)
    ctx.stroke()

    //绘制上面的线
    ctx.beginPath()
    ctx.moveTo(0,-200)
    ctx.lineTo(0,0)
    ctx.stroke()

    //绘制右边的线
    ctx.beginPath()
    ctx.moveTo(0,0)
    let x=200*Math.cos(30*(Math.PI/180))
    let y=200*Math.sin(30*(Math.PI/180))
    ctx.lineTo(x,y)
    ctx.stroke()

    //绘制左边的线
    ctx.beginPath()
    ctx.moveTo(0,0)
    let x2=200*Math.cos(150*(Math.PI/180))
    let y2=200*Math.sin(150*(Math.PI/180))
    ctx.lineTo(x2,y2)
    ctx.stroke()

```

![](https://img2020.cnblogs.com/blog/2169554/202201/2169554-20220112022244597-188156422.png)
