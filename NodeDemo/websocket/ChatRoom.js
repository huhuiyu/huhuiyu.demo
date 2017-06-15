/**
 * WebSocket聊天室
 */
var HashMap = require("./HashMap");
const WebSocket = require("ws");
const wss = new WebSocket.Server({
	port : 30002
});
var id = 100000000;
var sm = new HashMap();

function sendToAll(info) {
	var sockets = sm.values();
	console.log(sockets);
	for (var i = 0; i < sockets.length; i++) {
		sockets[i].socket.send(info);
	}
}

// 监听事件
wss.on("connection", function connection(ws, req) {
	var key = (id++);
	var username = "游客" + key;
	console.log("key:", key, "-username:", username);
	sm.put(key, {
		"username" : username,
		"socket" : ws
	});

	sendToAll("欢迎:" + username);

	ws.on("message", function incoming(message) {
		sendToAll(username + "说；" + message);
	});

	ws.on("close", function close() {
		sm.remove(key);
		sendToAll(username + "离开了");
	});
});
