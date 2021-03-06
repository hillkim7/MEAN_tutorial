﻿
/*
AngularJS manual boostrapping mechanism.
*/

var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngResource', 'ngRoute', 'users', 'articles']);

mainApplicationModule.config(['$locationProvider',
  function ($locationProvider) {
    // To mark your application routes as single-page application routes, you will
    // need to use a routing scheme called Hashbangs. Hashbangs are implemented by
    // adding an exclamation mark right after the hash sign, so an example URL would
   // be http://localhost:3000/#!/example
    $locationProvider.hashPrefix('!');
  }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function () {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
