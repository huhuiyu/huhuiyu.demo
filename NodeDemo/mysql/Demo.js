var TblTestDAO = require("./TblTestDAO");
var DBHelper = require("./DBHelper");

function processError(error) {
	console.log(error);
	DBHelper.close();
}

TblTestDAO.insert({
	"tinfo" : "添加测试信息" + Math.random()
}, function(err, result) {
	if (err) {
		processError(err);
		return;
	}
	console.log("insert======================================");
	console.log(result);
	TblTestDAO.queryAll(function(err, rows, cols) {
		if (err) {
			processError(err);
			return;
		}
		console.log("queryAll======================================");
		console.log(rows);
		console.log(cols);
		if (rows.length > 0) {
			var deleteId = rows[rows.length - 1].tid;
			TblTestDAO.remove({
				"tid" : deleteId
			}, function(err, result) {
				if (err) {
					processError(err);
					return;
				}
				console.log(result);
				TblTestDAO.queryAll(function(err, rows, cols) {
					if (err) {
						processError(err);
						return;
					}
					console.log("queryAll======================================");
					console.log(rows);
					console.log(cols);
					DBHelper.close();
				});
			});
		}
	});
});
