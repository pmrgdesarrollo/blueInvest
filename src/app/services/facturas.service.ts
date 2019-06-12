import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { Factura } from '../models/factura.model';
import { URL_SERVICIOS } from '../config/config' ;
import { map, filter } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { SubirArchivoService } from './subir-archivo.service';


@Injectable({
  providedIn: 'root'
})
export class FacturasService {

idLocal = localStorage.getItem('id');

idfactura;

boton = true ;

totalFacturas: Number = 0;
misFacturas: Factura[] = [];
id: string;
respuestaFacturas;
lista;
factura: Factura;


  constructor(
    public http: HttpClient,
    public _usuarioService: UsuariosService,
    public _subirArchivo: SubirArchivoService,

  ) { }

cargarFactura() {

const url = URL_SERVICIOS + '/factura';
return this.http.get( url ).pipe(
                                 map( (resp: any) => {
                                 console.log(resp.ListaDeFacturas);
                                 return resp.ListaDeFacturas;
                                 })
                                );
                              }

cargarMisFacturas( ) {
// id del usuario para comparar con los ids del arreglo de facturas

const url = URL_SERVICIOS + '/factura/mias/' + this.idLocal ;

return this.http.get( url ).pipe(
                                 map( (data: any) => { this.respuestaFacturas = data.ListaDeFacturas ;
                                 return this.respuestaFacturas; }),
                                 ); }

obtenerFactura( id: string ) {
const url = URL_SERVICIOS + '/factura/' + id;
return this.http.get( url ).pipe(
                                map( (resp: any) => { this.factura = resp.factura ; console.log( resp );
                                return resp.factura ; }) );
}

crearFactura( factura:  Factura ) {
let url = URL_SERVICIOS + '/factura';
url += '?token=' + this._usuarioService.token;
return this.http.post( url, factura ).pipe(
map( (resp: any) =>  {
swal( 'Factura publicada con exito!!!', factura.numero , 'success'  );
return  resp.FacturaCreada ;
} )

);

}

actualizarFactura( factura: Factura ) {
let url = URL_SERVICIOS + '/factura/' + factura._id ;
url += '?token=' + this._usuarioService.token;

return this.http.put( url, factura ).pipe(
map( (resp: any) => {
return resp.facturaEditada  ;
})
);

}

borrarFactura( id: string ) {
let url = URL_SERVICIOS + '/factura/' + id;
url += '?token=' + this._usuarioService.token;
return this.http.delete( url ).pipe(
map( resp => swal('Factura Borrada', 'Eliminada correctamente', 'success') )

);


}

cambiarImagen( archivo: File , id: string ) {

  this._subirArchivo.subirArchivo( archivo , 'facturas' , id ).then(
  ( resp: any )  => {
  console.log(resp); this.factura = resp.facturaActualizadaEnUploads;
  this.factura.docs = resp.facturaActualizadaEnUploads.docs ;
  swal( 'Factura Publicada' , 'descontador ' + this.factura.descontador , 'success' );
  }).catch( resp => console.log( resp ));
  // si actualiza la imagen del usuario debe guardar de nuevo los datos en el locaStorage.


 }



}
