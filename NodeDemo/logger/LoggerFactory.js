var log4js = require("log4js");
var fs = require("fs");
var encoding = "utf-8";
var isInit = false;
var logsDir = __dirname + "/logs/";
var configFile = __dirname + "/LogConfig.json";
var nodejsLogger;
var nodejsfileLogger;
var nodejserrfileLogger;
var isDebugEnable = false;

function LoggerFactory() {
}

/**
 * 初始化日志的方法
 */
LoggerFactory.init = function () {
    if (isInit) {
        return;
    }
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    // 初始化日志
    log4js.configure({
        appenders: [{
                // 控制台输出
                type: "console", category: "nodejs"
            }, {
                // 文件输出
                type: "dateFile",
                absolute: true,
                filename: logsDir + "log",
                maxLogSize: 10 * 1024 * 1024,
                pattern: "_yyyy-MM-dd.log",
                alwaysIncludePattern: true,
                category: "nodejsfile"
            }, {
                // 异常输出
                type: "dateFile",
                absolute: true,
                filename: logsDir + "error",
                maxLogSize: 10 * 1024 * 1024,
                pattern: "_yyyy-MM-dd.log",
                alwaysIncludePattern: true,
                category: "nodejserrfile"
            }]
    });
    isInit = true;
    //初始化日志对象
    nodejsLogger = log4js.getLogger("nodejs");
    nodejsfileLogger = log4js.getLogger("nodejsfile");
    nodejserrfileLogger = log4js.getLogger("nodejserrfile");
    //初始化日志等级
    nodejsLogger.setLevel("DEBUG");
    nodejsfileLogger.setLevel("INFO");
    nodejserrfileLogger.setLevel("ERROR");
    //开启配置文件监测
    LoggerFactory.watchConfig();
};

LoggerFactory.watchConfig = function () {
    LoggerFactory.load(configFile, function (configInfo) {
        try {
            console.log("LoggerFactory.watchConfig start");
            //通过配置文件加载输出等级
            var config = JSON.parse(configInfo);
            isDebugEnable = (config.nodejs === "DEBUG" || config.nodejs === "TRACE");
            nodejsLogger.setLevel(config.nodejs);
            nodejsfileLogger.setLevel(config.nodejsfile);
            nodejserrfileLogger.setLevel(config.nodejserrfile);
            console.log("LoggerFactory.watchConfig end");
        } catch (ex) {
            console.log("LoggerFactory.watchConfig error:", ex);
        }
    });
};

LoggerFactory.load = function (file, callback) {
    fs.watchFile(file, function (curr, prev) { //检测文件变化
        var fileinfo = LoggerFactory.loadFile(file);
        callback(fileinfo, curr, prev);
    });
    return LoggerFactory.loadFile(file); //立即返回文件内容
};

LoggerFactory.loadFile = function (file) {
    try {
        var fileinfo = fs.readFileSync(file, encoding);
        return fileinfo;
    } catch (ex) {
        return "{}";
    }
}

/**
 * 获取日志的静态方法,日志等级包含(调用对应的小写方法)：TRACE DEBUG INFO WARN ERROR FATAL
 * 
 * @returns 日志对象
 */
LoggerFactory.getLogger = function () {
    LoggerFactory.init();
    return nodejsLogger;
};

LoggerFactory.getFileLogger = function () {
    LoggerFactory.init();
    return nodejsfileLogger;
};

LoggerFactory.getErrFileLogger = function () {
    LoggerFactory.init();
    return nodejserrfileLogger;
};
LoggerFactory.isDebug = function () {
    return isDebugEnable;
};

exports.logger = LoggerFactory.getLogger;
exports.fileLogger = LoggerFactory.getFileLogger;
exports.errFileLogger = LoggerFactory.getErrFileLogger;
exports.isDebug = LoggerFactory.isDebug;