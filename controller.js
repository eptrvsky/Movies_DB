/**
 * Created by Evgeny on 20.06.2016.
 */
var myApp = angular.module('myApp',[]);


myApp.controller('movController',function($scope,$http) {
    ApiKey = "api_key=dfe45e831646692a7be41b407f614d63";
    $scope.URLPoster = "http://image.tmdb.org/t/p/w185/";


    $scope.fetch = function () {
        $http.get("http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&" + ApiKey).then(
            function (response) {
                $scope.status = response.status;
                $scope.data = response.data.results;
            }, function (rejection) {
                $scope.data = "Request failed";
                $scope.status = rejection.status;
            }
        );

    };
});


