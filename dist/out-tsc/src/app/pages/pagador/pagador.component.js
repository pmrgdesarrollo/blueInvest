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
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario.model';
import { ComentarioService } from 'src/app/services/comentarios.service';
var PagadorComponent = /** @class */ (function () {
    function PagadorComponent(pagadorService, ruta, comentarioService) {
        var _this = this;
        this.pagadorService = pagadorService;
        this.ruta = ruta;
        this.comentarioService = comentarioService;
        this.misComentarios = [];
        this.total = 0;
        this.usuarios = 0;
        this.calificacion = [];
        this.ruta.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
    }
    PagadorComponent.prototype.ngOnInit = function () {
        this.obtenerMisComentarios();
        this.rating();
        this.obtenerPagador(this.id);
        this.forma = new FormGroup({
            rating: new FormControl(null, Validators.required),
            comentario: new FormControl(null, Validators.required),
            pagador: new FormControl(null, Validators.required),
        });
    };
    PagadorComponent.prototype.obtenerPagador = function (id) {
        var _this = this;
        this.pagadorService.obtenerPagador(id).subscribe(function (pagador) { return _this.pagador = pagador; });
    };
    PagadorComponent.prototype.obtenerMisComentarios = function () {
        var _this = this;
        this.comentarioService.cargarMisComentarios(this.id).subscribe(function (data) {
            console.log(data);
            _this.misComentarios = data;
        });
    };
    PagadorComponent.prototype.rating = function () {
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
    PagadorComponent.prototype.calificar = function (forma) {
        console.log(forma.value);
        var comentario = new Comentario(this.forma.value.rating, this.forma.value.comentario, this.forma.value.pagador = this.id);
        this.comentarioService.crearComentario(comentario).subscribe(function (data) { return console.log(data); });
    };
    PagadorComponent = __decorate([
        Component({
            selector: 'app-pagador',
            templateUrl: './pagador.component.html',
            styleUrls: ['./pagador.component.css']
        }),
        __metadata("design:paramtypes", [PagadorService,
            ActivatedRoute,
            ComentarioService])
    ], PagadorComponent);
    return PagadorComponent;
}());
export { PagadorComponent };
//# sourceMappingURL=pagador.component.js.map