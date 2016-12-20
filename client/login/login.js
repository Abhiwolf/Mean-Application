angular.module('login', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('login').config(function ($stateProvider) {

    $stateProvider.state('userLogin', {
        url: '/userLogin',
        templateUrl: 'login/partial/userLogin/userLogin.html'
    });
    $stateProvider.state('registration', {
        url: '/registration',
        templateUrl: 'login/partial/registration/registration.html'
    });
    /* Add New States Above */

});
