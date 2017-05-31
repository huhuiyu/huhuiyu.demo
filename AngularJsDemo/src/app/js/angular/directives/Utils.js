(function() {

	var app = angular.module(AppConfig.appname);

	app.directive("showTime", [ "$log", "$interval", "TimeService", function($log, $interval, TimeService) {
		$log.debug("directive show-time...");
		return {
			scope : {
				showTime : "@"
			},
			
			"link" : function($scope, element, attr) {
				var format = "";

				var watch = $scope.$watch("showTime", function(nv, ov) {
					if (nv && nv !== "") {
						format = $scope.showTime;
					}
				});

				var timer = $interval(function() {
					if (format && format !== "") {
						element.html(TimeService.formatDate(new Date().getTime(), format));
					}
				}, 1000);

				$scope.$on("$destroy", function() {
					$log.debug("directive show-time destroy...");
					$interval.cancel(timer);
					watch();
				});

			}
		};
	} ]);

})();