---
title: "[css] 利用border制作三角型"
description: "1、利用border边框的特性，使加boder边框的元素宽高都为0，因为外边设置太宽里面太窄，所以呈现出三角形状。    .square{ width: 0px"
pubDate: 2020-10-21
tags: ["CSS"]
category: "CSS"
chunibyo: 2
---
1、利用border边框的特性，使加boder边框的元素宽高都为0，因为外边设置太宽里面太窄，所以呈现出三角形状。

```

        .square{
            width: 0px;
            height: 0px;
            border: 50px solid transparent;
            border-color: red blue pink yellow;
        }

```

![](https://img2020.cnblogs.com/blog/2169554/202010/2169554-20201021224918945-242200860.png)

2、如果只给上面的边框设置颜色，那么就会呈现出三角形状

```

　　　　{
            border: 50px solid transparent;
            border-top-color: red;
        }

```

![](https://img2020.cnblogs.com/blog/2169554/202010/2169554-20201021225406698-221512438.png)

 3、也可以利用定位白色三角覆盖到红色三角上边制作出三角箭头

```

        .box{
            position: relative;
        }
        .square{
            margin-top: 100px;
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-top-color: red;
        }
        .square::after{
            content: '';
            display: block;
            width: 0;
            height: 0;
            border: 50px solid transparent;
            border-top-color: white;
            position: absolute;
            left:0;
            top: -10px;
        }

```

![](https://img2020.cnblogs.com/blog/2169554/202010/2169554-20201021225820000-321612705.png)
