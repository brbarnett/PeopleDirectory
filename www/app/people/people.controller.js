(function () {
	'use strict';
	
	angular
		.module('app')
		.controller('PeopleCtrl', PeopleCtrl);

	PeopleCtrl.$inject = ['$scope', 'peopleService', '$ionicLoading'];

	function PeopleCtrl($scope, peopleService, $ionicLoading) {
		var vm = this;

		vm.openBrowser = openBrowser;
		vm.people = [];
		vm.refresh = refresh;

		activate();

		function activate() {
			$ionicLoading.show({
				template: 'Loading...'
			});

			refresh();

			ionic.Platform.ready(function () {
				vm.platform = {
					isAndroid: ionic.Platform.isAndroid(),
					isIos: ionic.Platform.isIOS()
				};
			});
		}

		function openBrowser(url) {
			window.open(url, '_system')
		}
		
		function refresh() {
			// get data
			peopleService
				.get()
				.then(function (data) {
					vm.people = data;
				}, function (msg) {

				}).then(function () {
					$ionicLoading.hide();
					$scope.$broadcast('scroll.refreshComplete');
				});
		}
	}
} ());