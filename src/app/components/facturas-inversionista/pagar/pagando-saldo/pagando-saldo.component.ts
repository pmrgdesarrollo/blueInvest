import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../../../services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagando-saldo',
  templateUrl: './pagando-saldo.component.html',
  styles: []
})
export class PagandoSaldoComponent implements OnInit {

  oferta: Oferta;


  idOferta;
  ref;
  precio;

  precioFinal;



  misOfertas = [];
  valores = [];
  invertido;

  saldoOficial;

  saldo;

  constructor( public _oferta: OfertaService ,     private _ruta: ActivatedRoute ) {
  this._ruta.params.subscribe( params => this.idOferta = params['id'] ) ; }

  ngOnInit() {

this.calcularSaldo();
this.getOferta();

  }


  calcularSaldo() {
    this._oferta.cargarMisOfertasInveriosnista().subscribe( data => {

      // tslint:disable-next-line:forin
      for ( const oferta in data ) { this.misOfertas.push( data[oferta] );
      const valor = data[oferta].valorOferta;

      if ( data[oferta].pagoConfirmado === true  ) {  this.valores.push(valor);  }

      }

      let total = 0;
      for ( let i = 0 ; i < this.valores.length ; i ++  ) {
      // tslint:disable-next-line:no-unused-expression
      total += this.valores[i];
      this.invertido = total;
      this.saldoOficial = this.invertido ;

    }

     });
    }

    getOferta() {
      this._oferta.obtenerOferta( this.idOferta ).subscribe( oferta => { this.oferta = oferta ;
      this.ref = oferta._id;
      this.precio = oferta.valorOferta;
      if ( oferta.fraccion > 0 ) { this.precioFinal = this.oferta.fraccion ; } else { this.precioFinal = this.oferta.valorOferta ; }
      console.log( this.ref );
      console.log( this.precio );
      });
      }


      invertir() {

        this.oferta.conSaldo = true ;
        this._oferta.comprobante( this.oferta , this.oferta._id ).subscribe( ( data: any )  => { console.log( data );

     }
     );

      }




}
