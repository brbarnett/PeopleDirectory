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
			
			// get data
			peopleService
				.get()
				.then(function (data) {
					vm.people = data;
				}, function (msg) {

				}).then(function () {
					$ionicLoading.hide();
				});

			ionic.Platform.ready(function () {
				vm.platform = {
					isAndroid: ionic.Platform.isAndroid(),
					isIos: ionic.Platform.isIOS()
				};
			});
		}

		function navigate(url) {
			window.open(url);
		}
	}
} ());