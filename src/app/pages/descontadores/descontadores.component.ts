import { Component, OnInit } from '@angular/core';
import { Descontador } from 'src/app/models/descontador.model';
import { DescontadorService } from '../../services/descontador.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-descontadores',
  templateUrl: './descontadores.component.html',
  styleUrls: ['./descontadores.component.css']
})
export class DescontadoresComponent implements OnInit {


descontadores: Descontador[] = [];


constructor( private _descontadorService: DescontadorService , private ruta: Router  ) { }

cargarDescontadores() {
this._descontadorService.cargarDescontador().subscribe( descontadores => {
this.descontadores = descontadores ;
console.log( 'pagadores cargados' , this.descontadores ) ; } );
}

ngOnInit() {
this.cargarDescontadores();
}

verDescontador( id: string ) {
this._descontadorService.obtenerDescontador( id ).subscribe( data => { console.log( data ) ;
return this.ruta.navigate(['/descontador' , id ]) ;
} );

}

}
