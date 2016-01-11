var usersApp = angular.module('users', ['ngResource', 'ui.router']);
var usersAdminApp = angular.module('users.admin', ['ngResource', 'ui.router']);

angular.module('users').config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/users');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('users', {
            url: '/users',
            templateUrl: '/cli_views/partial-users.list.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});


// Users controller
angular.module('users').controller('UsersController', ['$scope', '$stateParams', '$location', 'Users',
  function ($scope, $stateParams, $location, Users) {

      // Create new User
      $scope.create = function (isValid) {
          $scope.error = null;

          if (!isValid) {
              $scope.$broadcast('show-errors-check-validity', 'userForm');

              return false;
          }

          // Create new User object
          var user = new Users({
              title: this.title,
              content: this.content
          });

          // Redirect after save
          user.$save(function (response) {
              $location.path('users/' + response._id);

              // Clear form fields
              $scope.title = '';
              $scope.content = '';
          }, function (errorResponse) {
              $scope.error = errorResponse.data.message;
          });
      };

      // Remove existing User
      $scope.remove = function (user) {
          if (user) {
              user.$remove();

              for (var i in $scope.users) {
                  if ($scope.users[i] === user) {
                      $scope.users.splice(i, 1);
                  }
              }
          } else {
              $scope.user.$remove(function () {
                  $location.path('users');
              });
          }
      };

      // Update existing User
      $scope.update = function (isValid) {
          $scope.error = null;

          if (!isValid) {
              $scope.$broadcast('show-errors-check-validity', 'userForm');

              return false;
          }

          var user = $scope.user;

          user.$update(function () {
              $location.path('users/' + user._id);
          }, function (errorResponse) {
              $scope.error = errorResponse.data.message;
          });
      };

      // Find a list of Users
      $scope.find = function () {
          //$scope.users = Users.query();
          $scope.rowCollection = Users.query();
      };

      // Find existing User
      $scope.findOne = function () {
          $scope.user = Users.get({
              userId: $stateParams.userId
          });
      };
  }
]);
