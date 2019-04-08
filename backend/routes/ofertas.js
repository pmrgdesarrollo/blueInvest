/*jshint esversion: 6 */

var express = require('express');
var app = express();

var autenticacionToken = require( '../middleWares/autenticacion');

//importar modelo
var Oferta = require('../models/ofertas');


/*=================================================
        OBTENER LISTA DE OFERTAS ( GET )
=================================================*/
app.get( '/',   ( request , response )=>{ 

var desde = request.query.desde || 0 ;
desde = Number(desde);
// .populate es para mostrar los datos que vienen dentro de ese id - limit y skip es para la paginacion
Oferta.find({}).exec(  ( error , listadoOfertas )=>{ 
                if( error ) throw error ;
                response.status(200).json({ ofertasGetOK:true,
                                            mensaje:'Listado de ofertas OK',
                                            listadoOfertas:listadoOfertas });        
                 });
});

 /*=================================================
        OBTENER UNA OFERTA ( GET )
=================================================*/
app.get('/:id', ( request , response ) => { 
        var id = request.params.id;

        Oferta.findById(id).populate( 'usuario' , 'nombre email' ).exec( 
                
                ( error , ofertaID )=> { 
        
                if(error) return response.status(500).json({ 
                                                            petitcionOk:false,
                                                            mensaje:'Error al buscar oferta en DB',
                                                            errores:error    
                                                            });
                if( !ofertaID  ) return response.status(400).json({
                                                            petitcionOk:false,
                                                            mensaje:`La oferta con el id:${id} no existe`,
                                                            errores:error 
                 }); 

                 response.status(200).json({ estadoOk:true , 
                        mensaje:'oferta Encontrada' , 
                        ofertaID:ofertaID  ,
                       }); 

  }); 

}); 

/*=================================================
        OBTENER MIS OEFRTAS ( GET )
=================================================*/
app.get('/misOfertas/:id', ( request , response ) => { 

        var id = request.params.id;
        
        
        Oferta.find( { usuarioFactura: id } ).exec( 
                ( error , ListaDeOfertas ) =>{
                        if(error) return error ;
                        response.status(200).json({
                                                   PeticionOK:true,
                                                   mensaje:'Get de ofertas andando',
                                                   ListaDeOfertas:ListaDeOfertas
                                                   });
                      
                                                                    });  


 

}); 

/*=================================================
        OBTENER OEFRTAS SOBRE FACTURAS ( GET )
=================================================*/
app.get('/factura/:id', ( request , response ) => { 

        var id = request.params.id;
        
        
        Oferta.find( { factura: id } ).exec( 
                ( error , ListaDeOfertas ) =>{
                        if(error) return error ;
                        response.status(200).json({
                                                   PeticionOK:true,
                                                   mensaje:'Get de ofertas andando',
                                                   ListaDeOfertas:ListaDeOfertas
                                                   });
                      
                                                                    });  


 

}); 

/*=================================================
        HACER OFERTA ( POST )
=================================================*/ 
app.post( '/', autenticacionToken.verificaToken , ( request , response )=>{ 

        id = request.params._id;
        
        var body = request.body ;
        
        var oferta = new Oferta({ 
                valorOferta: body.valorOferta ,
                tasaOferta : body.tasaOferta ,
                usuarioFactura: body.usuarioFactura,
                factura: body.factura ,
                estado: body.estado ,
                liberada: body.liberada,
                fraccion: body.fraccion,
                nombre:body.nombre,
                cuenta:body.cuenta,
                banco:body.banco,
                tipo:body.tipo,
                usuario : request.usuario._id ,
                
            
           });
                                 
           oferta.save( ( error , oferta ) => { 
        
            if(error) return response.status(500).json({ estadoOk:false,
                                                         mensaje:'error en DB al crear oferta',
                                                         errores:error   
                                                        });
        
            response.status(200).json({ estadoOk:true , 
                                        mensaje:'oferta creada' , 
                                        oferta: oferta ,
                                        });                                                                                      
        
                                                      });                                                                                                   
        
                                                                                     
});
/*=================================================
        MODIFICAR OFERTA ( PUT or PATCH )
=================================================*/ 
app.put( '/:id', autenticacionToken.verificaToken , ( request , response )=>{ 


var body = request.body; 
id = request.params.id;

Oferta.findById( id , ( error , ofertaAeditar )=> { 
        if(error){ return response.status(500).json({ petitcionOK:false,
                                                     mensaje:'Error al editar en db',
                                                     errors:error
                                                    });}
        if(!ofertaAeditar){ return response.status(400).json({ petitcionOK:false,
                                                     mensaje:'No existe este oferta en db',
                                                     errors:error
                                                    });}  
                                                                                                   
                          ofertaAeditar.valorOferta = body.valorOferta;
                          ofertaAeditar.tasaOferta = body.tasaOferta;
                          ofertaAeditar.usuarioFactura = body.usuarioFactura;
                          ofertaAeditar.factura = body.factura,
                          ofertaAeditar.estado= body.estado,
                          ofertaAeditar.liberada = body.liberada,
                          ofertaAeditar.fraccion = body.fraccion,
                          ofertaAeditar.nombre = body.nombre,
                          ofertaAeditar.cuenta = body.cuenta,
                          ofertaAeditar.banco = body.banco,
                          ofertaAeditar.tipo = body.tipo,
                          ofertaAeditar.usuario = request.usuario._id,

ofertaAeditar.save( ( error , ofertaEditada )=>{ 
        if(error){ return response.status(500).json({ petitcionOK:false,
                                                      mensaje:'Error al editar en db',
                                                      errors:error
                                                     });}
                          response.status(200).json({ petitcionOK:true,
                                                      mensaje:'Oferta editada OK',
                                                      ofertaEditada:ofertaEditada
                                                    });                           

 });

 });

 });
/*=================================================
        ELIMINAR OFERTA ( DELETE )
=================================================*/
app.delete( '/:id',autenticacionToken.verificaToken , (request , response )=>{ 
var id = request.params.id;
Oferta.findByIdAndDelete( id , (error , ofertaAborrar )=>{ 
        if(error) return response.status(500).json({ 
                                                    petitcionOK:false,
                                                    mensaje:'DB delete error',
                                                    errors:error 
         });
         if(!ofertaAborrar) return response.status(500).json({ 
                                                     petitcionOK:false,
                                                     mensaje:'No existe esta oferta',
                                                     errors:error 
                                                    });
                        response.status(200).json({ 
                                                     petitcionOK:true,
                                                     mensaje:'Oferta eliminada con exito',
                                                     ofertaEliminada:ofertaAborrar
                                                  });                          
 
                                                           });        
});


module.exports = app ;