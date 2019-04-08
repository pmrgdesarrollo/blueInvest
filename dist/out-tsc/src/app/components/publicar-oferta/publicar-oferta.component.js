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
import { Router } from '@angular/router';
import { Factura } from '../../models/factura.model';
import { PagadorService } from '../../services/pagador.service';
import { DescontadorService } from '../../services/descontador.service';
var PublicarOfertaComponent = /** @class */ (function () {
    function PublicarOfertaComponent(_facturaService, _pagagorService, _descontadorDervice, ruta) {
        this._facturaService = _facturaService;
        this._pagagorService = _pagagorService;
        this._descontadorDervice = _descontadorDervice;
        this.ruta = ruta;
        this.facturas = [];
        this.pagadores = [];
        this.descontadores = [];
    }
    PublicarOfertaComponent.prototype.ngOnInit = function () {
        this.cargarFacturas();
        this.cargarPagadores();
        this.cargarDescontadores();
        this.forma = new FormGroup({
            pagador: new FormControl(null, Validators.required),
            descontador: new FormControl(null, Validators.required),
            valor: new FormControl(null, Validators.required),
            numero: new FormControl(null, Validators.required),
            plazo: new FormControl(null, Validators.required),
            tasa: new FormControl(null, Validators.required),
            vencimiento: new FormControl(null, Validators.required),
            disponible: new FormControl(null, Validators.required),
            comentarios: new FormControl(null, Validators.required),
            docs: new FormControl(null, Validators.required),
            usuario: new FormControl(null),
            publicacion: new FormControl(null),
        });
    };
    PublicarOfertaComponent.prototype.cargarDescontadores = function () {
        var _this = this;
        this._descontadorDervice.cargarDescontador().subscribe(function (descontadores) { return _this.descontadores = descontadores; });
    };
    PublicarOfertaComponent.prototype.cargarPagadores = function () {
        var _this = this;
        this._pagagorService.cargarPagador().subscribe(function (pagadores) {
            _this.pagadores = pagadores;
            console.log('pagadores cargados', _this.pagadores);
        });
    };
    PublicarOfertaComponent.prototype.cargarFacturas = function () {
        var _this = this;
        this._facturaService.cargarFactura()
            .subscribe(function (facturas) { return _this.facturas = facturas; });
    };
    PublicarOfertaComponent.prototype.publicarFactura = function (forma) {
        var _this = this;
        console.log(forma.value);
        var factura = new Factura(this.forma.value.pagador, this.forma.value.descontador, this.forma.value.valor, this.forma.value.numero, this.forma.value.plazo, this.forma.value.tasa, this.forma.value.vencimiento, this.forma.value.disponible, this.forma.value.comentarios, this.forma.value.docs, this.forma.value.usuario, this.forma.value.publicacion = new Date, this.forma.value._id);
        this._facturaService.crearFactura(factura).subscribe(function (data) {
            console.log('factura prueba', factura);
            console.log('data', data);
            return _this.ruta.navigate(['/publicada', data._id]);
        });
    };
    PublicarOfertaComponent = __decorate([
        Component({
            selector: 'app-publicar-oferta',
            templateUrl: './publicar-oferta.component.html',
            styles: ["\n\n  td{\n    font-size:10px;\n    color:blue;\n    padding:0;\n    font-weight:700;\n\n  }\n\n  th{\n  font-weight:700;\n  font-size:10px;\n  padding:0;\n  }\n\n  .main-container{\n    margin-top: 40px;\n  }\n\n  /* Drop Zone */\n  .drop-zone {\n    border: dotted 3px grey;\n    border-radius:15px;\n    opacity: 0.5;\n    color:grey;\n    text-align: center\n  }\n\n  .file-over {\n    border: dotted 3px dodgerblue;\n  }\n\nh6{\n  font-size:14px;\n}\n\n.letraInput{\n  font-size:12px;\n  font-weight:700;\n}\n\n.form-row{\n  height:40px;\n}\n\n  .letra{\n    font-size:16px;\n    margin:0px;\n  }\n\n  .borde{\n    background:#CACFD7;\n    border-radius:10px;\n    border:solid 1px #BEC4CF;\n    -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n    -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);\n    box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n  }\n\n  "]
        }),
        __metadata("design:paramtypes", [FacturasService,
            PagadorService,
            DescontadorService,
            Router])
    ], PublicarOfertaComponent);
    return PublicarOfertaComponent;
}());
export { PublicarOfertaComponent };
//# sourceMappingURL=publicar-oferta.component.js.map