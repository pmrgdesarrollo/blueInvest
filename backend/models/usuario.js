//Primero importar mongoose ( el conector entre Node y Mongo );

var mongoose = require( 'mongoose' );

//vamos a crear un nuevo schema en mongoose para crear el usuaio

var Schema = mongoose.Schema ;

var rolesValidos = {
 
   values: [ 'CORREDOR', 'INVERSIONISTA' , 'ADMINISTRADOR' ],
   message : ' {VALUE} no es un rol permitido'

};

//validator

var uniqueValidator = require( 'mongoose-unique-validator' );

//luego creamos el usuaio dentro del schema, recibe un objeto de java con los mismos campos que creamos en robo 3t

var usuarioSchema = new Schema(  
     // para validar el true se mete en [] y el segundo argumento lo valoida // 
    {  nombre : { type: String , required:[true , 'el campo nombre es requerido'] } ,
       email: { type: String , unique: true , required:[true , 'el e-mail es requerido'] } ,
       password : { type: String , required:[true , 'La contraseña es requerida'] } ,
       role: { type: String , required:true , enum:rolesValidos }, 
       google: { type: Boolean , default: false },
    

    }

   );

 //Para utilizar el unique validator: al usar {PATH} , este pone el nombre del campo : ej : mail debe ser unico
 
 usuarioSchema.plugin( uniqueValidator , { message: '{PATH} debe ser unico' } );

  // Se exporta el schema para poder ser consumido por mongo
  
  module.exports = mongoose.model(  'Usuario' ,  usuarioSchema );