---
title: "使用特殊font字体"
description: "1、使用css引入字体文件 目录结构 代码       Document  @font-face { font-family: \"AlibabaPuHuiTiR"
pubDate: 2022-01-03
tags: ["字体"]
category: "笔记"
chunibyo: 2
---
**1、使用css引入字体文件**

目录结构

![](https://img2020.cnblogs.com/blog/2169554/202201/2169554-20220103030316167-315890977.png)

 代码

```

    Document

        @font-face {
            font-family: "AlibabaPuHuiTiR";
            src: url("./font/Alibaba-PuHuiTi-Regular.otf") format("truetype");
        }

        @font-face {
            font-family: "PingFangSC-Regular";
            src: url("./PingFang Regular.otf") format("truetype");
        }

        @font-face {
            font-family: "PingFang SC";
            src: url("./font/PingFang Medium.otf") format("truetype");
        }

    阿里巴巴普惠字体Regular测试

    平方字体Regular测试

    平方字体测试

```

格式

```
internet Explorer 9, Firefox, Opera,Chrome, 和 Safari支持@font-face 规则.
```

但是, Internet Explorer 9 只支持 .eot 类型的字体, Firefox, Chrome, Safari, 和 Opera 支持 .ttf 与.otf 两种类型字体.

```

```

**注意：** Internet Explorer 8 及更早IE版本不支持@font-face 规则.

```

```

**2、特殊情况配置webpack**

```
   // webpack打包字体文件问题
        config.module
            .rule('font-ttf')
  　　　　// .test(/\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/)
            .test(/\.(ttc)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 20000,
                name: 'fonts/[name]-[hash:7].[ext]', //`fonts/[name]-[hash].[ext]`,
                outputPath: 'fonts/',
                esModule: false
            })
            .end();
```

1、此处.ttc文件使用url-loader加载，

2、其他类型字体文件（woff、eot、otf、ttf）webpack内置有loader，使用url-loader加载会破坏字体文件格式，导致浏览器解码失败,字体文件不生效。

** vue-cli默认配置  路径node_modules/@vue/cli-service/lib/config/base.js**

```
    webpackConfig.module
      .rule('fonts')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
        .use('url-loader')
          .loader(require.resolve('url-loader'))
          .options(genUrlLoaderOptions('fonts'))
```
