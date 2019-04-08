import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from 'src/app/services/facturas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subasta-principal',
  templateUrl: './subasta-principal.component.html',
  styleUrls: ['./subasta-principal.component.css']
})
export class SubastaPrincipalComponent implements OnInit {

  facturas: Factura[] = [];


constructor( private _facturaService: FacturasService , private ruta: Router  ) {

}

ngOnInit() {
this.cargarFacturas();
}

cargarFacturas( ) {
    this._facturaService.cargarFactura().subscribe( facturas => {
    this.facturas = facturas ;
      console.log( 'Facturas cargadas' , this.facturas) ; } );
    }


}
