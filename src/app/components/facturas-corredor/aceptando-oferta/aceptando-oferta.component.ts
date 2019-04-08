import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Oferta } from 'src/app/models/oferta.model';

@Component({
  selector: 'app-aceptando-oferta',
  templateUrl: './aceptando-oferta.component.html',
  styleUrls: ['./aceptando-oferta.component.css']
})
export class AceptandoOfertaComponent implements OnInit {

  forma: FormGroup;

  oferta;
  id;
  _ofertaService: any;

  constructor( private _ruta: ActivatedRoute , private _oferta: OfertaService , private ruta: Router ) {
  this._ruta.params.subscribe( params => this.id = params['id'] );
   }

  ngOnInit() {
    this.obtenerOferta();
    this.forma = new FormGroup( {
      valorOferta: new FormControl( null , Validators.required ),
      tasaOferta: new FormControl( null ,  Validators.required  ),
      usuarioFactura: new FormControl( null ,  Validators.required  ),
      factura: new FormControl( null ,  Validators.required  ),
      estado: new FormControl( false ,  Validators.required  ),
      liberada: new FormControl( false ,  Validators.required  ),
      nombre: new FormControl( null ,  Validators.required  ),
      cuenta: new FormControl( null  ,  Validators.required  ),
      banco: new FormControl( null  ,  Validators.required  ),
      tipo: new FormControl( null  ,  Validators.required  ),
                                    },
          );
  }

  obtenerOferta() {
  this._oferta.obtenerOferta( this.id ).subscribe( oferta => {
    console.log( oferta );
    this.oferta = oferta ; } );
  }

  enviarDatos( forma ) {

    console.log(forma.value);

    const oferta = new Oferta(
this.oferta.valorOferta,
this.oferta.tasaOferta,
this.oferta.usuarioFactura,
this.oferta.factura,
this.oferta.estado,
this.oferta.liberada,
this.forma.value.nombre,
this.forma.value.cuenta,
this.forma.value.banco,
this.forma.value.tipo,

);

this._oferta.enviarDatos( oferta , this.id ).subscribe( editada => {
console.log( editada ) ;

this.ruta.navigate( [  '/corredor/factura' , this.oferta.factura  ] );

  } );

}

}
