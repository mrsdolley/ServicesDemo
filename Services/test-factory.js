"use strict";
{
    angular.module('app')
        .factory('TestFactory', function(){
           
          return{
              testProperty: 'this is another test'
          }
        });

}