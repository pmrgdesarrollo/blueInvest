var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
var PagadorService = /** @class */ (function () {
    function PagadorService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
        this.totalPagadores = 0;
    }
    PagadorService.prototype.cargarPagador = function () {
        var _this = this;
        var url = URL_SERVICIOS + '/pagador';
        return this.http.get(url).pipe(map(function (resp) {
            _this.totalPagadores = resp.total;
            console.log(resp.pagador);
            return resp.pagador;
        }));
    };
    PagadorService.prototype.obtenerPagador = function (id) {
        var url = URL_SERVICIOS + '/pagador/' + id;
        return this.http.get(url).pipe(map(function (resp) { return resp.pagador; }));
    };
    PagadorService.prototype.crearPagador = function (pagador) {
        var url = URL_SERVICIOS + '/pagador';
        url += '?token=' + this._usuarioService.token;
        return this.http.post(url, pagador).pipe(map(function (resp) {
            console.log('pagador creado', resp);
            swal('Pagador creado correctamente', pagador.nombre, 'success');
            return resp;
        }));
    };
    PagadorService.prototype.actualizarPagador = function (pagador) {
        var url = URL_SERVICIOS + '/pagador/' + pagador._id;
        url += '?token=' + this._usuarioService.token;
        return this.http.put(url, pagador).pipe(map(function (resp) {
            swal('Pagador Actualiado', pagador.nombre, 'success');
            return resp.pagador;
        }));
    };
    PagadorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            UsuariosService])
    ], PagadorService);
    return PagadorService;
}());
export { PagadorService };
//# sourceMappingURL=pagador.service.js.map