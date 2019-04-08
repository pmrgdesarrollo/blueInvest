import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-form-reg',
  templateUrl: './form-reg.component.html',
  styleUrls: ['./form-reg.component.css']
})
export class FormRegComponent implements OnInit {

  forma: FormGroup;

  constructor(private _usuarioService: UsuariosService , private ruta: Router  ) { }

  sonIguales( campo1: string , campo2: string ) {

    return ( grupo: FormGroup ) => {

      const pass1 = grupo.controls[campo1].value;
      const pass2 = grupo.controls[campo2].value;

      if ( pass1 === pass2 ) { return null ; }

      return { sonIguales: true };

     };

  }

  ngOnInit() {

    this.forma = new FormGroup( {

      nombre: new FormControl( null , Validators.required ),
      email: new FormControl( null ,   [ Validators.required , Validators.email ] ),
      password: new FormControl( null , Validators.required ),
      password2: new FormControl( null , Validators.required ),
      role: new FormControl( null , Validators.required  ),
      condiciones: new FormControl( false ),

     },
      { validators: this.sonIguales( 'password' , 'password2' ) }

      );
  }


registrarUsuario(forma) {
  if ( this.forma.invalid ) { return; }
  if ( !this.forma.value.condiciones ) { return console.log( 'debes aceptar las condiciones' );  }
  console.log(forma.value);

  const usuario = new Usuario(
    this.forma.value.nombre,
    this.forma.value.email,
    this.forma.value.password,
    this.forma.value.role
    );

  this._usuarioService.crearUsuario( usuario ).subscribe(( data: any ) => {
    return this.ruta.navigate(['/login']);
  } );
}

}
