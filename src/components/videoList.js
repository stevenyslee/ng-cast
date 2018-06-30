angular.module('video-player')

// import {exampleVideoData} from 'src/data/exampleVideoData.js';

.component('videoList', {
  bindings: {
    videos: '<'
  },
  
  controller: function() {
    
  },
  
  template:
  `<ul class="video-list" >
    <video-list-entry
      video="data"
      ng-repeat="data in $ctrl.videos"
    />
  </ul>`
});