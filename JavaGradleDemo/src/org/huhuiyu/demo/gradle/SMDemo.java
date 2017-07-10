package org.huhuiyu.demo.gradle;

import java.util.Random;

import org.huhuiyu.demo.gradle.entity.TblDept;
import org.huhuiyu.demo.gradle.service.TblDeptService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SMDemo {
	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("/context.xml");

		TblDeptService deptService = context.getBean(TblDeptService.class);
		System.out.println(deptService.queryAll());
		System.out.println("++++++++++++++++++++++++++++++++++++++++");
		TblDept dept = new TblDept();
		dept.setDname("dname" + new Random().nextInt());
		deptService.insert(dept);
		System.out.println(dept);
		System.out.println("++++++++++++++++++++++++++++++++++++++++");
		System.out.println(deptService.queryAll());
		deptService.delete(dept);
		System.out.println("++++++++++++++++++++++++++++++++++++++++");
		System.out.println(deptService.queryAll());

		((AbstractApplicationContext) context).close();
	}
}
