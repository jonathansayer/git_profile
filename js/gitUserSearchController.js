// githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {
// var self = this;

//   self.doSearch = function() {
//     var searchResource = $resource('https://api.github.com/search/users');
//     self.searchResult = searchResource.get(
//       { q: self.searchTerm }
//     );
//   };
// }]);

githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data;
      })
  };
}]);