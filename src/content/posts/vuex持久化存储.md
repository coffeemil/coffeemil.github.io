---
title: "[vuex]持久化存储"
description: "App.vue //cache缓存永久缓存的变量  export default { name: \"App\", created() { this.persist"
pubDate: 2021-06-08
tags: ["Vue", "Vuex"]
category: "前端"
chunibyo: 2
---
App.vue    //cache缓存永久缓存的变量

```

export default {
    name: "App",
    created() {
        this.persisted();
    },
    methods: {//持久化
        persisted() {
            if (sessionStorage.getItem("cache")) {
                this.$store.replaceState(
                    Object.assign(
                        {},
                        this.$store.state,
                        JSON.parse(sessionStorage.getItem("cache"))
                    )
                );
                sessionStorage.removeItem("cache");
            }
            //监听刷新
            addEventListener("beforeunload", () => {
                sessionStorage.setItem(
                    "cache",
                    JSON.stringify(this.$store.state.cache)
                );
            });
        },
    },
};

```
