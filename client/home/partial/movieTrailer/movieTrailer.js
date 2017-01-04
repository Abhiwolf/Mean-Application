angular.module('home').controller('MovietrailerCtrl', function($scope, $stateParams) {
    var getParamUrl;
    if ($stateParams.movieInfo) {
        $scope.getMovieName = $stateParams.movieInfo.title;
        getParamUrl = $stateParams.movieInfo.url;
        $scope.movieUrl = getParamUrl.replace("watch?v=", "v/");
    }

});
