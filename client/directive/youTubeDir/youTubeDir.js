angular.module('client').directive('youTubeDir', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            src: '='
        },
        templateUrl: 'directive/youTubeDir/youTubeDir.html',
        link: function (scope, element, attrs, fn) {


        }
    };
});
