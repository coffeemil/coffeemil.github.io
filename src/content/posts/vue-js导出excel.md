---
title: "[vue] JS导出Excel"
description: "1.安装依赖 npm i -S file-saver xlsx 2. 添加js文件 utils/Export2Excel.js import fs from '"
pubDate: 2021-07-08
tags: ["Vue", "JavaScript", "Excel"]
category: "前端"
chunibyo: 2
---
1.安装依赖

```
npm i -S file-saver xlsx
```

2. 添加js文件  utils/Export2Excel.js

```
import fs from 'file-saver'
import XLSX from 'xlsx'
export default (json, fields, filename = '下载文档.xls') => {

    json.forEach(item => {
        for (let i in item) {
            if (fields.hasOwnProperty(i)) {
                item[fields[i]] = item[i];
            }
            delete item[i]; //删除原先的对象属性
        }
    })

    let sheetName = filename //excel的文件名称
    let wb = XLSX.utils.book_new()  //工作簿对象包含一SheetNames数组，以及一个表对象映射表名称到表对象。XLSX.utils.book_new实用函数创建一个新的工作簿对象。
    let ws = XLSX.utils.json_to_sheet(json, { header: Object.values(fields) }) //将JS对象数组转换为工作表。
    wb.SheetNames.push(sheetName)
    wb.Sheets[sheetName] = ws
    const defaultCellStyle = { font: { name: "Verdana", sz: 13, color: "FF00FF88" }, fill: { fgColor: { rgb: "FFFFAA00" } } };//设置表格的样式
    let wopts = { bookType: 'xls', bookSST: false, type: 'binary', cellStyles: true, defaultCellStyle: defaultCellStyle, showGridLines: false }  //写入的样式
    let wbout = XLSX.write(wb, wopts)
    let blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' })
    fs.saveAs(blob, filename + '.xls')
}

const s2ab = s => {
    if (typeof ArrayBuffer !== 'undefined') {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf
    } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
}
```

 3.使用

```
import json2Excel from '@/utils/xlsx.js'export(data) {
            data = data.map(item => {
                return {
                    'id': item.id+ '',
                    'contNo': item.contNo,
                    'ceNo': item.ceNo,
                }
            })
            let fields = {
                'id': 'id号码',
                'contNo': 'cont号码',
                'ceNo': 'ce号码',
            }
            json2Excel(data, fields, '查询')
}
```
