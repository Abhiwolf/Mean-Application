describe('ContactCtrl', function() {

    beforeEach(module('home'));
    beforeEach(module('LocalStorageModule'));
    var scope, ContactCtrl;

    beforeEach(inject(function($rootScope, $controller, $state) {
        scope = $rootScope.$new();
        ContactCtrl = $controller('ContactCtrl', {
            $scope: scope
        });
        spyOn($state, 'go');
    }));

    it('should defined', inject(function() {
        expect(ContactCtrl).toBeDefined();
    }));

    describe('Test ContactCtrl method', function() {
        it('addNewContact method should initialise', function() {
            console.log("ContactCtrl test cases starting from here");
            expect(scope.addNewContact).toBeDefined();
            scope.addNewContact();
        });
        it('addNewContact method should work properly', inject(function($state) {
            scope.addNewContact();
            console.log("go to contact edit method");
            expect($state.go).toHaveBeenCalledWith('contactEdit');
        }));

        it('EditContact method should be defined', function() {
            expect(scope.editContact).toBeDefined();
        });
        it('EditContact method should work properly', inject(function($state) {
            scope.editContact();
            var data = 'abhi'
                //expect($state.go).toHaveBeenCalledWith('contactEdit');
            $state.go('contactEdit', {
                'contactEditData': data,
                'id': data
            });
        }))
    })

});
