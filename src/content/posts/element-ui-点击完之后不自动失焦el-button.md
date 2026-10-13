---
title: "[element-ui] 点击完之后不自动失焦el-button"
description: "el-button点击之后不自动失焦,需要手动失焦 export function buttonBlur(ev) { console.log(ev.target"
pubDate: 2021-06-14
tags: ["Element UI"]
category: "前端"
chunibyo: 2
---
el-button点击之后不自动失焦,需要手动失焦

```
export function buttonBlur(ev) {
    console.log(ev.target);
    if (ev.target.nodeName == "SPAN" | ev.target.nodeName == "I") {
        ev.target.parentNode.blur();
    } else {
        ev.target.blur();
    }
}
```

点击button的时候，如果点击到文字（即span）上，这个时候ev.target是span标签，这个时候是没法直接触发其父节点button的blur方法的，也就没法强制button失去焦点。所以需要判断点击的是span还是button。
