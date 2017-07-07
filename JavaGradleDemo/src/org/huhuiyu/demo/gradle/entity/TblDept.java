package org.huhuiyu.demo.gradle.entity;

import java.io.Serializable;
import java.util.Date;

public class TblDept implements Serializable {

	private static final long serialVersionUID = -9213152700073280997L;

	private int did;
	private String dname;
	private Date createDate;

	public TblDept() {
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@Override
	public String toString() {
		return String.format("%s,%s,%s", did, dname, createDate);
	}
}
