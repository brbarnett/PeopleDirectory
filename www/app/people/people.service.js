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
			var person = people.filter(function (person) {
				return person.id === id;
			});

			return person[0];
		}

		function get() {
			var deferred = $q.defer();
			
			// dev
			localStorageService.set('peopleDirectory.people', $people);
			
			var people = localStorageService.get('peopleDirectory.people');
			
			dataService.get('/api/people')
				.then(function(data){
					people = data;
					localStorageService.set('peopleDirectory.people', people);
					
					deferred.resolve(people);
				}, function(msg){
					deferred.resolve(people);
				});
			
			return deferred.promise;
		}
	}

	var $people = [
		{
			email: 'bbarnett@rightpoint.com',
			location: 'Chicago',
			name: 'Brandon Barnett',
			phone: '8475089028',
			practice: 'Application Development',
			username: 'bbarnett'
		},
		{
			email: 'apetersen@rightpoint.com',
			location: 'Chicago',
			phone: null,
			name: 'Anne Petersen',
			practice: 'User Experience',
			username: 'apetersen'
		},
		{
			email: 'ssartell@rightpoint.com',
			location: 'Chicago',
			phone: null,
			name: 'Sean Sartell',
			practice: 'Application Development',
			username: 'ssartell'
		},
		{
			email: 'jsears@rightpoint.com',
			location: 'Chicago',
			phone: null,
			name: 'Jason Sears',
			practice: 'Application Development',
			username: 'jsears'
		},
		{
			email: 'stonkin@rightpoint.com',
			location: 'Denver',
			phone: null,
			name: 'Steve Tonkin',
			practice: 'Application Development',
			username: 'stonkin'
		},
		{
			email: 'sumber@rightpoint.com',
			location: 'Chicago',
			phone: null,
			name: 'Sarah Umber',
			practice: 'Delivery Support',
			username: 'sumber'
		},
		{
			email: 'vvaisnys@rightpoint.com',
			location: 'Chicago',
			phone: null,
			name: 'Vaiva Vaisnys',
			practice: 'Delivery Support',
			username: 'vvaisnys'
		}];
} ());