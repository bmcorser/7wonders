(function(){
  var triforceControllers = angular.module('triforceControllers', []);
  triforceControllers.controller(
    'TriforceCtrl',
    [
      '$scope',
      '$http',
      'backend',
      'cache',
      function($scope, $http, backend, cache){
        var instruction = {read: {page: 1}};
        $scope.dnamolecules = [];
        backend(instruction).success(function (data, status) {
          _.map(data.read, function (dnamolecule) {
            cache.put(dnamolecule.id, dnamolecule);
          });
          $scope.dnamolecules = data.read;
        }).error(function (data, status) {
          console.log(data, status);
        });
      }
    ]
  );
  triforceControllers.controller(
    'DnaMoleculeCtrl',
    [
      '$scope',
      '$http',
      '$routeParams',
      'backend',
      'cache',
      function($scope, $http, $routeParams, backend, cache){
        var dnamolecule = cache.get($routeParams.dnamoleculeId);
        if (dnamolecule) {
          $scope.dnamolecule = dnamolecule;
          var gcCount = dnamolecule.sequence.bases.match(/[GC]/g).length;
          $scope.gcContent = gcCount / dnamolecule.length * 100;
          console.log($scope.gcContent);
        } else {
          var instruction = {read: {filter: {id: $routeParams.dnamoleculeId}}};
          backend(instruction).success(function (data, status) {
            var dnamolecule = data.read[0];
            cache.put(dnamolecule.id, dnamolecule);
            $scope.dnamolecule = dnamolecule;
            var gcCount = dnamolecule.sequence.bases.match(/[GC]/g).length;
            $scope.gcContent = gcCount / dnamolecule.length * 100;
          }).error(function (data, status) {
            console.log(data, status);
          });
        }
      }
    ]
  );
})();
