var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//Validar que la factura no haya sido creada nunca en blueInvest
var uniqueValidator = require('mongoose-unique-validator');

var facturaSchema = new Schema({
    pagador: { type: String, required: true },
    descontador: { type: String, required: true },
    valor: { type: Number, required: true },
    numero: { type: String, unique: [true, 'esta factura ya fue creada'], required: [true, 'El numero de factura es necesario'] },
    plazo: { type: Number, required: true },
    porcentaje: { type: Number, required: true },
    monto: { type: Number, required: true },
    tasa: { type: Number, required: true },
    vencimiento: { type: Date, required: true },
    disponible: { type: Date, required: true },
    comentarios: { type: String, required: false },
    docs: { type: String, required: false },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    publicacion: { type: Date, required: false },

}, { collection: 'facturas' });

facturaSchema.plugin(uniqueValidator, { message: '{PATH} ya hay un registro' });

module.exports = mongoose.model('Factura', facturaSchema);