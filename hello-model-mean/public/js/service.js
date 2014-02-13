angular.module('myApp.service', []).
service('langService', function($http) {
	this.list = function()	{
		return $http.get('/languages');
	}

	this.lang = function(lang)	{
		var url = '/language/' + lang;
		return $http.get(url);
	}
});


