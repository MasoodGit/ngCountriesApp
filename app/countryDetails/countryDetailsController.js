(function () {
  'use strict';
  angular
    .module('ngCountryApp')
    .controller('countryDetailsController',countryDetailsController);

  countryDetailsController.$inject = ['$q','$routeParams','$location','geoNamesService'];

  function countryDetailsController($q,$routeParams,$location,geoNamesService) {
  /*jshint validthis: true */
    var vm = this;
    vm.countryCode = $routeParams.countryCode;
    vm.countryDetails = {};
    vm.capitalDetails = {};
    vm.neighboursList = {};
    // init().then(function() {
    //   console.log('hello resolved');
    // });
    init();

    function init() {
        geoNamesService.getCountryDetails(vm.countryCode)
          .then(getCapitalDetails)
          .then(getNeighbours)
          .then(updateNeighhours);
          
        // var promise = geoNamesService.getCountryDetails(vm.countryCode);
        // var capitalDetails = geoNamesService.getCapitalDetails(vm.countryCode,vm.countryDetails.capital);
        // var neighbours = geoNamesService.getNeighbours(vm.countryDetails.geonameId);
        // var update = updateNeighhours();
        // $q.all([promise,capitalDetails,neighbours,update]).then(function(responses){
        //   console.log('response-0' , responses[0]);
        //   console.log('response-1' , responses[1]);
        //   console.log('response-2' , responses[2]);
        //   console.log('response-3' , responses[3]);

        // });;
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
