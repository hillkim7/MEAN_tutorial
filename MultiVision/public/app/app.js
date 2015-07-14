var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
});

app.controller('mainCtrl', function($scope) {
  $scope.myVar  = "Hello Angular";
});

