import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( imagen: File, tipo: string, id: string ) {

    return new Promise( (resolve, reject ) => {

      const formData = new FormData();
      const xhr = new XMLHttpRequest();

      formData.append( 'imagen', imagen , imagen.name );

      xhr.onreadystatechange = function() {

        console.log( xhr.status  );

       if ( xhr.readyState === 4 ) {

          if ( xhr.status === 200 ) { console.log( 'Imagen subida' ); resolve( JSON.parse( xhr.response ) );
          } else {
            console.log( 'Fallo la subida en este punto' );
            reject( xhr.response );
          }

        }
      };

      const url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

      xhr.open('PUT', url, true );
      xhr.send( formData );

    });




  }

}
