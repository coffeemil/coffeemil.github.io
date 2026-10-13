---
title: "for...in  和 for...of  和 forEach 的区别？"
description: "while遍历 可以使用 break, continue ，return 普通for循环 可以使用 break, continue，不能return forEa"
pubDate: 2020-12-15
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
while遍历

```
可以使用 break, continue ，return
```

普通for循环

```
可以使用 break, continue，不能return
```

forEach 遍历数组

```
可以抛出异常  throw new Error("这个是异常")不能 break，continue，return
```

for...of   遍历数组

```
可以使用 break, continue ，return
```

for...in  遍历对象

```
1.for...in  的键值 会是字符串（String）类型2.循环不仅会遍历数组元素，还会遍历任意其他自定义添加的属性，如，objArr上面包含自定义属性，objArr.name，那这次循环中也会出现此name属性3.某些情况下，上述代码会以随机顺序循环数组4.可以使用 break, continue，不能return
```

总结：

for循环不支持return，while支持

特殊的两个，while什么都可以，forEach什么都不可以。

实际案例

for in 循环 List

```
for(const item in [3,4,5]) console.log(item)
0 1 2
```

for in 循环 List<Map>

```
for(const item in [{a:1,b:2},{b:2}]) console.log(item)
0 1
```

for in 循环 Map

```
for (const item in { a: 1, b: 2 }) { console.log(item) }
a b
```

for of 循环 List

```
for(const item of [3,4,5]) console.log(item)
3 4 5
```

for of 循环 List<Map>

```
for(const item of [{a:1,b:2},{b:2}]) console.log(item)
{a: 1, b: 2}   {b: 2}
```

 for of 循环 Map

```
无法循环
```
