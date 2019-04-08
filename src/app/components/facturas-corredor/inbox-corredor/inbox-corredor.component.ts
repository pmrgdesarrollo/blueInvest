import { Component, OnInit } from '@angular/core';
import { OfertaService } from 'src/app/services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
import { FacturasService } from '../../../services/facturas.service';


@Component({
  selector: 'app-inbox-corredor',
  templateUrl: './inbox-corredor.component.html',
  styleUrls: ['./inbox-corredor.component.css']
})
export class InboxCorredorComponent implements OnInit {

  misOfertas: Oferta[] = [];
  boton ;

  constructor( private ofertasService: OfertaService,
    private facturaService: FacturasService  ) {
    this.facturaService.boton = false;
    this.boton = this.facturaService.boton;
 }

  ngOnInit() {
  this.cargarMisOfertas();
  }

  cargarMisOfertas() {
  this.ofertasService.cargarMisOfertas().subscribe( data => {
  this.misOfertas = data ;
  console.log( this.misOfertas ); } );

  }



}
