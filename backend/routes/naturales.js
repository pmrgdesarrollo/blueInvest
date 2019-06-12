/*jshint esversion: 6 */

var express = require( 'express' );
var autenticacionToken = require( '../middleWares/autenticacion');


var app = express();

//Para importar el modelo de usuarios
var Natural = require( '../models/naturales');
var Usuario = require('../models/usuario');


/*=================================================
        OBTENER LISTA DE USUARIOS ( GET )
=================================================*/
app.get('/', (req, res, next) => {

    Natural.find({}).exec(
                (err, usuarios) => {
    
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando usuarioNatural',
                            errors: err
                        });
                    }
    
                    res.status(200).json({
                        ok: true,
                        usuarios: usuarios
                    });
    
    
    
                });
    });

/*=================================================
        AGREGAR USUARIO ( POST )
=================================================*/           
app.post( '/' , autenticacionToken.verificaToken , ( request , response ) => {  

var body = request.body ;

  var natural = new Natural ( {
                                  tipoSolicitante:body.tipoSolicitante, 
                                  nombre: body.nombre ,
                                  documento: body.documento,
                                  sexo: body.sexo,
                                  nacimiento: body.nacimiento,
                                  pais:body.pais,
                                  estadoCivil: body.estadoCivil,
                                  dirResidencia: body.dirCorrespondencia,
                                  ciudad: body.ciudad,
                                  telefono: body.telefono,
                                  dirCorrespondencia: body.dirCorrespondencia,
                                  ciudadOf: body.ciudadOf,
                                  celular: body.celular,
//LA B es de beneficiario
                                  tipoB: body.tipoB,
                                  nombreB: body.nombreB,
                                  documentoB: body.documentoB,
                                  sexoB: body.sexoB,
                                  nacimientoB: body.nacimientoB,
                                  paisB: body.paisB,
                                  estadoCivilB: body.estadoCivilB,
                                  dirResidenciaB:body.dirCorrespondenciaB,
                                  ciudadB: body.ciudadB,
                                  telefonoB: body.telefonoB,
                                  dirCorrespondenciaB: body.dirCorrespondenciaB,
                                  ciudadBof: body.emailB,
                                  celularB: body.celularB,

                                  profesion: body.profesion,
                                  empresa: body.empresa,
                                  cargo: body.cargo,
                                  ingresos: body.ingresos,
                                  activos: body.activos,
                                  pasivos: body.pasivos,

                                  entidad: body.entidad,
                                  tipo: body.tipo,
                                  numero: body.numero,
                                  titular: body.titular,

                                  doc1:body.doc1,
                                  doc2:body.doc2,
                                  doc3:body.doc3,
                                  doc4:body.doc4,
                               //   doc5:body.doc5,
                                  aprobado:body.aprobado,
                                  usuario:request.usuario._id,
                             
                              } );

   natural.save( ( error , naturalGuardado  ) =>  { 


    if ( error ) { return response.status(400).json( 
        
      { ok:false,
        mensjae:'Error creando usuarioNatural',
        errors: error , } 
        
        ) ; }       
      
       response.status(200).json(
      
      { ok:true,
        naturalCreado: naturalGuardado,
        creadoPor: natural.usuario
         }) ;

} );                           


});

/*=================================================
        MODIFICAR USUARIO NATURAL ( PUT or PATCH )
=================================================*/ 
app.put( '/:id' , autenticacionToken.verificaToken , ( request , response  )=> { 

var id = request.params.id;
var body = request.body;
//aqui validamos que venga id , el primer if por si hay error general 
Natural.findById( id , ( error , usuarioNatural ) => { 
if(error){ return response.status(500).json({
                                               ok:false,
                                               mensaje:'Error al buscar usuario',
                                               errors:error
                                               });}
//el segundo if por si no viene usuario para modificar
if( !usuarioNatural ) { return response.status(400).json({
                                               ok:false,
                                               mensaje:`el usuario con el id: ${id} , no existe `,
                                               errors:error
                                               });} 
//si pasa estos if porcedemos a hacer el put sobre el usuario con lo nuevo que trae el body                                               
usuarioNatural.tipoSolicitante=body.tipoSolicitante,
usuarioNatural.nombre=body.nombre ,
usuarioNatural.documento=body.documento,
usuarioNatural.sexo=body.sexo,
usuarioNatural.nacimiento=body.nacimiento,
usuarioNatural.pais=body.pais,
usuarioNatural.estadoCivil=body.estadoCivil,
usuarioNatural.dirResidencia=body.dirCorrespondencia,
usuarioNatural.ciudad=body.ciudad,
usuarioNatural.telefono=body.telefono,
usuarioNatural.dirCorrespondencia=body.dirCorrespondencia,
usuarioNatural.ciudadOf=body.ciudadOf,
usuarioNatural.celular=body.celular,

usuarioNatural.tipoB=body.tipoB,
usuarioNatural.nombreB=body.nombreB,
usuarioNatural.documentoB=body.documentoB,
usuarioNatural.sexoB=body.sexoB,
usuarioNatural.nacimientoB=body.nacimientoB,
usuarioNatural.paisB=body.paisB,
usuarioNatural.estadoCivilB=body.estadoCivilB,
usuarioNatural.dirResidenciaB=body.dirCorrespondenciaB,
usuarioNatural.ciudadB=body.ciudadB,
usuarioNatural.telefonoB=body.telefonoB,
usuarioNatural.dirCorrespondenciaB=body.dirCorrespondenciaB,
usuarioNatural.ciudadBof=body.ciudadBof,
usuarioNatural.celularB=body.celularB,

usuarioNatural.profesion=body.profesion,
usuarioNatural.empresa=body.empresa,
usuarioNatural.cargo=body.cargo,
usuarioNatural.ingresos=body.ingresos,
usuarioNatural.activos=body.activos,
usuarioNatural.pasivos=body.pasivos,

usuarioNatural.entidad=body.entidad,
usuarioNatural.tipo=body.tipo,
usuarioNatural.numero=body.numero,
usuarioNatural.titular=body.titular,

usuarioNatural.doc1=body.doc1,
usuarioNatural.doc2=body.doc2,
usuarioNatural.doc3=body.doc3,
usuarioNatural.doc4=body.doc4,
// usuarioNatural.doc5=body.doc5,

usuarioNatural.aprobado = body.aprobado,
usuarioNatural.usuario = request.usuario._id;

//luego guardamos el nuevo regsitro
usuarioNatural.save( ( error , naturalEditado ) =>  { 
if (error) { return response.status(400).json({ 
                                               ok:false,
                                               mensjae:'Error al actualizar usuario',
                                               errors: error , } 
                                               );}       
                    


                    response.status(201).json( {ok:true,
                                                usuarioEditado: naturalEditado ,
                                                usuarioLogueadoToken: request.usuario });



}); 
                                               
});



});

/*=================================================
        ELIMINAR USUARIO NATURAL ( DELETE )
=================================================*/ 
app.delete('/:id' , autenticacionToken.verificaToken , ( request , response  )=> {   

var id = request.params.id ;

Natural.findByIdAndRemove( id , (error , usuarioBorrado  )=>{

if (error){ return response.status(500).json({
                                                 ok:false,
                                                 mensaje:'Error eliminando unusario',
                                                 errors:error,
});} 

if (!usuarioBorrado){ return response.status(400).json({
                                                  ok:false,
                                                  mensaje:'No existe un usuario con este id',
                                                  errors:error,
});}

response.status( 200 ).json({
ok:true,
mensaje:'ok borrado',
usuario:usuarioBorrado,
usuarioLogueadoToken: request.usuario

});


});

});




module.exports = app ;        