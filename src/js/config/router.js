angular
  .module('YTHO')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'js/views/user/index.html',
      // template: '<p>{{ profile.all }}</p>',
      controller: 'ProfileCtrl as profile'
    })
    .state('show', {
      url: '/show',
      template: '<p>{{ show.all }}</p><br><p>{{show.all[0].evendId }}</p>',
      controller: 'ShowCtrl as show'
    });

  $urlRouterProvider.otherwise('/');
}
