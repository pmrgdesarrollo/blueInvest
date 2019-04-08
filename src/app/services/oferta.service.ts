import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../config/config' ;
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { Oferta } from '../models/oferta.model';
import { FacturasService } from './facturas.service';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {


idLocal = localStorage.getItem('id');
respuestaOfertas;
respuestaOfertasSobreFacturas;

totalOfertas = 0 ;

  constructor( public http: HttpClient,
  public _usuarioService: UsuariosService,
  public _facturaService: FacturasService ) { }

cargarOferta() {
const url = URL_SERVICIOS + '/oferta';
return this.http.get( url ).pipe(
                                map( (resp: any) => {
                                this.totalOfertas = resp.total;
                                console.log(resp.listadoOfertas);
                                return resp.listadoOfertas;
                                })
                                );
}

cargarMisOfertas( ) {

let url = URL_SERVICIOS + '/oferta/misOfertas/';
url += this.idLocal ;
return this.http.get( url ).pipe(
                                map( (data: any) => { this.respuestaOfertas = data.ListaDeOfertas;
                                console.log( this.respuestaOfertas );
                                return this.respuestaOfertas; }),
); }


cargarMisOfertasFactura( id ) {
let url = URL_SERVICIOS + '/oferta/factura/';
url += id ;
return this.http.get( url ).pipe(
                                map( (data: any) => { this.respuestaOfertasSobreFacturas = data.ListaDeOfertas;
                                console.log( this.respuestaOfertasSobreFacturas );
                                return this.respuestaOfertasSobreFacturas; }),
); }


obtenerOferta( id: string ) {
const url = URL_SERVICIOS + '/oferta/' + id;
return this.http.get( url ).pipe(
                                    map( (resp: any) => {
                                      console.log( resp.ofertaID );
                                      return resp.ofertaID ; } ) );
}

crearOferta( oferta: Oferta  ) {
let url = URL_SERVICIOS + '/oferta';
url += '?token=' + this._usuarioService.token;
return this.http.post( url, oferta ).pipe(
map( (resp: any) =>  {
swal( 'Oferta publicada con exito!!!', 'Puedes regresar al panel' , 'success'  );
return  resp ;
} )
);
}

actualizarOferta( oferta: Oferta , id ) {
let url = URL_SERVICIOS + '/oferta/' + id ;
url += '?token=' + this._usuarioService.token;
return this.http.put( url, oferta ).pipe(
map( (resp: any) => {
  if (  resp.estado = 'true' ) { swal( 'Oferta aceptada!!!', 'libera el pago cuando se complete el valor de tu factura' , 'success'  ); }

return resp.ofertaEditada ;
})
);
}

 liberarOferta( oferta: Oferta , id ) {
  let url = URL_SERVICIOS + '/oferta/' + id ;
  url += '?token=' + this._usuarioService.token;
  return this.http.put( url, oferta ).pipe(
  map( (resp: any) => {
  swal( 'Pago Liberado!!!', 'envia tus datos al comprador' , 'success'  );
  return resp.ofertaEditada ;
  })
  );
  }

  enviarDatos( oferta: Oferta , id ) {
    let url = URL_SERVICIOS + '/oferta/' + id ;
    url += '?token=' + this._usuarioService.token;
    return this.http.put( url, oferta ).pipe(
    map( (resp: any) => {
    swal( 'Datos enviados!!!', 'el comprador pagara en 48 horas' , 'success'  );
    return resp.ofertaEditada ;
    })
    );
    }

borrarOferta( id: string ) {
let url = URL_SERVICIOS + '/oferta/' + id;
url += '?token=' + this._usuarioService.token;
return this.http.delete( url ).pipe(
map( resp => swal('Oferta Borrada', 'Eliminada correctamente', 'success') )
);
}

}
