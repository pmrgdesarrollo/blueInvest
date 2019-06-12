import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { FacturasService } from '../../services/facturas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from 'src/app/models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
import { ModalPublicarFacturaService } from '../../services/modal-publicar-factura.service';
import * as moment from 'moment';
import swal from 'sweetalert';


@Component({
  selector: 'app-hacer-oferta-page',
  templateUrl: './hacer-oferta-page.component.html',
  styleUrls: ['./hacer-oferta-page.component.css']
})
export class HacerOfertaPageComponent implements OnInit {

  forma: FormGroup;

  factura: Factura;
  id;
  usuario;
  usuarioNombre;

// datos de la factura

facturaValor;
facturaFechaPago;
diasRestantes;

tasa;

disponible;


  ofertas = [] ;

  i = 0;

  aceptadas;

ofertaShortcut;
recaudado = [];
total;
aprobadas = [];

precio;
progresoTotal;
minimo;

liberar = false;


  constructor( private factura_service: FacturasService , private ruta: ActivatedRoute , private _ofertaService: OfertaService,
  public modal: ModalPublicarFacturaService , private router: Router ) {
  this.ruta.params.subscribe( params => this.id = params['id'] );
  this.usuario = JSON.parse( localStorage.getItem('usuario')) ;
  this.usuarioNombre = this.usuario.nombre ;


   }

  ngOnInit() {
  this.cargarOfertaSobreFactura();
  this.cargarFactura();
  this.forma = new FormGroup( {
    fechaOferta: new FormControl ( null , Validators.required ) ,
    valorOferta: new FormControl( null , Validators.required ),
    tasaOferta: new FormControl( null ,  Validators.required  ),
    usuarioFactura: new FormControl( null ,  Validators.required  ),
    factura: new FormControl( null ,  Validators.required  ),
    facturaValor: new FormControl( null ,  Validators.required  ),
    facturaFechaPago: new FormControl( null ,  Validators.required  ),
    estado: new FormControl( false ,  Validators.required  ),
    liberada: new FormControl( false ,  Validators.required  ),
    fraccion: new FormControl( false ,  Validators.required  ),
    nombre: new FormControl( null ,  Validators.required  ),
    cuenta: new FormControl( null ,  Validators.required  ),
    banco: new FormControl( null ,  Validators.required  ),
    tipo: new FormControl( null ,  Validators.required  ),
    pagando: new FormControl( false ,  Validators.required  ),
    payU: new FormControl( false ,  Validators.required  ),
    conSaldo: new FormControl( false ,  Validators.required  ),
    transferencia: new FormControl( false ,  Validators.required  ) ,
    pagoConfirmado: new FormControl( false ,  Validators.required  ),
    pagoConfirmadoCorredor: new FormControl( false ,  Validators.required  ),
    cargarSaldo: new FormControl( false ,  Validators.required  ),
    transferir: new FormControl( false ,  Validators.required  ),
    pagoFecha: new FormControl( null ,  Validators.required  ),
    docsOf: new FormControl( null ,  Validators.required  ),
    utilidad: new FormControl( 0 ,  Validators.required  ),
    utilidadFinal: new FormControl( 0 ,  Validators.required  ),
    pagadorPago: new FormControl( false ,  Validators.required  ),

                                },
      );


  }



cargarFactura() {
  this.factura_service.obtenerFactura( this.id ).subscribe( (data: any ) => {
    this.tasa = data.tasa;
    this.precio = data.valor;
    this.facturaValor = data.valor;
    this.facturaFechaPago = data.pagoEstimado;
    const fecha1 = moment( data.publicacion );
    const fecha2 = moment( data.disponible );

  this.diasRestantes = fecha2.diff( fecha1 , 'days' );
    console.log( 'this.precio' , this.precio );
    this.factura = data ;
    this.minimo = data.porcentaje ;
    this.progresoTotal = ( this.total * 100 / this.precio );
    if ( this.progresoTotal < this.minimo ) { this.liberar = false ;  } else {  this.liberar = true; }
    console.log( 'progreso', this.progresoTotal );
      } );



}

cargarOfertaSobreFactura() {
  this._ofertaService.cargarMisOfertasFactura( this.id ).subscribe( data => {
  console.log( 'data en ofertas' , data );

  // this.ofertas = data;
   // tslint:disable-next-line:forin
   for ( const d in data  ) { this.ofertas.push( data[d] ) ;
   console.log( data[d][0] ) ;

 }

  this.ofertaShortcut = this.ofertas.length ;
  // tslint:disable-next-line:forin
  for ( const oferta in this.ofertas ) {  const aprobada = this.ofertas[oferta].estado ; console.log( aprobada );
  if ( aprobada === true ) { this.recaudado.push( this.ofertas[oferta].valorOferta ) ; this.aprobadas.push( this.ofertas[oferta] ); }
  } console.log( this.recaudado );
  let total = 0;
  for ( let i = 0 ; i < this.recaudado.length ; i ++  ) {
  // tslint:disable-next-line:no-unused-expression
  total += this.recaudado[i];
  this.total = total;


  }
});
}

  publicarOferta( forma ) {

          console.log(forma.value);

          const oferta = new Oferta(
          this.forma.value.fechaOferta = new Date,
          this.forma.value.valorOferta,
          this.forma.value.tasaOferta,
          this.forma.value.usuarioFactura = this.factura.usuario,
          this.forma.value.factura = this.id,
          this.forma.value.facturaValor = this.facturaValor,
          this.forma.value.facturaFechaPago = this.facturaFechaPago,
          this.forma.value.estado = false ,
          this.forma.value.liberada,
          this.forma.value.fraccion = 0,
          this.forma.value.nombre,
          this.forma.value.cuenta,
          this.forma.value.banco,
          this.forma.value.tipo,
          this.forma.value.pagando,
          this.forma.value.payU,
          this.forma.value.conSaldo,
          this.forma.value.transferencia,
          this.forma.value.pagoConfirmado,
          this.forma.value.pagoConfirmadoCorredor,
          this.forma.value.cargarSaldo,
          this.forma.value.transferir,
          this.forma.value.pagoFecha,
          this.forma.value.docsOf,
          this.forma.value.utilidad,
          this.forma.value.utilidadFinal,
          this.forma.value.pagadorPago

);

if ( this.tasa < this.forma.value.tasaOferta ) { swal( 'Imposible!!!', 'Tasa mayor a la aceptada' , 'warning'  ); return; }
if ( this.total < this.forma.value.valorOferta ) { swal( 'Imposible!!!', 'Monto mayor al recaudado' , 'warning'  ); return; }
if ( this.facturaValor < this.forma.value.valorOferta ) { swal( 'Imposible!!!', 'Monto mayor al valor' , 'warning'  ); return; } else {
  this._ofertaService.crearOferta( oferta ).subscribe(( data: any ) => {

  console.log( 'Oferta prueba' , oferta );
  console.log( 'data' , data );

  this.router.navigate(['/inversor' ]) ;


    } );

    }


}

}
