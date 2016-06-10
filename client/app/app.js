var Poke = angular.module('poke', ['ui.router', 'ui.bootstrap', 'poke.directives', 'poke.services']);

Poke.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.useApplyAsync(true);
    $httpProvider.defaults.timeout = 5000;

    $urlRouterProvider.otherwise("/page-not-found");
    $stateProvider
        .state('landing', { url: '', template: '<page-home></page-home>' })
    ;
}]);

angular.module('poke.directives', []);
angular.module('poke.services', []);