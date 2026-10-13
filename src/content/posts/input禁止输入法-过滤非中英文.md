---
title: "Input禁止输入法，过滤非中英文"
description: "借助API compositionstart 文本合成系统如 input method editor（即输入法编辑器）开始新的输入合成时会触发 composit"
pubDate: 2022-10-18
tags: ["移动端"]
category: "笔记"
chunibyo: 2
---
借助API

[compositionstart](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionstart_event)
文本合成系统如 input method editor（即输入法编辑器）开始新的输入合成时会触发 compositionstart 事件。
[compositionend](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionend_event)
当文本段落的组成完成或取消时，compositionend 事件将被触发(具有特殊字符的触发，需要一系列键和其他输入，如语音识别或移动中的字词建议)。
[compositionupdate](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/compositionupdate_event)
事件触发于字符被输入到一段文字的时候（这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）

Vue自定义指令----过滤掉非英文数字

```
import Vue from 'vue'

let element = null
let lock = false

vue.directive(' Alphabet', {
    bind: function (el) {
        element = el.queryselector('input')
        element.addEventListener('compositionstart', handleCompositionstart)
        element.addEventListener('compositionend', handleCompositionend)
        element.addEventListener('keyyup', handleKeyup)
    }
})
//监听非直接输入开始
function handleCompositionstart() {
    lock = true
}
//监听非直接输入结束
function handleCompositionend() {
    lock = false
    element.value = replaceSpace(element.value)
}
//键盘按下直接输入
function handleKeyup() {
    if (!lock) element.value = replacespace(element.value)
}
//过滤掉非字母数字
function replacespace(value) {
    return value.replace(/[^A-Za-z0-9]/g, '')
}
```
