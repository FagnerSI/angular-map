angular
    .module("appMap")
    .directive('marker', function (mapFactory) { 
        return {                  
            link: function (scope, element, attributes) {              
                mapFactory.marker(scope.pointList)       
            }           
        };
    });