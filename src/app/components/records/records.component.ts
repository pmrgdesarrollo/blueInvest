import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styles: [ `

  p{
    color:grey;
  }

  .card-footer{
    height:10px;
  }

  .card{
    border-radius:10px;
    height:50px;
    -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);
    -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);
    box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);
  }

  .fondoDivs{

    background: rgba(218, 240, 255, 0.2);
    border: 1px solid #48B2FF;
    border-radius: 10px;

    -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);
    -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);
    box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);
}

  ` ]
})
export class RecordsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
