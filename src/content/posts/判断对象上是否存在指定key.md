---
title: "判断对象上是否存在指定key"
description: "'CSS' in window //返回结果是true或者false 来看下面案例 检查pepole对象上是否存在名为css键 let pepole={css:"
pubDate: 2022-05-08
tags: ["JavaScript"]
category: "笔记"
chunibyo: 2
---
```
'CSS' in window   //返回结果是true或者false
```

来看下面案例

检查pepole对象上是否存在名为css键

```
let pepole={css:function(){console.log('this is css')}};
'css' in pepole    // true
```

检查pepole对象上是否存在名为css1键

```
let pepole={css:function(){console.log('this is css')}};
'css1' in pepole    // false
```
