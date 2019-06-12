var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;
//Validar que la factura no haya sido creada nunca en blueInvest
var uniqueValidator = require( 'mongoose-unique-validator' );

var personaNaturalSchema = new Schema({ 

 usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
 
                                  tipoSolicitante: { type: String, required: false }, 
                                  nombre: { type: String, required: false},
                                  documento: { type: String, required: false},
                                  sexo: { type: String, required: false},
                                  nacimiento: { type: String, required: false},
                                  pais: { type: String, required: false},
                                  estadoCivil: { type: String, required: false},
                                  dirResidencia: { type: String, required: false},
                                  ciudad: { type: String, required: false},
                                  telefono: { type: String, required: false},
                                  dirCorrespondencia: { type: String, required: false},
                                  ciudadOf: { type: String, required: false},
                                  celular: { type: String, required: false},
//LA B es de beneficiario
                                  tipoB: { type: String, required: false }, 
                                  nombreB: { type: String, required: false},
                                  documentoB: { type: String, required: false},
                                  sexoB: { type: String, required: false},
                                  nacimientoB: { type: String, required: false},
                                  paisB: { type: String, required: false},
                                  estadoCivilB: { type: String, required: false},
                                  dirResidenciaB: { type: String, required: false},
                                  ciudadB: { type: String, required: false},
                                  telefonoB: { type: String, required: false},
                                  dirCorrespondenciaB: { type: String, required: false},
                                  ciudadBof: { type: String, required: false},
                                  celularB: { type: String, required: false},

                                  profesion: { type: String, required: false},
                                  empresa: { type: String, required: false},
                                  cargo: { type: String, required: false},
                                  ingresos: { type: String, required: false},
                                  activos: { type: String, required: false},
                                  pasivos: { type: String, required: false},

                                  entidad: { type: String, required: false},
                                  tipo: { type: String, required: false},
                                  numero: { type: String, required: false},
                                  titular: { type: String, required: false},
                                  // Documentos                         
                                  doc1: { type: String, required: false},
                                  doc2: { type: String, required: false},
                                  doc3: { type: String, required: false},
                                  doc4: { type: String, required: false},
                               // doc5: { type: String, required: false},
                                  // Aprobacion  
                                  aprobado: {type: Boolean , required: false},

                                  usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
                            
                                
                                },  
                                 { collection: 'naturales' });

personaNaturalSchema.plugin( uniqueValidator , { message: '{PATH} ya hay un registro' } );

module.exports = mongoose.model('Natural', personaNaturalSchema );