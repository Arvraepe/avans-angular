
angular.module('poke.services')
    .factory('pokemonService', ['$http', function ($http) {
        var base = "http://localhost:9090";

        function getAllPokemons() {
            return $http({
                method: 'get',
                url: base + '/pokemon'
            });
        }

        function getPokemonById(id) {
            return $http({
                method: 'get',
                url: base + '/pokemon/'+id
            });
        }

        return {
            getPokemonById: getPokemonById,
            getAllPokemons: getAllPokemons
        };

    }]);