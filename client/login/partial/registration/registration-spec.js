describe('RegistrationCtrl', function() {
    beforeEach(module('client'));
    beforeEach(module('login'));

    var scope, ctrl, movieSrv, httpBackend;

    beforeEach(inject(function($rootScope, $controller, $state, movieService, _$httpBackend_, $http) {
        scope = $rootScope.$new();
        ctrl = $controller('RegistrationCtrl', {
            $scope: scope
        });
        movieSrv = movieService;
        httpBackend = _$httpBackend_;
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);

    }));

});
