angular.module('home').controller('EditprofileCtrl', function($scope, $state, movieService, $stateParams, $timeout) {
    $scope.user = {};
    //var userInfo = $stateParams.userInfo;
    if ($stateParams.userInfo) {
        $scope.user = {
            name: $stateParams.userInfo.name,
            email: $stateParams.userInfo.email,
            designation: $stateParams.userInfo.designation,
            phoneNumber: $stateParams.userInfo.phoneNumber,
            address: $stateParams.userInfo.address
        };
    }
    $scope.saveUpdateButton = 0;

    $scope.clearForm = function() {
        $scope.user = {};
        $scope.saveUpdateButton = 0;
        $scope.profileForm.$setPristine();
    };

    $scope.gotoUserProfilePage = function() {
        $state.go('profile');
        $scope.clearForm();
    };


    //Save profile data
    var getUserlocalStorageData = movieService.fillAuthData();
    $scope.showAlertMsg = false;
    $scope.editProfileData = function(data) {
        movieService.editUserInformation(getUserlocalStorageData.id, data).success(function(response) {
            if (response) {
                $scope.showAlertMsg = true;
                $scope.errorMsg = "Update Successfully";

                $timeout(function() {
                    $state.go('profile');
                }, 3000);
            } else {
                $scope.errorMsg = "Please fix the error";
            }
        }).error(function(error) {
            $scope.showAlertMsg = error;
        });

    };


    //Date picker functionality
    $scope.myDate = new Date();

    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());

    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());

    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };

});
