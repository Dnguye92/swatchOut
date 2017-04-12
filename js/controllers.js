var watchControllers = angular.module('watchControllers', [
	'ngAnimate'
])

// var modalControllers = angular.module('modalControllers', [
// 	'ui.bootstrap'
// ])

watchControllers.controller('controller', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.watchName = data
		$scope.watchOrder = 'name'
	})
}])