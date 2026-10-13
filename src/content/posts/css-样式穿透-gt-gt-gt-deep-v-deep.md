---
title: "[css] 样式穿透 &gt;&gt;&gt;  /deep/  ::v-deep"
description: "有些样式无法修改，需要借助于深层样式 >>> 别名 /deep/ ::v-deep 给父元素添加类名借助于深层样式 >>>只可使用于css  .box >>> "
pubDate: 2021-04-21
tags: ["CSS"]
category: "CSS"
chunibyo: 2
---
有些样式无法修改，需要借助于深层样式

>>>    别名  /deep/   ::v-deep

给父元素添加类名借助于深层样式

>>>只可使用于css

```

.box >>> .el-input__inner{ padding:0 }

```

如果有scoped不使用第三方css扩展语言，可以使用/deep/

```

.box /deep/ .el-input__inner{ padding:0 }

```

使用scss或者其他第三方css扩展语言和scoped ，修改element ui样式需要使用 ::v-deep

```
.box ::v-deep .el-input__inner{ padding:0 }

```
