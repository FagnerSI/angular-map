angular
    .module("appMap")
    .controller("appMapCtrl", function ($scope, pointsAPI, mapFactory) {

        $scope.points = [];
        $scope.pointList = [];   


        $scope.addPoint = function (point) {
            $scope.points.push(point);
            delete $scope.point;
        }

        $scope.deletePoints = function (points) {
            $scope.points = points.filter(function (point) {
                if (!point.selected) return point;
            });
        }

        $scope.isPointSelected = function (points) {
            return points.some(function (point) {
                return point.selected;
            });
        };

        //Geocodificação
        $scope.sendPoints = function () {           
            $scope.pointList = [];          
            pointsAPI.sendPoints($scope.points)
                .then(function () {                    
                    loadPoints();
                })
                .catch(function () {
                    alert("Erro no Post")
                });
        }
        
        var loadPoints = function () {
            pointsAPI.getPoints()
                .then(function (data) {                    
                    $scope.pointList = data.data[0];
                })
                .catch(function () {
                    alert("Erro no Get")
                });
        }



    })


