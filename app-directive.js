var myapp = angular.module('myapp', []);

myapp.directive('appHighlight', function(){
    return {        
        restrict: 'EA',
        templateUrl: 'app-directive.html',
        controller: 'MyDirectiveCtrl',
        scope: {
            myTitle: '@',
            myVal: '='
        },
        link: function(scope, element, attrs){
            //console.log(scope, element, attrs);
            element.find('h3').css('color', 'blue');
        }
    };
});
myapp.controller('MyDirectiveCtrl', function(){
    this.myVal='abc';
})
