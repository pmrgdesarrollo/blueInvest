import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { PagadorService } from '../../services/pagador.service';
import { Pagador } from 'src/app/models/pagador.model';
import { Router } from '@angular/router';





@Component({
  selector: 'app-ingresar-pagador',
  templateUrl: './ingresar-pagador.component.html',
  styles: [ `

.ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }

  .mensaje{
    font-size: 8px;
    margin:0;
    padding:0;
}

  .tamañoletra{
    font-size: 18px;
  }
  .fondoDivs{
    background: linear-gradient(to left, rgb(39, 126, 213),rgb(65, 65, 175));

      border-radius: 10px;
      padding: 10px;
      -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);
      -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);
      box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);
  }

  ` ]
})
export class IngresarPagadorComponent implements OnInit {

  forma: FormGroup;

  pagadores: Pagador[] = [];

  constructor( private _pagadorService: PagadorService , private ruta: Router ) {
  }

  ngOnInit() {
  this.cargarPagadores();

  this.forma = new FormGroup( {
    nombre: new FormControl( null , Validators.required ),
    nit: new FormControl( null , [ Validators.required ,    ] ),
                              },

    );

  /*this._modalUploadService.notificacion
  .subscribe( () => this.cargarHospitales() );*/

  }

  cargarPagadores() {
  this._pagadorService.cargarPagador()
  .subscribe( pagadores => this.pagadores = pagadores );
  }

  crearPagador( forma ) {

    console.log(forma.value);

    const pagador = new Pagador(
      this.forma.value.nombre,
      this.forma.value.nit,
      this.forma.value.id );

    this._pagadorService.crearPagador( pagador ).subscribe(( data: any ) => {
    console.log( data );
    console.log( data.PagadorCreado._id );
    return this.ruta.navigate(['/corredor']) ; } );


}

// Validar nit






}




