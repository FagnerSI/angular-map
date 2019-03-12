angular
    .module("appMap")
    .directive('map', function (mapFactory) {
        return {   
            link: function (scope, element, attributes) { 
                var latLng = [scope.pointList[0].position.lat, scope.pointList[0].position.lng]             
                mapFactory.map(element[0],latLng );      
            }
        };
    });

    