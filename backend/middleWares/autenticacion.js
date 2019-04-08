/*jshint esversion: 6 */

var jwt = require( 'jsonwebtoken' );
var SEED = require('../config/config').SEED;


/*=================================================
      VALIDAR EL TOKEN A TRAVES DE UN MIDDLEWARE
=================================================*/   

exports.verificaToken = function(request , response , next){  
    
var token = request.query.token ;

jwt.verify( token , SEED , ( error , usuarioDecodificado )=>{ 

            if( error ){ return response.status( 401 ).json({ 
                                                       ok:false,
                                                       mensaje:'token incorrecto',
                                                       errors: error 
                                                       });}
//Aqui queda la informacion de cuando creamos el token en en log in linea 40 (payload:usuarioDB)
         request.usuario = usuarioDecodificado.usuario;
next();
});
};




 
    

