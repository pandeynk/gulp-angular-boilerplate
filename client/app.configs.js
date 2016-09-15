var angular=require('angular');

var RoutesConfig=require('./configs/routes.config');

module.exports=angular.module('app.configs', [])
  .config(RoutesConfig);