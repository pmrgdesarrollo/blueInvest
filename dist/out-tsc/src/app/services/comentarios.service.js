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
var ComentarioService = /** @class */ (function () {
    function ComentarioService(http, _usuarioService) {
        this.http = http;
        this._usuarioService = _usuarioService;
        this.idLocal = localStorage.getItem('id');
        this.totalComenatios = 0;
        this.misComentarios = [];
    }
    ComentarioService.prototype.cargarComentarios = function () {
        var url = URL_SERVICIOS + '/comentario';
        return this.http.get(url).pipe(map(function (resp) {
            console.log(resp.listadoComentarios);
            return resp.listadoComentarios;
        }));
    };
    ComentarioService.prototype.cargarMisComentarios = function (id) {
        var _this = this;
        // id del usuario para comparar con los ids del arreglo de facturas
        var url = URL_SERVICIOS + '/comentario/mios/';
        url += id;
        return this.http.get(url).pipe(map(function (data) {
            _this.respuestaComentarios = data.ListaDeComentarios;
            return _this.respuestaComentarios;
        }));
    };
    ComentarioService.prototype.obtenerComentario = function (id) {
        var url = URL_SERVICIOS + '/comentario/' + id;
        return this.http.get(url).pipe(map(function (resp) {
            return resp.comentario;
        }));
    };
    ComentarioService.prototype.crearComentario = function (comentario) {
        var url = URL_SERVICIOS + '/comentario';
        url += '?token=' + this._usuarioService.token;
        return this.http.post(url, comentario).pipe(map(function (resp) {
            swal('Comentario Publicado!!!', 'success');
            return resp.comentario;
        }));
    };
    ComentarioService.prototype.actualizarComentario = function (comentario) {
        var url = URL_SERVICIOS + '/comentario/' + comentario._id;
        url += '?token=' + this._usuarioService.token;
        return this.http.put(url, comentario).pipe(map(function (resp) {
            return resp.comentarioEditado;
        }));
    };
    ComentarioService.prototype.borrarComentario = function (id) {
        var url = URL_SERVICIOS + '/comentario/' + id;
        url += '?token=' + this._usuarioService.token;
        return this.http.delete(url).pipe(map(function (resp) { return swal('Comentario Eliminado', 'Eliminado correctamente', 'success'); }));
    };
    ComentarioService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient,
            UsuariosService])
    ], ComentarioService);
    return ComentarioService;
}());
export { ComentarioService };
//# sourceMappingURL=comentarios.service.js.map