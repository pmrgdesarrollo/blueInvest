import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
     `
     .breadcrumb{
      background:#969EAB;
      -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);
      -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);
      box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);

     }

     .letra{
       font-size:16px;
       color:white;
       margin: 0 auto;
     } `
  ]
})
export class BreadcrumbsComponent implements OnInit {

  date = new Date ;

  @Input() rol = '';
  @Input() texto = '';

  constructor() { }

  ngOnInit() {
  }

}
