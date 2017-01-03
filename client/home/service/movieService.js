angular.module('home').factory('movieService', function($http, localStorageService) {

    var serverApiUrl = 'http://localhost:3000/';
    var movieService = {};
    var authentication = {
        isAuth: false,
        userName: "",
        id: 0
    };

    //Post registration form data
    var postRegistrationForm = function(data) {
        console.log(data);
        return $http.post(serverApiUrl + 'user/registration', data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Get profile data
    var getUserInformation = function(id) {
        return $http.get(serverApiUrl + 'user/registration/' + id).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Edit user information
    var editUserInformation = function(id, data) {
        return $http.put(serverApiUrl + 'user/registration/' + id, data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Get login information
    var login = function(data) {
        return $http.post(serverApiUrl + 'user/login', data).success(function(response) {
            console.log(response);
            storeAuthData(response);
            return response;
        }).error(function(error) {
            return error;
        });
    };

    function storeAuthData(response) {
        localStorageService.set('authData', {
            userName: response.userName,
            id: response._id,
            email: response.email,
            isAuth: true
        });
    }

    var fillAuthData = function() {
        var authData = localStorageService.get('authData');
        console.log(authData);
        if (authData) {
            authentication.isAuth = true;
            authentication.userName = authData.userName;
            authentication.id = authData.id;
        } else {
            authentication.isAuth = false;
            authentication.userName = "";
            authentication.id = 0;
        }
        return authentication;
    };
    var logOut = function() {
        localStorageService.clearAll();
        authentication.isAuth = false;
        authentication.userName = "";
        authentication.id = 0;
    };

    //Get all movie name
    var getMovieName = function() {
        return $http.get(serverApiUrl + 'movie').success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Post movie data
    var saveMovieName = function(data) {
        return $http.post(serverApiUrl + 'movie', data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Update movie data
    var updateMovie = function(data, id) {
        return $http.put(serverApiUrl + 'movie/' + id, data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Delete movie name
    var deleteMovie = function(id) {
        return $http.delete(serverApiUrl + 'movie/' + id).success(function(response) {
            return response;
        }).error(function(error) {
            console.log(error);
        });
    };

    //Save user image
    var saveUserImage = function(data) {
        return $http.post(serverApiUrl + 'user/image', data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Get user information

    var getUserImageInfo = function(id) {
        return $http.get(serverApiUrl + 'user/image/' + id).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Update the user image
    var updateUserImage = function(id, data) {
        return $http.put(serverApiUrl + 'user/image/' + id, data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    //Contact page rest api
    var getContactInfo = function() {
        return $http.get(serverApiUrl + 'user/contact').success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    var saveContactInfo = function(data) {
        return $http.post(serverApiUrl + 'user/contact', data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    var getContactDataById = function(id) {
        return $http.get(serverApiUrl + 'user/contact/' + id).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    var updateContactInfo = function(id, data) {
        console.log(id);
        return $http.put(serverApiUrl + 'user/contact/' + id, data).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    var deleteContactInfo = function(id) {
        return $http.delete(serverApiUrl + 'user/contact/' + id).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    var getSingleContactInfo = function(id) {
        return $http.get(serverApiUrl + 'user/contact/' + id).success(function(response) {
            return response;
        }).error(function(error) {
            return error;
        });
    };

    movieService.login = login;
    movieService.postRegistrationForm = postRegistrationForm;
    movieService.getMovieName = getMovieName;
    movieService.saveMovieName = saveMovieName;
    movieService.updateMovie = updateMovie;
    movieService.deleteMovie = deleteMovie;

    movieService.getUserInformation = getUserInformation;
    movieService.editUserInformation = editUserInformation;

    movieService.saveUserImage = saveUserImage;
    movieService.getUserImageInfo = getUserImageInfo;
    movieService.updateUserImage = updateUserImage;

    movieService.fillAuthData = fillAuthData;
    movieService.authentication = authentication;
    movieService.logOut = logOut;

    movieService.getContactInfo = getContactInfo;
    movieService.saveContactInfo = saveContactInfo;
    movieService.getContactDataById = getContactDataById;
    movieService.updateContactInfo = updateContactInfo;
    movieService.deleteContactInfo = deleteContactInfo;
    movieService.getSingleContactInfo = getSingleContactInfo;

    return movieService;
});
