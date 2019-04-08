import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-corredor',
  templateUrl: './corredor.component.html',
  styles: []
})
export class CorredorComponent implements OnInit {



usuario;
usuarioNombre;
textoBreadcrumbs;


  constructor(  ) {
    this.usuario = JSON.parse( localStorage.getItem('usuario')) ;
    this.usuarioNombre = this.usuario.nombre ;
    this.textoBreadcrumbs = `Bienvenido ${this.usuarioNombre} ! , Publica nuevas facturas en solo dos pasos`;
  }


  ngOnInit() {

  }

}
