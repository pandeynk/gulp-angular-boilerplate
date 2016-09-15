var RoutesConfig=function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
/*      .state('app', {
        abstract: true,
        views: {
          'layout': {
            templateUrl: getLayout('layout')
          },
          'header@app': {
            templateUrl: getView('header')
          },
          'footer@app': {
            templateUrl: getView('footer')
          },
          main: {}
        },
        data: {
          bodyClass: 'hold-transition skin-blue sidebar-mini'
        }
      })*/
      .state('login', {
        url: '/login',
        templateUrl:'./templates/insurance/insurance-company-add/insurance-company-add.view.html',
        data: {
          bodyClass: 'hold-transition login-page'
        },
        params: {
          registerSuccess: null,
          successMsg: null
        }
      })
      .state('app', {
        url: '/',
        template:'<h3 style="margin-top:200px;">Hello World</h3>',
        data: {
          bodyClass: 'hold-transition'
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