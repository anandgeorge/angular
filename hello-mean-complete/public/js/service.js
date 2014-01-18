angular.module('myApp.service', []).
service('LangService', function($http) {
	this.list = function()	{
		return $http.get('/languages');
	}

	this.save = function(lang)	{
		var url = '/language/' + lang.name + '/' + lang.say;
		return $http.get(url);
	}

	this.delete = function(lang)	{
		var url = '/language/' + lang.name;
		console.log(url);
		return $http.delete(url);
	}


});


