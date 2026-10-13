---
title: "[pdf] 插件实现pdf上传预览、打印"
description: "[vue-pdf] npm连接:https://www.npmjs.com/package/vue-pdf 安装vue-pdf npm i vue-pdf 1."
pubDate: 2021-05-16
tags: ["PDF", "VSCode"]
category: "笔记"
chunibyo: 2
---
[vue-pdf] [npm连接:https://www.npmjs.com/package/vue-pdf](https://www.npmjs.com/package/vue-pdf)

安装vue-pdf

```
npm i vue-pdf
```

1.解决字体问题

　　将node_modules/pdfjs-dist/cmaps文件夹复制到public文件夹下 (找不到的可以看下代码怎么写的，node_modules/vue-pdf/src/CMapReaderFactory.js)

2.上传预览

```

      **
      将文件拖到此处，或*点击上传*

        只能上传jpg/png文件，且不超过500kb

import pdf from "vue-pdf";export default {  components: {    pdf,  },  data() {    return {      pdfURL: "",    };  },  methods: {    fileChange(file){　　　 //拿到上传的文件      let file=file.raw　　　 //转成二进制      let blob=new Blob([file])　　　 //本地创建新的连接地址      this.pdfURL=URL.createObjectURL(blob)　　　 //解决字体问题、第二次加载字体不显示问题      this.pdfURL= pdf.createLoadingTask({       url: this.pdfURL ,       cMapUrl: '/cmaps/',      cMapPacked: true})    }  },};
```

2. 下载预览

3.打印

4.下载

有空更新
