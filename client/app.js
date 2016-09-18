var angular = require('angular');
//require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('angular-recursion');
require('restangular');
require('dotenv');
require('./app.constants');
require('./app.configs');
require('./app.run');
require('./app.services');
require('./app.controllers');
require('./app.filters');
require('./app.directives');


angular.module('cadiq', [
        'ui.router',
        'ui.bootstrap',
        'RecursionHelper',
        'restangular',
        'cadiq.constants',
        'cadiq.configs',
        'cadiq.run',
        'cadiq.filters',
        'cadiq.services',
        'cadiq.controllers',
        'cadiq.directives'
    ]);
