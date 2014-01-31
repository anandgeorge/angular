var sampleApp = angular.module('myApp', ['ngResource']);

sampleApp.controller('Controller', function($scope, $resource) {
	var Languages = $resource('/hello');
	var language = Languages.get(function()	{
		$scope.greeting = {text: language.hello};
	});
});
