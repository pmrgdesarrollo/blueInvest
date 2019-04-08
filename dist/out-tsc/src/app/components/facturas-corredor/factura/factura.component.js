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
import { FacturasService } from '../../../services/facturas.service';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from '../../../services/oferta.service';
import { Oferta } from 'src/app/models/oferta.model';
var FacturaComponent = /** @class */ (function () {
    function FacturaComponent(_facturaService, _ruta, _oferta) {
        var _this = this;
        this._facturaService = _facturaService;
        this._ruta = _ruta;
        this._oferta = _oferta;
        this.recaudado = [];
        this.aprobadas = [];
        this._ruta.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    FacturaComponent.prototype.ngOnInit = function () {
        this.cargarOfertaSobreFactura();
        this.cargarFactura();
    };
    FacturaComponent.prototype.cargarFactura = function () {
        var _this = this;
        this._facturaService.obtenerFactura(this.id).subscribe(function (data) {
            _this.precio = data.valor;
            console.log('this.precio', _this.precio);
            _this.factura1 = data;
            _this.progresoTotal = (_this.total * 100 / _this.precio);
            console.log('progreso', _this.progresoTotal);
        });
    };
    FacturaComponent.prototype.cargarOfertaSobreFactura = function () {
        var _this = this;
        this._oferta.cargarMisOfertasFactura(this.id).subscribe(function (data) {
            console.log('data en ofertas', data);
            _this.ofertas = data;
            _this.ofertaShortcut = _this.ofertas.length;
            // tslint:disable-next-line:forin
            for (var oferta in _this.ofertas) {
                var aprobada = _this.ofertas[oferta].estado;
                console.log(aprobada);
                if (aprobada === true) {
                    _this.recaudado.push(_this.ofertas[oferta].valorOferta);
                    _this.aprobadas.push(_this.ofertas[oferta]);
                }
            }
            console.log(_this.recaudado);
            var total = 0;
            for (var i = 0; i < _this.recaudado.length; i++) {
                // tslint:disable-next-line:no-unused-expression
                total += _this.recaudado[i];
                _this.total = total;
            }
        });
    };
    FacturaComponent.prototype.aceptar = function (valorOferta, tasaOferta, usuarioFactura, factura, estado, _id) {
        console.log('valor:', valorOferta, 'tasa', tasaOferta, 'usuario', usuarioFactura, 'factura', factura, 'estado', estado, 'id', _id);
        var oferta = new Oferta(valorOferta, tasaOferta, usuarioFactura, factura, estado = true, _id);
        this._oferta.actualizarOferta(oferta, _id).subscribe(function (editada) {
            console.log(editada);
        });
    };
    FacturaComponent.prototype.standby = function () { };
    FacturaComponent.prototype.rechazar = function () { };
    FacturaComponent = __decorate([
        Component({
            selector: 'app-factura',
            templateUrl: './factura.component.html',
            styleUrls: ['./factura.component.css']
        }),
        __metadata("design:paramtypes", [FacturasService, ActivatedRoute,
            OfertaService])
    ], FacturaComponent);
    return FacturaComponent;
}());
export { FacturaComponent };
//# sourceMappingURL=factura.component.js.map