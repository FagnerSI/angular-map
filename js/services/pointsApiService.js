angular
    .module("appMap")
    .service('pointsAPI', function ($http, config) {

        this.getPoints = function () {
           return $http.get(config.urlPointsAPI);
        };

        this.sendPoints = function (points) {
           return $http.post(config.urlPointsAPI, points);
        };

    });
        