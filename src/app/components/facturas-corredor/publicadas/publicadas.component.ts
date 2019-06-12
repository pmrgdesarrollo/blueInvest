import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { FacturasService } from '../../../services/facturas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { UsuariosService } from '../../../services/usuarios.service';
import { OfertaService } from 'src/app/services/oferta.service';
import { ModalPublicarFacturaService } from '../../../services/modal-publicar-factura.service';

@Component({
  selector: 'app-publicadas',
  templateUrl: './publicadas.component.html',
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
export class PublicadasComponent implements OnInit {

misfacturas: Factura[] = [];
imagenSubir: File ;

boton = false ;



constructor(
public modal: ModalPublicarFacturaService,
private _facturaService: FacturasService ,
private ruta: Router  ,
private User: UsuariosService ) {

  }

ngOnInit() {
this.modal.oculto = 'oculto' ;
this.cambiarestadoBoton();
this.cargarMisFacturas();

}

cargarMisFacturas() {
this._facturaService.cargarMisFacturas().subscribe( data => {
this.misfacturas = data ;
}) ;
}


eliminarFactura( id ) {
this._facturaService.borrarFactura( id ).subscribe( facturaBorrada => {
console.log( facturaBorrada ) ;
return this.ruta.navigate( [ '/corredor/publicadas' ] );
});
}

seleccionImagen( archivo: File ) {
console.log( event );
if ( !archivo ) { this.imagenSubir = null ; return ; } this.imagenSubir = archivo ;
}

cambiarImagen( id ) {
console.log( );
this._facturaService.cambiarImagen( this.imagenSubir , id );
}

cambiarestadoBoton() {
this._facturaService.boton = true ;
}


}
