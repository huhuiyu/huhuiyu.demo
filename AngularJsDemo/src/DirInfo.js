function DirInfo() {
}

DirInfo.baseDir = "../"; // 基础目录
DirInfo.srcDir = DirInfo.baseDir + "src/"; // 源代码目录
DirInfo.appDir = DirInfo.srcDir + "app/"; // 项目源代码目录
DirInfo.libDir = DirInfo.srcDir + "lib/"; // 项目库目录

DirInfo.appJsDir = DirInfo.appDir + "js/"; // 项目js源代码目录
DirInfo.libJsDir = DirInfo.libDir + "js/";// 项目js库目录

DirInfo.appCssDir = DirInfo.appDir + "css/";// 项目css源代码目录
DirInfo.libCssDir = DirInfo.libDir + "css/"; // 项目css库目录

DirInfo.fontsDir = DirInfo.libDir + "fonts/"; // 项目字体库目录
DirInfo.imgDir = DirInfo.appDir + "images/"; // 项目图片目录
DirInfo.htmlDir = DirInfo.appDir + "html/"; // 项目html源代码目录

DirInfo.buildDir = DirInfo.baseDir + "build/"; // 中途构建目录
DirInfo.distDir = DirInfo.baseDir + "dist/"; // 发布目录
DirInfo.distJsDir = DirInfo.distDir + "js/"; // js发布目录
DirInfo.distCssDir = DirInfo.distDir + "css/"; // css发布目录
DirInfo.distImgDir = DirInfo.distDir + "images/"; // 图片发布目录
DirInfo.distFontDir = DirInfo.distDir + "fonts/"; // 字体发布目录

module.exports = DirInfo;