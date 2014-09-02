angular.module('dashboard', ['resources.devices', 'filters.formatting'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'app/dashboard/dashboard.tpl.html',
    controller: 'DashboardCtrl',
    resolve:{
      devices: ['Devices', function (Devices) {
        return Devices.all();
      }]
    }
  });
}])

.controller('DashboardCtrl', ['$scope', '$location', 'devices', function ($scope, $location, devices) {
  $scope.devices = devices;
}]);