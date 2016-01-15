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

		function get(options) {
			var deferred = $q.defer();

			var people = localStorageService.get('peopleDirectory.people');

			if (!options.harder) {	// allow to escape early
				if (people) deferred.resolve(people);
			}

			dataService.get('http://rp-directory.azurewebsites.net/api/people')
				.then(function (data) {
					people = data.map(function (person) {
						return {
							practice: person.Practice,
							email: person.Email,
							id: person.Id,
							location: person.Location,
							name: person.Name,
							phone: person.Phone,
                            photoUrl: person.PhotoUrl || 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLV9Fpe2eu2pVQCUBSTzSY95zI0teRszEivNzLDbYq8yEVuLyqUOm5h48',
							username: person.Username
						}
					});
					localStorageService.set('peopleDirectory.people', people);

					deferred.resolve(people);
				}, function (msg) {
					deferred.resolve(people);
				});

			return deferred.promise;
		}
	}
} ());