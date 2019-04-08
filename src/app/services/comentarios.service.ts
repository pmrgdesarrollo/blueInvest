import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { URL_SERVICIOS } from '../config/config' ;
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { Comentario } from '../models/comentario.model';


@Injectable({
  providedIn: 'root'
})

export class ComentarioService {

idLocal = localStorage.getItem('id');

totalComenatios: Number = 0;
misComentarios: Comentario[] = [];
id: string;
respuestaComentarios;
lista;

constructor(
public http: HttpClient,
public _usuarioService: UsuariosService
) { }

cargarComentarios() {
const url = URL_SERVICIOS + '/comentario';
return this.http.get( url ).pipe(
map( (resp: any) => {
console.log(resp.listadoComentarios);
return resp.listadoComentarios;
})
);
}

cargarMisComentarios( id: string ) {
// id del usuario para comparar con los ids del arreglo de facturas
let url = URL_SERVICIOS + '/comentario/mios/';
url += id ;
return this.http.get( url ).pipe(
map( (data: any) => { this.respuestaComentarios = data.ListaDeComentarios ;
return this.respuestaComentarios; }),



); }


obtenerComentario( id: string ) {
const url = URL_SERVICIOS + '/comentario/' + id;
return this.http.get( url ).pipe(
map( (resp: any) => {
return resp.comentario ; }) );
}

crearComentario( comentario:  Comentario ) {
let url = URL_SERVICIOS + '/comentario';
url += '?token=' + this._usuarioService.token;
return this.http.post( url, comentario ).pipe(
map( (resp: any) =>  {
swal( 'Comentario Publicado!!!' , 'success'  );
return  resp.comentario ;
} )
);
}

actualizarComentario( comentario: Comentario ) {
let url = URL_SERVICIOS + '/comentario/' + comentario._id ;
url += '?token=' + this._usuarioService.token;
return this.http.put( url, comentario ).pipe(
map( (resp: any) => {
return resp.comentarioEditado;
})
);
}

borrarComentario( id: string ) {
let url = URL_SERVICIOS + '/comentario/' + id;
url += '?token=' + this._usuarioService.token;
return this.http.delete( url ).pipe(
map( resp => swal('Comentario Eliminado', 'Eliminado correctamente', 'success') )
);
}

}
