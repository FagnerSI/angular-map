angular
    .module("appMap")
    .directive('polyline', function (mapFactory) {
        return {                 
            link: function (scope, element, attributes) {                         
                mapFactory.polyline(scope.pointList)         
            }
        };
    }
    );