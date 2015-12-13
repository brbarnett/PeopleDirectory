(function () {
	angular
		.module('app')
		.factory('localStorageService', localStorageService);

	localStorageService.$inject = ['$window'];

	function localStorageService($window) {
		return {
			get: get,
			set: set
		};

		function get(key) {
			return JSON.parse($window.localStorage.getItem(key));
		}

		function set(key, value) {
			$window.localStorage.setItem(key, JSON.stringify(value));
		}
	}
} ());