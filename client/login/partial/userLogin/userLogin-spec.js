describe('UserloginCtrl', function() {
    beforeEach(module('client'));
    beforeEach(module('login'));
    var scope, ctrl, movieSvc, httpBackend;

    beforeEach(inject(function($rootScope, $controller, movieService, _$httpBackend_, $http, $state) {
        scope = $rootScope.$new();
        ctrl = $controller('UserloginCtrl', {
            $scope: scope
        });

        movieSvc = movieService;
        httpBackend = _$httpBackend_;

        spyOn($state, 'go');
    }));

    it('should ...', inject(function() {
        console.log("Abhishek Sharma");
        expect(1).toEqual(1);

    }));

});
