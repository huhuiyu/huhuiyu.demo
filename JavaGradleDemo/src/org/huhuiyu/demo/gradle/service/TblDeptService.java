package org.huhuiyu.demo.gradle.service;

import java.util.List;

import org.huhuiyu.demo.gradle.entity.TblDept;

public interface TblDeptService {

	List<TblDept> queryAll();

	void insert(TblDept dept);
	
	void delete(TblDept dept);

}