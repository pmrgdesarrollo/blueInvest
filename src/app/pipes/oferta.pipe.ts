import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'oferta'
})
export class OfertaPipe implements PipeTransform {


  transform( img: string, tipo: string = 'oferta' ): any {

    let url = URL_SERVICIOS + '/img';

    url += '/ofertas/' + img;

    if ( !img ) {
      return url + '/oferta/xxx';
    }

    if ( img.indexOf('https') >= 0 ) {
      return img;
    }



    return url;
  }
}
