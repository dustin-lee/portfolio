console.log('in the app.js file')
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($httpProvider, $routeProvider) {
$httpProvider.interceptors.push(
  function($q, $location) {
  return {
      'responseError':function(rejection){
      if (rejection.status == 401){
          $location.url('/');
      }
      return $q.reject(rejection);
  }
};
});
  $routeProvider
  .when('/',{
      templateUrl: 'assets/partials/index.html',
  })
  .when('/contact',{
      templateUrl: 'assets/partials/contact.html',
      controller: 'messageController',
      controllerAs: "dame"
  })
  .when('/work',{
      templateUrl: 'assets/partials/work.html',
  })
  .when('/daleeadminlogin',{
      templateUrl: 'assets/partials/daleeadminlogin.html',
      controller: 'newContactController',
      controllerAs: "meep"
  })
  .when('/showcontacts', {
      templateUrl: 'assets/partials/showcontacts.html',
      controller: 'messageController',
      controllerAs: "dame"
  })
  .when('/projects', {
    templateUrl: 'assets/partials/projects.html',
  })
  .when('/thankyou', {
    templateUrl: 'assets/partials/thankyou.html',
  })
    .otherwise({
      redirectTo: '/'
    });
});
