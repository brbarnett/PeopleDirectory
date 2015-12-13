(function () {
	angular
		.module('app')
		.controller('PeopleCtrl', PeopleCtrl);

	PeopleCtrl.$inject = ['peopleService'];

	function PeopleCtrl(peopleService) {
		var vm = this;

		vm.navigate = navigate;
		vm.people = [];

		activate();

		function activate() {
			peopleService
				.get()
				.then(function (data) {
					vm.people = data;
				}, function (msg) {
					
				});
		}
		
		function navigate(url) {
			document.location.href = url;
		}
	}
} ());