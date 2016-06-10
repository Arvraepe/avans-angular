angular.module('poke.directives')
    .directive('elemPokemonDetails', function () {
        return {
            scope: {
                pokemon: '='
            },
            templateUrl: 'app/directives/elements/pokemon-details/pokemon-details.html',
            controllerAs: 'elemPokemonDetails',
            controller: ['$state', '$scope', function ($state,$scope){
                var vm = this;

                vm.gotoPokemon = function () {
                    $state.go('pokemon', { id: $scope.pokemon.id });
                };
            }]
        };
    });
