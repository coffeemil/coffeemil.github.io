---
title: "[vue] 通用下载方法"
description: "const service = axios.create({ // axios中请求配置有baseURL选项，表示请求URL公共部分 baseURL: proc"
pubDate: 2021-06-15
tags: ["Vue", "JavaScript"]
category: "前端"
chunibyo: 2
---
```
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: process.env.VUE_APP_BASE_API,
    // 超时
    timeout: 1000000
})
```

 download.js

```
import axios from 'axios'
import { getToken } from '@/utils/auth'

const mimeMap = {
  xls: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
  base: 'application/x-www-form-urlencoded'
}

const baseUrl = process.env.VUE_APP_BASE_API
export function download(str, params, mime, fileName,method) {
  if (!mime) mime = mimeMap.base
  var url = baseUrl + str
  return axios({
    method: method==='post'?'post':'get',
    url: url,
    data: method==='post'?params:'',
    params:method==='post'?'':params,
    responseType: 'blob',
    headers: { 'Authorization': 'Bearer ' + getToken() }
  }).then(res => {
    resolveBlob(res, mimeMap[mime],fileName)
  })
}
/**
 * 解析blob响应内容并下载
 * @param {*} res blob响应内容
 * @param {String} mimeType MIME类型
 */
export function resolveBlob(res, mimeType,fileName) {
  const aLink = document.createElement('a')
  var blob = new Blob([res.data], { type: mimeType })
  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
  // var patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
  // var contentDisposition = decodeURI(res.headers['content-disposition'])
  // var result = patt.exec(contentDisposition)
  // var fileName = result[1]
  // fileName = fileName.replace(/\"/g, '')

  aLink.href = URL.createObjectURL(blob)
  aLink.setAttribute('download', fileName) // 设置下载文件名称
  document.body.appendChild(aLink)
  aLink.click()
  // document.body.appendChild(aLink)
}
```
