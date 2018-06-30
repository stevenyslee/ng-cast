angular.module('video-player')
  .component('app', {
    bindings: {
      
    },
  
    controller: function() {
      this.currentVideo = window.exampleVideoData[0];
      this.videos = window.exampleVideoData;
    
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (videos) => {
        this.currentVideo = videos[0];
        this.videos = videos;
      };
      
    },
  
    // templateUrl: 'src/templates/app.html'
    template:
    `<div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search search-results=$ctrl.searchResults />
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video='$ctrl.currentVideo'/>
        </div>
        <div class="col-md-5">
          <video-list
            videos='$ctrl.videos'
            on-click="$ctrl.selectVideo"
            />
        </div>
      <div>
    </div>`
  });
