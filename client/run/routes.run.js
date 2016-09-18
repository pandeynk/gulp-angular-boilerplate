var RoutesRun=function($rootScope, $state, $timeout, API, ContextService, $auth){

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      if (!$auth.isLoggedIn() && toState.data.auth) {
        event.preventDefault();
        return $state.go('login');
      }else if($auth.isLoggedIn() && toState.name==='login'){
        return $state.go('cadiq.dashboard');
      }
  });

  var stateChange=function(){
    $timeout(function () {

      $(function() {
          $('#side-menu').metisMenu();
      });

      //Loads the correct sidebar on window load,
      //collapses the sidebar on window resize.
      // Sets the min-height of #page-wrapper to window size
      $(function() {
          $(window).bind("load resize", function() {
              var topOffset = 50;
              var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
              if (width < 768) {
                  $('div.navbar-collapse').addClass('collapse');
                  topOffset = 100; // 2-row-menu
              } else {
                  $('div.navbar-collapse').removeClass('collapse');
              }

              var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
              height = height - topOffset;
              if (height < 1) height = 1;
              if (height > topOffset) {
                  $("#page-wrapper").css("min-height", (height) + "px");
              }
          });

          var url = window.location;
          // var element = $('ul.nav a').filter(function() {
          //     return this.href == url;
          // }).addClass('active').parent().parent().addClass('in').parent();
          var element = $('ul.nav a').filter(function() {
              return this.href == url;
          }).addClass('active').parent();

          while (true) {
              if (element.is('li')) {
                  element = element.parent().addClass('in').parent();
              } else {
                  break;
              }
          }
      });
      // get user current context
      if ($auth.isLoggedIn()) {
/*        ContextService.getContext()
          .then(function(response) {
            response = response.plain()
            $rootScope.me = response.data
          });*/
          $auth.authUser();
      }else{
        //event.preventDefault();
          $auth.logout();
      }
    });
  };

  //$rootScope.$on('$destroy', deregisterationCallback);
  $rootScope.$on('$stateChangeSuccess', stateChange);
};

RoutesRun.$inject=['$rootScope', '$state', '$timeout', 'API', 'ContextService', '$auth'];

module.exports=RoutesRun;