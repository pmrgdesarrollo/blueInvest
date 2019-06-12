import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta.model';
import { Factura } from 'src/app/models/factura.model';

import { ActivatedRoute, Router } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';
import { FacturasService } from 'src/app/services/facturas.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagando-transferencia',
  templateUrl: './pagando-transferencia.component.html',
  styles: []
})
export class PagandoTransferenciaComponent implements OnInit {

  forma: FormGroup;

  imagenSubir: File ;


  oferta: Oferta;
  factura: Factura;

  idOferta;
  idFactura;

  usuario;
  usuarioLogueado;
  email;


  ref;
  precio;

  precioFinal;

  currency = 'COP';

  signature;

  constructor( private _oferta: OfertaService , private _factura: FacturasService ,
    private _ruta: ActivatedRoute , private _router: Router ) {
    this._ruta.params.subscribe( params => this.idOferta = params['id'] );
    this.idFactura = this._factura.idfactura;

    this.usuario = JSON.parse( localStorage.getItem('usuario')) ;
    this.usuarioLogueado = this.usuario.usuario;
    this.email = this.usuario.email ;

  }

  ngOnInit() {
  this.getOferta();
  this.getFactura();

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
  nombre: new FormControl( false ,  Validators.required  ),
  cuenta: new FormControl( false ,  Validators.required  ),
  banco: new FormControl( false ,  Validators.required  ),
  tipo: new FormControl( false ,  Validators.required  ),
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
                              },

    );

  }



  getOferta() {
  this._oferta.obtenerOferta( this.idOferta ).subscribe( oferta => { this.oferta = oferta ;
  this.ref = oferta._id;
  this.precio = oferta.valorOferta;
} );
  }

  getFactura() {
  this._factura.obtenerFactura( this.idFactura ).subscribe( factura => {this.factura = factura ; console.log( factura ); } );
  }

  // CARGA DE IMAGENES //

  seleccionImagen( archivo: File ) {
  console.log( event );
  if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir = archivo ;
  }

  cambiarImagen( id ) {
  this._oferta.cambiarImagen( this.imagenSubir , id );
  }



subirImagen( forma ) {

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
        this.oferta.liberada,
        this.oferta.fraccion,
        this.oferta.nombre,
        this.oferta.cuenta,
        this.oferta.banco,
        this.oferta.tipo,
        this.oferta.pagando,
        this.oferta.payU,
        this.oferta.conSaldo,
        this.oferta.transferencia = true ,
        this.oferta.pagoConfirmado = true ,
        this.forma.value.pagoConfirmadoCorredor,
        this.forma.value.cargarSaldo,
        this.forma.value.transferir,
        this.oferta.pagoFecha = new Date ,
        this.forma.value.docsOf,
        this.oferta.utilidad,
        this.oferta.utilidadFinal,
        this.oferta.pagadorPago,
        this.oferta._id,


        );

     this._oferta.comprobante( oferta , this.oferta._id ).subscribe( ( data: any )  => { console.log( data );
     this.cambiarImagen( data._id );

     // return this._router.navigate( [  '/inversor/inboxInversionista' ] );
}
);

console.log( oferta );

  }


}
