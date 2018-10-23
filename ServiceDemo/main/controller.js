"use strict";
{
    angular.module('app')
        .controller('MainController', function(TestService, TestFactory){
            const $ctrl = this;
            $ctrl.text = TestService.testProperty;

            $ctrl.factoryTest = TestFactory.testProperty;
          
            
        });

}