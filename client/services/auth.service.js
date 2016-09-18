var AuthenticationService=function($http, $q, $window, $rootScope, $state, API_URL){
    var auth={};

    auth.login=function(username, password){
        var deferred=$q.defer();

        if(this.isLoggedIn()){
            this.authUser();
        }else{
            var token=btoa(username+':'+password);
            $http({
                method:'GET',
                url:API_URL+"/login",
                headers:{
                    'Authorization':'Basic '+token,
                    'Content-Type': 'application/json'
                }
            }).then(function(response){
                $window.sessionStorage.token=token;
                $window.sessionStorage.user=JSON.stringify(response);
                auth.authUser();
                deferred.resolve();
            }, function(error){
                deferred.reject();
            });
        }

        return deferred.promise;
    };

    auth.logout=function(){
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.user;
        delete $rootScope.token;
        delete $rootScope.user;
        $rootScope.isAuthenticated=false;
        return $state.go('login');
    };

    auth.isLoggedIn=function(){
        if((typeof $window.sessionStorage.token!=='undefined') && ($window.sessionStorage.token!=='')){
            return true;
        }else{
            return false;
        }
    };

    auth.authUser=function(){
        $rootScope.token=$window.sessionStorage.token;
        $rootScope.user=JSON.parse($window.sessionStorage.user);
        $rootScope.isAuthenticated=true;
    };

    return auth;
};

AuthenticationService.$inject=['$http', '$q', '$window', '$rootScope', '$state', 'API_URL'];

module.exports=AuthenticationService;