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
var SubastaComponent = /** @class */ (function () {
    function SubastaComponent() {
    }
    SubastaComponent.prototype.ngOnInit = function () {
    };
    SubastaComponent = __decorate([
        Component({
            selector: 'app-subasta',
            templateUrl: './subasta.component.html',
            styles: [
                "\n    .scrollingDiv\n    {\n       overflow:scroll;\n    }\n\n    .letraResumen{\n\n      font-size:12px;\n\n    }\n\n       .headerFacturas{\n        background:linear-gradient(to right, rgb(65, 65, 175),rgb(0, 204, 189));\n        border-radius:10px 10px 0 0 ;\n      }\n\n      .publicadas{\n       background:#2B83C8;\n\n       height:550px;\n       border-radius:0 0 10px 10px  ;\n\n      }\n\n\n\n    a{\n      color:white;\n    }\n\n.facturaPublicada{\n  border:solid 1px white;\n  border-radius:10px;\n  background:#35A0D5;\n}\n\n    head{\n      display:none;\n    }\n\n    th{\n      color:white;\n      font-size:11px;\n      font-weight:500;\n     }\n\n     td{\n      color:white;\n      font-size:11px;\n      font-weight:500;\n     }\n\n    .table{\n\n      background:#3397C8;\n    }\n\n   "
            ]
        }),
        __metadata("design:paramtypes", [])
    ], SubastaComponent);
    return SubastaComponent;
}());
export { SubastaComponent };
//# sourceMappingURL=subasta.component.js.map