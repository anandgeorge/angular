var sampleApp = angular.module('myApp', []);

sampleApp.controller('Controller', function($scope, $http) {
	$http.get('/hello').success(function(data)	{
		$scope.greeting = {text: data.hello};
	});
});

