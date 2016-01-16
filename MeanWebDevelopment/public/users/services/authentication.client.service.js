'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$window',
  function ($window) {
    var auth = {
      user: $window.user
    };

    return auth;
  }
]);

// same statement
/*
angular.module('users').factory('Authentication', [
function () {
  this.user = window.user;
  return {
    user: this.user
  };
}
]);
*/
