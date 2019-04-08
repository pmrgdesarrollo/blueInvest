import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

declare const gapi: any;

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css']
})
export class FormLogComponent implements OnInit {


  email: string;
  recordarme = false;

  auth2: any;
  constructor(    public router: Router,
    public _usuarioService: UsuariosService) { }

  ngOnInit() {

    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1 ) {
      this.recordarme = true;
    }

  }

  googleInit() {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '1080183916145-1eqlol8ojaq8svunnra9be384jpjlitl.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle') );

    });

  }


  attachSignin( element ) {

    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      // let profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token )
              .subscribe( () => window.location.href = '#/aprobacion'  );

    });

  }

  ingresar( forma: NgForm ) {
  console.log( forma.value );

  if ( forma.invalid ) { return ; }

  const usuario = new Usuario (
    null,
    forma.value.email,
    forma.value.password,
    null
   );



this._usuarioService.loginService( usuario , forma.value.recordarme ).subscribe(( data: any ) => {
console.log( data ) ;

// userId = data.id ;

this.router.navigate( [ '/aprobacion' ] ); } );

  }




}
