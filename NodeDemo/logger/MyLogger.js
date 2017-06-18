var logger = require("./LoggerFactory").logger();
var fileLogger = require("./LoggerFactory").fileLogger();
var errFileLogger = require("./LoggerFactory").errFileLogger();

//自定义Logger类，可以过滤是否使用文件输出，提供输出等级TRACE,DEBUG,INFO,ERROR，
//INFO,ERROR等级会输出到文件
function MyLogger() {
}
MyLogger.trace = function () {
    logger.trace.apply(logger, arguments);
};
MyLogger.debug = function () {
    logger.debug.apply(logger, arguments);
};
MyLogger.info = function () {
    logger.info.apply(logger, arguments);
    fileLogger.info.apply(fileLogger, arguments);
};
MyLogger.error = function () {
    logger.error.apply(logger, arguments);
    errFileLogger.error.apply(errFileLogger, arguments);
};

module.exports = MyLogger;