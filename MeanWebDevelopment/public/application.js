
/*
AngularJS manual boostrapping mechanism.
*/

var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);
angular.element(document).ready(function () {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
