/* global angular */

function Config($locationProvider) {
    $locationProvider.html5Mode({ enabled: true })
}

Run.$inject = ['$rootScope'];

function Run($rootScope) {
    console.log('running demo');
}

angular.module("demo", ['momentFilters', 'moneyFilters'])
    .config(Config)
    .run(Run);