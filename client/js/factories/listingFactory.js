angular.module('listings', []).factory('Listings', function ($http) {
    var methods = {
        getAll: function () {
            return $http.get('http://localhost:8080/api/listings');
        },
        delete: function (id) {
            return $http.delete('http://localhost:8080/api/listings/' + id);
        },
        save: function(listing){
            return $http.post('http://localhost:8080/api/listings/').send(listing);
        }
    };

    return methods;
});