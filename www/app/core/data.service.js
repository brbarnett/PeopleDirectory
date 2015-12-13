(function () {
    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = ['$http', '$q'];

    function dataService($http, $q) {
        return {
            get: get
        };

        function get(url) {
            var deferred = $q.defer();

            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                }).error(function (msg, code) {
                    deferred.reject(msg);
                });

            return deferred.promise;
        }
    }
} ());