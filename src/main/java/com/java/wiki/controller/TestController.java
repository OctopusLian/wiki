package com.java.wiki.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // 返回字符串
//@Controller  //返回页面
public class TestController {

    @Value("${test.hello:TEST}")
    private String testHello;

    @RequestMapping("/hello")  // 支持所有请求方式
    public String hello() {
        return "hello world"+testHello;
    }
}
