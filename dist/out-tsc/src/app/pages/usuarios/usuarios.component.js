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
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
var UsuariosComponent = /** @class */ (function () {
    function UsuariosComponent(_usuarioService, _ruta) {
        this._usuarioService = _usuarioService;
        this._ruta = _ruta;
        this.usuarios = [];
    }
    UsuariosComponent.prototype.ngOnInit = function () {
        this.cargarUsuarios();
    };
    UsuariosComponent.prototype.cargarUsuarios = function () {
        var _this = this;
        this._usuarioService.cargarUsuario().subscribe(function (data) { return _this.usuarios = data; });
    };
    UsuariosComponent.prototype.verUsuario = function (id) {
        this._ruta.navigate(['/usuario', id]);
    };
    UsuariosComponent = __decorate([
        Component({
            selector: 'app-usuarios',
            templateUrl: './usuarios.component.html',
            styleUrls: ['./usuarios.component.css']
        }),
        __metadata("design:paramtypes", [UsuariosService,
            Router])
    ], UsuariosComponent);
    return UsuariosComponent;
}());
export { UsuariosComponent };
//# sourceMappingURL=usuarios.component.js.map