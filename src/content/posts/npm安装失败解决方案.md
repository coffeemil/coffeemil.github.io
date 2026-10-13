---
title: "npm安装失败解决方案"
description: "分析过后这个问题是证书过期的意思 考虑到其他的原因 这里给出三个解决方案 一： 清除npm缓存 npm cache clean --force 取消ssl验证："
pubDate: 2024-03-13
tags: ["npm", "环境"]
category: "工程化"
chunibyo: 2
---
分析过后这个问题是证书过期的意思 考虑到其他的原因
这里给出三个解决方案

一：
清除npm缓存
npm cache clean --force
取消ssl验证：
npm config set strict-ssl false
之后再npm install

二：
npm config set registry http://registry.cnpmjs.org
npm config set registry http://registry.npm.taobao.org

三：
# 查看系统时间
date
# 设置系统时间
sudo date -s "YYYY-MM-DD HH:MM:SS"
如果你的时间不对你就设置一下一下你的时间 不会设置去百度

转载至：https://blog.csdn.net/weixin_47121832/article/details/135957354
