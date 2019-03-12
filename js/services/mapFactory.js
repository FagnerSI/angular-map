angular
    .module("appMap")
    .factory('mapFactory', function (config) {

        var myMap = '';

        var _map = function (element, center) {

            myMap = L.map(element).setView(center, config.map.zoom);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                id: config.tileLayer.id,
                attribution: config.tileLayer.attr,
                accessToken: config.tileLayer.token
            }).addTo(myMap);

        }

        var _marker = function (pointList) {
            //Modificado         
            for (var i = 0; i < pointList.length; i++) {
                L.marker([pointList[i].position.lat, pointList[i].position.lng]).addTo(myMap)
                    .bindPopup("Ponto " + i + ": " + pointList[i].name)
                    .openPopup();
            }
        }

        var _polyline = function (pointList) {
            //Modificado
            var polyPoints = []
            for (var i = 0; i < pointList.length; i++) {
                polyPoints.push([pointList[i].position.lat, pointList[i].position.lng]);

            }
            
            new L.Polyline(polyPoints, {
                color:'#f60',
            }).addTo(myMap);

        }

        return {
            map: _map,
            marker: _marker,
            polyline: _polyline
        };

    });