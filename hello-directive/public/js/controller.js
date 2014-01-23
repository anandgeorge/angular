angular.module('myApp', [])
	.directive('helloDirective', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<h1>Hello World</h1>'
		}
	}
);

