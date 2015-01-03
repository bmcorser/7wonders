(function(){
  var triforceApp = angular.module('triforceApp', [
      'ngRoute',
      'triforceControllers',
  ]);
  triforceApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'templates/list.html',
          controller: 'TriforceCtrl',
        })
        .when('/dnamolecule/:dnamoleculeId', {
          templateUrl: 'templates/dnamolecule.html',
          controller: 'DnaMoleculeCtrl',
        })
        .otherwise({redirectTo: '/'});
    }]);
  triforceApp.factory(
    'cache',
    [
      '$cacheFactory',
      function ($cacheFactory) {
        return $cacheFactory('dnamolecule');
      }
    ]
  );
  triforceApp.factory(
    'backend',
    [
      '$http',
      function ($http) {
        var authString = 'Basic Ym1jb3JzZXJAZ21haWwuY29tOmFiYzEyM2Z1';
        $http.defaults.headers.common['Authorization'] = authString;
        var url = 'http://localhost:8080/api/inventory/crud';
        var baseInstruction = {
          object: 'dnamolecule',
          read: {
            filter: {},
            expand: [['dnafeatures']],
            __please_dont_mutate_cols__: true,
            page_size: 10,
            page: 1,
          },
        };
        return function (instruction) {
          return $http.post(url, _.merge(baseInstruction, instruction));
        };
      },
    ]
  );
})();
