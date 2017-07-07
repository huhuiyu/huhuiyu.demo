package org.huhuiyu.demo.gradle.entity;

import java.io.Serializable;

public class TblEmployee implements Serializable {

	private static final long serialVersionUID = 8129835775010051036L;
	private int eid;
	private String ename;
	private int did;

	public TblEmployee() {
	}

	public int getEid() {
		return eid;
	}

	public void setEid(int eid) {
		this.eid = eid;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	@Override
	public String toString() {
		return String.format("%s,%s,%s", eid, ename, did);
	}

}
