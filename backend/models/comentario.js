var mongoose = require('mongoose'); 

var Schema = mongoose.Schema;

var comentarioSchema = new Schema({
                              
                               rating: { type: Number, required: false},
                               comentario: { type: String , required: false},
                               pagador: { type: String, required: false },
                               usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
                     
                            
                             } ,  { collection: 'comentarios' });


module.exports = mongoose.model('Comentario', comentarioSchema );




