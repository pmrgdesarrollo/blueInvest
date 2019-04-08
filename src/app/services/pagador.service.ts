import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { Pagador } from '../models/pagador.model';
import { URL_SERVICIOS } from '../config/config' ;
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PagadorService {

totalPagadores: Number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuariosService
   ) { }

cargarPagador() {

    const url = URL_SERVICIOS + '/pagador';
    return this.http.get( url ).pipe(
                                      map( (resp: any) => {
                                      this.totalPagadores = resp.total;
                                      console.log( resp.pagador );
                                      return resp.pagador;
                                      })
                                      );
}

obtenerPagador( id: string ) {
const url = URL_SERVICIOS + '/pagador/' + id;
return this.http.get( url ).pipe(
                                map( (resp: any) => resp.pagador ) );
}

crearPagador( pagador: Pagador) {
let url = URL_SERVICIOS + '/pagador';
url += '?token=' + this._usuarioService.token;

return this.http.post( url, pagador ).pipe(
map( (resp: any) =>  {
console.log('pagador creado' , resp );
swal( 'Pagador creado correctamente' , pagador.nombre , 'success'  );
return resp;
} )

);

}

actualizarPagador( pagador: Pagador ) {
let url = URL_SERVICIOS + '/pagador/' + pagador._id;
url += '?token=' + this._usuarioService.token;

return this.http.put( url, pagador ).pipe(
map( (resp: any) => {

swal('Pagador Actualiado', pagador.nombre, 'success');
return resp.pagador;
})
);

}

}




