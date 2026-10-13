---
title: "npm包管理工具"
description: "npm npm install -g npm npm仍然提供了一个非常有用的解决方案，支持大量的测试用例。大多数开发人员使用原始npm客户端仍然可以做得很好 c"
pubDate: 2022-03-20
tags: ["npm"]
category: "工程化"
chunibyo: 2
---
**npm**

```
npm install -g npm
```

npm仍然提供了一个非常有用的解决方案，支持大量的测试用例。大多数开发人员使用原始npm客户端仍然可以做得很好

**cnpm**

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm

有些npm安装不上的包可以使用cnpm

**yarn**

```
npm install -g yarn
```

yarn的确定性安装，可以避免很多潜在的问题，相对安全

**pnpm**

```
npm install -g pnpm
```

pnpm运行起来非常的快，超过了npm和yarn
pnpm可能是一些测试用例的更好的选择。例如，它可以在运行大量集成测试并希望尽可能快地安装依赖关系的中小型团队中发挥作用
