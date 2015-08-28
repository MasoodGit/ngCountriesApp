(function () {
  'use strict';
  angular
    .module('ngCountryApp')
    .controller('appController',appController);

  appController.$inject = ['$location'];

  function appController($location) {
    var vm = this;

    vm.gotoCountries = function(){
      $location.path('/countries');
    };
  }
})();