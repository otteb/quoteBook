angular.module('quoteBook').controller('mainCtrl', function($scope, mainService){
  $scope.test = 'This app is working';
  $scope.quotes = mainService.getQuotes();
  $scope.removeQuote = function(quoteToRemove){return mainService.removeQuote(quoteToRemove)};


  $scope.addQuote = function(newestQuote){
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newAuthor
    }
    if(mainService.addQuote(newQuote))
    {
      $scope.newQuoteText = null;
      $scope.newAuthor = null;
    }

    return mainService.addQuote(newestQuote)};

});
