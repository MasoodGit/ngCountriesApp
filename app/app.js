(function () {
  'use strict';
  angular
    .module('ngCountryApp')
    .controller('appController',appController);

  appController.$inject = ['$location'];

  function appController($location) {
    var vm = this;

    vm.gotocountries = function(){
      $location.path('/countries');
    };
  }
})();