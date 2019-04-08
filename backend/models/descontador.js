var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;
//Validar que la factura no haya sido creada nunca en blueInvest
var uniqueValidator = require( 'mongoose-unique-validator' );

var descontadorSchema = new Schema({  
                        nombre: { type: String, required: true ,unique:[true ,'este descontador ya fue creado' ], required: [true, 'El nombre es necesario'] },
                        nit: { type: String, required: true  }, 
                        usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
                                },  
                   
                        { collection: 'descontadores' });

                        descontadorSchema.plugin( uniqueValidator , { message: '{PATH} ya hay un registro' } );

module.exports = mongoose.model( 'Descontador', descontadorSchema );