import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturas-inversionista',
  templateUrl: './facturas-inversionista.component.html',
  styles: [
    `

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

   height:550px;
   border-radius:0 0 10px 10px  ;

  }


   `
  ]
})
export class FacturasInversionistaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
