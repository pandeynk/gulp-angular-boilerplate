var ContextService=function($rootScope, API){

  var ContextService={};

  ContextService.getContext=function(){
    if($rootScope.token){
      var UserData = API.service('me', API.all('users'));

      return UserData.one().get();
    }else{
      return NULL;
    }
  };

  ContextService.me=function (cb) {
    $rootScope.$watch('me', function (nv) {
      cb(nv);
    });
  };

  return ContextService;

};

ContextService.$inject=['$rootScope', 'API'];

module.exports=ContextService;
