describe('movieService', function() {
    beforeEach(module('client'));
    beforeEach(module('home'));
    var httpBackend, movieSrv;

    beforeEach(inject(function(movieService, $httpBackend) {
        movieSrv = movieService;
        httpBackend = $httpBackend;
    }));
    it('movieService should be defined', inject(function(movieService) {
        expect(movieSrv).toBeDefined();
    }));

    describe('Check login services', function() {
        it('Should exist', inject(function(movieService) {
            var apiUrl = 'http://localhost:3000/';
            var loginUrl = apiUrl + 'user/login';
            var reqData = {
                'username': 'abhi',
                'password': '123'
            };
            var StatusCode = '200';
            var actualStatusCode;
            httpBackend.whenPOST(loginUrl, reqData).respond(StatusCode);
            movieService.login().then(function(response) {
                console.log(response);
            });
            //httpBackend.flush();
            //expect()
        }));
    });

});
