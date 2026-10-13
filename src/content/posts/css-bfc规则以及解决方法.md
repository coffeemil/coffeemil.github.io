---
title: "[css] BFC规则以及解决方法"
description: "一、什么是BFC？ BFC是页面上的独立渲染区域 二、BFC产生规则 1、根标签(html) 2、float的值不为none 3、overflow的值不为vis"
pubDate: 2020-10-26
tags: ["CSS"]
category: "CSS"
chunibyo: 2
---
**一、什么是BFC？**

**BFC是页面上的独立渲染区域**

**二、BFC产生规则**

**1、根标签(html)**

**2、float的值不为none**

**3、overflow的值不为visible**

**4、display的值为inline-block**

**5、position的值为absolute或fixed**

**三、BFC的特性**

**1、属于同一个BFC的两个块元素，垂直margin兄弟关系会折叠（正数以大值为准，有负数正常加减），父子关系会塌陷。**

**2、BFC区域不会与float的标签区域重叠。**

**3、浮动的标签也会被计算BFC高度。**

**4、BFC是独立容器，内部标签不会影响到外部标签。**

**四、可以解决的问题**

**1、外边距折叠/塌陷：**

**　　父子关系在父级加overflow:hidden，父级加border，父级加高度**

**　    弟****关系给其中一个兄弟**设置成独立的BFC。

**2、自适应两栏或三栏布局**

**　　两栏：左边固定高度设置float，右边不设宽设置BFC**

![](http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif)

![](http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif)

```

        .left {
            width: 100px;
            height: 400px;
            background: red;
            float: left;
        }
        .right {
            height: 500px;
            background: yellow;
            overflow: hidden;
        }

```

两栏自适应

**　　三栏：左右固定高度设置float**，中间不设宽设置BFC

![](http://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif)

![](http://images.cnblogs.com/OutliningIndicators/ExpandedBlockStart.gif)

```

        .left {
            float: left;
            height: 500px;
            width: 150px;
            background: red;
        }
        .center {
            height: 600px;
            background: blue;
            overflow: hidden;
        }
        .right {
            float: right;
            height: 500px;
            width: 150px;
            background: yellow;
        }

```

三栏自适应

**3、防止文字环绕
**

**　　给文字设置成BFC可以解决文字环绕**

**4、清除浮动**

**　　给父级设置成BFC可以清除浮动，⑤浮动的**标签也会被计算BFC高度。

**边距塌陷问题**

**　　父子元素**塌陷：子元素找不到父元素的border或者padding ; 给父元素生成bfc

**　　兄弟元素折叠：给其中一个元素设置成bfc(*给子元素分别再套一层div并设置overflow**)；只给一个盒子设置margin

** **
