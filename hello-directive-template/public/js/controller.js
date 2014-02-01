angular.module('myApp', [])
	.directive('helloDirective', function() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/helloTemplate.html'
		}
	}
);

