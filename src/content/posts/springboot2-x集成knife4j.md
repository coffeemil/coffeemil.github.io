---
title: "SpringBoot2.x集成knife4j"
description: "什么是knife4j，为什么要使用knife4j? 简单说knife4j就swagger的升级版API文档的一个框架,但是用起来比swagger方便多了，UI更"
pubDate: 2021-08-08
tags: ["Spring Boot", "Knife4j"]
category: "后端"
chunibyo: 2
---
什么是knife4j，为什么要使用knife4j?
简单说knife4j就swagger的升级版API文档的一个框架,但是用起来比swagger方便多了，UI更加丰富。

如何使用knife4j?
简略的说一下，基础环境搭建可参考：SpringBoot2.x集成Swagger2

这里我说一下主要配置区别：

环境说明：

新增 knife4j.version：2.0.2

### 1.导入pom依赖

```

    com.github.xiaoymin
    knife4j-spring-boot-starter
    3.0.3

```

### 2.knife4j配置类基本与swagger配置类一致

```
@Configuration
@EnableSwagger2
@EnableKnife4j
@Import(BeanValidatorPluginsConfiguration.class)
public class SwaggerConfig {
    @Bean(value = "createRestApi")
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(new ApiInfoBuilder()
                        //标题
                        .title("项目API接口")
                        //版本信息
                        .version("1.0")
                        //描述消息
                        .description("接口列表")
                        .contact(new Contact("项目API接口","localhost:8801/demo/doc.html","xxxx@qq.com"))
                        .license("mamba")
//                        .licenseUrl("http://www.xxxx.com/")
                        .build())
                //最终调用接口后会和paths拼接在一起
                .pathMapping("/")
                .select()
                //包路径
                .apis(RequestHandlerSelectors.basePackage("com.rd.ml.cli.swagger.controller"))
                //过滤的接口
                .paths(PathSelectors.any())
                .build();
    }
}
```

.yml配置

```
# swagger开启
swagger:
  enable: true
# 是否停用Knife4j文档
knife4j:
  production: false
```

### 3. knife4j用法与swagger基本一致，访问根目录/doc.html

http://xxxxxx/doc.html

版权声明：本文为CSDN博主「＂凉凉_____」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_44739349/article/details/105839318
