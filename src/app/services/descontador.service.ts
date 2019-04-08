import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { Descontador } from '../models/descontador.model';
import { URL_SERVICIOS } from '../config/config' ;
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DescontadorService {

  totalDescontadores: Number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuariosService
   ) { }

cargarDescontador() {

    const url = URL_SERVICIOS + '/descontador';
    return this.http.get( url ).pipe(
                                      map( (resp: any) => {
                                      this.totalDescontadores = resp.total;
                                      console.log( resp.descontadores );
                                      return resp.descontadores;
                                      })
                                      );
}

obtenerDescontador( id: string ) {
const url = URL_SERVICIOS + '/descontador/' + id;
return this.http.get( url ).pipe(
                                map( (resp: any) => resp.descontadorid) );
}

crearDescontador( descontador: Descontador ) {
let url = URL_SERVICIOS + '/descontador';
url += '?token=' + this._usuarioService.token;

return this.http.post( url, descontador ).pipe(
map( (resp: any) =>  {
console.log('descontador creado' , resp );
swal( 'Descontador creado correctamente' , descontador.nombre , 'success'  );
return resp.descontadorCreado;
} )

);

}

actualizarDescontador( descontador: Descontador ) {
let url = URL_SERVICIOS + '/descontador/' + descontador._id;
url += '?token=' + this._usuarioService.token;

return this.http.put( url, descontador ).pipe(
map( (resp: any) => {

swal('Pagador Actualiado', descontador.nombre, 'success');
return resp.descontadorEditado;
})
);

}
}
