/*jshint esversion: 6 */

var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

var app = express();
var Usuario = require('../models/usuario');

//Para google https://developers.google.com/identity/sign-in/web/backend-auth seleccionar Node.js
var CLIENT_ID = require('../config/config').CLIENT_ID; 
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);

async function verify( token ) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    // const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];

    

    return { nombre: payload.name , email:payload.email , img: payload.image , google:true , payload }
  }

/*=================================================================
                       AUTENTICACION CON GOOGLE instalar 
                  ( npm install google-auth-library --save )
                  crear la constante con el client id de la app y
                  en el modelo de usuario crear una bandera con un boolean
=================================================================*/

app.post( '/google' , async( request , response  ) => { 

var token = request.body.token;
var googleUser = await verify( token ).catch( e => { return response.status(403).json({ ok:false , mensaje:'token invalido'}); });

Usuario.findOne( { email : googleUser.email } , ( error , usuarioDB  )=>{ 
    if (error) {
        return response.status(500).json({
                                           ok: false,
                                           mensaje: 'Error al buscar usuario',
                                           errors: error
                                        });
    }

    if ( usuarioDB ) { 
        // si fue creado pero no por google
        if ( usuarioDB.google === false ) { return response.status(500).json({
                                                                            ok: false,
                                                                            mensaje: 'Debe usar autenticacion normal',
                                                                            errors: error
                                                                             });
     } else { // Si ya fue creado a traves de google
        var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 }); // 4 horas
        response.status(200).json({ menseja:'segundo else' , ok:true , usuario: usuarioDB , token:token , id: usuarioDB.id });} 
     } else {  // si no esta creado en base de datos , se crea uno nuevo
         var usuario = new Usuario();

         usuario.nombre = googleUser.nombre; 
         usuario.email = googleUser.email;
         usuario.img = googleUser.img;
         usuario.google = true ;
         usuario.password = ':)';

         usuario.save( ( error , usuarioDB )=> {  
         var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 }); // 4 horas
         response.status(200).json({ ok:true , usuario: usuarioDB , token:token , id: usuarioDB.id })

          });

      }


});

});


/*=================================================================
                            LOGIN LOCAL 
=================================================================*/

app.post('/', (req, res) => {

    var body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar usuario',
                errors: err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectas - email',
                errors: err
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectas - password',
                errors: err
            });
        }

        // Crear un token!!!
        usuarioDB.password = ':)';

        var token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 }); // 4 horas

        res.status(200).json({
            ok: true,
            usuario: usuarioDB,
            token: token,
            id: usuarioDB._id
        });

    });


});





module.exports = app;