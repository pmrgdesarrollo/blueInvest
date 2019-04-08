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
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/models/comentario.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComentarioService } from 'src/app/services/comentarios.service';
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(_usuarioService, ruta, comentarioService) {
        var _this = this;
        this._usuarioService = _usuarioService;
        this.ruta = ruta;
        this.comentarioService = comentarioService;
        this.misComentarios = [];
        this.calificacion = [];
        this.usuarios = 0;
        this.total = 0;
        this.ruta.params.subscribe(function (params) { return _this.id = params['id']; });
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.obtenerUsuario();
        this.obtenerMisComentarios();
        this.rating();
        this.forma = new FormGroup({
            rating: new FormControl(null, Validators.required),
            comentario: new FormControl(null, Validators.required),
            pagador: new FormControl(null, Validators.required),
        });
    };
    UsuarioComponent.prototype.obtenerUsuario = function () {
        var _this = this;
        this._usuarioService.buscarUsuario(this.id).subscribe(function (usuario) { return _this.usuario = usuario; });
    };
    UsuarioComponent.prototype.obtenerMisComentarios = function () {
        var _this = this;
        this.comentarioService.cargarMisComentarios(this.id).subscribe(function (data) {
            console.log(data);
            _this.misComentarios = data;
        });
    };
    UsuarioComponent.prototype.rating = function () {
        var _this = this;
        this.comentarioService.cargarMisComentarios(this.id).subscribe(function (data) {
            // tslint:disable-next-line:forin
            for (var rate in data) {
                _this.calificacion.push(data[rate].rating);
            }
            console.log(_this.calificacion);
            var total = 0;
            for (var i = 0; i < _this.calificacion.length; i++) {
                _this.usuarios = _this.calificacion.length;
                // tslint:disable-next-line:no-unused-expression
                console.log(_this.calificacion[i]);
                total += _this.calificacion[i];
                _this.total = total / _this.calificacion.length;
            }
            console.log(_this.total);
        });
    };
    UsuarioComponent.prototype.calificar = function (forma) {
        console.log(forma.value);
        var comentario = new Comentario(this.forma.value.rating, this.forma.value.comentario, this.forma.value.pagador = this.id);
        this.comentarioService.crearComentario(comentario).subscribe(function (data) { return console.log(data); });
    };
    UsuarioComponent = __decorate([
        Component({
            selector: 'app-usuario',
            templateUrl: './usuario.component.html',
            styleUrls: ['./usuario.component.css']
        }),
        __metadata("design:paramtypes", [UsuariosService,
            ActivatedRoute,
            ComentarioService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map