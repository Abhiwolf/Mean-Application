angular.module('home').controller('ContactCtrl', function($scope, $state, movieService) {

    $scope.addNewContact = function() {
        $state.go('contactEdit');
    };

    //Get contact info
    function getContactList() {
        movieService.getContactInfo().success(function(response) {
            $scope.contacts = response;
        }).error(function(error) {
            console.log(error);
        });
    }
    getContactList();

    //Edit contact data
    $scope.editContact = function(data) {
        movieService.getContactDataById(data._id).success(function(response) {
            if (response) {
                $state.go('contactEdit', {
                    'contactEditData': response,
                    'id': data._id
                });
            }
        }).error(function(error) {
            console.log(error);
        });
    };

    $scope.deleteContact = function(item) {
        movieService.deleteContactInfo(item._id).success(function(response) {
            console.log(response);
            getContactList();
        }).error(function(error) {
            console.log(error);
        });
    };
});
