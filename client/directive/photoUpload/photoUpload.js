angular.module('client').directive('photoUpload', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            Photo: '=ngModel',
            userId: '@',
            //contactUserId: '@',
            isEditProfile: '@'
        },
        templateUrl: 'directive/photoUpload/photoUpload.html',
        link: function (scope, element, attrs, fn) {


        },
        controller: function ($scope, FileUploader, $timeout, $mdDialog, movieService) {
            //console.log($scope.isEditProfile);
            $scope.uploadImage = '';
            $scope.getImageInfo = '';
            //clear image what we have upload
            $scope.cancelModel = function () {
                $scope.Photo = "";
                $mdDialog.hide();
            };
            //var uploader for uploading file
            $scope.uploader = new FileUploader({

            });

            //contain alert message when uploading the file
            $scope.uploadFileAlerts = [];

            //Remove the alert when the user clicks on the X mark.
            $scope.removeAlert = function (index) {
                $scope.uploadFileAlerts.splice(index, 1);
            };

            //function for calculate the file size
            function bytesToSize(bytes) {
                var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
                if (bytes === 0) {
                    return false;
                }
                var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
                if (i === 0) {
                    return bytes + ' ' + sizes[i];
                }
                return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
            }
            // image FILTERS
            $scope.uploader.filters.push({
                name: 'imageFilter',
                fn: function (item, options) {

                    var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                    if ('|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1) {
                        return true;
                    } else {
                        //add filter error Message
                        $scope.uploadFileAlerts.push({
                            type: 'danger',
                            msg: 'File format not allowed'
                        });
                        //Automatically remove the alert after 3 seconds.
                        $timeout(function () {
                            $scope.uploadFileAlerts.pop();
                        }, 5000);
                        return false;
                    }
                }
            });
            $scope.uploader.filters.push({
                name: 'imageSizeFilter',
                fn: function (item, options) {
                    //2097152 - file size 2 MB in bytes
                    if (item.size <= 2097152) { // file size should be less than or equal 2 MB
                        return true;
                    } else {

                        //add filter error Message
                        $scope.uploadFileAlerts.push({
                            type: 'danger',
                            msg: "can't upload image file size is " + bytesToSize(item.size)
                        });
                        //Automatically remove the alert after 3 seconds.
                        $timeout(function () {
                            $scope.uploadFileAlerts.pop();
                        }, 3000);
                        return false;
                    }

                }
            });

            //callbacks
            $scope.uploader.onAfterAddingFile = function (fileItem) {
                $scope.getImageInfo = fileItem._file;
                readImage(fileItem._file);
            };

            //function for read file information(dataUrl)
            function readImage(input) {
                if (input) {
                    var fileReader = new FileReader();
                    fileReader.onload = function (e) {
                        console.log(e);
                        $scope.uploadImage = e.target.result;
                        $scope.$apply();
                    };
                    fileReader.readAsDataURL(input);
                }
            }

            $scope.saveImage = function () {
                /*var userId;
                if ($scope.userId) {
                    userId = $scope.userId;
                } else {
                    userId = $scope.contactUserId;
                }*/
                var postData = {
                    id: $scope.userId,
                    fileName: $scope.getImageInfo.name,
                    url: $scope.uploadImage,
                    contentType: $scope.getImageInfo.type,
                    size: $scope.getImageInfo.size
                };
                if ($scope.isEditProfile) {
                    console.log($scope.isEditProfile);
                    movieService.updateUserImage($scope.userId, postData).success(function (response) {
                        $mdDialog.hide();
                    }).error(function (error) {
                        console.log(error);
                    });
                } else {
                    console.log($scope.isEditProfile);
                    movieService.saveUserImage(postData).success(function (response) {
                        $mdDialog.hide();
                    }).error(function (error) {
                        console.log(error);
                    });
                }
            };
        }
    };
});
