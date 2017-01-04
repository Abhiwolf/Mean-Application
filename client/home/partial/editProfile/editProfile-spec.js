describe('EditprofileCtrl', function() {
    beforeEach(module('client'));
    beforeEach(module('home'));

    var scope, ctrl, movieSvc, httpBackend;

    beforeEach(inject(function($rootScope, $controller, $state, movieService, _$httpBackend_, $http) {
        scope = $rootScope.$new();
        ctrl = $controller('EditprofileCtrl', {
            $scope: scope
        });
        movieSvc = movieService;
        httpBackend = _$httpBackend_;
    }));

    it('should ...', inject(function() {
        expect(1).toEqual(1);

    }));

});
