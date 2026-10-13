---
title: "[vue] v-model等价于:value加@input???"
description: "v-mode l等价于 :value 加 @input //父组件    {{str}}    import Son from \"./components/so"
pubDate: 2021-03-31
tags: ["Vue"]
category: "前端"
chunibyo: 2
---
v-mode   l等价于   :value  加   @input

```
//父组件

     {{str}}

import Son from "./components/son";
export default {
  name: "App",
  components: {
    Son
  },
  data() {
    return {
      str: "传到子组件的input里面去",
    };
  },
  methods: {},
};

```
//子组件

export default {
  props: ["name"],
};

```

* 注意点1    没有value属性依旧可以传到子组件内

![](https://img2020.cnblogs.com/blog/2169554/202103/2169554-20210331032938858-1840194595.png)

* 注意点2    父组件内没有@input方法，修改input内容，依旧可以使用$emit触发，并且第二个参数自动绑定到value上面

![](https://img2020.cnblogs.com/blog/2169554/202103/2169554-20210331033342449-1996332153.png)
