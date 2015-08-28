(function () {
  'use strict';
  angular
    .module('ngCountryApp')
    .factory('geoNamesService',geoNamesService);

  geoNamesService.$inject = ['$http','$q'];

  function geoNamesService($http,$q) {
    var userName = 'masoodalam78';

    var service = {
      getCountries : getCountries,
      getCountryDetails : getCountryDetails
    };

    return service;

    function getCountries() {

      var deferred = $q.defer();
      var config = {
        url : 'http://api.geonames.org/countryInfo?type=json&username=masoodalam78',
        method: 'GET',
        data: '',
      };
      var data = localStorage.getItem('countries');
      if( data !== null ) {
        deferred.resolve(JSON.parse(data));
      } else {
        $http(config)
          .then(function(response) {
            localStorage.setItem('countries',JSON.stringify(response.data));
            deferred.resolve(response.data);
          },function() {
            return deferred.reject();
          });
      }
      return deferred.promise;
    } // end of getCountries

    function getCountryDetails() {
      console.log('country details');
    }

  }
})();