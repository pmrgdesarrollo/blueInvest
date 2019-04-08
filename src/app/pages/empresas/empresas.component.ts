import { Component, OnInit } from '@angular/core';
import { Comercio } from 'src/app/models/comercio.model';
import { ComercioService } from 'src/app/services/comercio.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresas: Comercio[] = [] ;
  desde = 0;
  total;

  cargando = false ;

  constructor( private _empresas: ComercioService ) {

  }

  ngOnInit() {
    this.cargarEmpresas();

  }

  cargarEmpresas() {

    this.cargando = true ;

    this._empresas.cargarEmpresa( this.desde ).subscribe( (data: any) => { this.empresas = data ;
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

}
