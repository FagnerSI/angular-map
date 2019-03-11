angular
    .module("appMap")
    .service('leafletData',
        function () {
            this.map = {};
            this.poli = [];
            this.markers = [];
            //Modificado
            this.pointList = [];

        });

        