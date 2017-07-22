package org.huhuiyu.demo.springboot.service.mybatis;

import java.util.List;

import org.huhuiyu.demo.springboot.dao.TblDeptDAO;
import org.huhuiyu.demo.springboot.entity.TblDept;
import org.huhuiyu.demo.springboot.service.TblDeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TblDeptServiceImpl implements TblDeptService {
	@Autowired
	private TblDeptDAO deptDao;

	@Override
	public List<TblDept> queryAll() {
		return deptDao.queryAll();
	}

	@Override
	public void insert(TblDept dept) {
		deptDao.insert(dept);
	}

	@Override
	public void delete(TblDept dept) {
		deptDao.delete(dept);
	}
}
