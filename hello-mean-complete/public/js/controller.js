angular.module('myApp.controller', []).
controller('LangController', function($scope, LangService) {
	LangService.list().success(function(data)	{
		$scope.languages = data;
		$scope.lang = {};
	});

	$scope.saveLang = function()	{
		LangService.save($scope.lang).success(function(data)	{
			$scope.languages = data;
			$scope.lang = {};
		});
	}

	$scope.editLang = function(lang)	{
		$scope.lang = lang;
	}

	$scope.deleteLang = function(lang)	{
		LangService.delete(lang).success(function(data)	{
			$scope.languages = data;
			$scope.lang = {};
		});
	}
});


