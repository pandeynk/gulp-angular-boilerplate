var angular=require('angular');

var RouteRun=require('./run/routes.run');

module.exports=angular.module('cadiq.run', [])
                .run(RouteRun);