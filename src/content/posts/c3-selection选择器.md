---
title: "[c3] ::selection选择器"
description: "定义和用法 ::selection选择器匹配元素中被用户选中或处于高亮状态的部分。 ::selection只可以应用于少数的CSS属性：color, backg"
pubDate: 2022-04-21
tags: ["CSS"]
category: "CSS"
chunibyo: 2
---
## 定义和用法

::selection选择器匹配元素中被用户选中或处于高亮状态的部分。

::selection只可以应用于少数的CSS属性：color, background, cursor,和outline。

```

p::selection
{
    background: #0aa284;
    color:#fff;
}

这是一些文本.

```

![](https://img2022.cnblogs.com/blog/2169554/202204/2169554-20220421151614072-212364210.png)
