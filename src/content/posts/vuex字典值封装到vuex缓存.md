---
title: "[vuex]字典值封装到vuex缓存"
description: "store/modules/cache.js import { listData } from '@/api/system/dict/data.js' cons"
pubDate: 2021-06-08
tags: ["Vue", "Vuex", "环境"]
category: "前端"
chunibyo: 2
---
store/modules/cache.js

```
import { listData } from '@/api/system/dict/data.js'

const state = {
    dictCache: {},
}
const mutations = {
    UPDATE_DICTS(state, payload) {
        state.dictCache = payload
    }
}
const actions = {
    getDictCache({ commit }) {
        listData().then((res => {
            if (res.code == 200) {
                console.log(res.rows);
                let tempCache = {}
                res.rows.forEach(item => {
                    if (tempCache[item.dictType]) {
                        tempCache[item.dictType].push(item)
                    } else {
                        tempCache[item.dictType] = [{...item }]
                    }
                })
                commit('UPDATE_DICTS', tempCache)
            }
        }))
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced: true
}
```

store/modules/index.js

```
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import cache from './modules/cache'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cache
    },
    getters
})

export default store
```

store/modules/getters.js

```
const getters = {
    cache: state => state.cache,
}
export default getters
```

App.vue

```
created() {
  this.$store.dispatch("cache/getDictCache");
},
```

使用方法

```
    computed: {
        ...mapGetters(["cache"]),
    },
    methods:{
       console.log(this.cache)
    }
```
