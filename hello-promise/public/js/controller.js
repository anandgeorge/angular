var sampleApp = angular.module('myApp', []);

sampleApp.controller('Controller', function($scope, HelloList) {
	HelloList.then(function(list)	{
		$scope.greeting = {text: list.hello};
	});
});

sampleApp.factory('HelloList', function($http, $q){
    var d = $q.defer();
    $http.get('/hello').success(function(data){
        d.resolve(data);
    });
    return d.promise;
});


