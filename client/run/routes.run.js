var RoutesRun=function($rootScope, $state, $timeout, API, ContextService){

/*  var deregisterationCallback = $rootScope.$on('$stateChangeStart', function (event, toState) {

      if (typeof $rootScope.isAuthenticated==='undefined') {
        event.preventDefault();
        return $state.go('login');
      }
  });*/

  var stateChange=function(){
    $timeout(function () {
      // fix sidebar
/*      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight()
      var window_height = $(window).height()
      var sidebar_height = $('.sidebar').height()

      if ($('body').hasClass('fixed')) {
        $('.content-wrapper, .right-side').css('min-height', window_height - $('.main-footer').outerHeight())
      } else {
        if (window_height >= sidebar_height) {
          $('.content-wrapper, .right-side').css('min-height', window_height - neg)
        } else {
          $('.content-wrapper, .right-side').css('min-height', sidebar_height)
        }
      }*/

      // get user current context
      if (!(typeof $rootScope.isAuthenticated==='undefined')) {
/*        ContextService.getContext()
          .then(function(response) {
            response = response.plain()
            $rootScope.me = response.data
          });*/
          $rootScope.user={name:'nandan pandey', id:1};
      }else{
        //event.preventDefault();
        return $state.go('login');
      }
    });
  };

  //$rootScope.$on('$destroy', deregisterationCallback);
  $rootScope.$on('$stateChangeSuccess', stateChange);
};

RoutesRun.$inject=['$rootScope', '$state', '$timeout', 'API', 'ContextService'];

module.exports=RoutesRun;