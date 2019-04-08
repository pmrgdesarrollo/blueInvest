var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
        this.date = new Date;
        this.rol = '';
        this.texto = '';
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BreadcrumbsComponent.prototype, "rol", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], BreadcrumbsComponent.prototype, "texto", void 0);
    BreadcrumbsComponent = __decorate([
        Component({
            selector: 'app-breadcrumbs',
            templateUrl: './breadcrumbs.component.html',
            styles: [
                "\n     .breadcrumb{\n      background:#969EAB;\n      -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n      -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);\n      box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n\n     }\n\n     .letra{\n       font-size:16px;\n       color:white;\n       margin: 0 auto;\n     } "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
export { BreadcrumbsComponent };
//# sourceMappingURL=breadcrumbs.component.js.map