import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

usuarios: Usuario[] = [];

constructor(
private _usuarioService: UsuariosService,
private _ruta: Router
) { }

ngOnInit() {
this.cargarUsuarios();
}

cargarUsuarios() {
this._usuarioService.cargarUsuario().subscribe( data => this.usuarios = data );
}

verUsuario( id ) {
this._ruta.navigate( [ '/usuario' , id ] );
}

}
