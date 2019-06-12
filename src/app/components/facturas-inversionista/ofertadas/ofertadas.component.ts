import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertadas',
  templateUrl: './ofertadas.component.html',
  styles: []
})
export class OfertadasComponent implements OnInit {

  idOferta;
  ofertas;

  pagas = [];

  interesesDiarios = [];

  pagoEn;

  valoresOfertas;
  unValor;
  tasaOferta;
  dias = 365 ;

  etp;

alDiaDelPago ;

  constructor( private _oferta: OfertaService , private ruta: Router  ) {
  }

  ngOnInit() {

    this.getOferta();


  }

  getOferta() {
  this._oferta.cargarMisOfertasInveriosnista().subscribe( (oferta: any) => { this.ofertas = oferta ;
  // tslint:disable-next-line:forin
  for ( const o in oferta ) {

    const fecha1 = moment( new Date );
    const fecha2 = moment( oferta[o].pagoFecha );

    const diasUtilidad = fecha1.diff( fecha2 , 'days' );

    const pagoEn = oferta[o].facturaFechaPago ;
    console.log( pagoEn );
    const valor = oferta[o].valorOferta;
    const tasa = ( oferta[o].tasaOferta / 100 ) ;
    const dias = 365 ;
// revisa esta parte
    const ERP = Math.pow( (1 + tasa) , (1 / dias ) ) - 1 ;
    oferta[o].utilidad = ( valor * ERP );
    oferta[o].utilidadTotal = ( diasUtilidad * oferta[o].utilidad );

    if ( oferta[o].pagoConfirmado === true ) { this.pagas.push( oferta[o] ) ;  }


  }});
  }

elegirMetodo(id) {

  this.ruta.navigate( [ 'inversor/elegirMetodo' , id ]  );

}


}





