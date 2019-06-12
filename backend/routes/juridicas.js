/*jshint esversion: 6 */

var express = require( 'express' );
var autenticacionToken = require( '../middleWares/autenticacion');


var app = express();

//Para importar el modelo de usuarios
var Juridica = require( '../models/juridicas');


/*=================================================
        OBTENER LISTA DE USUARIOS ( GET )
=================================================*/
app.get('/', (req, res, next) => {

    Juridica.find({}).exec(
                (err, usuarios) => {
    
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando usuariojuridico',
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
app.post( '/' ,  ( request , response ) => {  


  var body = request.body ;

  var juridica = new Juridica ( {
    razon: body.razon, 
    nit: body.nit,
    representante: body.representante, 
    cargo: body.cargo,
    documento: body.documento,
    expedido: body.expedido,
    clasificacion: body.clasificacion,
    actividad: body.actividad,
    constitucion: body.constitucion,
    vigencia: body.vigencia,
    capital: body.capital,
    empleados: body.empleados, 
    direccion: body.direccion,
    telefono: body.telefono,
    fax: body.fax,
    celular: body.celular,

    ingresos:body.ingresos,
    avtivos: body.activos,
    pasivos: body.pasivos, 
    patrimonio: body.patrimonio,

    entidad: body.entidad,
    tipo: body.tipo,
    numero: body.numero,
    titular: body.titular,

    entidad:body.entidad,
    tipo:body.tipo,
    numero: body.numero,
    titular: body.titular,

    empresa: body.empresa,
    ciudad: body.ciudad,
    telefono2: body.telefono,

    nombreA: body.nombreA,
    documentoA: body.documentoA ,
    cargoA: body.cargoA,
    telefonoA: body.telefonoA,

    doc1:body.doc1,
    doc2:body.doc2,
    doc3:body.doc3,
    doc4:body.doc4,
  //  doc5:body.doc5,

    aprobado:body.aprobado,

    usuario: request.usuario._id,

 } );

 juridica.save( ( error , juridicoGuardado  ) =>  { 


    if ( error ) { return response.status(400).json( 
        
      { ok:false,
        mensjae:'Error creando usuarioNatural',
        errors: error , } 
        
        ) ; }       
      
       response.status(201).json(
      
      { ok:true,
        juridicoCreado: juridicoGuardado,
        usuarioLogueadoToken: request.usuario  }) ;

} );                           


});

/*=================================================
        MODIFICAR USUARIO NATURAL ( PUT or PATCH )
=================================================*/ 
app.put( '/:id' , autenticacionToken.verificaToken , ( request , response  )=> { 

var id = request.params.id;
var body = request.body;
//aqui validamos que venga id , el primer if por si hay error general 
Juridica.findById( id , ( error , usuarioJuridico ) => { 
if(error){ return response.status(500).json({
                                               ok:false,
                                               mensaje:'Error al buscar usuario',
                                               errors:error
                                               });}
//el segundo if por si no viene usuario para modificar
if( !usuarioJuridico  ) { return response.status(400).json({
                                               ok:false,
                                               mensaje:`el usuario con el id: ${id} , no existe `,
                                               errors:error
                                               });} 
//si pasa estos if porcedemos a hacer el put sobre el usuario con lo nuevo que trae el body                                               
usuarioJuridico.razon=body.razon, 
usuarioJuridico.nit=body.nit,
usuarioJuridico.representante=body.representante, 
usuarioJuridico.cargo=body.cargo,
usuarioJuridico.documento=body.documento,
usuarioJuridico.expedido=body.expedido,
usuarioJuridico.clasificacion=body.clasificacion,
usuarioJuridico.actividad=body.actividad,
usuarioJuridico.constitucion=body.constitucion,
usuarioJuridico.vigencia=body.vigencia,
usuarioJuridico.capital=body.capital,
usuarioJuridico.empleados=body.empleados, 
usuarioJuridico.direccion=body.direccion,
usuarioJuridico.telefono=body.telefono,
usuarioJuridico.fax=body.fax,
usuarioJuridico.celular=body.celular,

usuarioJuridico.ingresos=body.ingresos,
usuarioJuridico.avtivos=body.activos,
usuarioJuridico.pasivos=body.pasivos, 
usuarioJuridico.patrimonio=body.patrimonio,

usuarioJuridico.entidad=body.entidad,
usuarioJuridico.tipo=body.tipo,
usuarioJuridico.numero=body.numero,
usuarioJuridico.titular=body.titular,

usuarioJuridico.entidad=body.entidad,
usuarioJuridico.tipo=body.tipo,
usuarioJuridico.numero=body.numero,
usuarioJuridico.titular=body.titular,

usuarioJuridico.empresa=body.empresa,
usuarioJuridico.ciudad=body.ciudad,
usuarioJuridico.telefono2=body.telefono2,

usuarioJuridico.nombreA=body.nombreA,
usuarioJuridico.documentoA=body.documentoA ,
usuarioJuridico.cargoA=body.cargoA,
usuarioJuridico.telefonoA=body.telefonoA,

usuarioJuridico.doc1=body.doc1,
usuarioJuridico.doc2=body.doc2,
usuarioJuridico.doc3=body.doc3,
usuarioJuridico.doc4=body.doc4,
// usuarioJuridico.doc5=body.doc5,

usuarioJuridico.aprobado=body.aprobado,
usuarioJuridico.usuario = request.usuario._id;

//luego guardamos el nuevo regsitro
usuarioJuridico.save( ( error , juridicoEditado ) =>  { 
if (error) { return response.status(400).json({ 
                                               ok:false,
                                               mensjae:'Error al actualizar usuario',
                                               errors: error , } 
                                               );}       
                    


                    response.status(201).json( {ok:true,
                                                usuarioEditado: juridicoEditado ,
                                                usuarioLogueadoToken: request.usuario });



}); 
                                               
});



});

/*=================================================
        ELIMINAR USUARIO NATURAL ( DELETE )
=================================================*/ 
app.delete('/:id' , autenticacionToken.verificaToken , ( request , response  )=> {   

var id = request.params.id ;

Juridica.findByIdAndRemove( id , (error , usuarioBorrado  )=>{

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