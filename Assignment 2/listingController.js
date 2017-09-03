angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {};
    var INFO = "Detailed Information";
    $scope.detailedInfo.title = INFO;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(newFactory){
        $scope.listings.push(newFactory);
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };
    $scope.showDetails = function(index) {
        $scope.detailedInfo = {};
      if(index === -1 || index >= $scope.listings.length){
        $scope.detailedInfo.title = INFO;
      }
      else{
        var temp = $scope.listings[index];
        $scope.detailedInfo.title = temp.name + " (" + temp.code + ")";
        if(temp.address) {
            $scope.detailedInfo.address = "Address: " + temp.address;
        }
        if(temp.coordinates) {
            $scope.detailedInfo.coordinates = "Coordinates: ";
            $scope.detailedInfo.latitude = "=>  Latitude: " + temp.coordinates.latitude;
            $scope.detailedInfo.longitude = "=>  Longitude: " + temp.coordinates.longitude;
        }
      }
    };
  }
]);

