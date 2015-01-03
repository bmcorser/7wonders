(function(){
  var triforceControllers = angular.module('triforceControllers', []);
  var backend = function ($http, instruction) {
    var url = 'http://localhost:8080/api/inventory/crud';
    var baseInstruction = {
      object: 'dnamolecule',
      read: {
        filter: {},
        expand: [['dnafeatures']],
        __please_dont_mutate_cols__: true,
        page_size: 2,
        page: 1,
      },
    };
    return $http.post(url, _.merge(baseInstruction, instruction));
  };
  triforceControllers.controller('TriforceCtrl', ['$scope', '$http',
    function($scope, $http){
      var authString = 'Basic Ym1jb3JzZXJAZ21haWwuY29tOmFiYzEyM2Z1';
      $http.defaults.headers.common['Authorization'] = authString;
      var start = 0;
      var end = 10000;
      var instruction = {read: {page: 1}};
      $scope.dnamolecules = [];
      backend($http, instruction).success(function (data, status) {
        $scope.dnamolecules = data.read;
        console.log(data, status);
      }).error(function (data, status) {
        console.log(data, status);
      });
    }]);
})();
