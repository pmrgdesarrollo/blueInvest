import { Component, OnInit, Input } from '@angular/core';
import { ModalPublicarFacturaService } from 'src/app/services/modal-publicar-factura.service';

@Component({
  selector: 'app-agregar-factura-link',
  templateUrl: './agregar-factura-link.component.html',
  styleUrls: ['./agregar-factura-link.component.css']
})
export class AgregarFacturaLinkComponent implements OnInit {



  constructor( public modal: ModalPublicarFacturaService  ) { }

  ngOnInit() {
  }

  abrirModal(){
  this.modal.oculto = 'mostrar'
  }

 

}
