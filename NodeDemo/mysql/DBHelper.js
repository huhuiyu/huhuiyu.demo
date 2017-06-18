/**
 * 数据库操作助手类
 */
var mysql = require("mysql");
var fs = require("fs");
var encoding = "utf-8";
var configFile = "./config.json"
var config;
var pool;

function DBHelper() {
}

DBHelper.loadConfig = function() {
	if (config) {
		return;
	}
	config = fs.readFileSync(configFile, encoding);
	config = JSON.parse(config);
	console.log(config);
};

DBHelper.pool = function() {
	DBHelper.loadConfig();
	if (pool) {
		return pool;
	}
	pool = mysql.createPool(config.mysql);
	return pool;
};

DBHelper.connection = function(cb) {
	var mysqlpool = DBHelper.pool();
	mysqlpool.getConnection(function(err, conn) {
		if (err) {
			cb(err);
			return;
		}
		// 添加命名参数
		conn.config.queryFormat = function(query, values) {
			if (!values) {
				return query;
			}
			return query.replace(/\:(\w+)/g, function(txt, key) {
				if (values.hasOwnProperty(key)) {
					return this.escape(values[key]);
				}
				return txt;
			}.bind(this));
		};
		cb(null, conn);
	});
};

DBHelper.close = function(cb) {
	if (pool) {
		pool.end(cb);
		return;
	}
	cb();
};

DBHelper.execSql = function(sql, params, cb) {
	DBHelper.connection(function(connerr, conn) {
		if (connerr) {
			cb(err);
			return;
		}
		conn.query(sql, params, function(queryerr, rows, cols) {
			conn.release();
			DBHelper.execFun(cb, arguments);
		});

	});
};

DBHelper.execFun = function(fun, args) {
	if (fun && typeof fun === "function") {
		fun.apply(DBHelper, args);
	}
};

DBHelper.test = function() {
	DBHelper.execSql("select now() as 'now'", {}, function(err, rows, cols) {
		DBHelper.close();
		if (err) {
			console.log(error);
		} else {
			console.log(rows);
			console.log("++++++++++++++++++++++");
			console.log(cols);
		}
	});
};

module.exports = DBHelper;