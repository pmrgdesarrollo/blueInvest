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
import { ActivatedRoute } from '@angular/router';
import { DescontadorService } from '../../services/descontador.service';
import { ComentarioService } from 'src/app/services/comentarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario.model';
var DescontadorComponent = /** @class */ (function () {
    function DescontadorComponent(ruta, descontadorService, comentarioService) {
        var _this = this;
        this.ruta = ruta;
        this.descontadorService = descontadorService;
        this.comentarioService = comentarioService;
        this.misComentarios = [];
        this.calificacion = [];
        this.usuarios = 0;
        this.total = 0;
        this.ruta.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
    }
    DescontadorComponent.prototype.ngOnInit = function () {
        this.obtenerDescontador(this.id);
        this.obtenerMisComentarios();
        this.rating();
        this.forma = new FormGroup({
            rating: new FormControl(null, Validators.required),
            comentario: new FormControl(null, Validators.required),
            pagador: new FormControl(null, Validators.required),
        });
    };
    DescontadorComponent.prototype.obtenerDescontador = function (id) {
        var _this = this;
        this.descontadorService.obtenerDescontador(id).subscribe(function (descontador) { return _this.descontador = descontador; });
    };
    DescontadorComponent.prototype.obtenerMisComentarios = function () {
        var _this = this;
        this.comentarioService.cargarMisComentarios(this.id).subscribe(function (data) {
            console.log(data);
            _this.misComentarios = data;
        });
    };
    DescontadorComponent.prototype.rating = function () {
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
    DescontadorComponent.prototype.calificar = function (forma) {
        console.log(forma.value);
        var comentario = new Comentario(this.forma.value.rating, this.forma.value.comentario, this.forma.value.pagador = this.id);
        this.comentarioService.crearComentario(comentario).subscribe(function (data) { return console.log(data); });
    };
    DescontadorComponent = __decorate([
        Component({
            selector: 'app-descontador',
            templateUrl: './descontador.component.html',
            styleUrls: ['./descontador.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, DescontadorService,
            ComentarioService])
    ], DescontadorComponent);
    return DescontadorComponent;
}());
export { DescontadorComponent };
//# sourceMappingURL=descontador.component.js.map