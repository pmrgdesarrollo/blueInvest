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
var HacerOfertaComponent = /** @class */ (function () {
    function HacerOfertaComponent() {
        this.oferta = {
            numero: 0,
            valor: 0,
            tasa: 0
        };
    }
    HacerOfertaComponent.prototype.ngOnInit = function () {
    };
    HacerOfertaComponent.prototype.ofertar = function () { };
    HacerOfertaComponent = __decorate([
        Component({
            selector: 'app-hacer-oferta',
            templateUrl: './hacer-oferta.component.html',
            styles: [
                "\n.letraInput{\n  font-size:12px;\n  font-weight:700;\n}\n\n.form-row{\n  height:40px;\n}\n\n  .letra{\n    font-size:16px;\n    margin:0px;\n  }\n\n  .borde{\n    background:#CACFD7;\n    border-radius:10px;\n    border:solid 1px #BEC4CF;\n    -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n    -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);\n    box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n  }\n\n  "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HacerOfertaComponent);
    return HacerOfertaComponent;
}());
export { HacerOfertaComponent };
//# sourceMappingURL=hacer-oferta.component.js.map