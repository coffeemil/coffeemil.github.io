---
title: "[vue-router] hash、history模式底层实现思想"
description: "//history.pushState附加哈希值并不会触发onhashchange var newHash = 'test'; history.replaceS"
pubDate: 2021-03-27
tags: ["Vue", "Vue Router"]
category: "前端"
chunibyo: 2
---
```
//history.pushState附加哈希值并不会触发onhashchange
var newHash = 'test';
history.replaceState(null, null, window.location.pathname + '#' + newHash);
```

## Hash模式底层思想

　　window.onhashchange() 就会监听到哈希值改变

## History模式底层思想

　   可以使用浏览器前进后退功能，使用onpopstate监听浏览器前进后退

```
window.onpopstate = funcRef;
```

```
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // 弹出 "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // 弹出 "location: http://example.com/example.html, state: null
history.go(2);  // 弹出 "location: http://example.com/example.html?page=3, state: {"page":3}
```

## 实现代码

```

    hash模式

    function _click1(){
        location.hash='test'
    }
    addEventListener('hashchange',function(){
        console.log('触发了hashchange');
    })

```

## vue-router配置

```
//mode值 可以使history 可以是hash，默认是hashconst router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

```

```
