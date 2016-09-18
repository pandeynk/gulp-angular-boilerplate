var UserService=function(API, $http, $auth, $rootScope, $q, API_URL, $window){
    var users={};

    users.one=function(userId){
        var deferred=$q.defer();
        API.one('user',userId).get().then(function(user){
            deferred.resolve(user);
        }, function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    };

    users.add=function(data){
        var deferred=$q.defer();
        API.all('user').post(data).then(function(response){
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        });
        return deferred.promise;
    };

    users.update=function(data){
        var deferred=$q.defer();
        $http({
            method:'PUT',
            url:API_URL+'/user',
            headers:{
                    'Authorization':'Basic '+$window.sessionStorage.token,
                    'Content-Type': 'application/json'
                },
                data:data
        }).then(function(response){
            console.log(response);
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        });
        //data.put();
        /*API.all('user').post(data).then(function(response){
            console.log(response);
            deferred.resolve(response);
        }, function(error){
            deferred.reject(error);
        });*/
        return deferred.promise;
    };

    users.list=function(){
        var deferred=$q.defer();

        API.all('user').getList().then(function(users){
            deferred.resolve(users);
        }, function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    return users;
};

UserService.$inject=['API', '$http', '$auth', '$rootScope', '$q', 'API_URL', '$window'];

module.exports=UserService;