var sampleApp = angular.module('myApp', []);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowLang/:lang', {
    templateUrl: 'templates/lang.html',
    controller: 'ShowLangController'
      });
}]);
 
sampleApp.controller('ShowLangController', function($scope, $routeParams) {
	$scope.languages = {"English":"Hello World", "German":"Hallo Welt", "French":"Bonjour tout le monde"};
    $scope.lang = $routeParams.lang;
	$scope.say = $scope.languages[$routeParams.lang];
});

