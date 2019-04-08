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
import { PagadorService } from '../../services/pagador.service';
import { Router } from '@angular/router';
var PagadoresComponent = /** @class */ (function () {
    function PagadoresComponent(_pagagorService, ruta) {
        this._pagagorService = _pagagorService;
        this.ruta = ruta;
        this.pagadores = [];
    }
    PagadoresComponent.prototype.cargarPagadores = function () {
        var _this = this;
        this._pagagorService.cargarPagador().subscribe(function (pagadores) {
            _this.pagadores = pagadores;
            console.log('pagadores cargados', _this.pagadores);
        });
    };
    PagadoresComponent.prototype.ngOnInit = function () {
        this.cargarPagadores();
    };
    PagadoresComponent.prototype.verPagador = function (id) {
        var _this = this;
        this._pagagorService.obtenerPagador(id).subscribe(function (data) {
            console.log(data);
            return _this.ruta.navigate(['/pagador', id]);
        });
    };
    PagadoresComponent = __decorate([
        Component({
            selector: 'app-pagadores',
            templateUrl: './pagadores.component.html',
            styleUrls: ['./pagadores.component.css']
        }),
        __metadata("design:paramtypes", [PagadorService, Router])
    ], PagadoresComponent);
    return PagadoresComponent;
}());
export { PagadoresComponent };
//# sourceMappingURL=pagadores.component.js.map