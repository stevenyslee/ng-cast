angular.module('video-player')
.service('youTube', function(q, max){
  $http({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    maxResults: max || 5,
    q: q,
    type: 'video'
  }).then(function success(response) {
    console.log(response);
  }, function error(response) {
    console.log(response);
  });
});
