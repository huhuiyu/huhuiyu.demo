var gulp = require("gulp");
var fs = require("fs");
var watch = require("gulp-watch");

gulp.task("default", function() {
	console.log("hello gulp...");
});

gulp.task("watch", function() {
	var mywatch = watch("watch/**/*");
	mywatch.on("change", function(event) {
		console.log("修改了文件：", event);
		fs.stat(event, function(err, stats) {
			if (err) {
				console.log(err);
				return;
			}
			console.log("修改后的大小：", stats.size);
		});
	});
	mywatch.on("add", function(event) {
		console.log("添加了新文件:", event);
	});
	mywatch.on("unlink", function(event) {
		console.log("删除了文件：", event);
	});
});

gulp.task("gwatch", function() {
	var mywatch = gulp.watch("watch/**/*");
	mywatch.on("change", function(event) {
		console.log(event.type + "==>" + event.path);
	});
	return mywatch;
});
