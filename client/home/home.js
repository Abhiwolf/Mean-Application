angular.module('home', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('home').config(function($stateProvider) {

    $stateProvider.state('movie', {
        url: '/movie',
        templateUrl: 'home/partial/movie/movie.html'
    });
    $stateProvider.state('movieTrailer', {
        url: '/movieTrailer/:id',
        templateUrl: 'home/partial/movieTrailer/movieTrailer.html',
        params: {
            movieInfo: null
        }
    });
    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'home/partial/profile/profile.html'
    });
    $stateProvider.state('editProfile', {
        url: '/editProfile',
        params: {
            userInfo: null
        },
        templateUrl: 'home/partial/editProfile/editProfile.html'
    });
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'home/partial/contact/contact.html'
    });
    $stateProvider.state('contactEdit', {
        url: '/contactEdit/:id',
        params: {
            contactEditData: null,
        },
        templateUrl: 'home/partial/contactEdit/contactEdit.html'
    });
    $stateProvider.state('editTrunkGroup', {
        url: '/editTrunkGroup',
        templateUrl: 'home/partial/editTrunkGroup/editTrunkGroup.html'
    });
    /* Add New States Above */

});
