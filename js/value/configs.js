angular
    .module("appMap")
    .constant("config", {

        urlPointsAPI: "http://rest.learncode.academy/api/trix/points",
        //ver outras configurações...evitar variaveis magicas
        //Config padrão deve ser setado com o ponto inicial da rota apos busca
        map:{            
            zoom: 14
        },
        tileLayer: {
            id: 'mapbox.streets',
            attr: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            token:'pk.eyJ1IjoiZmFnbmVyMzE0IiwiYSI6ImNqdDBkZXRkeTFjd2Y0M29zMWI0dThuMzcifQ.8rtFRFVt5ruR_E-5xe7reg',
        } 
    });
