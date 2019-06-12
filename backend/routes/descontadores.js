/*jshint esversion: 6 */

var express = require('express');
var app = express();

var autenticacionToken = require( '../middleWares/autenticacion');

//importar modelo (Pagador)
var Descontador = require( '../models/descontador');


/*=================================================
        OBTENER LISTA DE DESCONTADOR ( GET )
=================================================*/
app.get('/', ( request , response ) => { 
    
        Descontador.find({}, 'nombre , nit')
        .exec(
            (err, descontadores) => {

                if (err) {
                    return response.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando descontador',
                        errors: err
                    });
                }

                response.status(200).json({
                    ok: true,
                    descontadores: descontadores
                });



            });

 });

 /*=================================================
        OBTENER UN DESCONTADOR ( GET )
=================================================*/
app.get('/:id', ( request , response ) => { 
        var id = request.params.id;

        Descontador.findById(id).populate( 'usuario' , 'nombre email' ).exec( 
                
                ( error , descontadorid )=> { 
        
                if(error) return response.status(500).json({ 
                                                            petitcionOk:false,
                                                            mensaje:'Error al buscar pagador en DB',
                                                            errores:error    
                                                            });
                if( !descontadorid) return response.status(400).json({
                                                            petitcionOk:false,
                                                            mensaje:`el descontador con el id:${id} no existe`,
                                                            errores:error 
                 }); 

                 response.status(200).json({ estadoOk:true , 
                        mensaje:'factura Encontrada' , 
                        descontadorid:descontadorid,
                       }); 

  }); 

}); 
/*=================================================
        AGREGAR DESCONTADORES ( POST )
=================================================*/ 
app.post('/', autenticacionToken.verificaToken , ( request , response ) => { 
        var body = request.body ;
        
        var descontador = new Descontador({ 
               nombre : body.nombre ,
               nit : body.nit,
               usuario: request.usuario._id,
           });
                                 
           descontador.save( ( error , descontadorCreado ) => { 
        
            if(error) return response.status(500).json({ estadoOk:false,
                                                         mensaje:'error en DB al crear Descontador',
                                                         errores:error   
                                                        });
        
            response.status(200).json({ estadoOk:true , 
                                        mensaje:'Descontador creado', 
                                        descontadorCreado: descontadorCreado ,
                                        creadoPor:descontador.usuario });                                                                                      
        
                                                      });                            
        });
 /*=================================================
        MODIFICAR DESCONTADORES ( PUT or PATCH )
=================================================*/ 
app.put('/:id', autenticacionToken.verificaToken , ( request , response ) => { 
        var id = request.params.id;
        var body = request.body;
        
        Descontador.findById( id , ( error , descontadorID )=> { 
        
                if(error) return response.status(500).json({ 
                                                            petitcionOk:false,
                                                            mensaje:'Error al buscar descontador en DB',
                                                            errores:error    
                                                            });
                if( !descontadorID ) return response.status(400).json({
                                                            petitcionOk:false,
                                                            mensaje:`El descontador con el id:${id} no exsite`,
                                                            errores:error 
                 }); 
        
                 descontadorID.nombre = body.nombre ;
                 descontadorID.nit= body.nit;
                 descontadorID.usuario= request.usuario._id;
              
    
descontadorID.save( ( error , descontadorEditado )=>{  
                 if(error) return response.status(500).json({ 
                                                             petitcionOk:false,
                                                             mensaje:'Error al editar descontador en DB',
                                                             errores:error    
                                                            }); 
        
                 response.status(200).json({ estadoOk:true , 
                                             mensaje:'descontador Actualizado' , 
                                             descontadorEditado: descontadorEditado ,
                                            }); 
                                                              });                          
        
         });
         
         });
/*=================================================
        ELIMINAR DESCONTADORES ( DELETE )
=================================================*/
app.delete('/:id' , autenticacionToken.verificaToken , ( request , response ) => { 
var id = request.params.id;
Descontador.findByIdAndRemove( id , ( error , descontadorAborrar )=>{ 
        if(error) return response.status(500).json({
                                                    peticionDeleteOK:false,
                                                    mensaje:'error al borrar descontador',
                                                    errores:error    
                                                   });

        if( !descontadorAborrar   ) return response.status(400).json({
                                                     peticionDeleteOK:false,
                                                     mensaje:'No existe este descontador en DB',
                                                     errores:error    
                                                                });                                           

                        response.status(200).json({
                                                     peticionDeleteOK:true,
                                                     mensaje:'Pagador borrado con exito',
                                                     descontadorAborrar:descontadorAborrar
                                                  });

                                                                });

});

module.exports = app ;