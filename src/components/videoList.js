angular.module('video-player')

// import {exampleVideoData} from 'src/data/exampleVideoData.js';

  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
  
    controller: function() {
    
    },
  
    template:
  `<ul class="video-list" >
    <video-list-entry
      on-click="$ctrl.onClick"
      video="data"
      ng-repeat="data in $ctrl.videos"
    />
  </ul>`
  });