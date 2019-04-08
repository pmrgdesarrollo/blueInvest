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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacturasService } from '../../services/facturas.service';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from 'src/app/models/oferta.model';
import { OfertaService } from '../../services/oferta.service';
var HacerOfertaPageComponent = /** @class */ (function () {
    function HacerOfertaPageComponent(factura_service, ruta, _ofertaService) {
        var _this = this;
        this.factura_service = factura_service;
        this.ruta = ruta;
        this._ofertaService = _ofertaService;
        this.ruta.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    HacerOfertaPageComponent.prototype.ngOnInit = function () {
        this.cargarFactura();
        this.forma = new FormGroup({
            valorOferta: new FormControl(null, Validators.required),
            tasaOferta: new FormControl(null, Validators.required),
            usuarioFactura: new FormControl(null, Validators.required),
            factura: new FormControl(null, Validators.required),
            estado: new FormControl(false, Validators.required),
        });
    };
    HacerOfertaPageComponent.prototype.cargarFactura = function () {
        var _this = this;
        this.factura_service.obtenerFactura(this.id).subscribe(function (factura) { return _this.factura = factura; });
    };
    HacerOfertaPageComponent.prototype.publicarOferta = function (forma) {
        console.log(forma.value);
        var oferta = new Oferta(this.forma.value.valorOferta, this.forma.value.tasaOferta, this.forma.value.usuarioFactura = this.factura.usuario, this.forma.value.factura = this.id, this.forma.value.estado = false);
        this._ofertaService.crearOferta(oferta).subscribe(function (data) {
            console.log('Oferta prueba', oferta);
            console.log('data', data);
            // return this.ruta.navigate(['/publicada' , data._id ]) ;
        });
    };
    HacerOfertaPageComponent = __decorate([
        Component({
            selector: 'app-hacer-oferta-page',
            templateUrl: './hacer-oferta-page.component.html',
            styleUrls: ['./hacer-oferta-page.component.css']
        }),
        __metadata("design:paramtypes", [FacturasService, ActivatedRoute, OfertaService])
    ], HacerOfertaPageComponent);
    return HacerOfertaPageComponent;
}());
export { HacerOfertaPageComponent };
//# sourceMappingURL=hacer-oferta-page.component.js.map