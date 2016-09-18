var RoutesConfig=function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('cadiq', {
        abstract: true,
        templateUrl: './templates/landing/landing.view.html',
        data: {
          bodyClass: 'hold-transition skin-blue sidebar-mini'
        }
      })
      .state('cadiq.dashboard', {
        url: '/',
        views:{
          'header@cadiq': {
            templateUrl: './templates/header/header.view.html'
          },
          'content@cadiq':{
            templateUrl:'./templates/dashboard/dashboard.view.html'
          },
          'footer@cadiq': {}
        },
        data: {
          bodyClass: 'hold-transition'
        },
        params: {
          registerSuccess: null,
          successMsg: null
        }
      })
      .state('cadiq.users', {
        url: '/users',
        views:{
          'header@cadiq': {
            templateUrl: './templates/header/header.view.html'
          },
          'content@cadiq':{
            templateUrl:'./templates/user/user-list/user-list.view.html',
            controller:'UserListController'
          },
          'footer@cadiq': {}
        },
        data: {
          bodyClass: 'hold-transition',
          auth:true
        },
        params: {
          registerSuccess: null,
          successMsg: null
        }
      })
      .state('cadiq.users.add', {
        url: '/add',
        views:{
          'header@cadiq': {
            templateUrl: './templates/header/header.view.html'
          },
          'content@cadiq':{
            templateUrl:'./templates/user/user-add/user-add.view.html',
            controller:'UserAddController'
          },
          'footer@cadiq': {}
        },
        data: {
          bodyClass: 'hold-transition',
          auth:true
        },
        params: {
          registerSuccess: null,
          successMsg: null
        }
      })
      .state('cadiq.users.edit', {
        url: '/edit/:userId',
        views:{
          'header@cadiq': {
            templateUrl: './templates/header/header.view.html'
          },
          'content@cadiq':{
            templateUrl:'./templates/user/user-edit/user-edit.view.html',
            controller:'UserEditController'
          },
          'footer@cadiq': {}
        },
        data: {
          bodyClass: 'hold-transition',
          auth:true
        },
        params: {
          registerSuccess: null,
          successMsg: null
        }
      })
      .state('login', {
        url: '/login',
        templateUrl:'./templates/login/login.view.html',
        controller:'LoginController',
        data: {
          bodyClass: 'hold-transition login-page'
        },
        params: {
          registerSuccess: null,
          successMsg: null
        }
      })
      .state('logout', {
        url: '/logout',
        controller: function ($scope, $auth) {
          $auth.logout();
        }
    });
};

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];

module.exports=RoutesConfig;