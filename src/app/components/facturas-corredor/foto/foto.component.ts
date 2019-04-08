import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from '../../../services/facturas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  factura: Factura ;
  id;

  constructor( private _factura: FacturasService , private _ruta: ActivatedRoute, ) {
  this._ruta.params.subscribe( params => this.id = params['id'] );
  }

  ngOnInit() {
    this.getFactura();
    this.cambiarestadoBoton();
  }

  cambiarestadoBoton() {
    this._factura.boton = false;
    }

  getFactura() {
  this._factura.obtenerFactura( this.id ).subscribe( factura => this.factura = factura );
  }

}
