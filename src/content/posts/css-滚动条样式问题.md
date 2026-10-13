---
title: "[css] 滚动条样式问题"
description: "/** 通用滚动条样式*/ ::-webkit-scrollbar { width: 6px; height: 6px; } ::-webkit-scrollb"
pubDate: 2021-04-26
tags: ["CSS"]
category: "CSS"
chunibyo: 2
---
```

```

```
/** 通用滚动条样式*/

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: #e5e5e5；
}

::-webkit-scrollbar-thumb:hover {
    background-color: #A9A9A9;
}

::-webkit-scrollbar-thumb:active {
    background-color: #787878;
}

* {
    scrollbar-color: #e5e5e5 #f7f7f9;
    /* 滑块颜色  滚动条背景颜色 */
    scrollbar-width: thin;
    /* 滚动条宽度有三种：thin、auto、none */
}
```

```

```

```

```

```
//局部样式.demo是类名 是el-table标签上的自定义class
.demo ::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}
.demo  ::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
```

```

```

```

```
