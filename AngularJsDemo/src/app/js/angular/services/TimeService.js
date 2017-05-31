/**
 * 时间服务
 */
(function() {
	var app = angular.module(AppConfig.appname);

	app.factory("TimeService", [ "$log", TimeService ]);

	function TimeService($log) {
		$log.info("TimeService init...");

		var service = {};

		// 格式化时间日期(格式为y年M月d日 h小时m分钟s秒)
		service.formatDate = function(timestamp, format) {
			var date = new Date();
			if (timestamp) {
				date.setTime(timestamp);
			}
			if (!format) { // 默认格式
				format = "y-M-d h:m:s";
			}
			var year = date.getFullYear() + "";
			var month = date.getMonth() + 1;
			month = month < 10 ? "0" + month : month;
			var day = date.getDate();
			day = day < 10 ? "0" + day : day;
			var hour = date.getHours();
			hour = hour < 10 ? "0" + hour : hour + "";
			var minute = date.getMinutes();
			minute = minute < 10 ? "0" + minute : minute + "";
			var seconds = date.getSeconds();
			seconds = seconds < 10 ? "0" + seconds : seconds + "";
			var result = format.replace("y", year);
			result = result.replace("M", month);
			result = result.replace("d", day);
			result = result.replace("h", hour);
			result = result.replace("m", minute);
			result = result.replace("s", seconds);
			return result;
		};

		return service;
	}

})();