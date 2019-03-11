angular
    .module("appMap")
    .directive('map', function (mapFactory) {
        return {   
            link: function (scope, element, attributes) {              
                mapFactory.map(element[0], [scope.pointList[0].position.lat, scope.pointList[0].position.lng]);      
                 
            }
        };
    });
