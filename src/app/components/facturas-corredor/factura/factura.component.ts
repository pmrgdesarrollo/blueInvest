import { Component, OnInit } from '@angular/core';
import { FacturasService } from '../../../services/facturas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura.model';
import { OfertaService } from '../../../services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

id;
factura1: Factura;

ofertas = [] ;
oferta;

i = 0;

aceptadas;

ofertaShortcut;
recaudado = [];
total;
aprobadas = [];

precio;
progresoTotal;
minimo;


liberar;
fraccion;

  constructor( private _facturaService: FacturasService , private _ruta: ActivatedRoute,
  private _oferta: OfertaService , private ruta: Router  ) {
  this._ruta.params.subscribe( params => this.id = params['id'] );
   }

  ngOnInit() {
  this.cambiarestadoBoton();
  this.cargarFactura();
  this.cargarOfertaSobreFactura();

  }

  cambiarestadoBoton() {
  this._facturaService.boton = false;
  }

  cargarFactura() {
  this._facturaService.obtenerFactura( this.id ).subscribe( (data: any ) => {
  this.precio = data.valor;
  this.fraccion = this.precio - this.total;
  console.log( 'this.precio' , this.precio );
  console.log( 'this.fraccion' , this.fraccion );
  this.factura1 = data ;
  this.minimo = data.porcentaje ;
  this.progresoTotal = ( this.total * 100 / this.precio );
  if ( this.progresoTotal < this.minimo ) { this.liberar = false ;  } else {  this.liberar = true; }
  console.log( 'progreso', this.progresoTotal );
    } );
  }

  cargarOfertaSobreFactura() {
  this._oferta.cargarMisOfertasFactura( this.id ).subscribe( data => {
  console.log( 'data en ofertas' , data );

  // this.ofertas = data;
  // tslint:disable-next-line:forin
   for ( const d in data  ) { this.ofertas.push( data[d] ) ;
   console.log( data[d][0] ) ;

 }
  this.ofertaShortcut = this.ofertas.length ;
  // tslint:disable-next-line:forin
  for ( const oferta in this.ofertas ) {  const aprobada = this.ofertas[oferta].estado ; console.log( aprobada );
  const Aprobadafraccion = this.ofertas[oferta].fraccion;
  this.oferta = this.ofertas[oferta];
  if ( aprobada === true ) { this.recaudado.push( this.ofertas[oferta].valorOferta ) ; this.aprobadas.push( this.ofertas[oferta] ); }
  if ( Aprobadafraccion > 0 ) { this.recaudado.push( this.ofertas[oferta].fraccion ) ; this.aprobadas.push( this.ofertas[oferta] );  }

  } console.log( this.recaudado );
  let total = 0;
  for ( let i = 0 ; i < this.recaudado.length ; i ++  ) {
  // tslint:disable-next-line:no-unused-expression
  total += this.recaudado[i];
  this.total = total;
}



});
}

sortValor() {
this.ofertas = this.ofertas.sort( this.sortByValor );
}

sortTasa() {
this.ofertas = this.ofertas.sort( this.sortByTasa );
}

sortByValor( c1: Oferta , c2: Oferta ) {

  if ( c1.valorOferta > c2.valorOferta ) { return -1 ; } else
  if ( c1.valorOferta === c2.valorOferta ) { return 0 ; } else { return 1 ; }
}

sortByTasa( v1: Oferta , v2: Oferta ) {

  if ( v1.tasaOferta > v2.tasaOferta ) { return 1 ; } else
  if ( v1.tasaOferta === v2.tasaOferta ) { return 0  ; } else { return -1 ; }



}

aceptar( valorOferta , tasaOferta , usuarioFactura , factura , estado , liberada , fraccion ,  _id   ) {
console.log( 'valor:', valorOferta , 'tasa' , tasaOferta ,
'usuario' ,  usuarioFactura , 'factura' , factura , 'estado' , estado , 'id' , _id );
const oferta = new Oferta(

                    valorOferta ,
                    tasaOferta ,
                    usuarioFactura ,
                    factura ,
                    estado = true,
                    liberada = false,
                    fraccion = 0,
                    _id , );

if ( this.total >= this.precio ) { swal( 'Imposible!!!', ' la factura esta llena ' , 'warning'  ); return; }
if ( valorOferta + this.total > this.factura1.valor ) {
swal( 'Monto exedido!!!', ' el valor de la oferta supera el monto maximo, intenta aceptando una fracción' , 'warning'  ); return; } else {
this._oferta.actualizarOferta( oferta , _id ).subscribe( editada => {
swal( 'Oferta Aceptada!!!', 'puedes liberar el pago cuando se complete la factura' , 'success'  );
console.log( editada ) ;
});
}


location.reload();

}

aceptarFraccion( valorOferta , tasaOferta , usuarioFactura , factura , estado , liberada , fraccion ,  _id ) {

  const oferta = new Oferta(

    valorOferta,
    tasaOferta ,
    usuarioFactura ,
    factura ,
    estado = false,
    liberada = false,
    fraccion = this.fraccion,
    _id , );

if ( this.total >= this.precio ) { swal( 'Imposible!!!', ' la factura esta llena ' , 'warning'  ); return; } else {
this._oferta.actualizarOferta( oferta , _id ).subscribe( editada => {
swal( 'Fraccion Aceptada!!!', 'puedes liberar el pago cuando se complete la factura' , 'success'  );
console.log( editada ) ;
});
}


location.reload();

}

liberarFactura( valorOferta , tasaOferta , usuarioFactura , factura , estado , liberada , fraccion,  _id   ) {
  console.log( 'valor:', valorOferta , 'tasa' , tasaOferta ,
  'usuario' ,  usuarioFactura , 'factura' , factura , 'estado' , estado , 'id' , _id );
  const oferta = new Oferta(

                      valorOferta ,
                      tasaOferta ,
                      usuarioFactura ,
                      factura ,
                      estado ,
                      liberada = true,
                      fraccion ,
                      _id , );

  this._oferta.liberarOferta( oferta , _id ).subscribe( editada => {
  console.log( editada ) ;

  });

  this.ruta.navigate( ['/corredor/aceptando' , oferta._id ] );

  }

  retractarme(valorOferta , tasaOferta , usuarioFactura , factura , estado , liberada , fraccion , _id ) {

    const oferta = new Oferta(

      valorOferta ,
      tasaOferta ,
      usuarioFactura ,
      factura ,
      estado = false ,
      liberada = false,
      fraccion = 0,
      _id , );

      this._oferta.actualizarOferta( oferta , _id ).subscribe( editada => {
      console.log( editada ) ;
});

  location.reload();


  }




}
