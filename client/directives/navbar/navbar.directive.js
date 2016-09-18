var NavbarDirective = function($rootScope, API, $window) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            collection: '='
        },
        templateUrl: ""
    }
};

NavbarDirective.$inject=['$rootScope', 'API', '$window'];

module.exports = NavbarDirective;