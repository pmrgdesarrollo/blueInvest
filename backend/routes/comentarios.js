/*jshint esversion: 6 */

var express = require('express');
var app = express();

var autenticacionToken = require( '../middleWares/autenticacion');

//importar modelo
var Comentario = require('../models/comentario');


/*=================================================
        OBTENER LISTA DE COMENTARIOS ( GET )
=================================================*/
app.get( '/',   ( request , response )=>{ 

var desde = request.query.desde || 0 ;
desde = Number(desde);
// .populate es para mostrar los datos que vienen dentro de ese id - limit y skip es para la paginacion
Comentario.find({}).populate( 'usuario' , 'nombre' ).exec(  ( error , listadoComentarios )=>{ 
                if( error ) throw error ;
                response.status(200).json({ ofertasGetOK:true,
                                            mensaje:'Listado de comentarios OK',
                                            listadoComentarios:listadoComentarios });        
                 });
});

 /*=================================================
        OBTENER UN COMENTARIO ( GET )
=================================================*/
app.get('/:id', ( request , response ) => { 
        var id = request.params.id;

        Comentario.findById(id).populate( 'usuario' , 'nombre email' ).exec( 
                
                ( error , comentario )=> { 
        
                if(error) return response.status(500).json({ 
                                                            petitcionOk:false,
                                                            mensaje:'Error al buscar comentario en DB',
                                                            errores:error    
                                                            });
                if( !comentario  ) return response.status(400).json({
                                                            petitcionOk:false,
                                                            mensaje:`El comentario con el id:${id} no existe`,
                                                            errores:error 
                 }); 

                 response.status(200).json({ estadoOk:true , 
                        mensaje:'oferta Encontrada' , 
                        comentario:comentario  ,
                       }); 

  }); 

}); 

/*=================================================
        OBTENER MIS COMENTARIOS ( GET )
=================================================*/
app.get('/mios/:id', ( request , response ) => { 

        var id = request.params.id;
        
        
        Comentario.find( { pagador: id } ).populate( 'usuario' , 'nombre email role' ).exec( 
                ( error , comentarios ) =>{
                        if(error) return error ;
                        response.status(200).json({
                                                   PeticionOK:true,
                                                   mensaje:'Get de comentarios andando',
                                                   ListaDeComentarios:comentarios
                                                   });
                      
                                                                    });  


 

}); 

/*=================================================
        HACER UN COMENTARIO ( POST )
=================================================*/ 
app.post( '/', autenticacionToken.verificaToken , ( request , response )=>{ 

        id = request.params._id;
        
        var body = request.body ;
        
        var comentario = new Comentario({ 
                rating: body.rating ,
                comentario : body.comentario ,
                pagador: body.pagador ,
                usuario : request.usuario
           
           });
                                 
           comentario.save( ( error , comentario ) => { 
        
           if(error) return response.status(500).json({  estadoOk:false,
                                                         mensaje:'error en DB al crear comentario',
                                                         errores:error   
                                                        });
        
           response.status(200).json({  estadoOk:true , 
                                        mensaje:'comentario publicado' , 
                                        comentario: comentario ,
                                        });                                                                                      
        
                                                      });                                                                                                   
        
                                                                                     
});
/*=================================================
        MODIFICAR UN COMENTARIO ( PUT or PATCH )
=================================================*/ 
app.put( '/:id', autenticacionToken.verificaToken , ( request , response )=>{ 
var id = request.params.id;
var body = request.body; 

Comentario.findById( id , ( error , comentarioAeditar )=> { 
        if(error){ return response.status(500).json({ petitcionOK:false,
                                                     mensaje:'Error al editar en db',
                                                     errors:error
                                                    });}
        if(!comentarioAeditar){ return response.status(400).json({ petitcionOK:false,
                                                     mensaje:'No existe este oferta en db',
                                                     errors:error
                                                    });}  
                                                                                                   
                                                    comentarioAeditar.rating = body.valorOfeta;
                                                    comentarioAeditar.comentario = body.tasaOfeta;
                                                    comentarioAeditar.pagador = body.pagador;
                                                    comentarioAeditar.usuario = request.usuario._id;
                                                   

comentarioAeditar.save( ( error , comentarioEditado )=>{ 
        if(error){ return response.status(500).json({ petitcionOK:false,
                                                      mensaje:'Error al editar en db',
                                                      errors:error
                                                     });}
                          response.status(200).json({ petitcionOK:true,
                                                      mensaje:'Comentario editado OK',
                                                      comentarioEditado :comentarioEditado 
                                                    });                           

 });

 });

 });
/*=================================================
        ELIMINAR UN COMENTARIO ( DELETE )
=================================================*/
app.delete( '/:id', autenticacionToken.verificaToken , (request , response )=>{ 
var id = request.params.id;
Comentario.findByIdAndDelete( id , (error , comentarioAborrar )=>{ 
        if(error) return response.status(500).json({ 
                                                    petitcionOK:false,
                                                    mensaje:'DB delete error',
                                                    errors:error 
         });
         if(!comentarioAborrar) return response.status(500).json({ 
                                                     petitcionOK:false,
                                                     mensaje:'No existe este comentario',
                                                     errors:error 
                                                    });
                        response.status(200).json({ 
                                                     petitcionOK:true,
                                                     mensaje:'Comentario eliminado con exito',
                                                     comentarioAborrar:comentarioAborrar
                                                  });                          
 
                                                           });        
});


module.exports = app ;