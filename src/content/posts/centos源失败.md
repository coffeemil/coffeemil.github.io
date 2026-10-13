---
title: "centos源失败"
description: "sed -i \"s|enabled=1|enabled=0|g\" /etc/yum/pluginconf.d/fastestmirror.conf mv /et"
pubDate: 2021-12-26
tags: ["Linux"]
category: "工程化"
chunibyo: 2
---
```
sed -i "s|enabled=1|enabled=0|g" /etc/yum/pluginconf.d/fastestmirror.conf
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
curl -o /etc/yum.repos.d/CentOS-Base.repo https://www.xmpan.com/Centos-6-Vault-Aliyun.repo
yum clean all
yum makecache
```
