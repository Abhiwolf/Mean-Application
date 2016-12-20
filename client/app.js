angular.module('client', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'ngSanitize', 'home', 'ngMaterial', 'ngAria', 'ngMessages', 'angularFileUpload', 'login', 'LocalStorageModule']);

angular.module('client').config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/userLogin');

    localStorageServiceProvider
        .setStorageType('sessionStorage');

});
angular.module('client').run(function ($rootScope, $location, movieService, $state, $timeout) {

    $rootScope.$state = $state;
    $rootScope.authentication = {};
    var localSetData = movieService.fillAuthData();
    $rootScope.authentication.isAuth = localSetData.isAuth;

    //$rootScope.authentication.isAuth = false;
    $rootScope.$on('passingAuthData', function (event, args) {
        $rootScope.authentication.isAuth = args.message;
        console.log($rootScope.authentication.isAuth);
    });
    console.log($rootScope.authentication.isAuth);
    $rootScope.excludedPages = [
        "userLogin",
        "registration"
    ];

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if ($rootScope.excludedPages.indexOf(toState.name) === -1) {
            //First check if the user is logged in. Then check for Module Permissions
            if ($rootScope.authentication.isAuth) {

            } else {
                event.preventDefault();
                $state.go('userLogin');
                return;
            }
        } else {
            if ($rootScope.authentication.isAuth) {
                event.preventDefault();
                $state.go('movie');
                return;
            }
        }
    });

});

angular.module('client').filter('trusted', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    };
});
angular.module('client').controller('MainCtrl', function ($scope, $state, movieService) {
    $scope.authInfo = movieService.authentication;

    $scope.logoutFunction = function () {
        $scope.authentication.isAuth = false;
        movieService.logOut();
        $state.go('userLogin');
    };
});
