/*jshint esversion: 6 */

// CODIGO DESARROLLADO POR PABLO RAMIREZ - ipablorg@gmail.com - +57 3112100489

//REQUIRES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//RUTAS
var naturalesRoute = require('./routes/naturales');
var juridicasRoute = require('./routes/juridicas');
var comentariosRoute = require('./routes/comentarios');
var appRoute = require('./routes/app');
var loginRoute = require('./routes/login');
var usuarioRoute = require('./routes/usuario');
var ofertaRoute = require('./routes/ofertas');
var comercioRoute = require('./routes/comercios');
var facturaRoute = require('./routes/facturas');
var loginRoute = require('./routes/login');
var pagadoresRoute = require('./routes/pagadores');
var descontadoresRoute = require('./routes/descontadores');
var busquedaRoute = require('./routes/busqueda');
var fileUpload = require('./routes/upload');
var imagenes = require('./routes/imagenes');
//CALLS
var app = express();
var server = require('http').Server(app);
//CORS MIDLEWARE *** Actualizar a www.blueinvest.co
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
//BODY PARSER se debe llamar primero el express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Conexión a la base de datos


mongoose.connect('mongodb+srv://blauvest1:sFlTkynEjQTl6mcV@blauvest-xbz2s.mongodb.net/test?retryWrites=true&w=majority',{useCreateIndex: true, useNewUrlParser: true } )
.then( ( bd ) => {
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
})
.catch( err => console.log( err) ) ; 


// MIDLEWARES
app.use('/juridica', juridicasRoute);
app.use('/natural', naturalesRoute);
app.use('/img', imagenes);
app.use('/comercio', comercioRoute);
app.use('/factura', facturaRoute);
app.use('/pagador', pagadoresRoute);
app.use('/descontador', descontadoresRoute);
app.use('/comentario', comentariosRoute);
app.use('/oferta', ofertaRoute);
app.use('/usuario', usuarioRoute);
app.use('/login', loginRoute);
app.use('/busqueda', busquedaRoute);
app.use('/upload', fileUpload);

app.use('/', appRoute);
// LISTENERS
server.listen( 3000, () => { console.log('puerto 3000:\x1b[33m%s\x1b[0m', 'Online'); });