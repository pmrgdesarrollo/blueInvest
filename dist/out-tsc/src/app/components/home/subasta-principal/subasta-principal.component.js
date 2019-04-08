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
var SubastaPrincipalComponent = /** @class */ (function () {
    function SubastaPrincipalComponent(_facturaService, ruta) {
        this._facturaService = _facturaService;
        this.ruta = ruta;
        this.facturas = [];
    }
    SubastaPrincipalComponent.prototype.ngOnInit = function () {
        this.cargarFacturas();
    };
    SubastaPrincipalComponent.prototype.cargarFacturas = function () {
        var _this = this;
        this._facturaService.cargarFactura().subscribe(function (facturas) {
            _this.facturas = facturas;
            console.log('Facturas cargadas', _this.facturas);
        });
    };
    SubastaPrincipalComponent = __decorate([
        Component({
            selector: 'app-subasta-principal',
            templateUrl: './subasta-principal.component.html',
            styleUrls: ['./subasta-principal.component.css']
        }),
        __metadata("design:paramtypes", [FacturasService, Router])
    ], SubastaPrincipalComponent);
    return SubastaPrincipalComponent;
}());
export { SubastaPrincipalComponent };
//# sourceMappingURL=subasta-principal.component.js.map