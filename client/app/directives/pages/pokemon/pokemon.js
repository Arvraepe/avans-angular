angular.module('poke.directives')
    .directive('pagePokemon', function () {
        return {
            templateUrl: 'app/directives/pages/pokemon/pokemon.html',
            controllerAs: 'pagePokemon',
            controller: ['pokemonService', '$stateParams', function (pokemonService, $stateParams){
                var vm = this;

                pokemonService.getPokemonById($stateParams.id).then(function (response){
                    vm.pokemon = response.data;
                });

            }]
        };
    });
