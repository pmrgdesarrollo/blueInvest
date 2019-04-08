/*jshint esversion: 6 */

var express = require('express');
var app = express();

// IMPORTACIONES DEL NODE , no es necesario instalar nada
// para validar archivos de imagenes y resolver el path
var fs = require('fs');
var path = require('path');

//hacemos un get 

app.get('/:tipo/:img', (request, response) => {

    var tipo = request.params.tipo;
    var img = request.params.img;

    var pathImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);

    if (fs.existsSync(pathImagen)) { response.sendFile(pathImagen); } else {
        var pathNoImagen = path.resolve(__dirname, '../assets/no-img.png');
        response.sendFile(pathNoImagen);
    }


});


module.exports = app;