import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercio.model';
import { ComercioService } from 'src/app/services/comercio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-corredor',
  templateUrl: './corredor.component.html',
  styles: [
    `

    th , td {
      color:black;
      font-size:10px;
    }

    `
   ]
})
export class CorredorComponent implements OnInit {



usuario;
usuarioNombre;
textoBreadcrumbs;

empresas: Comercio[] = [] ;
desde = 0;
total;
termino;
cargando = false ;


constructor(  private _empresas: ComercioService , private ruta: Router )  {
    this.usuario = JSON.parse( localStorage.getItem('usuario')) ;
    this.usuarioNombre = this.usuario.nombre ;
    this.textoBreadcrumbs = `Bienvenido ${this.usuarioNombre} ! , Publica nuevas facturas en solo dos pasos`;
  }


  ngOnInit() {
    this.cargarEmpresas();

  }

  cargarEmpresas() {

    this.cargando = true ;

    this._empresas.cargardeaUnaEmpresa( this.desde ).subscribe( (data: any) => { this.empresas = data ;
    this.total = this._empresas.totalEmpresas;
    console.log(data ); } );

    this.cargando = false ;

  }

  cambiarDesde( valor: number ) {

    const desde = this.desde + valor ;

    if ( desde >= this.total  ) { return;  }
    if ( desde < 0 ) { return; }

    this.desde += valor ;

    this.cargarEmpresas();

}

buscarEmpresa(termino: string) {



  if ( termino.length <= 0 ) { this.cargarEmpresas() ; return ;  }
  this._empresas.buscarEmpresa( termino ).subscribe( ( empresas: Comercio[] ) => {
  this.empresas = empresas;
  console.log( empresas );

  });

}

verEmpresa( id ) {

  this._empresas.obtenerEmpresa( id ).subscribe( data => { console.log( data ) ;
  return this.ruta.navigate(['/empresa' , id ]) ; });

  }

}
