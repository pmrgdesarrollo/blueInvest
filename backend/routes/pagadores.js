/*jshint esversion: 6 */

var express = require('express');
var app = express();

var autenticacionToken = require( '../middleWares/autenticacion');

//importar modelo (Pagador)
var Pagador = require( '../models/pagador');


/*=================================================
        OBTENER LISTA DE PAGADORES ( GET )
=================================================*/
app.get('/', ( request , response ) => { 
    
        Pagador.find({}, 'nombre , nit')
        .exec(
            (err, pagadores) => {

                if (err) {
                    return response.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando usuario',
                        errors: err
                    });
                }

                response.status(200).json({
                    ok: true,
                    pagador: pagadores
                });



            });

 });

 /*=================================================
        OBTENER UN PAGADOR ( GET )
=================================================*/
app.get('/:id', ( request , response ) => { 
        var id = request.params.id;

        Pagador.findById(id).populate( 'usuario' , 'nombre email' ).exec( 
                
                ( error , pagadorid )=> { 
        
                if(error) return response.status(500).json({ 
                                                            petitcionOk:false,
                                                            mensaje:'Error al buscar pagador en DB',
                                                            errores:error    
                                                            });
                if( !pagadorid ) return response.status(400).json({
                                                            petitcionOk:false,
                                                            mensaje:`el pagador con el id:${id} no existe`,
                                                            errores:error 
                 }); 

                 response.status(200).json({ estadoOk:true , 
                        mensaje:'factura Encontrada' , 
                        pagador:pagadorid ,
                       }); 

  }); 

}); 
/*=================================================
        AGREGAR PAGADORES ( POST )
=================================================*/ 
app.post('/', autenticacionToken.verificaToken , ( request , response ) => { 
        var body = request.body ;
        
        var pagador = new Pagador({ 
               nombre : body.nombre ,
               nit : body.nit,
               usuario: request.usuario._id,
           });
                                 
           pagador.save( ( error , pagadorCreado ) => { 
        
            if(error) return response.status(500).json({ estadoOk:false,
                                                         mensaje:'error en DB al crear Pagador',
                                                         errores:error   
                                                        });
        
            response.status(200).json({ estadoOk:true , 
                                        mensaje:'pagador creado', 
                                        PagadorCreado: pagadorCreado ,
                                        creadoPor:pagador.usuario });                                                                                      
        
                                                      });                            
        });
 /*=================================================
        MODIFICAR PAGADORES ( PUT or PATCH )
=================================================*/ 
app.put('/:id', autenticacionToken.verificaToken , ( request , response ) => { 
        var id = request.params.id;
        var body = request.body;
        
        Pagador.findById( id , ( error , DataDelID )=> { 
        
                if(error) return response.status(500).json({ 
                                                            petitcionOk:false,
                                                            mensaje:'Error al buscar pagador en DB',
                                                            errores:error    
                                                            });
                if( !DataDelID ) return response.status(400).json({
                                                            petitcionOk:false,
                                                            mensaje:`El pagador con el id:${id} no exsite`,
                                                            errores:error 
                 }); 
        
                 DataDelID.nombre = body.nombre ;
                 DataDelID.nit= body.nit;
                 DataDelID.usuario= request.usuario._id;
              
    
DataDelID.save( ( error , pagadorEditado )=>{  
                 if(error) return response.status(500).json({ 
                                                             petitcionOk:false,
                                                             mensaje:'Error al editar pagador en DB',
                                                             errores:error    
                                                            }); 
        
                 response.status(200).json({ estadoOk:true , 
                                             mensaje:'Pagador Actualizado' , 
                                             NuevaInformacion: pagadorEditado ,
                                            }); 
                                                              });                          
        
         });
         
         });
/*=================================================
        ELIMINAR PAGADORES ( DELETE )
=================================================*/
app.delete('/:id' , autenticacionToken.verificaToken , ( request , response ) => { 
var id = request.params.id;
Pagador.findByIdAndRemove( id , ( error , pagadorAborrar )=>{ 
        if(error) return response.status(500).json({
                                                    peticionDeleteOK:false,
                                                    mensaje:'error al borrar pagador',
                                                    errores:error    
                                                   });

        if( !pagadorAborrar   ) return response.status(400).json({
                                                     peticionDeleteOK:false,
                                                     mensaje:'No existe este pagador en DB',
                                                     errores:error    
                                                                });                                           

                        response.status(200).json({
                                                     peticionDeleteOK:true,
                                                     mensaje:'Pagador borrado con exito',
                                                     pagadorBorrado:pagadorAborrar
                                                  });

                                                                });

});

module.exports = app ;