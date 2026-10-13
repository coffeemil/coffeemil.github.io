---
title: "nginx配置视频缓存"
description: "要让浏览器缓存视频，您需要使用Nginx配置HTTP响应标头，告诉浏览器何时可以缓存视频以及缓存多长时间。以下是一个示例配置文件： server { liste"
pubDate: 2023-03-23
tags: ["Nginx", "环境"]
category: "工程化"
chunibyo: 2
---
要让浏览器缓存视频，您需要使用Nginx配置HTTP响应标头，告诉浏览器何时可以缓存视频以及缓存多长时间。以下是一个示例配置文件：

```
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    location /videos/ {
        # Enable caching for videos
        expires 30d;
        add_header Cache-Control "public";

        # Enable byte-range requests for videos
        # This is required for streaming video
        # in certain browsers, such as Safari
        # and Internet Explorer.
        add_header Accept-Ranges bytes;

        # Serve the video file
        try_files $uri /videos/$uri /videos/$uri.mp4 /videos/$uri.mov;
    }
}
```

在上面的示例中，我们使用expires指令来告诉浏览器可以缓存视频的时间。这里设置为30天，这意味着在这段时间内，浏览器将不会重新请求相同的视频文件，而是从本地缓存中获取视频文件。

我们还使用Cache-Control标头指令来确保浏览器了解可以缓存视频。public选项表示视频可以被公共缓存，而不仅仅是私有缓存。

最后，我们还添加了Accept-Ranges标头指令来启用视频的字节范围请求。这是必需的，因为某些浏览器（例如Safari和Internet Explorer）需要使用字节范围请求来流式传输视频。在try_files指令中，我们使用了几个选项来尝试找到视频文件，并使用$uri变量将文件名传递给Nginx。

通过这些配置，您的Nginx服务器现在应该能够允许浏览器缓存视频，并且能够在流式传输视频时与多种浏览器兼容。
