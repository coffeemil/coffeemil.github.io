---
title: "[vue]防抖(debounce) 和 节流(throttling)"
description: "debounce.js import Vue from \"vue\" Vue.directive(\"debounce\", { inserted: function"
pubDate: 2021-11-15
tags: ["Vue", "JavaScript"]
category: "前端"
chunibyo: 2
---
```
debounce.js
```

```
import Vue from "vue"
Vue.directive("debounce", {
    inserted: function (el, binding) {
        let timer
        el.addEventListener('click', () => {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            binding.value()
          }, 1000)
        })
      },
})
```
