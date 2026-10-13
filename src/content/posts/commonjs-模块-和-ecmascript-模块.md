---
title: "CommonJS 模块 和 ECMAScript 模块"
description: "CommonJS 模块是为 Node.js 打包 JavaScript 代码的原始方式。Node.js 还支持浏览器和其他 JavaScript 运行时使用的 "
pubDate: 2026-01-09
tags: ["JavaScript"]
category: "JavaScript"
chunibyo: 2
---
**CommonJS 模块是为 Node.js 打包 JavaScript 代码的原始方式。**Node.js 还支持浏览器和其他 JavaScript 运行时使用的 [ECMAScript 模块](https://nodejs.cn/api/esm.html) 标准。

```
const circle = require('./circle.js');
```

```
circle.js
```

```
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
```

square.js

```
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};
```

**ECMAScript 模块是 官方标准格式，用于打包 JavaScript 代码以供重用。模块使用各种 import 和 export 语句定义。**

export { addTwo }; 拷贝
以下是 ES 模块从 addTwo.mjs 导入函数的示例：

// app.mjs
import { addTwo } from './addTwo.mjs';

// Prints: 6
console.log(addTwo(4)); 拷贝
Node.js 完全支持当前指定的 ECMAScript 模块，并提供它们与其原始模块格式 CommonJS 之间的互操作性。
