---
title: "[vue/cli4] 目录public和asset区别"
description: "public 下的资源不会经过 webpack 解析处理，准确的说应该是直接给你放进最后的 dist 目录下。项目使用应该是 %public% 这种形式 ass"
pubDate: 2021-07-18
tags: ["Vue", "Vue CLI"]
category: "前端"
chunibyo: 2
---
public 下的资源不会经过 webpack 解析处理，准确的说应该是直接给你放进最后的 dist 目录下。项目使用应该是 %public% 这种形式

asset 目录下的会经过 webpack 的 loader 解析，应该是 url-loader，这个 loader 加载完图片后会把一下小的图片(默认是小于 8kb)转换成 base64 的字符串打包进 js 代码处。这样的好处是减少一些图片请求的链接，减少 HTTP 请求数。大于这个尺寸的仍然原封打包进 static目录下。一般这个目录的图片，通过 import 使用
