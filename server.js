/*jshint esversion: 6 */

// CODIGO DESARROLLADO POR PABLO RAMIREZ - ipablorg@gmail.com - +57 3112100489

//REQUIRES
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//RUTAS
var naturalesRoute = require('./backend/routes/naturales');
var juridicasRoute = require('./backend/routes/juridicas');
var comentariosRoute = require('./backend/routes/comentarios');
var appRoute = require('./backend/routes/app');
var loginRoute = require('./backend/routes/login');
var usuarioRoute = require('./backend/routes/usuario');
var ofertaRoute = require('./backend/routes/ofertas');
var comercioRoute = require('./backend/routes/comercios');
var facturaRoute = require('./backend/routes/facturas');
var loginRoute = require('./backend/routes/login');
var pagadoresRoute = require('./backend/routes/pagadores');
var descontadoresRoute = require('./backend/routes/descontadores');
var busquedaRoute = require('./backend/routes/busqueda');
var fileUpload = require('./backend/routes/upload');
var imagenes = require('./backend/routes/imagenes');
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



//Server Frontend

const path = require('path');

const app2 = express();

app2.use(express.static(__dirname + '/dist/abakoadv'));

app2.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/abakoadv/index.html'))
});

app2.listen(process.env.PORT || 8080);