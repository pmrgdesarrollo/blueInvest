/*jshint esversion: 6 */

var bcryptjs = require( 'bcryptjs' );
var express = require( 'express' );
var autenticacionToken = require( '../middleWares/autenticacion');


var app = express();

//Para importar el modelo de usuarios
var Usuario = require( '../models/usuario');


/*=================================================
        OBTENER LISTA DE USUARIOS ( GET )
=================================================*/
app.get('/', (req, res, next) => {

        Usuario.find({}, 'nombre email img role facturas')
            .exec(
                (err, usuarios) => {
    
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando usuario',
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
        OBTENER UN USUARIO ( GET )
=================================================*/
app.get('/:id', (req, res, next) => {

    var id = req.params.id;

    Usuario.findById( id , ( error , usuario ) => { 
    if(error){ return response.status(500).json({
        ok:false,
        mensaje:'Error al buscar usuario',
        errors:error
        });}
        //el segundo if por si no viene usuario para modificar
        if( !usuario ) { return response.status(400).json({
        ok:false,
        mensaje:`el usuario con el id: ${id} , no existe `,
        errors:error
        });} 

        res.status(200).json({
        ok: true,
        usuario: usuario
        });                                  
});

});
/*=================================================
        AGREGAR USUARIO ( POST )
=================================================*/           
app.post( '/' ,  ( request , response ) => {  


  var body = request.body ;

  var usuario = new Usuario ( {
    nombre: body.nombre,
    email: body.email,
    password: bcryptjs.hashSync( body.password,10),
    role: body.role,

                              } );

   usuario.save( ( error , usuarioGuardado  ) =>  { 


    if ( error ) { return response.status(400).json( 
        
      { ok:false,
        mensjae:'Error en este punto',
        errors: error , } 
        
        ) ; }       
      
       response.status(201).json(
      
      { ok:true,
        usuarioCreado: usuarioGuardado,
        }) ;



     } );                           


});

/*=================================================
        MODIFICAR USUARIO ( PUT or PATCH )
=================================================*/ 
app.put( '/:id' , autenticacionToken.verificaToken , ( request , response  )=> { 

var id = request.params.id;
var body = request.body;
//aqui validamos que venga id , el primer if por si hay error general 
Usuario.findById( id , ( error , usuario ) => { 
if(error){ return response.status(500).json({
                                               ok:false,
                                               mensaje:'Error al buscar usuario',
                                               errors:error
                                               });}
//el segundo if por si no viene usuario para modificar
if( !usuario ) { return response.status(400).json({
                                               ok:false,
                                               mensaje:`el usuario con el id: ${id} , no existe `,
                                               errors:error
                                               });} 
//si pasa estos if porcedemos a hacer el put sobre el usuario con lo nuevo que trae el body                                               
usuario.nombre = body.nombre;
usuario.email = body.email;
usuario.role= body.role;  

//luego guardamos el nuevo regsitro
usuario.save( ( error , usuarioEditado ) =>  { 
if (error) { return response.status(400).json({ 
                                               ok:false,
                                               mensjae:'Error al actualizar usuario',
                                               errors: error , } 
                                               );}       
                    
                    usuarioEditado.password = ':)' ;

                    response.status(201).json( {ok:true,
                                                usuario: usuarioEditado,
                                                usuarioLogueadoToken: request.usuario });



}); 
                                               
});



});

/*=================================================
        ELIMINAR USUARIO ( DELETE )
=================================================*/ 
app.delete('/:id' , autenticacionToken.verificaToken , ( request , response  )=> {   

var id = request.params.id ;

Usuario.findByIdAndRemove( id , (error , usuarioBorrado  )=>{

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