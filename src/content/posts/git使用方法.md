---
title: "Git使用方法"
description: "指令注释 git init 初始化 git config --global user.name \"姓名\" 配置姓名 git config --global us"
pubDate: 2020-11-19
tags: ["Git"]
category: "工程化"
chunibyo: 2
---
| 指令 | 注释 |
| --- | --- |
| git init | 初始化 |
| git config --global user.name "姓名" | 配置姓名 |
| git config --global user.email "邮箱" | 配置邮箱 |
| git add ./ | 添加到待提交 |
| git commit -m "注释" | 提交修改 |
| git reset --hard head~0 | 回退 |
| git reset --hard 版本号 | 回退到指定版本号 |
| git log | 查看日志 |
| git log --oneline | 查看精简日志 |
| git reflog | 查看以前的所有分支、[版本号] |
| git branch 分支名 | 新建分支 |
| git branch | 查看分支 |
| git checkout 分支名 | 切换分支 |
| git merge 分支名 | 合并分支 |
| git push [地址] 分支名 | 上传到git服务器 |
| git pull [地址] 分支名 | 从git服务器下载 |
| git clone [地址] | 从git服务器克隆所有，会新建文件夹覆盖 |
| git branch -d 分支名 | 删除分支 |
| git status | 查看当前文件状态 |
| git remote add [变量名] [远程地址] | 将远程地址添加到变量 |
| git push/pull -u 分支名 | 和远程服务器分支关联 |
| ssh-keygen -t rsa -C "邮箱" | 生成ssh公钥和私钥 |

git remote -v　　　　查看所有变量

git remote remove origin　　删除指定变量

* 合并分支只会修改当前分支

git merge 分支名 --squash   合并代码

git fetch --prune   删除远端不存在的本地分支

git cherry-pick  <hash> <hash> 复制其他分支提交
git cherry-pick  <startHash>^..<endHash>  复制其他分支提交

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

**git 分支(GitFlow模型)**

**Master分支**和**Develop分支**：核心分支

**功能（Feature）分支**：Feature分支要合并到Develop分支；

功能分支是为将来要发布的版本开发新的功能，只要这个功能处于开发状态，这个分支就会存在，最终会合并到Develop分支，或者被取消（比如产品经理改变了主意）。

**发布（Release）分支**：Release分支从Develop分支创建，最终合并到Develop分支和Master分支；

Release分支是从Develop分支创建，是为新产品的发布做准备的，将即将发布的功能打包在这个分支。打完Release分支之后，可以在这个Release分支上测试及修改Bug。最后Release分支要合并到Develop和Master分支上。

**热修复（HotFix）分支**：Hotfix分支从Master分支创建，再合并到Master分支和Develop分支；

热修复分支基于Master分支创建，一般用于线上bug的紧急修复。开发完后需要合并回Master和Develop分支。
