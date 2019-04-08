import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(  img: string, tipo: string = 'facturas' ): any {

    let url = URL_SERVICIOS + '/img';

    if ( !img ) {
      return url + '/facturas/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }

    switch ( tipo ) {

      case 'facturas':
        url += '/facturas/' + img;
      break;

      case 'pagadores':
        url += '/pagadores/' + img;
      break;

      case 'descontadores':
         url += '/descontadores/' + img;
      break;

      default:
        console.log('tipo de imagen no existe, facturas, pagadores , descontadores');
        url += '/usurios/xxx';
    }

    return url;
  }

}
