var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;
//Validar que la empresa no haya sido creada nunca en blueInvest
var uniqueValidator = require( 'mongoose-unique-validator' );

var comercioSchema = new Schema({  
                        nombre_de_establecimiento: { type: String, required: true ,unique:[true ,'este establecimiento ya fue creado' ], required: [true, 'El nombre es necesario'] },
                        actividad:{ type: String, required: false }, 
                        nit: { type: String , required: false  }, 
                        direccion:{ type: String, required: false }, 
                        telefono:{ type: Number, required: false  }, 
         },  
                   
                        { collection: 'comercio' });

                        comercioSchema.plugin( uniqueValidator , { message: '{PATH} ya hay un registro' } );

module.exports = mongoose.model( 'Comercio', comercioSchema );