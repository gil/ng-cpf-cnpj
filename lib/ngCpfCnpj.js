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
          ctrl.$parsers.unshift(function (viewValue) {
            var value = viewValue.replace(/\D/g, "");
            if (CPF.isValid(value) || !value) {
              ctrl.$setValidity('cpf', true);
              return viewValue;
            } else {
              ctrl.$setValidity('cpf', false);
              return undefined;
            }
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
          ctrl.$parsers.unshift(function (viewValue) {
            var value = viewValue.replace(/\D/g, "");
            if (CNPJ.isValid(value) || !value) {
              ctrl.$setValidity('cnpj', true);
              return viewValue;
            } else {
              ctrl.$setValidity('cnpj', false);
              return undefined;
            }
          });
        }

      };
    });
  }

})(this);
