var angular=require('angular');

var APIService=require('./services/API.service');
var AuthenticationService=require('./services/auth.service');
var ContextService=require('./services/context.service');
var UserService=require('./components/user/user.service');

module.exports=angular.module('cadiq.services', [])
    .factory('API', APIService)
    .factory('$auth', AuthenticationService)
    .factory('ContextService', ContextService)
    .factory('UserService', UserService);
