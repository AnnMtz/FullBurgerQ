'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/burgerqueen')
        .then(() => {
            console.log("Conexión a la BD exitosa");

            //Creación del servicio
            app.listen(port, () => {
                console.log("Servidor corriendo correctamente en url: localhost: 3700");
            });
        })
        .catch(err => console.log(err));