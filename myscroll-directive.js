myapp.directive('myScroll', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){

            element.css("max-height", '50px');
            element.css("overflow-y", 'auto');
            console.log(attrs);
            console.log(attrs.myScroll);           

            element.css("max-height", attrs.myScroll+'px;');
        }
    }
});