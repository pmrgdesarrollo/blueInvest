import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [ `
.container-fluid{
  height:100vh;
  background: linear-gradient(to left, rgb(209, 230, 255),rgb(39, 126, 213));
}
.tamaño{
  font-size:16px;
}



  ` ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
