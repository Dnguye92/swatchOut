var watchControllers = angular.module('watchControllers', ['ngAnimate'])

watchControllers.controller('controller', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.watchName = data
		$scope.watchOrder = 'name'
	})
}])