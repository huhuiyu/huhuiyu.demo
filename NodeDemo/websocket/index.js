var socket;

$(function() {
	$("#btnSend").prop("disabled", true);

	$("#btnConnect").click(function() {
		$("#btnConnect").prop("disabled", true);
		socket = new WebSocket('ws://127.0.0.1:30001');

		socket.onerror = function(event) {
			console.log(event);
		};

		socket.onclose = function(event) {
			console.log(event);
			$("#btnSend").prop("disabled", true);
			$("#btnConnect").prop("disabled", false);
			divInfo.innerHTML += "服务器已经断开<br/>";
		};

		socket.onopen = function(event) {
			$("#btnSend").prop("disabled", false);

			socket.send("open...");
			socket.onmessage = function(event) {
				console.log(event);
				divInfo.innerHTML += event.data + "<br/>";
			};

		};

	});

	$("#btnSend").click(function() {
		socket.send($("#txtInfo").val());
		$("#txtInfo").val("");
	});
});