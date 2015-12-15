(function () {
	'use strict';
	
	angular
		.module('app')
		.factory('peopleService', peopleService);

	peopleService.$inject = ['dataService', 'localStorageService', '$q'];

	function peopleService(dataService, localStorageService, $q) {
		return {
			find: find,
			get: get
		};

		function find(id) {
			var people = localStorageService.get('peopleDirectory.people');
			
			var person = people.filter(function (person) {
				return person.id === id;
			});

			return person[0];
		}

		function get() {
			var deferred = $q.defer();
			
			var people = localStorageService.get('peopleDirectory.people');
			
			dataService.get('http://rp-directory.azurewebsites.net/api/people')
				.then(function(data){
					people = data.map(function(person){
						return {
							practice: person.Practice,
							email: person.Email,
							id: person.Id,
							location: person.Location,
							name: person.Name,
							phone: person.Phone,
							username: person.username
						}
					});
					localStorageService.set('peopleDirectory.people', people);
					
					deferred.resolve(people);
				}, function(msg){
					deferred.resolve(people);
				});
			
			return deferred.promise;
		}
	}
} ());