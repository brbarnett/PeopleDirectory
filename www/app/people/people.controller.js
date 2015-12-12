(function () {
	angular
		.module('app')
		.controller('PeopleCtrl', PeopleCtrl);

	PeopleCtrl.$inject = ['peopleService'];

	function PeopleCtrl(peopleService) {
		var vm = this;

		vm.navigate = navigate;

		vm.people = peopleService.get();

		function navigate(url) {
			document.location.href = url;
		}
	}
} ());