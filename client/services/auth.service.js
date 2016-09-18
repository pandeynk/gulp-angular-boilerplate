var AuthenticationService=function($http, $q, $window, $rootScope, $state){
    var auth={};

    auth.login=function(){
        if(this.isLoggedIn()){
            this.authUser();
        }else{
            $window.sessionStorage.token="authtoken";
            $window.sessionStorage.user=JSON.stringify({name:'nandan pandey', id:1});
            this.authUser();
        }
        return true;
    }

    auth.logout=function(){
        delete $window.sessionStorage.token;
        delete $window.sessionStorage.user;
        delete $rootScope.token;
        delete $rootScope.user;
        $rootScope.isAuthenticated=false;
        return $state.go('login');
    }

    auth.isLoggedIn=function(){
        if((typeof $window.sessionStorage.token!=='undefined') && ($window.sessionStorage.token!=='')){
            return true;
        }else{
            return false;
        }
    }

    auth.authUser=function(){
        $rootScope.token=$window.sessionStorage.token;
        $rootScope.user=JSON.parse($window.sessionStorage.user);
        $rootScope.isAuthenticated=true;
    }

    return auth;
}

AuthenticationService.$inject=['$http', '$q', '$window', '$rootScope', '$state'];

module.exports=AuthenticationService;