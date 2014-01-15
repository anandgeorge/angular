var sampleApp = angular.module('myApp', []);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Hello', {
        templateUrl: 'templates/hello.html',
        controller: 'HelloController'
    }).
      when('/Bonjour', {
        templateUrl: 'templates/bonjour.html',
        controller: 'BonjourController'
      }).
      otherwise({
        redirectTo: '/Hello'
      });
}]);
 
sampleApp.controller('HelloController', function($scope) {
    $scope.message = 'Hello';
});
 
sampleApp.controller('BonjourController', function($scope) {
    $scope.message = 'Bonjour';
});

