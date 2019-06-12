/*jshint esversion: 6 */

var app = require('../config/config').app;
app.use(require('../config/config').fileUpload());

var fs = require('fs');

//MODELOS

var Usuario = require('../models/usuario');
var Factura = require('../models/facturas');
var Oferta = require('../models/ofertas');
var Natural = require('../models/naturales');
var Juridica = require('../models/juridicas');

// PUT CON VALIDACION PARA SOLO IMAGENES

app.put('/:tipo/:id', (request, response) => {

    var tipo = request.params.tipo;
    var id = request.params.id;

    //Tipos validos ( continuacion de mover archivo a un path ) 

    var tiposValidos = ['facturas', 'ofertas', 'naturales' , 'juridicas' ];

    if (tiposValidos.indexOf(tipo) < 0) {
        return response.status(400).json({
            ok: false,
            mensaje: 'tipo de coleccion no valida',
            errors: { message: 'tipo de coleccion no es valida' }
        });
    }

    if (!request.files) return response.status(400).json({
        ok: false,
        mensaje: 'No files uploaded'
    });
    // Esta es la variable que va a contener los archivos , el .imagen se envia desde los parametros en postman   
    var archivoImagen = request.files.imagen;

    //Validacion 
    var nombreCortado = archivoImagen.name.split('.');
    var extensionArchivo = nombreCortado[nombreCortado.length - 1];
    //Extensiones Validas para imagenes 
    var extencionesValidas = ['png', 'jpg', 'gif', 'jpeg', 'pdf' ];



    if (extencionesValidas.indexOf(extensionArchivo) < 0) return response.status(400).json({
        ok: false,
        mensaje: 'Extension no valida , los archivos validos son:' + extencionesValidas.join(',')
    });

    /* MOVER EL ARCHIVO A UN PATH  1-(CREAR 3 CARPETAS(PATHS) y llamarlas en el url '/:tipo/:id' (tambien se llama el id para luego asignar la imagen) 
     (USUARIO , MEDICO , HOSPITAL)) 2-NOMBRAR EL ARCHIVO DONDE SE VA A GUARDAR PARA FACILIDAD DE MANEJO 3-ENVIAR AL PATH */

    //NOMBRE DEL ARCHIVO ojo *** poner la extension --- la extension se debe validar Arriba en Validacion de tipos !!!!

    var nombreArchivo = `${ id }-${ new Date().getMilliseconds() }.${ extensionArchivo }`;

    //Mover el archivo temporal a un Path 1- crear el path , 2- enviar con .mv

    var path = `./uploads/${ tipo }/${ nombreArchivo }`;

    archivoImagen.mv(path , error => {

        if (error) {
            return response.status(400).json({
                ok: false,
                mensaje: 'error al moveryea archivo',
                errores: error
            });
        }



        subirPorTipo(tipo, id, nombreArchivo, response);


    });
});

/*===============================================================================================================================
        AGREGAR IMAGEN AL TIPO DE ARCHIVO ( FACTURA , OFERTA , DESCONTADOR ) se deben importar los modelos para aplicar el .save
===============================================================================================================================*/

subirPorTipo = function(tipo, id, nombreArchivo, response) {

    switch (tipo) {

        case 'facturas':
            Factura.findById(id, (error, factura) => {

                if (!factura) {
                    fs.unlinkSync(`./uploads/${tipo}/${nombreArchivo}`);
                    return response.status(400).json({ mensaje: 'esta factura no existe' });
                }

                var pathViejo = './uploads/facturas/' + factura.docs;
                // Aqui se importa el FS de node para validar si la imagen existe y eliminarla
                if (fs.existsSync(pathViejo)) {
                    fs.unlinkSync(pathViejo);
                }
                if (error) return response.status(500).json({ ok: false, error: error });
                factura.docs = nombreArchivo;
                factura.save((error, facturaActualizadaEnUploads) => {

                    if (error) {
                        return response.status(400).json(

                            {
                                ok: false,
                                mensaje: 'Error actualizando foto de factura',
                                errors: error,
                            }

                        );
                    }

                    response.status(200).json(

                        {
                            ok: true,
                            facturaActualizadaEnUploads
                        });


                });

            });
            break;
        case 'ofertas':
            Oferta.findById(id, (error, oferta) => {

                if (!oferta) {
                    fs.unlinkSync(`./uploads/${tipo}/${nombreArchivo}`);
                    return response.status(400).json({ mensaje: 'esta oferta no existe' });
                }

                var pathViejo = './uploads/ofertas/' + oferta.docsOf;
                // Aqui se importa el FS de node para validar si la imagen existe y eliminarla
                if (fs.existsSync(pathViejo)) {
                    fs.unlinkSync(pathViejo);
                }
                if (error) return response.status(500).json({ ok: false, error: error });
                oferta.docsOf = nombreArchivo;
                oferta.save((error, ofertaActualizada) => {

                    if (error) {
                        return response.status(400).json(

                            {
                                ok: false,
                                mensaje: 'Error actualizando foto de oferta',
                                errors: error,
                            }

                        );
                    }

                    response.status(200).json(

                        {
                            ok: true,
                            ofertaActualizada
                        });


                });
            });
            break;
        case 'naturales':

        Natural.findById(id, (error, personaNatural ) => {

            if (!personaNatural) {
                fs.unlinkSync(`./uploads/${tipo}/${nombreArchivo}`);
                return response.status(400).json({ mensaje: 'esta personaNatural no existe' });
            }

            var pathViejo = './uploads/naturales/' + personaNatural.doc1;
            var pathViejo2 = './uploads/naturales/' + personaNatural.doc2;
            var pathViejo3 = './uploads/naturales/' + personaNatural.doc3;
            var pathViejo4 = './uploads/naturales/' + personaNatural.doc4;
            // Aqui se importa el FS de node para validar si la imagen existe y eliminarla
            if (fs.existsSync(pathViejo)) {
                fs.unlinkSync(pathViejo);
            }

            if (fs.existsSync(pathViejo2)) {
                fs.unlinkSync(pathViejo2);
            }

            if (fs.existsSync(pathViejo3)) {
                fs.unlinkSync(pathViejo3);
            }

            if (fs.existsSync(pathViejo4)) {
                fs.unlinkSync(pathViejo4);
            }



            if (error) return response.status(500).json({ ok: false, error: error });

            personaNatural.doc1 = nombreArchivo;
           

            personaNatural.save((error, personaNaturalActualizada) => {

                if (error) {
                    return response.status(400).json(

                        {
                            ok: false,
                            mensaje: 'Error actualizando foto de personaNaturalActualizada',
                            errors: error,
                        }

                    );
                }

                response.status(200).json(

                    {
                        ok: true,
                        personaNaturalActualizada
                    });


            });
        });


            break;

        default:
            response.status(400).json({ ok: false, error: { message: 'Tipo de archivo no valido' } });
    }

};



module.exports = app;


      