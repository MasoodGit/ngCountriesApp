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
      getCountryDetails : getCountryDetails,
      getCapitalDetails : getCapitalDetails,
      getNeighbours : getNeighbours
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

    function getCountryDetails(countryCode) {
      console.log('country details');
      var deferred = $q.defer();
      var config = {
        url : 'http://api.geonames.org/countryInfo?type=json&username=masoodalam78&country=' + countryCode ,
        method: 'GET',
        data:''
      };
      $http(config)
        .then(function(response) {
          deferred.resolve(response.data.geonames[0]);
        },function(responseErr) {
          deferred.reject(responseErr);
        });
      return deferred.promise;
    }

    function getNeighbours(geonameId) {
      console.log('getNeighbours');
      var deferred = $q.defer();
      var config = {
        url : 'http://api.geonames.org/neighboursJSON?username=masoodalam78&geonameId=' + geonameId ,
        method: 'GET',
        data:''
      };
      $http(config)
        .then(function(response) {
          deferred.resolve(response.data.geonames);
        },function(responseErr) {
          deferred.reject(responseErr);
        });
      return deferred.promise;
    }

    function getCapitalDetails(countryCode,capitalName) {
      console.log('getCapitalDetails');
      var deferred = $q.defer();
      var config = {
        url : 'http://api.geonames.org/searchJSON?username=masoodalam78&q=' +
              capitalName + '&name_equals=' + capitalName +
              '&isNameRequired=true&country=' + countryCode ,
        method: 'GET',
        data:''
      };
      $http(config)
        .then(function(response) {
          deferred.resolve(response.data.geonames[0]);
        },function(responseErr) {
          deferred.reject(responseErr);
        });
      return deferred.promise;
    }

  }
})();