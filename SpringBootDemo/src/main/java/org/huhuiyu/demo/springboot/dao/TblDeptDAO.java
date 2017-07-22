package org.huhuiyu.demo.springboot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.huhuiyu.demo.springboot.entity.TblDept;

@Mapper
public interface TblDeptDAO {

	List<TblDept> queryAll();

	void insert(TblDept dept);

	void delete(TblDept dept);
}