---
title: "Linux服务器搭建git"
description: "环境： 服务器 CentOS6.7 + git（version 1.7.1） 客户端 Windows7 + git（version 2.8.4.windows."
pubDate: 2021-04-19
tags: ["Git", "Linux"]
category: "工程化"
chunibyo: 2
---
**环境：

**

服务器 CentOS6.7 + git（version 1.7.1）

客户端 Windows7 + git（version 2.8.4.windows.1）

**1.安装 Git**

```
#yum install -y git
```

安装完后，查看 Git 版本

```
[root@localhost ~]# git --version
git version 1.7.1
```

**2.如果安装不了，可能是yum地址连接不上，需要修改地址**

```
vim /etc/yum.repos.d/CentOS-Base.repo 将mirrorlist注释掉#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os&infra=$infra#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates&infra=$infra#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras&infra=$infra#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus&infra=$infra#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=contrib&infra=$infra将baseurl注释打开并修改baseurl=https://vault.centos.org/6.7/os/$basearch/baseurl=https://vault.centos.org/6.7/updates/$basearch/baseurl=https://vault.centos.org/6.7/extras/$basearch/baseurl=https://vault.centos.org/6.7/centosplus/$basearch/baseurl=https://vault.centos.org/6.7/contrib/$basearch/
```

**3.服务器端创建 git 用户，用来管理 Git 服务，并为 git 用户设置密码**

```
[root@localhost home]# id git
id: git：无此用户
[root@localhost home]# useradd git
[root@localhost home]# passwd git
```

**4.服务器端创建 Git 仓库**

设置 /home/data/git/gittest.git 为 Git 仓库

然后把 Git 仓库的 owner 修改为 git

```
[root@localhost home]# mkdir -p data/git/gittest.git
[root@localhost home]# git init --bare data/git/gittest.git
Initialized empty Git repository in /home/data/git/gittest.git/
[root@localhost home]# cd data/git/
[root@localhost git]# chown -R git:git gittest.git/
```

**5.客户端创建 SSH 公钥和私钥**

```
$ ssh-keygen -t rsa -C'邮箱'
```

此时 C:\Users\用户名\.ssh 下会多出两个文件 id_rsa 和 id_rsa.pub

id_rsa 是私钥

id_rsa.pub 是公钥

**6.服务器端 Git 打开 RSA 认证**

进入 /etc/ssh 目录，编辑 sshd_config，打开以下三个配置的注释：

```
RSAAuthentication yes
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
```

保存并重启 sshd 服务：

```
[root@localhost ssh]# /etc/rc.d/init.d/sshd restart
```

**7.由 AuthorizedKeysFile 得知公钥的存放路径是 .ssh/authorized_keys，实际上是 $Home/.ssh/authorized_keys，由于管理 Git 服务的用户是 git，所以实际存放公钥的路径是 /home/git/.ssh/authorized_keys**

在 /home/git/ 下创建目录 .ssh

```
[root@localhost git]# pwd
/home/git
[root@localhost git]# mkdir .ssh
[root@localhost git]# ls -a
. .. .bash_logout .bash_profile .bashrc .gnome2 .mozilla .ssh
```

然后把 .ssh 文件夹的 owner 修改为 git

```
[root@localhost git]# chown -R git:git .ssh
[root@localhost git]# ll -a
总用量 32
drwx------. 5 git git 4096 8月 28 20:04 .
drwxr-xr-x. 8 root root 4096 8月 28 19:32 ..
-rw-r--r--. 1 git git 18 10月 16 2014 .bash_logout
-rw-r--r--. 1 git git 176 10月 16 2014 .bash_profile
-rw-r--r--. 1 git git 124 10月 16 2014 .bashrc
drwxr-xr-x. 2 git git 4096 11月 12 2010 .gnome2
drwxr-xr-x. 4 git git 4096 5月 8 12:22 .mozilla
drwxr-xr-x. 2 git git 4096 8月 28 20:08 .ssh
```

**8.将客户端公钥导入服务器端 /home/git/.ssh/authorized_keys 文件**

回到 Git Bash 下，导入文件：

```
$ ssh git@192.168.56.101 'cat >> .ssh/authorized_keys' 需要输入服务器端 git 用户的密码

回到服务器端，查看 .ssh 下是否存在 authorized_keys 文件：

```
[root@localhost git]# cd .ssh
[root@localhost .ssh]# ll
总用量 4
-rw-rw-r--. 1 git git 398 8月 28 20:08 authorized_keys
```

可以查看一下是否是客户端生成的公钥。

**9. 修改 .ssh 目录的权限为 700，修改 .ssh/authorized_keys 文件的权限为 600**

```
[root@localhost git]# chmod 700 .ssh
[root@localhost git]# cd .ssh
[root@localhost .ssh]# chmod 600 authorized_keys
```

**10.客户端再次 clone 远程仓库**

```
$ git clone git@192.168.56.101:/home/data/git/gittest.git
```

**11.禁止 git 用户 ssh 登录服务器**

之前在服务器端创建的 git 用户不允许 ssh 登录服务器

编辑 /etc/passwd

找到：

```
git:x:502:504::/home/git:/bin/bash
```

修改为

```
git:x:502:504::/home/git:/bin/git-shell
```

此时 git 用户可以正常通过 ssh 使用 git，但无法通过 ssh 登录系统。

转载自：[https://www.cnblogs.com/dwj97/p/6559056.html](https://www.cnblogs.com/dwj97/p/6559056.html)
