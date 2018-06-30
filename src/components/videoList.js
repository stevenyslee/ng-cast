angular.module('video-player')

// import {exampleVideoData} from 'src/data/exampleVideoData.js';

  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
  
    controller: function() {
    
    },
    
    templateUrl: 'src/templates/videoList.html'

  });