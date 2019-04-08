import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [ `
      /* Sidebar Styles */

      .sidebar-nav {
        background:linear-gradient(to top, rgb(39, 126, 213),rgb(65, 65, 175));
        height:100vh;
        top: 0;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .sidebar-nav li {
        text-indent: 20px;
        line-height: 40px;
      }

      .sidebar-nav li a {
        display: block;
        text-decoration: none;
        color: #ffffff;
      }

      .sidebar-nav li a:hover {
        text-decoration: none;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
      }

      .sidebar-nav li a:active, .sidebar-nav li a:focus {
        text-decoration: none;
      }

      .sidebar-nav>.sidebar-brand {
        height: 65px;
        font-size: 18px;
        line-height: 60px;
      }

      .sidebar-nav>.sidebar-brand a {
        color: #999999;
      }

      .sidebar-nav>.sidebar-brand a:hover {
        color: #fff;
        background: none;
      }
      @media(min-width:768px) {
        #wrapper {
          padding-left: 0;
        }
        #wrapper.toggled {
          padding-left: 250px;
        }
        #sidebar-wrapper {
          width: 0;
        }
        #wrapper.toggled #sidebar-wrapper {
          width: 250px;
        }
        #page-content-wrapper {
          padding: 20px;
          position: relative;
        }
        #wrapper.toggled #page-content-wrapper {
          position: relative;
          margin-right: 0;
        }
      }

    /* --------------------------- Sidebar Styles ends --------------------- */ ` ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
