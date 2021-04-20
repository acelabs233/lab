var app = angular.module('app',['ngRoute']);
 

 app.config( function($routeProvider){
     $routeProvider.when('/first-msg', {
         template:'<b><h2>this is template</h2></b>'
     }).when('/second-msg', {
        template:'<b><h2>this is aaaaaaaaaaaa template</h2></b>'
    }).when('/', {
        template:'<b><h2>Home</h2></b> <a href=\'#!first-msg\'>sdsdas</a><br><a href=\'#!second-msg\'>sdsdas</a>'
    })
 });