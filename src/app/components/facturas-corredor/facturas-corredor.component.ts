import { Component, OnInit, Input } from '@angular/core';
import { FacturasService } from '../../services/facturas.service';


@Component({
  selector: 'app-facturas-corredor',
  templateUrl: './facturas-corredor.component.html',
  styles: [ `

  .scrollingDiv
{
   overflow:scroll;
}

.letraResumen{

  font-size:12px;

}

   .headerFacturas{
    background: linear-gradient(to left, rgb(39, 126, 213),rgb(65, 65, 175));
    border-radius:10px 10px 0 0 ;
  }

  .publicadas{
   background:#2B83C8;
   height:60vh;
   border-radius:0 0 10px 10px  ;

  }


   ` ]
})
export class FacturasCorredorComponent implements OnInit {



constructor( public facturaService: FacturasService ) {

}

ngOnInit() {

 }





}
