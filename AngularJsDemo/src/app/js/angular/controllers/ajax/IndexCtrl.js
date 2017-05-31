(function() {
	var routeCtrollers = angular.module("routeCtrollers");
	routeCtrollers.controller("AjaxIndexCtrl", [ "$scope", "$log", "$http", AjaxIndexCtrl ]);

	function AjaxIndexCtrl($scope, $log, $http) {
		$log.info("AjaxIndexCtrl init...");

		$scope.submitName = "";
		var nodeMothod = "GET";

		$scope.getNodeData = function() {
			nodeMothod = nodeMothod === "GET" ? "POST" : "GET";
			var request = {
				method : nodeMothod,
				url : "http://127.0.0.1:8080/ajax.html"
			};
			request.data = nodeMothod === "GET" ? "" : {
				"postdata" : $scope.submitName
			};
			request.params = nodeMothod === "POST" ? "" : {
				"getdata" : $scope.submitName
			};
			$log.debug(request);
			$http(request).then(function(data, status) {
				$scope.datas = data.data.datas;
			}, function(data, status) {
				alert(data);
			});
		};

		$scope.getData = function() {
			$http({
				method : "GET",
				url : "templates/ajax/index.data.html"
			}).then(function(data, status) {
				$scope.datas = data.data.datas;
			}, function(data, status) {
				alert(data);
			});
		};

		// 处理scope销毁
		$scope.$on("$destroy", function() {
			$log.info("AjaxIndexCtrl destroy...");
		});

	}
})();
