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
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';
var PublicadasComponent = /** @class */ (function () {
    function PublicadasComponent(_facturaService, ruta, User) {
        this._facturaService = _facturaService;
        this.ruta = ruta;
        this.User = User;
        this.misfacturas = [];
    }
    PublicadasComponent.prototype.ngOnInit = function () {
        // this.cargarFacturas();
        this.cargarMisFacturas();
    };
    PublicadasComponent.prototype.cargarMisFacturas = function () {
        var _this = this;
        this._facturaService.cargarMisFacturas().subscribe(function (data) {
            _this.misfacturas = data;
            // tslint:disable-next-line:forin
            for (var facturaId in _this.misfacturas) {
                var id = _this.misfacturas[facturaId]._id;
                _this.id = id;
            }
        });
    };
    PublicadasComponent.prototype.eliminarFactura = function (id) {
        var _this = this;
        this._facturaService.borrarFactura(id).subscribe(function (facturaBorrada) {
            console.log(facturaBorrada);
            return _this.ruta.navigate(['/corredor/historico']);
        });
    };
    PublicadasComponent.prototype.seleccionImagen = function (archivo) {
        console.log(event);
        if (!archivo) {
            this.imagenSubir = null;
            return;
        }
        this.imagenSubir = archivo;
    };
    PublicadasComponent.prototype.cambiarImagen = function () {
        console.log();
        this._facturaService.cambiarImagen(this.imagenSubir, this.id);
    };
    PublicadasComponent = __decorate([
        Component({
            selector: 'app-publicadas',
            templateUrl: './publicadas.component.html',
            styles: [
                "\n\n    a{\n      color:white;\n    }\n\n.facturaPublicada{\n  border:solid 1px white;\n  border-radius:10px;\n  background:#35A0D5;\n}\n\n    head{\n      display:none;\n    }\n\n    th{\n      color:white;\n      font-size:11px;\n      font-weight:500;\n     }\n\n     td{\n      color:white;\n      font-size:11px;\n      font-weight:500;\n     }\n\n    .table{\n\n      background:#3397C8;\n    }\n\n   "
            ]
        }),
        __metadata("design:paramtypes", [FacturasService,
            Router,
            UsuariosService])
    ], PublicadasComponent);
    return PublicadasComponent;
}());
export { PublicadasComponent };
//# sourceMappingURL=publicadas.component.js.map