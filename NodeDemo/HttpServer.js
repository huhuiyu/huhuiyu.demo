/**
 * 基本的http服务器演示
 */
var http = require("http");
var url = require("url");

function HttpServer() {
}

HttpServer.prototype.start = function(ip, port, callback) {

	// 创建http服务
	var server = http.createServer();

	// 处理http请求
	server.on("request", function(request, response) {
		var requrl = url.parse(request.url); // 获取请求的路径信息

		console.log("request:", requrl, "=", request.method);

		if (requrl.pathname === "/favicon.ico") { // 不用应答favicon.ico
			return response.end();
		}

		if (requrl.pathname === "/echo.html" || requrl.pathname === "/echo") { // 回声应答
			response.writeHead(200, "OK");
			if (requrl.query) {
				response.write(requrl.query);
			} else {
				response.write("echo");
			}
			return response.end();
		}

		if (requrl.pathname === "/ajax.html") { // ajax应答
			response.writeHead(200, {
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Headers" : "X-Requested-With",
				"Access-Control-Allow-Methods" : "PUT,POST,GET,DELETE,OPTIONS",
				"Content-Type" : "text/json"
			});

			var data = {
				"datas" : [ {
					"id" : 1,
					"name" : "张三"
				}, {
					"id" : 2,
					"name" : "李四"
				} ]
			};

			data.query = "";

			if (request.method === "POST") {
				request.on("data", function(rdata) {
					data.query += rdata;
				});
				request.on("end", function() {
					data.datas.push({
						"id" : 3,
						"name" : data.query
					});

					response.write(JSON.stringify(data));
					return response.end();
				});
				return;
			}
			if (requrl.query) {
				data.query = requrl.query;
			} else {
				data.query = "no query...";
			}
			data.datas.push({
				"id" : 3,
				"name" : data.query
			});

			response.write(JSON.stringify(data));
			return response.end();

		}

		// 应答401信息
		response.writeHead(401, "Unauthorized", {
			'Content-Type' : 'text/html',
			"WWW-Authenticate" : "Basic realm=\"Authorization\""
		});
		return response.end();

	});

	// 启动监听
	server.listen(port, ip, function(err) {
		if (err) {
			callback(err);
			return;
		}
		console.log("server on--->" + ip + ":" + port);
		callback();
	});

};

module.exports = HttpServer;