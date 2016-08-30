var jQuery = window.$ = require('jquery');
var angular = require('angular');
//require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-route');
require('angular-recursion');
require('./app.services');
require('./app.controllers');
require('./app.filters');
require('./app.directives');


angular.module('gulp-app', [
        'ngRoute',
        'ui.bootstrap',
        'RecursionHelper',
        'app.filters',
        'app.services',
        'app.controllers',
        'app.directives'
    ])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "./templates/insurance/insurance-company-add/insurance-company-add.view.html",
            controller: "InsuranceCompanyAddController",
            controllerAs: "ins"
        });
    });
