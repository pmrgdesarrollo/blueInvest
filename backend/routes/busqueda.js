/*jshint esversion: 6 */
// RUTA PARA HACER BUSQUEDAS GENERALES //

//---------------------- REQUIRES -----------------------------//
var express = require('express');
var app = express();

//-------------- MODELOS DONDE SE BUSCARAN --------------------//

var Usuarios = require('../models/usuario');
var Empresas = require('../models/comercio');

//------------------- PETICION GET ---------------------------//

// BUSQUEDA POR COLECCION
app.get( '/coleccion/:tabla/:busqueda', ( request , response , next )=> { 

var tabla = request.params.tabla;
var busqueda = request.params.busqueda;
var reguExp = RegExp( busqueda , 'i' ); 

var promesa ;

switch( tabla ){ 
    case 'usuarios' : promesa = buscarUsuarios( busqueda , reguExp ) ;
    break ;
    case 'empresas' : promesa = buscarEmpresas( busqueda , reguExp );
    break ;
    case 'hospitales' : promesa = buscarHospital( busqueda , reguExp );
    break ;

    default: response.status(400).json({ ok:false , error:{ message: 'Tipo de tabla no valido' } });
 }

 promesa.then( resultado => { 
     response.status(200).json({ 
         ok:true,
         [tabla]:resultado,
     });
  });


});

// BUSQUEDA GENERAL
app.get( '/todo/:busqueda' , ( request , response , next )=>{ 
var busqueda = request.params.busqueda ;
var reguExp = RegExp( busqueda , 'i' ); 

Promise.all( [ buscarUsuarios(busqueda ,reguExp), 
               buscarEmpresas(busqueda ,reguExp),
               buscarHospital(busqueda ,reguExp)])
               .then( resultado => {
                response.status(200).json({
                ok:true,
                usuarios:resultado[0],
                empresas:resultado[1],
                hospitales:resultado[2]    
                });   
                }  
               ).catch(error => error);
    
 });

//--------------PETICIONES ASINCRONAS A TRAVES DE PROMESAS-----------------//

function buscarUsuarios( busqueda , reguExp ){ 
    return new Promise( ( resolve , reject )=>{ 

        Usuarios.find( {} , 'nombre email role')
                   .or( [ {'nombre':reguExp},{'email':reguExp} ]) 
                   .exec((error , usuarios)=>{ 
                   if(error) return reject('Error al buscar usuario' , error );
                   resolve(usuarios);    
                                            }   
                         );  

                                              });
 }

 function buscarEmpresas( busqueda ,reguExp ){ 
    return new Promise( ( resolve , reject )=>{ 
        Empresas.find( {} ).or( [ {'nombre_de_establecimiento':reguExp},{'nit':reguExp} ]) 
        .exec(( error , empresas )=>{ 
        if(error) return reject( 'Error al buscar empresa', error );
        resolve( empresas );    
        }); 
    });
 }

/*

function buscarHospital( busqueda ,reguExp ){ 
    return new Promise( ( resolve , reject )=>{ 
    Hospitales.find( { nombre : reguExp } ).populate('usuario').exec(( error , hospitales )=>{ 
    if(error) return reject( 'Error al buscar medico', error );
    resolve( hospitales );    
        }); 
    }); 
} */

module.exports = app ;