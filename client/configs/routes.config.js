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
      });
/*      .state('app.logout', {
      url: '/logout',
      views: {
        'main@app': {
          controller: function ($rootScope, $scope, $auth, $state, AclService) {
            $auth.logout().then(function () {
              delete $rootScope.me
              AclService.flushRoles()
              AclService.setAbilities({})
              $state.go('login')
            })
          }
        }
      }
    });*/
};

RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];

module.exports=RoutesConfig;