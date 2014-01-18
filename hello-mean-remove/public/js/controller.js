var sampleApp = angular.module('myApp', []);
 
sampleApp.controller('ShowLangController', function($scope, $http) {
	$http.get('/languages').success(function(data) {
		$scope.langs = data;
	});

	$scope.remove = function(index)	{
		console.log(index);
		var removeUrl = '/language/' + $scope.langs[index].name;
		$http.delete(removeUrl).success(function(result) {
			if(result == 1)	{
				$scope.langs.splice(index, 1);
			}		
		});
	}
});


