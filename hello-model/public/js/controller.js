angular.module('myApp.controller', [])
.controller('ShowLangController', function($scope, $routeParams, langService) {
	$scope.name = $routeParams.lang;
	$scope.say = langService.lang[$routeParams.lang].say;
	$scope.sentence = langService.lang[$routeParams.lang].sentence;
})

.controller('ShowAllController', function($scope, langService) {
	$scope.langs = langService.langs;
})


