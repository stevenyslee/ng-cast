angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },
  
    controller: function($scope, youTube) {
      this.input = '';
      
      this.result = () => {
        youTube.search(5, this.input, this.searchResults);
      };
    },
  
    // templateUrl: 'src/templates/search.html'
    template:
  `<div class="search-bar form-inline">
    <input class="form-control" type="text" ng-model="$ctrl.input"/>
    <button 
      class="btn"
      ng-click="$ctrl.result()"
      >
      <span class="glyphicon glyphicon-search"></span>
    </button>
  </div>`
  });
