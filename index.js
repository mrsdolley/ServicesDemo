"use strict"; 
{ 
    angular.module('app', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<main></main>'
                })
                .when('/secondary', {
                    template: '<secondary></secondary>'
                })
                .otherwise({
                    template: '<h1>404 This page doesnt exist<h1>'
                })
        });
} 