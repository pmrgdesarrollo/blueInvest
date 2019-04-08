var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;

var ofertaSchema = new Schema({
                              
                               valorOferta: { type: Number, required: [true, 'El valor es necesario']},
                               tasaOferta: { type: Number , required: [true, 'la tasa es necesaria']},
                               usuarioFactura: { type: String, required: false },
                               factura: { type: String, required: false },
                               estado: { type: Boolean, required: false },
                               liberada:{ type: Boolean, required: false },
                               fraccion:{ type: Number, required: false },
                               nombre:{ type: String, required: false },
                               cuenta:{ type: Number, required: false },
                               banco:{ type: String, required: false },
                               tipo:{ type: String, required: false },
                               usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
                     
                            
                             } ,  { collection: 'ofertas' }); 


module.exports = mongoose.model('Oferta', ofertaSchema );




