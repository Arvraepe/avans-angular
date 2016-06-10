angular.module('poke.directives')
    .directive('pageTrainer', function () {
        return {
            templateUrl: 'app/directives/pages/trainer/trainer.html',
            controllerAs: 'pageTrainer',
            controller: ['trainerService', '$stateParams', function (trainerService, $stateParams){
                var vm = this;

                trainerService.getTrainerById($stateParams.id).then(function (response){
                    vm.trainer = response.data;
                });

            }]
        };
    });
