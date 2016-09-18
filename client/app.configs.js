var angular=require('angular');

var RoutesConfig=require('./configs/routes.config');

module.exports=angular.module('cadiq.configs', [])
  .config(RoutesConfig);