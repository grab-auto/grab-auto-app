'use strict';

/**
 * @ngdoc function
 * @name grabAutoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grabAutoAppApp
 */
angular.module('grabAutoAppApp')
  .controller('MainCtrl', ['$scope','$http', function ($scope, $http) {
    $('#loader').show();
    $http.get('http://grabauto1.happeeapps.com/cars/browse/12').success(function(data) {
      $('#loader').hide();
      $scope.cars = data;
    });

    $scope.setCarID = function (id) {
      $('#loader-modal').show();
      $('#car-info-modal').hide();
      $scope.carinfo = null;
      $http.get('http://grabauto1.happeeapps.com/cars/'+id).success(function(data) {
          $('#loader-modal').hide();
          $('#car-info-modal').show();
          $scope.carinfo = data;
      });
    }

    $scope.setPrice = function(price) {
      return "$"+price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  }]);
