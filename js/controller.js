angular.module('sounder').controller('MainController', function ($scope, soundService) {
  $scope.getUser = function () {
    soundService.getUserTracks($scope.username).then(function (data) {
      $scope.username = '';
      $scope.userTracks = data;
    })
  }

  $scope.play = function (track_url){
    SC.oEmbed(track_url, { auto_play: true }, function(oembed) {
      debugger;
      $scope.$apply($scope.iFrame = $sce.trustAsHtml(oembed.html));
    });
  }

})