angular.module('video-player')

  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<'
    },
  
    controller: function($scope) {

    },
  
    // templateUrl: 'src/templates/videoListEntry.html'
    template:
    `<li class="video-list-entry media">
      <div class="media-left">
        <img class="media-object" ng-src={{$ctrl.video.snippet.thumbnails.default.url}} />
      </div>
      <div class="media-body">
        <div
          ng-click="$ctrl.onClick($ctrl.video)"
          class="video-list-entry-title">{{$ctrl.video.snippet.title}}</div>
        <div class="video-list-entry-detail">{{$ctrl.video.snippet.description}}</div>
      </div>
    </li>`
  });


