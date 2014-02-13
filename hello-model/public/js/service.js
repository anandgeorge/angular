angular.module('myApp.service', []).
service('langService', function() {
	var languages = {};
    languages.langs = [
				{"name":"English", "say":"Hello"},
				{"name":"French", "say":"Hallo"}
		];
	languages.lang = {};
	languages.lang["English"] = {"say":"Hello", "sentence":"This is a big sentence in English"};
	languages.lang["French"] = {"say":"Hallo", "sentence":"This is a big sentence in French"};
	return languages;
});




