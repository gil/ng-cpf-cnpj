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
                        if ( newVal == null ) {
                            ctrl.$setValidity( 'cpf', true );
                            return;
                        }

                        var cleanVal = newVal.replace(/[^0-9]+/g,"");
                        if ( cleanVal == "" ) return;

                        console.log(" cleanVal =%o ", cleanVal);
                        ctrl.$setValidity( 'cpf', CPF.isValid(cleanVal) );
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
                        if ( newVal == null ) {
                            ctrl.$setValidity( 'cpf', true );
                            return;
                        }

                        var cleanVal = newVal.replace(/[^0-9]+/g,"");
                        if ( cleanVal == "" ) return;

                        ctrl.$setValidity( 'cnpj', CNPJ.isValid(cleanVal) );
                    });
                }

            };
        });
    }

})(this);
