/* global angular, CPF, CNPJ */
(function(window){

  'use strict';

  var module = angular.module('ngCpfCnpj', []);

  if( window.CPF ) {

    module.directive('ngCpf', function() {
      return {

        restrict: 'A',

        require: 'ngModel',

        link: function(scope, elm, attrs, ctrl) {
          scope.$watch(attrs.ngModel, function(newVal, oldVal) {
            ctrl.$setValidity( 'cpf', CPF.isValid(newVal) );
          });
        }

      };
    });
  }

  if( window.CNPJ ) {

    module.directive('ngCnpj', function() {
      return {

        restrict: 'A',

        require: 'ngModel',

        link: function(scope, elm, attrs, ctrl) {
          scope.$watch(attrs.ngModel, function(newVal, oldVal) {
            ctrl.$setValidity( 'cnpj', CNPJ.isValid(newVal) );
          });
        }

      };
    });
  }

})(this);