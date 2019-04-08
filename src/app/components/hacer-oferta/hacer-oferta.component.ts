import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacer-oferta',
  templateUrl: './hacer-oferta.component.html',
  styles: [

    `
.letraInput{
  font-size:12px;
  font-weight:700;
}

.form-row{
  height:40px;
}

  .letra{
    font-size:16px;
    margin:0px;
  }

  .borde{
    background:#CACFD7;
    border-radius:10px;
    border:solid 1px #BEC4CF;
    -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);
    -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);
    box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);
  }

  `

  ]
})
export class HacerOfertaComponent implements OnInit {

  oferta = {
    numero : 0 ,
    valor : 0 ,
    tasa : 0

  } ;

  constructor() { }

  ngOnInit() {
  }

  ofertar() {}

}
