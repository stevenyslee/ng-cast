angular.module('video-player')
  .service('youTube', function(q, max) {
    // $http({
    //   part: 'snippet',
    //   method: 'GET',
    //   url: 'https://www.googleapis.com/youtube/v3/search',
    //   maxResults: max || 5,
    //   q: q,
    //   type: 'video',
    //   key: window.YOUTUBE_API_KEY
    // }).then(function success(response) {
    //   console.log(response);
    // }, function error(response) {
    //   console.log(response);
    // });
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        maxResults: '5',
        part: 'id,snippet',
        q: this.query
      }
    })
    .success( function (data) {
      if (data.items.length === 0) {
        console.log(data);
      }
    })
    .error( function () {
      console.log('Search error');
    })
  });