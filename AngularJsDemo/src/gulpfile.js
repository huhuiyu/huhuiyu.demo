//核心插件===============================================
var gulp = require("gulp");
var del = require("del");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");
var cssmin = require("gulp-clean-css");
var concat = require("gulp-concat");
var watch = require("gulp-watch");
var DirInfo = require("./DirInfo");

function errorHandler(error) {
	console.error(error.toString());
	this.emit("end");
}

// 任务定义================================================
/* 清理build和dist目录 */
gulp.task("clean", function() {
	del([ DirInfo.buildDir + "**/*", DirInfo.distDir + "**/*" ], {
		force : true
	});
});

/* js语法检查 */
gulp.task("jshint", function() {
	return gulp.src([ DirInfo.appJsDir + "**/*.js" ]).pipe(jshint()).pipe(jshint.reporter("default"));
});

/* 处理项目js文件 */
gulp.task("app.js", [ "jshint" ], function() {
	var jsfile = [];
	jsfile.push(DirInfo.appJsDir + "config.js");
	jsfile.push(DirInfo.appJsDir + "app.js");
	jsfile.push(DirInfo.appJsDir + "angular/**/*.js");
	jsfile.push(DirInfo.appJsDir + "startup.js");
	return gulp.src(jsfile).pipe(concat("app.min.js")).pipe(uglify()).on("error", errorHandler).pipe(
			gulp.dest(DirInfo.distJsDir));
});

gulp.task("lib.js", function() {
	var jsfile = [];
	jsfile.push(DirInfo.libJsDir + "jquery.min.js");
	jsfile.push(DirInfo.libJsDir + "bootstrap.min.js");
	jsfile.push(DirInfo.libJsDir + "angular.min.js");
	jsfile.push(DirInfo.libJsDir + "angular-*.min.js");
	return gulp.src(jsfile).pipe(concat("lib.min.js")).pipe(gulp.dest(DirInfo.distJsDir));
});

/* 处理项目css文件 */
gulp.task("app.css", function() {
	var cssfile = [];
	cssfile.push(DirInfo.appCssDir + "**/*.css");
	return gulp.src(cssfile).pipe(concat("app.min.css")).pipe(cssmin()).pipe(gulp.dest(DirInfo.distCssDir));
});

gulp.task("lib.css", function() {
	var cssfile = [];
	cssfile.push(DirInfo.libCssDir + "*.css");
	return gulp.src(cssfile).pipe(concat("lib.min.css")).pipe(gulp.dest(DirInfo.distCssDir));
});

/* 处理html */
gulp.task("html", function() {
	return gulp.src([ DirInfo.htmlDir + "**/*" ]).pipe(gulp.dest(DirInfo.distDir));
});

/* 处理images */
gulp.task("images", function() {
	return gulp.src([ DirInfo.imgDir + "**/*" ]).pipe(gulp.dest(DirInfo.distImgDir));
});

/* 处理fonts */
gulp.task("fonts", function() {
	return gulp.src([ DirInfo.fontsDir + "**/*" ]).pipe(gulp.dest(DirInfo.distFontDir));
});

/* 文件变化监测 */
gulp.task("watch", function() {

	watch(DirInfo.appJsDir + "**/*.js", function() {
		gulp.start("app.js");
	});
	watch(DirInfo.appCssDir + "**/*.css", function() {
		gulp.start("app.css");
	});
	watch(DirInfo.htmlDir + "**/*", function() {
		gulp.start("html");
	});
	watch(DirInfo.imgDir + "**/*", function() {
		gulp.start("images");
	});

});

/* 发布项目 */
gulp.task("build", [ "clean", "jshint", "app.js", "lib.js", "app.css", "lib.css", "html", "images", "fonts" ],
		function() {
			console.log("游戏门户网站创建完毕");
		});

/* 默认任务 */
gulp.task("default", [ "clean" ], function() {
	console.log("游戏门户网站");
});
