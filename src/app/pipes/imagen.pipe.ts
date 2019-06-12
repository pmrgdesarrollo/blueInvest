import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {


  transform( img: string, tipo: string = 'factura' ): any {

    let url = URL_SERVICIOS + '/img';

    url += '/facturas/' + img;

    if ( !img ) {
      return url + '/factura/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }



    return url;
  }

}
