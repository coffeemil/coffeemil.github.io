---
title: "nginx 常用指令"
description: "1.启动 # ./sbin/nginx -c ./nginx/conf/nginx.conf 2.停止 ./sbin/nginx -s quit 正常停止 ./"
pubDate: 2021-08-19
tags: ["Nginx", "Vue"]
category: "工程化"
chunibyo: 2
---
1.启动

```
# ./sbin/nginx -c  ./nginx/conf/nginx.conf
```

2.停止

```
./sbin/nginx -s quit　 正常停止
```

```
./sbin/nginx -s stop  强制停止
```

3.重启

```
./sbin/nginx -s reload
```
