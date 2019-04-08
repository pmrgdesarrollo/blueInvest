import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../../../services/oferta.service';
import { FacturasService } from '../../../services/facturas.service';

@Component({
  selector: 'app-inbox-inversionista',
  templateUrl: './inbox-inversionista.component.html',
  styleUrls: ['./inbox-inversionista.component.css']
})
export class InboxInversionistaComponent implements OnInit {

  misOfertas;
  estado;
  facturaid;

  constructor( private _ofertaService: OfertaService , private _factura: FacturasService ) { }

  ngOnInit() {
  this.cargarOfertas();
  }

  cargarOfertas() {
  this._ofertaService.cargarMisOfertas().subscribe( data => {
    console.log( data );
    // tslint:disable-next-line:forin
   this.misOfertas = data ; });
  }

  enviarFactura( id ) {
   this._factura.idfactura = id ;
   console.log( this.facturaid );
  }

}
