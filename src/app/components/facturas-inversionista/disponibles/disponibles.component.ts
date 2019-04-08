import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Router } from '@angular/router';
import { Factura } from 'src/app/models/factura.model';
import { OfertaService } from '../../../services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
  styles: [
    `

    a{
      color:white;
    }

.facturaPublicada{
  border:solid 1px white;
  border-radius:10px;
  background:#35A0D5;
}

    head{
      display:none;
    }

    th{
      color:white;
      font-size:11px;
      font-weight:500;
     }

     td{
      color:white;
      font-size:11px;
      font-weight:500;
     }

    .table{

      background:#3397C8;
    }

   `

  ]
})
export class DisponiblesComponent implements OnInit {

facturas: Factura[] = [];
factura: Factura ;

oferta: Oferta;
ofertas;

idFactura = [];
idofertaFactura = [];

ofertada = false ;

facturai ;
ofertai ;

id;



constructor(private _facturaService: FacturasService , private _ofertaService: OfertaService , private ruta: Router ) {
console.log(  this.idFactura );
console.log( this.idofertaFactura );

this.id = localStorage.getItem('id');
console.log( this.id );

}


ngOnInit() {
this.cargarMisOfertas();
this.cargarFacturas();



}

cargarFacturas() {
this._facturaService.cargarFactura().subscribe( facturas => {
this.facturas = facturas ;
// tslint:disable-next-line:forin
for ( const factura in this.facturas ) { const id = this.facturas[factura]._id ; this.idFactura.push( id ); }
// tslint:disable-next-line:forin
for ( const i in this.idFactura ) { const index = this.idFactura[i] ; this.facturai = index ; console.log( this.facturai ) ; }
});




}

hacerOferta( id ) {
this._facturaService.obtenerFactura( id ).subscribe( facturaId => { this.factura = facturaId ;
return this.ruta.navigate( [ 'haceroferta' , id ] ) ; } );
}

cargarMisOfertas() {
this._ofertaService.cargarMisOfertas().subscribe( oferta => { this.oferta = oferta ;
console.log( oferta ) ;
// tslint:disable-next-line:forin
for ( const o in this.oferta ) { const idOferta = this.oferta[o].usuario ; this.idofertaFactura.push(idOferta);
}
// tslint:disable-next-line:forin
for ( const i in this.idofertaFactura ) { const index = this.idofertaFactura[i] ; this.ofertai = index ; console.log( this.ofertai ) ;

if ( this.id = this.ofertai ) {  this.ofertada = true ; console.log( this.ofertada ) ; }



}



});



}

}
