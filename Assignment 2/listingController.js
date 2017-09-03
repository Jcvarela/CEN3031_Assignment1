angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = {};
    var INFO = "Detailed Information";
    $scope.detailedInfo.title = INFO;
    var itemsToRemove = [];

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function(){
        $scope.listings.unshift($scope.newItem);
    };

     var isButtonDisable = function(check){
         if(check){
             itemsToRemove = [];
             $("#deleteButton").prop("disabled", true);
             $("#cancelButton").prop("disabled", true);
         }else {
             $("#deleteButton").prop("disabled", false);
             $("#cancelButton").prop("disabled", false);
         }
     };

    $scope.canceldeleteListing = function(){
        for(var i =0; i < $scope.listings.length; i++) {
            if($scope.listings[i].check){
                $scope.listings[i].check = false;
            }
        }
        isButtonDisable(true);
    };

    $scope.deleteListing = function() {
        for(var i =0; i < $scope.listings.length; i++) {
           if($scope.listings[i].check){
               $scope.listings.splice(i,1);
               i--;
           }
        }
        isButtonDisable(true);
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
    $scope.openNewItemModel = function(){
          $scope.newItem = {};
      };
      $scope.checkChange = function(index){
          if(index < 0 || index > $scope.listings.length)
              return;

          if(itemsToRemove[index] === 1){
              itemsToRemove.splice(index, 1);
          }
          else {
              itemsToRemove[index] = 1;
          }

          isButtonDisable(!(itemsToRemove.length > 0));
      };
}
]);

