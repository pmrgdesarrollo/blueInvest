import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ProtegerRutasGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuariosService,
    public router: Router
  ) {}

  canActivate() {

    if ( this._usuarioService.estalogueado() ) {
      console.log( 'PASO EL GUARD');
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/login']);
      return false;
    }

  }


  }


