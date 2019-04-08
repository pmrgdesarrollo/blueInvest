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
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';
import { Router } from '@angular/router';
var UsuariosService = /** @class */ (function () {
    function UsuariosService(_http, router) {
        this._http = _http;
        this.router = router;
        this.cargarStorage();
    }
    // CONEXION CON EL BACKEND //
    UsuariosService.prototype.estalogueado = function () {
        return (this.token.length > 5) ? true : false;
    };
    UsuariosService.prototype.logout = function () {
        this.usuario = null;
        this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
    };
    UsuariosService.prototype.cargarStorage = function () {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.usuario = JSON.parse(localStorage.getItem('usuario'));
        }
        else {
            this.token = '';
            this.usuario = null;
        }
    };
    // REGISTRAR UN USUARIO
    UsuariosService.prototype.crearUsuario = function (usuario) {
        var url = URL_SERVICIOS + '/usuario';
        return this._http.post(url, usuario).pipe(map(function (resp) {
            swal('Usuario creado correctamente', usuario.email, 'success');
            console.log('resp servicio', resp);
            return resp;
        }));
    };
    // LOGUEAR UN USUARIO
    UsuariosService.prototype.loginService = function (usuario, recordame) {
        if (recordame === void 0) { recordame = false; }
        if (recordame) {
            localStorage.setItem('email', usuario.email);
        }
        else {
            localStorage.removeItem('email');
        }
        var url = URL_SERVICIOS + '/login';
        return this._http.post(url, usuario).pipe(map(function (resp) {
            console.log('resp servicio:', resp);
            localStorage.setItem('usuario', JSON.stringify(resp.usuario));
            localStorage.setItem('id', resp.id);
            localStorage.setItem('token', resp.token);
            return resp;
        }));
    };
    UsuariosService.prototype.guardarStorage = function (id, token, usuario) {
        localStorage.setItem('id', id);
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.usuario = usuario;
        this.token = token;
    };
    UsuariosService.prototype.loginGoogle = function (token) {
        var _this = this;
        var url = URL_SERVICIOS + '/login/google';
        return this._http.post(url, { token: token }).pipe(map(function (resp) {
            _this.guardarStorage(resp.id, resp.token, resp.usuario);
            return true;
        }));
    };
    UsuariosService.prototype.buscarUsuario = function (id) {
        var url = URL_SERVICIOS + '/usuario/' + id;
        return this._http.get(url).pipe(map(function (resp) {
            console.log(resp.usuario);
            return resp.usuario;
        }));
    };
    UsuariosService.prototype.cargarUsuario = function () {
        var url = URL_SERVICIOS + '/usuario';
        return this._http.get(url).pipe(map(function (resp) {
            console.log(resp.usuarios);
            return resp.usuarios;
        }));
    };
    UsuariosService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], UsuariosService);
    return UsuariosService;
}());
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map