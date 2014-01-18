angular.module('myApp', ['myApp.controller', 'myApp.service']).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/ShowLang/:lang', {
	    templateUrl: 'templates/lang.html',
	    controller: 'ShowLangController'
      });
}]);
