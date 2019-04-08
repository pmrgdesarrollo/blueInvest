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
import { FacturasService } from '../../services/facturas.service';
import { ActivatedRoute } from '@angular/router';
var FacturaPublicadaComponent = /** @class */ (function () {
    function FacturaPublicadaComponent(_facturaService, ruta) {
        var _this = this;
        this._facturaService = _facturaService;
        this.ruta = ruta;
        this.ruta.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
    }
    FacturaPublicadaComponent.prototype.ngOnInit = function () {
        this.obtenerFactura(this.id);
    };
    FacturaPublicadaComponent.prototype.obtenerFactura = function (id) {
        var _this = this;
        this._facturaService.obtenerFactura(this.id).subscribe(function (factura) {
            _this.factura = factura;
            console.log(_this.factura);
        });
    };
    FacturaPublicadaComponent = __decorate([
        Component({
            selector: 'app-factura-publicada',
            templateUrl: './factura-publicada.component.html',
            styleUrls: ['./factura-publicada.component.css']
        }),
        __metadata("design:paramtypes", [FacturasService, ActivatedRoute])
    ], FacturaPublicadaComponent);
    return FacturaPublicadaComponent;
}());
export { FacturaPublicadaComponent };
//# sourceMappingURL=factura-publicada.component.js.map