---
title: "fnm安装配置使用"
description: "github地址： https://github.com/Schniz/fnm 1. 系统属性新建FNM_DIR变量值C:\\Program Files\\fnm-"
pubDate: 2025-03-04
tags: ["fnm", "环境"]
category: "工程化"
chunibyo: 2
---
github地址：  https://github.com/Schniz/fnm

1. 系统属性新建FNM_DIR变量值C:\Program Files\fnm-windows （替换为自己的Fnm安装路径）

2. 系统属性找到path新建 %FNM_DIR%

 3. 新建start.cmd

```
@echo off
:: for /F will launch a new instance of cmd so we create a guard to prevent an infnite loop
if not defined FNM_AUTORUN_GUARD (
    set "FNM_AUTORUN_GUARD=AutorunGuard"
    FOR /f "tokens=*" %%z IN ('fnm env --use-on-cd') DO CALL %%z
)
```

4. 将start.cmd 放入 %USERPROFILE% 目录

5.打开注册表编辑器，进入计算机\HKEY_CURRENT_USER\SOFTWARE\Microsoft\Command Processor路径下，如果没有对应文件夹，需要手动进行创建。

在 Command Processor 文件夹上右键 -> 新建 -> 字符串值数值名称为 AutoRun，数值数据为start.cmd文件的地址（C:\Users\admin\start.cmd）。

CMD到此可以正常使用(win11测试)

```

```

```
# 查看fnm版本
$ fnm -V
```

```
# 查看所有可下载的Node版本
$ fnm ls-remote
```

```
# 查看官方已发布的所有版本
$ fnm ls-remote | grep v16
```

```
# 安装指定版本的node
$ fnm install 16.12.0

# 安装最新版本的node
fnm install --latest
```

```
# 查看本地安装的node版本
fnm list
```

```
# 安装LTS版本的node
$ fnm install --lts

# 卸载指定版本的node
$ fnm uninstall 16.12.0

# 速度慢的时候，可以切换到国内源
$ fnm install 16 --node-dist-mirror=https://npmmirror.com/mirrors/node
```

```
# 使用指定版本的node
$ fnm use 16.12.0
```

```
# 设置全局默认版本
$ fnm default 16.12.0
# 使用指定版本来执行某个全局命令
$ fnm exec --using=18 node -v

# 在应用目录写入文件，指定特定版本 - 在特定目录自动切换版本，也可以提交到源码库方便协作。
$ echo '16' > .node-version
```
