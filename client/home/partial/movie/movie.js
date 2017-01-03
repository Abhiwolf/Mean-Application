angular.module('home').controller('MovieCtrl', function ($scope, movieService) {

    $scope.saveUpdateButton = 0;
    $scope.isAddNewMovieBtnClick = false;
    $scope.movie = {};

    function getAllMovieName() {
        movieService.getMovieName().success(function (response) {
            $scope.movies = response;
        }).error(function (error) {
            console.log(error);
        });
    }
    getAllMovieName();


    $scope.addNewMovie = function () {
        $scope.isAddNewMovieBtnClick = ($scope.isAddNewMovieBtnClick === false) ? true : false;
        $scope.clearForm();
        //$scope.clearForm();
    };

    /***-------clear form field------***/
    $scope.clearForm = function () {
        $scope.movie = {};
        $scope.saveUpdateButton = 0;
        $scope.movieForm.$setPristine();
    };

    $scope.editMovieValue = function (data) {
        $scope.saveUpdateButton = 1;
        $scope.isAddNewMovieBtnClick = ($scope.isAddNewMovieBtnClick === false) ? true : false;
        console.log(data);
        $scope.movie = {
            id: data._id,
            title: data.title,
            url: data.url
        };
    };

    //post and update movie data
    $scope.postMovieData = function (data) {
        console.log(data);
        if (!_.isEmpty(data)) {
            if ($scope.saveUpdateButton === 0) {
                movieService.saveMovieName(data).success(function (response) {
                    getAllMovieName();
                    $scope.isAddNewMovieBtnClick = false;
                    $scope.saveUpdateButton = 0;
                    $scope.clearForm();
                }).error(function (error) {
                    console.log(error);
                });
            } else {
                movieService.updateMovie(data, data.id).success(function (response) {
                    getAllMovieName();
                    $scope.isAddNewMovieBtnClick = false;
                    $scope.saveUpdateButton = 0;
                    $scope.clearForm();
                }).error(function (error) {
                    console.log(error);
                });

            }
        }
    };

    //Delete movie name from table
    $scope.delete = function (data) {
        movieService.deleteMovie(data._id).success(function (response) {
            getAllMovieName();
        }).error(function (error) {
            console.log(error);
        });
    };

});
