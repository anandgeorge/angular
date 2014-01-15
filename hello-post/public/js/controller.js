var sampleApp = angular.module('myApp', []);

sampleApp.controller('Controller', function($scope, $http) {
	$http.post('/hello', {hello:"Hello"}).success(function(data)	{
		$scope.greeting = {text: data.hello};
	});
});

