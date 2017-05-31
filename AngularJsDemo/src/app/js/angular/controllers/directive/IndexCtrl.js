(function() {
	var routeCtrollers = angular.module("routeCtrollers");
	routeCtrollers.controller("DirectiveIndexCtrl", [ "$scope", "$log", "TimeService", DirectiveIndexCtrl ]);

	function DirectiveIndexCtrl($scope, $log, TimeService) {
		$log.info("DirectiveIndexCtrl init...");

		$scope.serviceInfo = TimeService.formatDate();
		$scope.format = "y-M-d h:m:s";

		// 处理scope销毁
		$scope.$on("$destroy", function() {
			$log.info("DirectiveIndexCtrl destroy...");
		});

	}
})();
