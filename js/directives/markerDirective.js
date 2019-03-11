angular
    .module("appMap")
    .directive('marker', function (mapFactory) {     
        //Precisa receber os poistos calculados pelas rotas.
        //Ajutar para ficar similar ao exemplo         
        return {                  
            link: function (scope, element, attributes) {              
                mapFactory.marker(scope.pointList)       
            }           
        };
    });