import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { OfertaService } from '../../../services/oferta.service';

@Component({
  selector: 'app-confirmante-pago',
  templateUrl: './confirmante-pago.component.html',
  styles: [

  `
  .confirmanteFoto{
    width:100%;
  }

  `

  ]
})
export class ConfirmantePagoComponent implements OnInit {

  idOferta;
  oferta;
  confirmada;

  constructor( private _ruta: ActivatedRoute , private _oferta: OfertaService , private _router: Router ) {
    this._ruta.params.subscribe( params => this.idOferta = params['id'] );
  }

  ngOnInit() {
  this.getOferta();
  }

getOferta() {
this._oferta.obtenerOferta( this.idOferta ).subscribe( oferta => {this.oferta = oferta ;
this.confirmada = this.oferta.pagoConfirmadoCorredor;
console.log( this.oferta   ); } );
}

confirmarPago( oferta ) {
oferta.pagoConfirmadoCorredor = true ;
this._oferta.actualizarOferta( oferta , this.idOferta ).subscribe( data => console.log( data ) );
this._router.navigate( ['/corredor/historico'] );

}

}
