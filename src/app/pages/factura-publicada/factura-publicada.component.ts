import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from '../../services/facturas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-factura-publicada',
  templateUrl: './factura-publicada.component.html',
  styleUrls: ['./factura-publicada.component.css']
})
export class FacturaPublicadaComponent implements OnInit {

  factura: Factura ;
  id;

  constructor( private _facturaService: FacturasService , private ruta: ActivatedRoute ) {

    this.ruta.params.subscribe( params => { this.id = params['id'] ;
    console.log( this.id);
  });


   }

ngOnInit() {
this.obtenerFactura( this.id );
}

obtenerFactura( id: string ) {
this._facturaService.obtenerFactura( this.id ).subscribe( factura => { this.factura = factura ;
console.log( this.factura ) ; });
}


}
