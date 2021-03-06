var mApp = angular.module('mApp', ['ui.router']);

mApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/users');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('users', {
            url: '/users',
            templateUrl: 'partial-users.list'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});
