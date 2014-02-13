angular.module('myApp.controller', [])
.controller('ShowLangController', function($scope, $routeParams, langService) {
	langService.lang($routeParams.lang).success(function(data)	{
		$scope.name = data.name;
		$scope.say = data.say;
		$scope.sentence = data.sentence;
	});
})

.controller('ShowAllController', function($scope, langService) {
	langService.list().success(function(data)	{
		$scope.langs = data;
	});
});

