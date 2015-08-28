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
    console.log('after init func');
    function init () {
       geoNamesService.getCountries().then(function(data) {
          vm.countries = data.geonames;
          console.log('done loading....');
          //return vm.countries;
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