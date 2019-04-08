/*jshint esversion: 6 */

var express = require('express');
var app = express();

var autenticacionToken = require('../middleWares/autenticacion');

//importar modelo (hospitales)
var Factura = require('../models/facturas');
var Usuario = require('../models/usuario');


/*=================================================
        OBTENER LISTA DE FACTURAS ( GET )
=================================================*/
app.get('/', (request, response) => {

    Factura.find({}).populate('usuario', 'nombre email role').exec(
        (error, facturas) => {
            if (error) return error;
            response.status(200).json({
                PeticionOK: true,
                mensaje: 'Get de facturas andando',
                ListaDeFacturas: facturas
            });

        });

});

/*=================================================
        OBTENER UNA FACTURA ( GET )
=================================================*/
app.get('/:id', (request, response) => {

    var id = request.params.id;

    Factura.findById(id).populate('usuario', 'nombre email').exec(

        (error, facturaID) => {

            if (error) return response.status(500).json({
                petitcionOk: false,
                mensaje: 'Error al buscar factura en DB',
                errores: error
            });
            if (!facturaID) return response.status(400).json({
                petitcionOk: false,
                mensaje: `La factura con el id:${id} does not exist`,
                errores: error
            });

            response.status(200).json({
                estadoOk: true,
                mensaje: 'factura Encontrada',
                factura: facturaID,
            });

        });



});
/*=================================================
        OBTENER MIS FACTURAS ( GET )
=================================================*/
app.get('/mias/:id', (request, response) => {

    var id = request.params.id;


    Factura.find({ usuario: id }).populate('usuario', 'nombre email role').exec(
        (error, facturas) => {
            if (error) return error;
            response.status(200).json({
                PeticionOK: true,
                mensaje: 'Get de facturas andando',
                ListaDeFacturas: facturas
            });

        });




});
/*=================================================
        AGREGAR FACTURAS ( POST )
=================================================*/
app.post('/', autenticacionToken.verificaToken, (request, response) => {
    var body = request.body;

    var factura = new Factura({
        pagador: body.pagador,
        descontador: body.descontador,
        valor: body.valor,
        numero: body.numero,
        plazo: body.plazo,
        porcentaje:body.porcentaje,
        monto:body.monto,
        tasa: body.tasa,
        vencimiento: body.vencimiento,
        disponible: body.disponible,
        comentarios: body.comentarios,
        docs: body.docs,
        usuario: request.usuario._id,
        publicacion: body.publicacion,
    });

    factura.save((error, facturaCreada) => {

        if (error) return response.status(500).json({
            estadoOk: false,
            mensaje: 'error en DB al crear Factura',
            errores: error
        });

        response.status(200).json({
            estadoOk: true,
            mensaje: 'factura creada',
            FacturaCreada: facturaCreada,
            creadoPor: factura.usuario
        });

    });
});
/*=================================================
        MODIFICAR FACTURAS ( PUT or PATCH )
=================================================*/
app.put('/:id', autenticacionToken.verificaToken, (request, response) => {
    var id = request.params.id;
    var body = request.body;

    Factura.findById(id, (error, facturaID) => {

        if (error) return response.status(500).json({
            petitcionOk: false,
            mensaje: 'Error al buscar factura en DB',
            errores: error
        });
        if (!facturaID) return response.status(400).json({
            petitcionOk: false,
            mensaje: `La factura con el id:${id} does not exist`,
            errores: error
        });

        facturaID.pagador = body.pagador;
        facturaID.descontador = body.descontador,
        facturaID.valor = body.valor;
        facturaID.numero = body.numero;
        facturaID.plazo = body.plazo;
        facturaID.porcentaje = body.porcentaje,
        facturaID.monto = body.monto,
        facturaID.tasa = body.tasa;
        facturaID.vencimiento = body.vencimiento;
        facturaID.disponible = body.disponible;
        facturaID.comentarios = body.comentarios;
        facturaID.docs = body.docs;
        facturaID.usuario = request.usuario._id;
        facturaID.publicacion = body.publicacion;

        facturaID.save((error, facturaEditada) => {
            if (error) return response.status(500).json({
                petitcionOk: false,
                mensaje: 'Error al editar factura en DB',
                errores: error
            });

            response.status(200).json({
                estadoOk: true,
                mensaje: 'factura Actualizada',
                NuevaInformacion: facturaEditada,
            });
        });

    });

});


/*=================================================
        ELIMINAR FACTURAS ( DELETE )
=================================================*/
app.delete('/:id', autenticacionToken.verificaToken, (request, response) => {
    var id = request.params.id;
    Factura.findByIdAndRemove(id, (error, facturaAborrar) => {
        if (error) return response.status(500).json({
            peticionDeleteOK: false,
            mensaje: 'error al borrar factura',
            errores: error
        });

        if (!facturaAborrar) return response.status(400).json({
            peticionDeleteOK: false,
            mensaje: 'No existe esta factura en DB',
            errores: error
        });

        response.status(200).json({
            peticionDeleteOK: true,
            mensaje: 'Factura borrado con exito',
            facturaBorrada: facturaAborrar
        });

    });

});

module.exports = app;