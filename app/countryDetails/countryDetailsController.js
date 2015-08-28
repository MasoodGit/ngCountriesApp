(function () {
  'use strict';
  angular
    .module('ngCountryApp')
    .controller('countryDetailsController',countryDetailsController);

  countryDetailsController.$inject = ['$routeParams','$location','geoNamesService'];

  function countryDetailsController($routeParams,$location,geoNamesService) {
  /*jshint validthis: true */
    var vm = this;
    vm.countryCode = $routeParams.countryCode;
    vm.countryDetails = {};
    vm.capitalDetails = {};
    vm.neighboursList = {};
    init();

    function init() {
        geoNamesService.getCountryDetails(vm.countryCode)
          .then(getCapitalDetails)
          .then(getNeighbours)
          .then(updateNeighhours);
    }

    function getCapitalDetails(data) {
      vm.countryDetails = data;
      console.log('vm.countryDetails', vm.countryDetails);
      return geoNamesService.getCapitalDetails(vm.countryCode,vm.countryDetails.capital);
    }

    function getNeighbours(data) {
      vm.capitalDetails = data;
      console.log('vm.capitalDetails',vm.capitalDetails);
      return geoNamesService.getNeighbours(vm.countryDetails.geonameId);
    }

    function updateNeighhours (data) {
      vm.neighboursList = data;
      console.log('vm.neighboursList ',vm.neighboursList );
    }

    vm.gotoHome = function () {
      $location.path('/');
    };

    vm.gotoCountries = function() {
      $location.path('/countries');
    };
  }

})();
