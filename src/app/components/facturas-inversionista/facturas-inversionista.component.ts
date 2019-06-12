import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-facturas-inversionista',
  templateUrl: './facturas-inversionista.component.html',
  styles: [
    `

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

   height:550px;
   border-radius:0 0 10px 10px  ;

  }

  th{
    font-weight:800;
  }


   `
  ]
})
export class FacturasInversionistaComponent implements OnInit {

  misOfertas = [];
  saldo;

  conSaldo = [] ;
  totalConsaldo;

disponible;
invertido;
utilidad;

valores = [];

  constructor( private _ofertaService: OfertaService ) { }

  ngOnInit() {
  this.cargarOfertas();
  }

  cargarOfertas() {
  this._ofertaService.cargarMisOfertasInveriosnista().subscribe( data => {
    // tslint:disable-next-line:forin
    for ( const oferta in data ) { this.misOfertas.push( data[oferta] );
    const valor = data[oferta].valorOferta;

    console.log( data[oferta].conSaldo );

    if ( data[oferta].pagoConfirmado === true ) {  this.valores.push(valor); console.log( this.valores );  }
    if ( data[oferta].conSaldo === true ) { this.conSaldo.push(valor); console.log( this.totalConsaldo ); }
    }

    let totalSaldo = 0;
    for ( let i = 0 ; i < this.valores.length ; i ++  ) {
    // tslint:disable-next-line:no-unused-expression
    totalSaldo += this.conSaldo[i];
    this.totalConsaldo = totalSaldo ;

   }

    let total = 0;
    for ( let i = 0 ; i < this.valores.length ; i ++  ) {
    // tslint:disable-next-line:no-unused-expression
    total += this.valores[i];
    this.invertido = total;
    this.saldo = this.invertido;

  }




   });
  }

}
