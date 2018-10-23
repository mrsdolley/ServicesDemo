"use strict";
{
    angular.module('app')
        .service('TestService', function(){
           
          const service = this;
          service.testProperty = 'this is a test';
          //or - this.testProperty = 'thisis a test', instead of using a variable.  
        });

}