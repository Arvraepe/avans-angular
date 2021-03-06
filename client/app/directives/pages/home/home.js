angular.module('poke.directives')
    .directive('pageHome', function () {
        return {
            templateUrl: 'app/directives/pages/home/home.html',
            controllerAs: 'pageHome',
            controller: ['pokemonService', function (pokemonService){

                var vm = this;
                pokemonService.getAllPokemons().then(function (response) {
                    console.log(response);
                    vm.pokemons = response.data;
                });
            }]
        };
    });
