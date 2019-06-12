var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;

var ofertaSchema = new Schema({
                               fechaOferta: { type: Date, required: false },
                               valorOferta: { type: Number, required: [true, 'El valor es necesario']},
                               tasaOferta: { type: Number , required: [true, 'la tasa es necesaria']},
                               usuarioFactura: { type: String, required: false },
                               factura: { type: String, required: false },
                               facturaValor:{ type: Number, required: false },
                               facturaFechaPago: { type: Date, required: false },
                               estado: { type: Boolean, required: false },
                               liberada:{ type: Boolean, required: false },
                               fraccion:{ type: Number, required: false },
                               nombre:{ type: String, required: false },
                               cuenta:{ type: Number, required: false },
                               banco:{ type: String, required: false },
                               tipo:{ type: String, required: false },
                               pagando:{ type: Boolean, required: false },
                               payU:{ type: Boolean, required: false },
                               conSaldo:{ type: Boolean, required: false },
                               transferencia:{ type: Boolean, required: false },
                               pagoConfirmado:{ type: Boolean, required: false },
                               pagoConfirmadoCorredor:{ type: Boolean, required: false },
                               cargarSaldo:{ type: Boolean, required: false },
                               transferir:{ type: Boolean, required: false },
                               pagoFecha: { type: Date, required: false },
                               docsOf: { type: String, required: false },
                               utilidad:{ type: Number, required: false },
                               utilidadFinal:{ type: Number, required: false },
                               pagadorPago:{ type: Boolean, required: false },
                               usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
                     
                            
                             } ,  { collection: 'ofertas' }); 


module.exports = mongoose.model('Oferta', ofertaSchema );




