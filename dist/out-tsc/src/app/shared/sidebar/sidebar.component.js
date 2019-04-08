var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styles: ["\n      /* Sidebar Styles */\n\n      .sidebar-nav {\n        background:linear-gradient(to top, rgb(39, 126, 213),rgb(65, 65, 175));\n        height:93vh ;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n      }\n\n      .sidebar-nav li {\n        text-indent: 20px;\n        line-height: 40px;\n      }\n\n      .sidebar-nav li a {\n        display: block;\n        text-decoration: none;\n        color: #ffffff;\n      }\n\n      .sidebar-nav li a:hover {\n        text-decoration: none;\n        color: #fff;\n        background: rgba(255, 255, 255, 0.2);\n      }\n\n      .sidebar-nav li a:active, .sidebar-nav li a:focus {\n        text-decoration: none;\n      }\n\n      .sidebar-nav>.sidebar-brand {\n        height: 65px;\n        font-size: 18px;\n        line-height: 60px;\n      }\n\n      .sidebar-nav>.sidebar-brand a {\n        color: #999999;\n      }\n\n      .sidebar-nav>.sidebar-brand a:hover {\n        color: #fff;\n        background: none;\n      }\n      @media(min-width:768px) {\n        #wrapper {\n          padding-left: 0;\n        }\n        #wrapper.toggled {\n          padding-left: 250px;\n        }\n        #sidebar-wrapper {\n          width: 0;\n        }\n        #wrapper.toggled #sidebar-wrapper {\n          width: 250px;\n        }\n        #page-content-wrapper {\n          padding: 20px;\n          position: relative;\n        }\n        #wrapper.toggled #page-content-wrapper {\n          position: relative;\n          margin-right: 0;\n        }\n      }\n\n    /* --------------------------- Sidebar Styles ends --------------------- */ "]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map