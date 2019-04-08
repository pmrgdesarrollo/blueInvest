var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;
//Validar que la factura no haya sido creada nunca en blueInvest
var uniqueValidator = require( 'mongoose-unique-validator' );

var personaJuridicaSchema = new Schema({ 

 usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
 
                                  razon: { type: String, required: false }, 
                                  nit: { type: String, required: false},
                                  representante: { type: String, required: false},
                                  cargo: { type: String, required: false},
                                  documento: { type: String, required: false},
                                  expedido: { type: String, required: false},
                                  clasificacion: { type: String, required: false},
                                  actividad: { type: String, required: false},
                                  constitucion: { type: String, required: false},
                                  vigencia: { type: String, required: false},
                                  capital: { type: String, required: false},
                                  empleados: { type: String, required: false},
                                  direccion: { type: String, required: false},
                                  telefono: { type: String, required: false},
                                  fax: { type: String, required: false},
                                  celular: { type: String, required: false},
              
//info financiera
                   
                                  ingresos: { type: String, required: false},
                                  activos: { type: String, required: false},
                                  pasivos: { type: String, required: false},
                                  patrimonio: { type: String, required: false},

                                  entidad: { type: String, required: false},
                                  tipo: { type: String, required: false},
                                  numero: { type: String, required: false},
                                  titular: { type: String, required: false},

                                  empresa: { type: String, required: false},
                                  ciudad: { type: String, required: false},
                                  telefono2: { type: String, required: false},
// La A es de persona Autorizada
                                  nombreA: { type: String, required: false},
                                  documentoA: { type: String, required: false},
                                  cargoA: { type: String, required: false},
                                  telefonoA: { type: String, required: false},
                         
                            
                                
                                },  
                                 { collection: 'juridicas' });

personaJuridicaSchema.plugin( uniqueValidator , { message: '{PATH} ya hay un registro' } );

module.exports = mongoose.model('Juridica', personaJuridicaSchema );