
angular.module('poke.services')
    .factory('trainerService', ['$http', function ($http) {
        var base = "http://localhost:9090";

        function getTrainerById(id) {
            return $http({
                method: 'get',
                url: base + '/trainer/'+id
            });
        }

        return {
            getTrainerById: getTrainerById
        };

    }]);