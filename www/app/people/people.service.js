(function () {
	angular
		.module('app')
		.factory('peopleService', peopleService);

	function peopleService() {
		return {
			get: function () {
				return peopleData;
			}
		}
	}

	var peopleData = [
		{
			email: 'bbarnett@rightpoint.com',
			name: 'Brandon Barnett',
			phone: '8475089028',
			practice: 'Application Development',
			username: 'bbarnett'
		},
		{
			email: 'ssartell@rightpoint.com',
			phone: null,
			name: 'Sean Sartell',
			practice: 'Application Development',
			username: 'ssartell'
		}];
} ());