(function() {
	var routeCtrollers = angular.module("routeCtrollers");
	routeCtrollers.controller("AnimateIndexCtrl", [ "$scope", "$log", "$http", AnimateIndexCtrl ]);

	function AnimateIndexCtrl($scope, $log, $http) {
		$log.info("AnimateIndexCtrl init...");
		var maxIndex = 2;
		$scope.data = {
			"visiable" : true,
			"animateClass" : "",
			"index" : 0
		};

		$scope.changeStatus = function() {
			$scope.data.animateClass = $scope.data.animateClass === "" ? " move-img" : "";
		};

		$scope.changeIndex = function() {
			$scope.data.index = ($scope.data.index + 1) % maxIndex;
		};

		// 处理scope销毁
		$scope.$on("$destroy", function() {
			$log.info("AnimateIndexCtrl destroy...");
		});

	}
})();
