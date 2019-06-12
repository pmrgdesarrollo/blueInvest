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
      fechaOferta: new FormControl ( null , Validators.required ) ,
      valorOferta: new FormControl( null , Validators.required ),
      tasaOferta: new FormControl( null ,  Validators.required  ),
      usuarioFactura: new FormControl( null ,  Validators.required  ),
      factura: new FormControl( null ,  Validators.required  ),
      facturaValor: new FormControl( null ,  Validators.required  ),
      facturaFechaPago: new FormControl( null ,  Validators.required  ),
      estado: new FormControl( false ,  Validators.required  ),
      liberada: new FormControl( false ,  Validators.required  ),
      fraccion: new FormControl( false ,  Validators.required  ),
      nombre: new FormControl( null ,  Validators.required  ),
      cuenta: new FormControl( null ,  Validators.required  ),
      banco: new FormControl( null ,  Validators.required  ),
      tipo: new FormControl( null ,  Validators.required  ),
      pagando: new FormControl( false ,  Validators.required  ),
      payU: new FormControl( false ,  Validators.required  ),
      conSaldo: new FormControl( false ,  Validators.required  ),
      transferencia: new FormControl( false ,  Validators.required  ) ,
      pagoConfirmado: new FormControl( false ,  Validators.required  ),
      pagoConfirmadoCorredor: new FormControl( false ,  Validators.required  ),
      cargarSaldo: new FormControl( false ,  Validators.required  ),
      transferir: new FormControl( false ,  Validators.required  ),
      pagoFecha: new FormControl( null ,  Validators.required  ),
      docsOf: new FormControl( null ,  Validators.required  ),
      utilidad: new FormControl( 0 ,  Validators.required  ),
      utilidadFinal: new FormControl( 0 ,  Validators.required  ),
      pagadorPago: new FormControl( false ,  Validators.required  ),
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
this.oferta.fechaOferta,
this.oferta.valorOferta,
this.oferta.tasaOferta,
this.oferta.usuarioFactura,
this.oferta.factura,
this.oferta.facturaValor,
this.oferta.facturaFechaPago,
this.oferta.estado ,
this.oferta.liberada = true ,
this.oferta.fraccion,
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
