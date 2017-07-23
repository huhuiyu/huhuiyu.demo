package org.huhuiyu.demo.springboot.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/demo")
public class DemoController {

	@RequestMapping("/echo/{name}/{info}")
	public String echo(@PathVariable(name = "name") String name, @PathVariable(name = "info") String info) {
		return name + "输入的信息是；" + info;
	}
}
