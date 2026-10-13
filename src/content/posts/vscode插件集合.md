---
title: "VSCode插件集合"
description: "1.Chinese (Simplified) Language Pack for Visual Studio Code //中文汉化 2.JS-CSS-HTML"
pubDate: 2021-06-05
tags: ["VSCode"]
category: "工程化"
chunibyo: 2
---
1.Chinese (Simplified) Language Pack for Visual Studio Code      //中文汉化

2.JS-CSS-HTML Formatter  //格式化插件   Ctrl+Shit+P  选择 Configure Display Language   zh-cn

3.vscode-icons  //vscode文件图标主题    文件--首选项--文件图标主题切换

4.Vetur  //vue语法高亮

//格式化不换行   文件--首选项--设置---扩展---Vetur---Format：Default Formatter Options ----在settings.json中编辑  替换代码

```
    "vetur.format.defaultFormatter.html": "js-beautify-html", // html 不换行
    "vetur.format.defaultFormatter.js": "vscode-typescript", // js 不换行
    "emmet.includeLanguages": {
        "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "explorer.confirmDelete": false,
    "vetur.format.options.tabSize": 4,
    "vetur.format.defaultFormatterOptions": {

        "js-beautify-html": {
            "wrap_attributes": "auto"
        }
    },
```

5.Numbered Bookmarks //数字书签  shift+ctrl+num 设置   ctrl+num 跳转

6.JSON formatter   //JSON格式化插件

7. Prettier - Code formatter  // 保存自动格式化代码

```
//新建 .prettierrc文件
{
  “semi” : false,    // 双引号"变单引号'
  "singleQuote" : true,   // 后面不加分号;
}
```

8.ESLint   // ESLint语法检查

```
// .eslintrc.jsrules:{
   "space-before-function-paren" : 0   // 去掉ESLint 方法名和小括号空格检查 data()
}"eslint.format.enable": true, //开启eslint格式化"[vue]": {    // "editor.defaultFormatter": "octref.vetur",　　　　　　// 启用vetur格式化vue       "editor.defaultFormatter":"dbaeumer.vscode-eslint"  // 启用eslint格式化vue }
```

 9.svn   //svn插件，settings.json

```
 "svn.path": "C://Program Files//TortoiseSVN",
```

ctrl+shift+p   输svn  选择  svn checkout  克隆项目
