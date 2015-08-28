(function () {
  'use strict';
  angular
    .module('ngCountryApp',['ngRoute','ngAnimate'])
    .config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl : 'home/home.tpl.html'
      })
      .when('/countries',{
        templateUrl: 'countriesList/countryList.tpl.html',
        controller: 'countryListController',
        controllerAs: 'countriesCtrl'
      })
      .when('/countries/:country',{
        templateUrl: 'countryDetails/countryDetails.tpl.html',
        controller: 'countryDetailsController',
        controllerAs: 'countryDetailsCtrl'
      })
      .when('/error',{
        template:'<p>Error occured please refresh the page</p>'
      })
      .otherwise('/error');
  }]);

})();
