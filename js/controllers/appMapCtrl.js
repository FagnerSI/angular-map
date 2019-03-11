angular
    .module("appMap")
    .controller("appMapCtrl", function ($scope, pointsAPI, mapFactory) {

        $scope.points = [];
        $scope.pointList = [];

        //[-3.74166, -38.53532],
        //[-3.74144, -38.53581],
        //[-3.74313, -38.53656],
        //[-3.7383, -38.54225],
        //[-3.73733, -38.54319],]

        $scope.addPoint = function (point) {
            $scope.points.push(point);
            delete $scope.point;
        }
        //Geocodificação
        $scope.sendPoints = function () {           
            $scope.pointList = [];
            //Talvez criar metodo como loadPoint
            pointsAPI.sendPoints($scope.points)
                .then(function () {                    
                    loadPoints();
                })
                .catch(function () {
                    alert("Erro")
                });
            //$scope.points = [];
        }
        
        var loadPoints = function () {
            pointsAPI.getPoints()
                .then(function (data) {
                    console.log(data)
                    $scope.pointList = data.data[0];
                })
                .catch(function () {
                    alert("Erro")
                });

        }



    })


