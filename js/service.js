angular.module('sounder').service('soundService', function ($http, $q) {
  var url = 'http://api.soundcloud.com/users/';
  this.getUserTracks = function (user) {
    var deferred = $q.defer();
    $http.get(url + user + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e').then(function (response) {
      deferred.resolve(response.data);
    })
    return deferred.promise;
  }
})
