import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
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
        background:linear-gradient(to right, rgb(65, 65, 175),rgb(0, 204, 189));
        border-radius:10px 10px 0 0 ;
      }

      .publicadas{
       background:#2B83C8;

       height:550px;
       border-radius:0 0 10px 10px  ;

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
export class SubastaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
