angular.module('login').controller('RegistrationCtrl', function ($scope, $state, movieService, $timeout) {
    $scope.user = {};
    $scope.alertMsg = '';
    $scope.gotoLoginPage = function () {
        $state.go('userLogin');
    };

    $scope.saveRegistrationForm = function (data, event) {
        // event.preventDefault();
        movieService.postRegistrationForm(data).success(function (response, status) {
            if (status === 200) {
                $scope.alertMsg = "Your Registration has successful.Please login";
                $timeout(function () {
                    $state.go('userLogin');
                }, 3000);
            }
        }).error(function (error) {
            $scope.alertMsg = error;
        });
    };
});
