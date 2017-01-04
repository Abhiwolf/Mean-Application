describe('ContacteditCtrl', function() {
    beforeEach(module('client'));
    beforeEach(module('home'));

    var scope, ctrl, movieSvc, $mdDialog, httpBackend;

    beforeEach(inject(function($rootScope, $injector, $controller, movieService, $state, _$httpBackend_, $http) {
        scope = $rootScope.$new();
        $mdDialog = $injector.get('$mdDialog');
        ctrl = $controller('ContacteditCtrl', {
            $scope: scope
        });

        movieSvc = movieService;
        httpBackend = _$httpBackend_;
    }));

    it('should ...', inject(function() {

        expect(1).toEqual(1);

    }));

});
