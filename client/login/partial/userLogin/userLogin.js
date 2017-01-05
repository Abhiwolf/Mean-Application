angular.module('login').controller('UserloginCtrl', function($scope, movieService, $state) {

    $scope.authData = {};
    $scope.dologin = function(formData) {
        console.log(formData);
        $scope.authData.errorMessage = '';
        movieService.login(formData).success(function(resp, status) {
            var localStorageData = movieService.fillAuthData();
            console.log(localStorageData);
            if (resp) {
                $scope.$emit('passingAuthData', {
                    message: localStorageData
                });
                $state.go('movie');
            } else {
                $scope.authData.errorMessage = "Username or password is not correct. Please try later.";
            }
        }).error(function(err) {
            $scope.authData.errorMessage = "Unknown error while trying to authenticate. Please try again.";
        });
    };


    //Registration form
    $scope.registration = function() {
        $state.go('registration');
    };
});
