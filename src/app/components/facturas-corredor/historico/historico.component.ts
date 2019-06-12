import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta.model';
import { OfertaService } from 'src/app/services/oferta.service';
import { FacturasService } from 'src/app/services/facturas.service';
import { Factura } from 'src/app/models/factura.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styles: [
    `

    .imagen{
      border-radius:5px;
      display:block;
      margin:auto;
    }

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
export class HistoricoComponent implements OnInit {

  misFacturas: Factura[] = [] ;
  misOfertas: Oferta[] = [];
  boton ;

  constructor( private ofertasService: OfertaService,
               private _facturaService: FacturasService ,
               private _router: Router  ) {

 }

  ngOnInit() {
  this.cargarMisOfertas();
  this.cargarMisFacturas();
  }

  cargarMisOfertas() {
  this.ofertasService.cargarMisOfertas().subscribe( ( data: any) => {
  // tslint:disable-next-line:forin
  for ( const oferta in data ) {
  if ( data[oferta].pagoConfirmadoCorredor === true ) { this.misOfertas.push( data[oferta] ); }  }

  console.log( this.misOfertas ); } );
    }

    cargarMisFacturas() {
    this._facturaService.cargarMisFacturas().subscribe( data => {
    this.misFacturas = data ;
    }) ;
      }

     confirmarPagoPagador( oferta ) {
     const idOferta = oferta._id ;
     oferta.pagadorPago = true ;
     this.ofertasService.actualizarOferta( oferta , idOferta ).subscribe( data => console.log( data ) );
     this._router.navigate( ['/corredor/inboxCorredor'] );

      }

}
