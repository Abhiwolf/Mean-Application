angular.module('home').controller('ProfileCtrl', function ($scope, $state, movieService, $mdDialog) {

    $scope.userImage = false;
    //Get userProfile data
    var getUserlocalStorageData = movieService.fillAuthData();
    //Get profile image
    movieService.getUserImageInfo(getUserlocalStorageData.id).success(function (response) {
        if (!_.isEmpty(response)) {
            $scope.userImage = true;
            //$scope.userId = response._id;
            $scope.myImage = response.url;
        }
    }).error(function (error) {
        console.log(error);
    });
    $scope.gotoEditProfile = function (data) {
        console.log(data);
        $state.go('editProfile', {
            userInfo: data
        });
    };

    movieService.getUserInformation(getUserlocalStorageData.id).success(function (response) {
        $scope.userId = response._id;
        $scope.userInfo = response;
    }).error(function (error) {
        console.log(error);
    });

    $scope.customFullscreen = false;

    $scope.saveContactImg = function (ev) {
        $mdDialog.show({
                controller: DialogController,
                scope: $scope.$new(),
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    $scope.editPhoto = false;
    //Edit profile picture
    $scope.editContactImg = function (ev) {
        $scope.editPhoto = true;
        $mdDialog.show({
                controller: DialogController,
                scope: $scope.$new(),
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

});
