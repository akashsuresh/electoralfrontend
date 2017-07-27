'use strict';

// Declare app level module which depends on views, and components
var electoralApp=angular.module('electoralApp',['ngRoute','gridshore.c3js.chart','ngMap']);
electoralApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    //$locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl: '/ElectoralDashboard/app/view1/view1.html',
        controller: 'ElectoralController',
        resolve: {
            data:function (electoralProvider) {
                return electoralProvider.getElectoral();
            }

        }
    }).when('/pc',{
        templateUrl: '/ElectoralDashboard/app/view2/view2.html',
        controller: 'ElectoralController',
        data:function (electoralProvider) {
            return electoralProvider.getElectoral();
        }
    });

    //$locationProvider.html5Mode(true);

}])

