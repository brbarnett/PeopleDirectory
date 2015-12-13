(function () {
	angular
		.module('app')
		.controller('PeopleCtrl', PeopleCtrl);

	PeopleCtrl.$inject = ['peopleService', '$ionicLoading'];

	function PeopleCtrl(peopleService, $ionicLoading) {
		var vm = this;

		vm.navigate = navigate;
		vm.people = [];

		activate();

		function activate() {
			$ionicLoading.show({
				template: 'Loading...'
			});
			
			peopleService
				.get()
				.then(function (data) {
					vm.people = data;
				}, function (msg) {
					
				}).then(function(){
					$ionicLoading.hide();
				});
		}
		
		function navigate(url) {
			document.location.href = url;
		}
	}
} ());