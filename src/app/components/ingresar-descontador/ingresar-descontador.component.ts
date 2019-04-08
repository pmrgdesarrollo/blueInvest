import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Descontador } from 'src/app/models/descontador.model';
import { Router } from '@angular/router';
import { DescontadorService } from '../../services/descontador.service';

@Component({
  selector: 'app-ingresar-descontador',
  templateUrl: './ingresar-descontador.component.html',
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
export class IngresarDescontadorComponent implements OnInit {

  forma: FormGroup;

  descontadores: Descontador[] = [];

  constructor( private _descontadorService: DescontadorService , private ruta: Router ) {
  }

  ngOnInit() {
  this.cargarDescontadores();

  this.forma = new FormGroup( {
    nombre: new FormControl( null , Validators.required ),
    nit: new FormControl( null ,  Validators.required  ),
                              },

    );

  /*this._modalUploadService.notificacion
  .subscribe( () => this.cargarHospitales() );*/

  }

  cargarDescontadores() {
  this._descontadorService.cargarDescontador()
  .subscribe( descontadores => this.descontadores = descontadores );
  }

  crearDescontador( forma ) {

  console.log(forma.value);

    const descontador = new Descontador(
    this.forma.value.nombre,
    this.forma.value.nit,
    this.forma.value.id );

    this._descontadorService.crearDescontador( descontador ).subscribe(( data: any ) => {
    console.log( data );
    console.log( data._id );
    return this.ruta.navigate(['/corredor']) ; } );


}
}
