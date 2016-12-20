angular.module('home').controller('ContacteditCtrl', function ($scope, $mdDialog, movieService, $state, $stateParams) {

    //console.log($stateParams.contactEditData);
    $scope.contact = {};
    $scope.contactInfo = $stateParams.contactEditData;
    $scope.userImage = false;
    $scope.customFullscreen = false;
    $scope.modalRequire = false;

    $scope.gotoContact = function () {
        $state.go('contact');
    };
    if ($stateParams.contactEditData) {
        $scope.contact = {
            name: $scope.contactInfo.name,
            mobile: $scope.contactInfo.mobile,
            email: $scope.contactInfo.email,
            designation: $scope.contactInfo.designation,
            address: $scope.contactInfo.address
        };
        $scope.saveUpdateButton = true;
    } else {
        $scope.saveUpdateButton = false;
        $scope.contact = {};
    }

    //Get Contact Images
    movieService.getUserImageInfo($stateParams.contactEditData._id).success(function (response) {
        if (!_.isEmpty(response)) {
            $scope.userImage = true;
            $scope.myImage = response.url;
        }
    }).error(function (error) {
        console.log(error);
    });

    $scope.saveContactImg = function (ev) {
        $mdDialog.show({
                controller: Dialog2Controller,
                scope: $scope.$new(),
                templateUrl: 'dialog2.tmpl.html',
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
    $scope.editContactImg = function (ev) {
        $scope.editPhoto = true;
        $mdDialog.show({
                controller: Dialog2Controller,
                scope: $scope.$new(),
                templateUrl: 'dialog2.tmpl.html',
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

    function Dialog2Controller($scope, $mdDialog) {
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

    //Save Contact form
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

    $scope.onlyWeekendsPredicate = function (date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    };

    $scope.clearForm = function () {
        $scope.contact = {};
        $scope.saveUpdateButton = false;
        $scope.contactEditForm.$setPristine();
    };

    $scope.saveContactData = function (data) {
        console.log(data);
        if ($scope.saveUpdateButton === false) {
            console.log(data);
            movieService.saveContactInfo(data).success(function (response) {
                console.log(response);
            }).error(function (error) {
                console.log(error);
            });
        } else {
            console.log(data);
            movieService.updateContactInfo($scope.contactInfo._id, data).success(function (response) {
                console.log(response);
            }).error(function (error) {
                console.log(error);
            });
        }
    };
});
