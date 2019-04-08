import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inversor',
  templateUrl: './inversor.component.html',
  styles: []
})
export class InversorComponent implements OnInit {

  usuario;
  usuarioNombre;
  textoBreadcrumbs: any;

  constructor() {
    this.usuario = JSON.parse( localStorage.getItem('usuario')) ;
    this.usuarioNombre = this.usuario.nombre ;
    this.textoBreadcrumbs = `Bienvenido ${this.usuarioNombre} ! , Invierte en  nuevas facturas en solo dos pasos`;
   }

  ngOnInit() {
  }

}
