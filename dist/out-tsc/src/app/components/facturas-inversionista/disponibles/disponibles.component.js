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
import { FacturasService } from 'src/app/services/facturas.service';
import { Router } from '@angular/router';
var DisponiblesComponent = /** @class */ (function () {
    function DisponiblesComponent(_facturaService, ruta) {
        this._facturaService = _facturaService;
        this.ruta = ruta;
        this.facturas = [];
    }
    DisponiblesComponent.prototype.ngOnInit = function () {
        this.cargarFacturas();
    };
    DisponiblesComponent.prototype.cargarFacturas = function () {
        var _this = this;
        this._facturaService.cargarFactura().subscribe(function (facturas) {
            _this.facturas = facturas;
            console.log('Facturas cargadas', _this.facturas);
        });
    };
    DisponiblesComponent.prototype.hacerOferta = function (id) {
        var _this = this;
        this._facturaService.obtenerFactura(id).subscribe(function (facturaId) {
            _this.factura = facturaId;
            return _this.ruta.navigate(['haceroferta', id]);
        });
    };
    DisponiblesComponent = __decorate([
        Component({
            selector: 'app-disponibles',
            templateUrl: './disponibles.component.html',
            styles: [
                "\n\n    a{\n      color:white;\n    }\n\n.facturaPublicada{\n  border:solid 1px white;\n  border-radius:10px;\n  background:#35A0D5;\n}\n\n    head{\n      display:none;\n    }\n\n    th{\n      color:white;\n      font-size:11px;\n      font-weight:500;\n     }\n\n     td{\n      color:white;\n      font-size:11px;\n      font-weight:500;\n     }\n\n    .table{\n\n      background:#3397C8;\n    }\n\n   "
            ]
        }),
        __metadata("design:paramtypes", [FacturasService, Router])
    ], DisponiblesComponent);
    return DisponiblesComponent;
}());
export { DisponiblesComponent };
//# sourceMappingURL=disponibles.component.js.map