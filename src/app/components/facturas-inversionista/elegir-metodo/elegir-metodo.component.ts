import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertaService } from '../../../services/oferta.service';


@Component({
  selector: 'app-elegir-metodo',
  templateUrl: './elegir-metodo.component.html',
  styles: []
})
export class ElegirMetodoComponent implements OnInit {

  oferta;
  id;

  constructor( private ruta: ActivatedRoute , private _oferta: OfertaService , private router: Router  ) {
  this.ruta.params.subscribe( params => this.id = params['id']);
  }

  ngOnInit() {
  this.getOferta();
  }

  getOferta() {
  this._oferta.obtenerOferta( this.id ).subscribe( oferta => { this.oferta = oferta ;
  });
  }

  transferencia() {

    this.oferta.transferir = true ;
    this._oferta.comprobante( this.oferta , this.oferta._id ).subscribe( ( data: any )  => { console.log( data );
      this.router.navigate( ['inversor/inboxInversionista'] );
 }
 );


  }

  saldo() {

    this.oferta.cargarSaldo = true ;
    this._oferta.comprobante( this.oferta , this.oferta._id ).subscribe( ( data: any )  => { console.log( data );
    this.router.navigate( ['inversor/inboxInversionista'] );

 }
 );

  }





}
