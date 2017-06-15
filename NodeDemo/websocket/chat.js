var socket;

$(function() {

	socket = new WebSocket("ws://127.0.0.1:30002");

	socket.onerror = function(event) {
		console.log(event);
	};

	socket.onclose = function(event) {
		console.log(event);
	};

	socket.onopen = function(event) {
		socket.onmessage = function(event) {
			console.log(event);
			divInfo.innerHTML += event.data + "<br/>";
		};

		$("#btnSend").click(function() {
			socket.send($("#txtSend").val());
			$("#txtSend").val("");
			$("#txtSend").focus();
		});
	};

});