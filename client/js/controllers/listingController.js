angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
    function ($scope, Listings) {
        /* Get all the listings, then bind it to the scope */
        var setTable = function () {
            Listings.getAll().then(function (response) {
                $scope.listings = response.data;
            }, function (error) {
                console.log('Unable to retrieve listings:', error);
            });
        };
        setTable();

        $scope.detailedInfo = undefined;

        $scope.addListing = function () {

            var str = "?" +jQuery.param( $scope.newListing );
            Listings.save($scope.newListing)
                .then(function(res){

                }).catch(function(err){
                setTable();
                console.log('Unable to save Listing', err);
            });
            $scope.listings.push($scope.newListing);
            $scope.newListing = {};
        };

        $scope.deleteListing = function (index) {
            Listings.delete($scope.listings[index]._id)
                .then(function(){
                }, function(err){
                    setTable();
                    console.log('Unable to delete Listing', err);
                });
            $scope.listings.splice(index, 1);
        };

        $scope.showDetails = function (index) {
            $scope.detailedInfo = $scope.listings[index];
        };
    }
]);