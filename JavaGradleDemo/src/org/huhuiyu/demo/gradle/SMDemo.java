package org.huhuiyu.demo.gradle;

import org.huhuiyu.demo.gradle.service.TblDeptService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SMDemo {
	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("/context.xml");

		TblDeptService deptService  = context.getBean(TblDeptService.class);
		System.out.println(deptService.queryAll());
		((AbstractApplicationContext) context).close();
	}
}
