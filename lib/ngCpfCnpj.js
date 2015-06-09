/* global angular, CPF, CNPJ */
(function(window){

  'use strict';

  var module = angular.module('ngCpfCnpj', []);

  function applyValidator(validator, validatorName, ctrl) {

    if( ctrl.$validators ) {

      // Angular >= 1.3
      ctrl.$validators[validatorName] = function(modelValue, viewValue) {
        var value = modelValue || viewValue;
        return (validator.isValid(value) || !value);
      };

    } else {

      // Angular <= 1.2
      ctrl.$parsers.unshift(function (viewValue) {
        var value = viewValue.replace(/\D/g, "");
        var valid = validator.isValid(value) || !value;
        ctrl.$setValidity(validatorName, valid);
        return (valid ? viewValue : undefined);
      });

    }
  }

  if( window.CPF ) {

    module.directive('ngCpf', function() {
      return {

        restrict: 'A',

        require: 'ngModel',

        link: function(scope, elm, attrs, ctrl) {
          applyValidator(CPF, "cpf", ctrl);
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
          applyValidator(CNPJ, "cnpj", ctrl);
        }

      };
    });
  }

})(this);
