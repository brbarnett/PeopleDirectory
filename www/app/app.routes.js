(function () {
  'use strict';
  
  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function config($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('people', {
        url: '/people',
        templateUrl: 'app/people/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'vm'
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/people');

  };

} ());