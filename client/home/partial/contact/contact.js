angular.module('home').controller('ContactCtrl', function($scope, $state, movieService) {

    $scope.addNewContact = function() {
        $state.go('contactEdit');
    };

    //Get contact info
    $scope.getContactList = function() {
        movieService.getContactInfo().success(function(response) {
            $scope.contacts = response;
        }).error(function(error) {
            console.log(error);
        });
    };
    $scope.getContactList();

    //Edit contact data
    $scope.editContact = function(data) {
        movieService.getContactDataById(data).success(function(response) {
            if (response) {
                $state.go('contactEdit', {
                    'contactEditData': response,
                    'id': data
                });
            }
        }).error(function(error) {
            console.log(error);
        });
    };

    $scope.deleteContact = function(item) {
        movieService.deleteContactInfo(item).success(function(response) {
            console.log(response);
            $scope.getContactList();
        }).error(function(error) {
            console.log(error);
        });
    };
});
