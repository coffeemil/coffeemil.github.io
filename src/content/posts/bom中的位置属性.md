---
title: "BOM中的位置属性"
description: "clientX 以浏览器左上顶角为原点，定位 x 轴坐标 clientY 以浏览器左上顶角为原点，定位ｙ轴坐标 offsetX 以当前事件的目标对象左上角为原点"
pubDate: 2020-11-24
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
**clientX    以浏览器左上顶角为原点，定位 x 轴坐标
clientY    以浏览器左上顶角为原点，定位ｙ轴坐标
offsetX    以当前事件的目标对象左上角为原点，定位x轴坐标
offsetY    以当前事件的目标对象左上角为原点，定位y轴坐标
pageX    以Document 对象（即文本窗口）左上角为原点，定位x轴坐标
pageY    以Document 对象（即文本窗口）左上角为原点，定位ｙ轴坐标
screenX    计算机屏幕左上角为原点，定位x轴坐标
screenY    计算机屏幕左上角为原点，定位ｙ轴坐标
layerX    最近的绝对定位的父元素（如果没有，则为Document对象）左上角为原点，定位x轴坐标
layerY    最近的绝对定位的父元素（如果没有，则为Document对象）左上角为原点，定位ｙ轴坐标**

**client系列**
clientWidth      可视宽+padding
clientHeight     可视高+padding
clientLeft      border
clientTop      border

**offset系列**
offsetWidth   可视宽+padding+border
offsetHeight  可视高+padding+border
offsetLeft    获取到左边定位父级的距离
offsetTop     获取到顶边定位父级的距离

**scroll系列**
scrollWidth  内容实际宽度
scrollHeight 内容实际高度
scrollLeft   左边被卷去的距离
scrollTop    顶边被卷去的距离

![](https://img2020.cnblogs.com/blog/2169554/202103/2169554-20210326023154373-875285517.png)
