import { Component, OnInit } from '@angular/core';
import { Pagador } from 'src/app/models/pagador.model';
import { PagadorService } from '../../services/pagador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagadores',
  templateUrl: './pagadores.component.html',
  styleUrls: ['./pagadores.component.css']
})
export class PagadoresComponent implements OnInit {

  pagadores: Pagador[] = [];


  constructor( private _pagagorService: PagadorService, private ruta: Router) { }

cargarPagadores() {
this._pagagorService.cargarPagador().subscribe( pagadores => {
this.pagadores = pagadores ;
console.log( 'pagadores cargados' , this.pagadores ) ; } );
}

ngOnInit() {
this.cargarPagadores();
}

verPagador( id: string ) {
this._pagagorService.obtenerPagador( id ).subscribe( data => { console.log( data ) ;
return this.ruta.navigate(['/pagador' , id ]) ;
} );

}


}
