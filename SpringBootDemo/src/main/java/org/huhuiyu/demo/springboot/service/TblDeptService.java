package org.huhuiyu.demo.springboot.service;

import java.util.List;

import org.huhuiyu.demo.springboot.entity.TblDept;

public interface TblDeptService {

	List<TblDept> queryAll();

	void insert(TblDept dept);
	
	void delete(TblDept dept);

}