(function () {
  'use strict';
  angular
    .module('ngCountryApp')
    .controller('countryListController',countryListController);

  countryListController.$inject = ['$location','geoNamesService'];

  function countryListController($location,geoNamesService) {
    var vm = this;
    vm.countries = [];

    init();

    function init () {
        return geoNamesService.getCountries().then(function(data) {
          vm.countries = data.geonames;
          return vm.countries;
        });
    }

    vm.gotoHome = function() {
      $location.path('/');
    };

    vm.gotoCountryDetails = function(countryCode) {
      var path = '/countries/' + countryCode;
      $location.path(path);
    };

  }
})();