import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [ `
  .container-fluid{
    height:100vh;
    background: linear-gradient(to left, rgb(209, 230, 255),rgb(39, 126, 213));
  }

 `

]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
