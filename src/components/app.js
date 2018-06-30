angular.module('video-player')
.component('app', {
  bindings: {
  },
  
  controller: function() {
    this.currentVideo = window.exampleVideoData[0];
    this.videos = window.exampleVideoData;
    
    this.selectVideo = () => {};
    this.searchResults = () => {};
    
    
  },
  
  // templateUrl: 'src/templates/app.html'
  template:
    `<div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search />
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player video='$ctrl.currentVideo'/>
        </div>
        <div class="col-md-5">
          <video-list videos='$ctrl.videos' />
        </div>
      <div>
    </div>`
});
