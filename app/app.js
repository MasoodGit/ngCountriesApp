var ngCountryApp = angular.module('ngCountryApp',['ngRoute','ngAnimate']);

ngCountryApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl : 'home/home.tpl.html'
    })
    .when('/countryList',{
      templateUrl: 'countriesList/countryList.tpl.html',
      controller: 'countryListController.js'
    })
    .when('/countryDetails/:country',{
      templateUrl:'countryDetails/countryDetails.tpl.html'
      controller:'countryDetailsController.js'
    })
    .when('/error',{
      template:'<p>Error occured please refresh the page</p>'
    })
    .otherwise('/error');
}])
