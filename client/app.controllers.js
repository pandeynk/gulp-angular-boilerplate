var angular=require('angular');

var LoginController=require('./components/login/login.controller');
var HeaderController=require('./components/header/header.controller');
var UserListController=require('./components/user/user-list/user-list.controller');
var UserAddController=require('./components/user/user-add/user-add.controller');
var UserEditController=require('./components/user/user-edit/user-edit.controller');

module.exports=angular.module('cadiq.controllers', [])
    .controller('LoginController', LoginController)
    .controller('UserListController', UserListController)
    .controller('UserAddController', UserAddController)
    .controller('UserEditController', UserEditController)
    .controller('HeaderController', HeaderController);