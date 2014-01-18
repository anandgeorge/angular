angular.module('myApp.service', []).
service('langService', function($http) {
	this.getAPI = function(url)	{
		return $http.get(url);
	}
});


