/* global angular, CPF, CNPJ */
(function(window){

  'use strict';

  var module = angular.module('ngCpfCnpj', []);

  if( window.CPF ) {

    module.directive('ngCpf', function($parse) {
      return {

        restrict: 'A',

        require: 'ngModel',

        link: function(scope, elm, attrs, ctrl) {
          if(!attrs.ngRequired){
              scope.$watch(attrs.ngModel, function(newVal, oldVal) {
                ctrl.$setValidity( 'cpf', CPF.isValid(newVal) );
              });
            }else{
              scope.$watch(attrs.ngRequired, function(newVal, oldVal) {
                if(newVal){
                  scope.$watch(attrs.ngModel, function(newVal, oldVal) {
                    ctrl.$setValidity( 'cpf', CPF.isValid(newVal) );
                  });
                }else{
                  ctrl.$setValidity('cpf', true); 
                }
              });
            }
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
          if(!attrs.ngRequired){
            scope.$watch(attrs.ngModel, function(newVal, oldVal) {
              ctrl.$setValidity( 'cnpj', CNPJ.isValid(newVal) );
            });
          }else{
            scope.$watch(attrs.ngRequired, function(newVal, oldVal) {
              if(newVal){
                scope.$watch(attrs.ngModel, function(newVal, oldVal) {
                  ctrl.$setValidity( 'cnpj', CNPJ.isValid(newVal) );
                });
              }else{
                ctrl.$setValidity('cnpj', true); 
              }
            });
          }
          
        }

      };
    });
  }

})(this);
