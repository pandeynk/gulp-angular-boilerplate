var jQuery = window.$ = require('jquery');
var angular = require('angular');
//require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-route');
require('./app.services');
require('./app.controllers');
require('./app.filters');


angular.module('gulp-app', [
        'ngRoute',
        'ui.bootstrap',
        'app.filters',
        'app.services',
        'app.controllers'
    ])
    .config(function($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: "./templates/insurance/insurance-company-add/insurance-company-add.view.html",
            controller: "InsuranceCompanyAddController",
            controllerAs: "ins"
        });
    });
