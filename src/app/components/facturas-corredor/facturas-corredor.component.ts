import { Component, OnInit, Input } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';
import { OfertaService } from '../../services/oferta.service';


@Component({
  selector: 'app-facturas-corredor',
  templateUrl: './facturas-corredor.component.html',
  styles: [ `

  th{
    font-weight:800;
  }

  .scrollingDiv
{
   overflow:scroll;
}

.letraResumen{

  font-size:12px;

}

   .headerFacturas{
    background: linear-gradient(to left, rgb(39, 126, 213),rgb(65, 65, 175));
    border-radius:10px 10px 0 0 ;
  }

  .publicadas{
   background:#2B83C8;
   height:50vh;
   border-radius:0 0 10px 10px  ;

  }


   ` ]
})
export class FacturasCorredorComponent implements OnInit {

  totalFacturas = [];

  saldo;

  portafolio;
  anual;
  historico;
valores = [];
  misOfertasPagas = [];
  misfacturas;

constructor( public facturaService: FacturasService , public _oferta: OfertaService ) {

}

ngOnInit() {
this.cargarMisFacturas();
this.cargarMisOfertas();
 }


 cargarMisFacturas() {
  this.facturaService.cargarMisFacturas().subscribe( data => {
  // tslint:disable-next-line:forin
  for ( const factura in data ) { const valor = data[factura].valor ;
  this.valores.push( valor );  this.totalFacturas.push( data[factura] ); }
  this.misfacturas = data ;

  let total = 0;
  for ( let i = 0 ; i < this.valores.length ; i ++  ) {
  // tslint:disable-next-line:no-unused-expression
  total += this.valores[i];
  this.portafolio = total; }

  }) ;
  }


  cargarMisOfertas() {
  this._oferta.cargarMisOfertas().subscribe( data => {
  // tslint:disable-next-line:forin
  for ( const oferta in data ) { const pagada = data[oferta].pagoConfirmado ;
  if ( pagada === true ) { this.misOfertasPagas.push( data[oferta].valorOferta ) ; } }

  let total = 0;
  for ( let i = 0 ; i < this.misOfertasPagas.length ; i ++  ) {
  // tslint:disable-next-line:no-unused-expression
  total += this.misOfertasPagas[i];
  this.saldo = total; } }

); }

}
