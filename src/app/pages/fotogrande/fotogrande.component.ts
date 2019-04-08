import { Component, OnInit } from '@angular/core';
import { ModalPublicarFacturaService } from 'src/app/services/modal-publicar-factura.service';

@Component({
  selector: 'app-fotogrande',
  templateUrl: './fotogrande.component.html',
  styleUrls: ['./fotogrande.component.css']
})
export class FotograndeComponent implements OnInit {

  constructor( public modal: ModalPublicarFacturaService) { }

  ngOnInit() {
  }

  ocultar() {
    this.modal.fotoOculta = 'oculta';
    }

}
