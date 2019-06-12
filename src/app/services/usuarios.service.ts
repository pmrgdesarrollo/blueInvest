import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { URL_SERVICIOS } from '../config/config' ;
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';





@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  token: string;
  usuario: Usuario;

  constructor( private _http: HttpClient , public router: Router  ) {

  }

// CONEXION CON EL BACKEND //

estalogueado() {
this.cargarStorage();
if ( this.token.length > 5 ) { return true ; } else { return false; }

 // return ( this.token.length > 5 ) ? true : false;
}

cargarStorage() {

  if ( localStorage.getItem('token')) {
    this.token = localStorage.getItem('token');
    this.usuario = JSON.parse( localStorage.getItem('usuario') );
  } else {
    this.token = '';
    this.usuario = null;
  }

}


 logout() {
  this.usuario = null;
  this.token = '';

  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  this.router.navigate( ['/login'] );

}





// REGISTRAR UN USUARIO
crearUsuario( usuario: Usuario ) {
const url = URL_SERVICIOS + '/usuario';
return this._http.post( url , usuario ).pipe(
map( (resp: any) => {
swal( 'Usuario creado correctamente' , usuario.email , 'success'  );
console.log( 'resp servicio' , resp );
return resp ;
})
);
}

// LOGUEAR UN USUARIO

loginService( usuario: Usuario , recordame: boolean = false  ) {

  if ( recordame ) { localStorage.setItem( 'email' , usuario.email ); } else {
  localStorage.removeItem( 'email');
  }

const url = URL_SERVICIOS + '/login';
return this._http.post( url , usuario ).pipe(

  map( (resp: any ) => {

    console.log( 'resp servicio:' , resp );



    localStorage.setItem( 'usuario' , JSON.stringify(resp.usuario) );
    localStorage.setItem( 'id' , resp.id );
    localStorage.setItem( 'token' , resp.token );

    return resp ;

   }  )

 );

}

guardarStorage( id: string, token: string, usuario: Usuario ) {

  localStorage.setItem('id', id );
  localStorage.setItem('token', token );
  localStorage.setItem('usuario', JSON.stringify(usuario) );

  this.usuario = usuario;
  this.token = token;
}

loginGoogle( token: string ) {

  const url = URL_SERVICIOS + '/login/google';

  return this._http.post( url, { token } ).pipe(
                map( (resp: any) => {
                this.guardarStorage( resp.id, resp.token, resp.usuario );
                return true;
              })
              ) ;

}

buscarUsuario( id: string ) {
const url = URL_SERVICIOS + '/usuario/' + id;
return this._http.get( url ).pipe(
map( (resp: any) => {
console.log( resp.usuario );
return resp.usuario;
})
);


}


cargarUsuario() {

  const url = '/usuario';
  return this._http.get( url ).pipe(
                                   map( (resp: any) => {
                                   console.log(resp.usuarios);
                                   return resp.usuarios;
                                   })
                                  );
                                }

}
