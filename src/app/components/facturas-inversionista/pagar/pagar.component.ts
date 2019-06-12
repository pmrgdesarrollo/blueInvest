import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta.model';
import { Factura } from 'src/app/models/factura.model';
import { OfertaService } from '../../../services/oferta.service';
import { FacturasService } from '../../../services/facturas.service';
import { ActivatedRoute, Router } from '@angular/router';
// tslint:disable-next-line:quotemark
import {Md5} from "md5-typescript";

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {

  oferta: Oferta;
  factura: Factura;

  idOferta;
  idFactura;

  usuario;
  usuarioLogueado;
  email;

  ApiKey = '0mcKgbyLgy5nTK9hi3m9G8eOZx';
  merchantId = '796971' ;

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
    console.log( 'signature' , Md5.init('0mcKgbyLgy5nTK9hi3m9G8eOZx~796971~5c9ad162c330640604f5097a~10000000~COP'));
  }

  ngOnInit() {
  this.getOferta();
  this.getFactura();
  }

  getOferta() {
  this._oferta.obtenerOferta( this.idOferta ).subscribe( oferta => { this.oferta = oferta ;
  this.ref = oferta._id;
  this.precio = oferta.valorOferta;
  if ( oferta.fraccion > 0 ) { this.precioFinal = this.oferta.fraccion ; } else { this.precioFinal = this.oferta.valorOferta ; }
  console.log( this.ref );
  console.log( this.precio );
  const md5 = Md5.init(`${this.ApiKey}~${this.merchantId}~${this.ref}~${this.precio}~${this.currency}`);
  this.signature = md5 ;
  console.log( 'ultima firma' , md5 );
} );
  }

  getFactura() {
  this._factura.obtenerFactura( this.idFactura ).subscribe( factura => {this.factura = factura ; console.log( factura ); } );
  }

  payU( ) {

  }

  saldo( fechaOferta, valorOferta , tasaOferta , usuarioFactura , factura ,
  facturaValor , facturaFechaPago,  estado , liberada , fraccion , nombre , cuenta , banco , tipo ,
  pagando , payU , conSaldo , transferencia , pagoConfirmado , pagoFecha , docsOf , utilidad , _id  ) {

    const oferta = new Oferta(
      fechaOferta,
      valorOferta ,
      tasaOferta ,
      usuarioFactura ,
      factura ,
      facturaValor,
      facturaFechaPago,
      estado ,
      liberada,
      fraccion,
      nombre,
      cuenta,
      banco,
      tipo,
      pagando = true ,
      payU  = false ,
      conSaldo = true ,
      transferencia = false ,
      pagoConfirmado = false ,
      pagoFecha,
      docsOf,
      utilidad,
      _id );

      this._oferta.saldo( oferta , _id ).subscribe(
       ( data: any) => console.log( data )
      );

      this._router.navigate( [  '/inversor/saldo' , _id  ] );


  }


transferencia( fechaOferta , valorOferta , tasaOferta , usuarioFactura , factura ,
  facturaValor , facturaFechaPago , estado , liberada , fraccion , nombre , cuenta , banco , tipo ,
    pagando , payU , conSaldo , transferencia , pagoConfirmado , pagoFecha , docsOf , utilidad , _id  ) {

      const oferta = new Oferta(
        fechaOferta,
        valorOferta ,
        tasaOferta ,
        usuarioFactura ,
        factura ,
        facturaValor,
        facturaFechaPago,
        estado ,
        liberada,
        fraccion,
        nombre,
        cuenta,
        banco,
        tipo,
        pagando = true ,
        payU  = false ,
        conSaldo = false ,
        transferencia = true ,
        pagoConfirmado = false ,
        pagoFecha,
        docsOf,
        utilidad,
        _id );

        this._oferta.transferencia( oferta , _id ).subscribe(
         ( data: any) => console.log( data )
        );

        this._router.navigate( [  '/inversor/transferencia' , _id  ] );

    }


}
