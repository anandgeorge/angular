var sampleApp = angular.module('myApp', []);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowLang/:lang', {
	    templateUrl: 'templates/lang.html',
	    controller: 'ShowLangController'
      });
}]);
 
sampleApp.controller('ShowLangController', function($scope, $routeParams, $http) {
	var getUrl = '/languages/' + $routeParams.lang;
	$http.get(getUrl).success(function(data) {
	    $scope.lang = $routeParams.lang;
		$scope.say = data.say;
	});
});


