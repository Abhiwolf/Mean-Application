describe('UserloginCtrl', function() {
    beforeEach(module('client'));
    beforeEach(module('login'));
    var scope, UserloginCtrl, movieSvc, httpBackend;

    beforeEach(inject(function($rootScope, $controller, movieService, _$httpBackend_, $http, $state) {
        scope = $rootScope.$new();
        UserloginCtrl = $controller('UserloginCtrl', {
            $scope: scope
        });

        movieSvc = movieService;
        httpBackend = _$httpBackend_;

        spyOn($state, 'go');
    }));

    it('should be defined', inject(function() {
        expect(1).toEqual(1);

    }));
    // Verify our controller exists
    it('should be defined', function() {
        expect(UserloginCtrl).toBeDefined();
    });

    describe('Check login method', function() {
        it('should check if user login successful', inject(function($state, movieService) {
            expect(scope.dologin).toBeDefined();
            scope.dologin();

        }));

        it('Check authData is defined', function() {
            expect(scope.authData).toBeTruthy({});
        });
        it('Negative test cases', function() {
            scope.authData.userName = "abhi";
            scope.authData.password = '123';
            scope.dologin();
            expect(scope.authData.userName).not.toBe(null);
            expect(scope.authData.userName).not.toBe(undefined);
            expect(scope.authData.password).not.toBe(null);
            expect(scope.authData.password).not.toBe(undefined);
        });
        it('Should check if userlogin is unsuccessful', function() {
            scope.dologin();
            expect(scope.authData.userName).toBeUndefined();
            expect(scope.authData.userName).toBeUndefined();
        });

    });

});
