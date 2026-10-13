---
title: "微信小程序JSAPI支付"
description: "微信小程序： 认证 获取appid 生成secret 开通支付 关联商户号 微信商户号： 认证 获取商户mch_id 设置商户API密钥(mch_key) 绑定"
pubDate: 2021-03-31
tags: ["JavaScript", "小程序", "微信", "支付"]
category: "JavaScript"
chunibyo: 2
---
微信小程序：   认证　　获取appid　　生成secret　　开通支付　　关联商户号

微信商户号：　认证　　获取商户mch_id　　设置商户API密钥(mch_key)　　绑定appid　　配置支付接口

```
wx.login  拿到 code
把code传给后端......   后端返回openid

用openid传给后端请求支付接口......success:function(res){　　wx.requestPayment({　　 //5个必传参数
    'timeStamp':res.data.timeStap,
    'nonceStr':res.data.nonceStr,
    'package':res.data.package,
    'signType':res.data.signType,
    'paySign':res.data.paySign,
    success:function(payRes){
         支付成功
    },
    fail:fuction(payRes){
        支付失败
    }
　　})}
```
