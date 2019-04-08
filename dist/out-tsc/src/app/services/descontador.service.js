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
var DescontadorService = /** @class */ (function () {
    function DescontadorService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
        this.totalDescontadores = 0;
    }
    DescontadorService.prototype.cargarDescontador = function () {
        var _this = this;
        var url = URL_SERVICIOS + '/descontador';
        return this.http.get(url).pipe(map(function (resp) {
            _this.totalDescontadores = resp.total;
            console.log(resp.descontadores);
            return resp.descontadores;
        }));
    };
    DescontadorService.prototype.obtenerDescontador = function (id) {
        var url = URL_SERVICIOS + '/descontador/' + id;
        return this.http.get(url).pipe(map(function (resp) { return resp.descontadorid; }));
    };
    DescontadorService.prototype.crearDescontador = function (descontador) {
        var url = URL_SERVICIOS + '/descontador';
        url += '?token=' + this._usuarioService.token;
        return this.http.post(url, descontador).pipe(map(function (resp) {
            console.log('descontador creado', resp);
            swal('Descontador creado correctamente', descontador.nombre, 'success');
            return resp.descontadorCreado;
        }));
    };
    DescontadorService.prototype.actualizarDescontador = function (descontador) {
        var url = URL_SERVICIOS + '/descontador/' + descontador._id;
        url += '?token=' + this._usuarioService.token;
        return this.http.put(url, descontador).pipe(map(function (resp) {
            swal('Pagador Actualiado', descontador.nombre, 'success');
            return resp.descontadorEditado;
        }));
    };
    DescontadorService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            UsuariosService])
    ], DescontadorService);
    return DescontadorService;
}());
export { DescontadorService };
//# sourceMappingURL=descontador.service.js.map