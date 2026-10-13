---
title: "img引入base64格式图片"
description: "img引入base64格式图片需要加头部 imageSrc:'data:image/gif;base64,' + base64Blob"
pubDate: 2022-04-28
tags: ["Base64"]
category: "JavaScript"
chunibyo: 2
---
```

![](imageSrc)

```

　img引入base64格式图片需要加头部

```
 imageSrc:'data:image/gif;base64,' + base64Blob
```

<img :src="codeUrl" class="login-code-img" @click="getCode">
