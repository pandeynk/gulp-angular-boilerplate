var jQuery = window.$ = require('jquery');
var angular = require('angular');
//require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('angular-recursion');
require('restangular');
require('./app.configs');
require('./app.run');
require('./app.services');
require('./app.controllers');
require('./app.filters');
require('./app.directives');


angular.module('gulp-app', [
        'ui.router',
        'ui.bootstrap',
        'RecursionHelper',
        'restangular',
        'app.configs',
        'app.run',
        'app.filters',
        'app.services',
        'app.controllers',
        'app.directives'
    ]);
