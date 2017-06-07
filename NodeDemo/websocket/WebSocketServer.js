/**
 * 基本的WebSocket服务演示
 */
const WebSocket = require("ws");
// 创建websocket服务，端口30001
const wss = new WebSocket.Server({
	port : 30001
});

// 监听事件
wss.on("connection", function connection(ws, req) {
	var ip = req.connection.remoteAddress;
	console.log("欢迎来自" + ip + "用户");
	ws.send("欢迎来自" + ip + "用户");
	
	ws.on("message", function incoming(message) {
		ws.send("server echo:" + message);
	});

	ws.on("close", function close() {
		console.log(ip + "已经断开");
	});
});
