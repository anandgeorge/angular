angular.module('myApp.controller', []).
controller('ShowLangController', function($scope, $routeParams, langService) {
	var url = '/languages/' + $routeParams.lang;
	langService.getAPI(url).success(function(data) {
	    $scope.lang = $routeParams.lang;
		$scope.say = data.say;
	});
});


