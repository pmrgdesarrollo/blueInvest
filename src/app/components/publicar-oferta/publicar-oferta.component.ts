import { Component, OnInit, Input } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { FacturasService } from '../../services/facturas.service';
import { Router } from '@angular/router';
import { Factura } from '../../models/factura.model';
import { Pagador } from 'src/app/models/pagador.model';
import { PagadorService } from '../../services/pagador.service';
import { Descontador } from '../../models/descontador.model';
import { DescontadorService } from '../../services/descontador.service';
import { ModalPublicarFacturaService } from '../../services/modal-publicar-factura.service';







@Component({
  selector: 'app-publicar-oferta',
  templateUrl: './publicar-oferta.component.html',
  styles: [ `

  td{
    font-size:10px;
    color:blue;
    padding:0;
    font-weight:700;

  }

  th{
  font-weight:700;
  font-size:10px;
  padding:0;
  }

  .main-container{
    margin-top: 40px;
  }

  /* Drop Zone */
  .drop-zone {
    border: dotted 3px grey;
    border-radius:15px;
    opacity: 0.5;
    color:grey;
    text-align: center
  }

  .file-over {
    border: dotted 3px dodgerblue;
  }

h6{
  font-size:14px;
  color:grey;
}

.letraInput{
  font-size:12px;
  font-weight:700;
  color:grey;
}



.form-row{
  height:40px;
}

  .letra{
    font-size:20px;
    margin:0px;
    color: grey ;
  }



  .fondo-negro{
    background-color: rgba( 0,0,0,0.4 );
    position:fixed;
    top:0px;
    left:0px;
    width:100%;
    height:100%;

  }

  .oculto{
    display:none;
  }

  .mostrar{
    display:block;
  }

  .modal{
border-radius:15px;
  }

  ` ]
})
export class PublicarOfertaComponent implements OnInit {


  imagenSubir: File ;

  forma: FormGroup;

  facturas: Factura[] = [];
  pagadores: Pagador[] = [];

  descontadores: Descontador[] = [];

  constructor( public modal: ModalPublicarFacturaService,
               private _facturaService: FacturasService ,
               private _pagagorService: PagadorService,
               private _descontadorDervice: DescontadorService,
               private ruta: Router ,
  ) {   }



ngOnInit() {

  this.cargarFacturas();
  this.cargarPagadores();
  this.cargarDescontadores();

    this.forma = new FormGroup( {
    pagador: new FormControl( null , Validators.required ),
    descontador: new FormControl( null , Validators.required ),
    valor: new FormControl( null ,  Validators.required  ),
    numero: new FormControl( null ,  Validators.required  ),
    plazo: new FormControl( null ,  Validators.required  ),
    porcentaje: new FormControl( null ,  Validators.required ),
    monto: new FormControl( null ,  Validators.required  ),
    tasa: new FormControl( null ,  Validators.required  ),
    vencimiento: new FormControl( null ,  Validators.required  ),
    disponible: new FormControl( null ,  Validators.required  ),
    comentarios: new FormControl( null ,  Validators.required  ),
    docs: new FormControl( null ,  Validators.required  ),
    usuario: new FormControl( null ,   ),
    publicacion: new FormControl( null ,   ),
                              },

    );

}

cargarDescontadores( ) {
this._descontadorDervice.cargarDescontador().subscribe( descontadores => this.descontadores = descontadores );
 }

cargarPagadores() {
this._pagagorService.cargarPagador().subscribe( pagadores => {
  this.pagadores = pagadores ;
  console.log( 'pagadores cargados' , this.pagadores ) ; } );
}

cargarFacturas() {
this._facturaService.cargarFactura()
.subscribe( facturas => this.facturas = facturas );
}

// CARGA DE IMAGENES //

seleccionImagen( archivo: File ) {
console.log( event );
if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir = archivo ;
}


cambiarImagen( id ) {
console.log( );
this._facturaService.cambiarImagen( this.imagenSubir , id );
}




publicarFactura( forma ) {

console.log(forma.value);

      const factura = new Factura(
      this.forma.value.pagador,
      this.forma.value.descontador,
      this.forma.value.valor,
      this.forma.value.numero,
      this.forma.value.plazo,
      this.forma.value.porcentaje,
      this.forma.value.monto,
      this.forma.value.tasa,
      this.forma.value.vencimiento,
      this.forma.value.disponible,
      this.forma.value.comentarios,
      this.forma.value.docs,
      this.forma.value.usuario,
      this.forma.value.publicacion = new Date,
      this.forma.value._id,

      );

    this._facturaService.crearFactura( factura ).subscribe(( data: any ) => {

     console.log( 'factura prueba' , factura );
     console.log( 'data' , data );
     this.cambiarImagen( data._id );
     return this.ruta.navigate(['/publicada' , data._id ]) ;


} );

}

ocultar() {
this.modal.oculto = 'oculto';
}



}



