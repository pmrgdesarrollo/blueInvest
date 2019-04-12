/*jshint esversion: 6 */


var express = require( 'express' );
var autenticacionToken = require( '../middleWares/autenticacion');


var app = express();

//Para importar el modelo de usuarios
var Comercio = require( '../models/comercio');


/*=================================================
        OBTENER LISTA DE EMPRESAS ( GET )
=================================================*/
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0 ;
    desde = Number(desde);

        Comercio.find({}, 'nombre_de_establecimiento actividad nit direccion telefono').
        skip( desde ).limit(5)
            .exec(
                (err, empresas) => {
    
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando empresas',
                            errors: err
                        });
                    }

                    Comercio.count( {} , ( error , conteo  ) => { 
                        
                        res.status(200).json({
                            ok: true,
                            empresas: empresas,
                            total: conteo,
                        });

                       }) 
                    });
    });

    /*=================================================
        OBTENER TOODA LISTA DE EMPRESAS ( GET )
=================================================*/
app.get('/todas', (req, res, next) => {


        Comercio.find({}, 'nombre_de_establecimiento actividad nit direccion telefono').exec(
                (err, empresas) => {
    
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando empresas',
                            errors: err
                        });
                    }

                    Comercio.count( {} , ( error , conteo  ) => { 
                        
                        res.status(200).json({
                            ok: true,
                            empresas: empresas,
                            total: conteo,
                        });

                       }) 
                    });
    });

/*=================================================
        OBTENER LISTA DE A UNA EMPRESAS ( GET )
=================================================*/
app.get('/una', (req, res, next) => {

    var desde = req.query.desde || 0 ;
    desde = Number(desde);

        Comercio.find({}, 'nombre_de_establecimiento actividad nit direccion telefono').
        skip( desde ).limit(1)
            .exec(
                (err, empresas) => {
    
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando empresas',
                            errors: err
                        });
                    }

                    Comercio.count( {} , ( error , conteo  ) => { 
                        
                        res.status(200).json({
                            ok: true,
                            empresas: empresas,
                            total: conteo,
                        });

                       }) 
                    });
    });

/*=================================================
        OBTENER UNA EMPRESA ( GET )
=================================================*/
app.get('/:id', (req, res, next) => {

    var id = req.params.id;

    Comercio.findById( id , ( error , empresa ) => { 
    if(error){ return response.status(500).json({
        ok:false,
        mensaje:'Error al buscar empresa',
        errors:error
        });}
        //el segundo if por si no viene usuario para modificar
        if( !empresa ) { return response.status(400).json({
        ok:false,
        mensaje:`la empresa con el id: ${id} , no existe `,
        errors:error
        });} 

        res.status(200).json({
        ok: true,
        empresa: empresa
        });                                  
});

});
/*=================================================
        AGREGAR EMPRESAS ( POST )
=================================================*/           
app.post( '/' ,  ( request , response ) => {  


  var body = request.body ;

  var comercio = new Comercio ( {
    nombre_de_establecimiento: body.nombre,
    actividad: body.actividad,
    nit: body.nit,
    direccion: body.direccion,
    telefono:body.telefono

                              } );

   comercio.save( ( error , comercioGuardado  ) =>  { 


    if ( error ) { return response.status(400).json( 
        
      { ok:false,
        mensjae:'Error en este punto',
        errors: error , } 
        
        ) ; }       
      
       response.status(201).json(
      
      { ok:true,
        comercioGuardado: comercioGuardado,
        }) ;



     } );                           


});

/*=================================================
        MODIFICAR EMPRESAS ( PUT or PATCH )
=================================================*/ 
app.put( '/:id' , autenticacionToken.verificaToken , ( request , response  )=> { 

var id = request.params.id;
var body = request.body;
//aqui validamos que venga id , el primer if por si hay error general 
Comercio.findById( id , ( error , empresa ) => { 
if(error){ return response.status(500).json({
                                               ok:false,
                                               mensaje:'Error al buscar empresa',
                                               errors:error
                                               });}
//el segundo if por si no viene usuario para modificar
if( !empresa ) { return response.status(400).json({
                                               ok:false,
                                               mensaje:`la empresa con el id: ${id} , no existe `,
                                               errors:error
                                               });} 
//si pasa estos if porcedemos a hacer el put sobre el usuario con lo nuevo que trae el body                                               
empresa.nombre_de_establecimiento = body.nombre;
empresa.actividad = body.actividad;
empresa.nit = body.nit; 
empresa.direccion = body.direccion; 
empresa.telefono = body.telefono;  

//luego guardamos el nuevo regsitro
empresa.save( ( error , empresaEditada ) =>  { 
if (error) { return response.status(400).json({ 
                                               ok:false,
                                               mensjae:'Error al actualizar empresa',
                                               errors: error , } 
                                               );}       
                    
                  

                    response.status(201).json( {ok:true,
                                                empresa: empresaEditada,
                                                usuarioLogueadoToken: request.usuario });



}); 
                                               
});



});

/*=================================================
        ELIMINAR EMPRESAS ( DELETE )
=================================================*/ 
app.delete('/:id' , autenticacionToken.verificaToken , ( request , response  )=> {   

var id = request.params.id ;

Comercio.findByIdAndRemove( id , (error , empresaBorrada  )=>{

if (error){ return response.status(500).json({
                                                 ok:false,
                                                 mensaje:'Error eliminando empresa',
                                                 errors:error,
});} 

if (!empresaBorrada){ return response.status(400).json({
                                                  ok:false,
                                                  mensaje:'No existe una empresa con este id',
                                                  errors:error,
});}

response.status( 200 ).json({
ok:true,
mensaje:'ok borrado',
empresa:empresaBorrada,
usuarioLogueadoToken: request.usuario

});


});

});




module.exports = app ;        