package org.huhuiyu.demo.springboot.controller;

import org.springframework.web.bind.annotation.RestController;
import org.huhuiyu.demo.springboot.service.TblDeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {
	@Autowired
	private TblDeptService deptService;

	@RequestMapping("/")
	public String index() {
		return "SpringBoot你好!";
	}

	@RequestMapping("/mybatis")
	public String mybatis() {
		return deptService.queryAll().toString();
	}

}
