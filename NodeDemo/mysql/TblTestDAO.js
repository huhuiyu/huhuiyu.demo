/**
 * TblTest表的操作类
 */
var DBHelper = require("./DBHelper");

function TblTestDAO() {
}

TblTestDAO.insert = function(test, cb) {
	DBHelper.execSql("insert into TblTest(tinfo) values(:tinfo)", test, cb);
};

TblTestDAO.remove = function(test, cb) {
	DBHelper.execSql("delete from TblTest where tid=:tid", test, cb);
};

TblTestDAO.queryAll = function(cb) {
	DBHelper.execSql("select * from TblTest", {}, cb);
};

module.exports = TblTestDAO;
