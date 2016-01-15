angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'home/home.html'
      })
      .state('addressDetails', {
        url: '/addressDetails',
        templateUrl: 'address/form.html',
        controller: 'formController'
      })
      .state('getLocation', {
        url: '/getLocation',
        templateUrl: 'map/map.html'
      })
    
  })

  angular.module('app')
  .directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            scope.replaceWith(scope.children());
        }
    };
});


