var swatchOut = angular.module('swatchOut', [
	'ngRoute',
	'watchControllers'
]);

swatchOut.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/watches', {
		templateUrl: 'partials/watches.html',
		controller: 'controller'
	}).
	otherwise({
		redirectTo: '/watches'
	})
}])