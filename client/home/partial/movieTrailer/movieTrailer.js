angular.module('home').controller('MovietrailerCtrl', function ($scope, $stateParams) {
    $scope.getMovieName = $stateParams.movieInfo.title;
    var getParamUrl = $stateParams.movieInfo.url;
    $scope.movieUrl = getParamUrl.replace("watch?v=", "v/");
});
