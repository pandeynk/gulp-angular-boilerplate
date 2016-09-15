var angular=require('angular');

var RouteRun=require('./run/routes.run');

module.exports=angular.module('app.run', [])
                .run(RouteRun);