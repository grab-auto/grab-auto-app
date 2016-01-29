'use strict';

/**
 * @ngdoc overview
 * @name grabAutoAppApp
 * @description
 * # grabAutoAppApp
 *
 * Main module of the application.
 */
angular
  .module('grabAutoAppApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/showinfo', {
        templateUrl: 'views/showinfo.html',
        controller: 'ShowinfoCtrl',
        controllerAs: 'showinfo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
