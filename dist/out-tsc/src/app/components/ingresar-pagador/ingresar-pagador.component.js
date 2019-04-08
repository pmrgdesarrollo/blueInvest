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
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagadorService } from '../../services/pagador.service';
import { Pagador } from 'src/app/models/pagador.model';
import { Router } from '@angular/router';
var IngresarPagadorComponent = /** @class */ (function () {
    function IngresarPagadorComponent(_pagadorService, ruta) {
        this._pagadorService = _pagadorService;
        this.ruta = ruta;
        this.pagadores = [];
    }
    IngresarPagadorComponent.prototype.ngOnInit = function () {
        this.cargarPagadores();
        this.forma = new FormGroup({
            nombre: new FormControl(null, Validators.required),
            nit: new FormControl(null, [Validators.required,]),
        });
        /*this._modalUploadService.notificacion
        .subscribe( () => this.cargarHospitales() );*/
    };
    IngresarPagadorComponent.prototype.cargarPagadores = function () {
        var _this = this;
        this._pagadorService.cargarPagador()
            .subscribe(function (pagadores) { return _this.pagadores = pagadores; });
    };
    IngresarPagadorComponent.prototype.crearPagador = function (forma) {
        var _this = this;
        console.log(forma.value);
        var pagador = new Pagador(this.forma.value.nombre, this.forma.value.nit, this.forma.value.id);
        this._pagadorService.crearPagador(pagador).subscribe(function (data) {
            console.log(data);
            console.log(data.PagadorCreado._id);
            return _this.ruta.navigate(['/corredor']);
        });
    };
    IngresarPagadorComponent = __decorate([
        Component({
            selector: 'app-ingresar-pagador',
            templateUrl: './ingresar-pagador.component.html',
            styles: ["\n\n.ng-invalid.ng-touched:not(form) {\n    border: 1px solid red;\n  }\n\n  .mensaje{\n    font-size: 8px;\n    margin:0;\n    padding:0;\n}\n\n  .tama\u00F1oletra{\n    font-size: 18px;\n  }\n  .fondoDivs{\n    background:linear-gradient(to right, rgb(65, 65, 175),rgb(0, 204, 189));\n\n      border-radius: 10px;\n      padding: 10px;\n      -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n      -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);\n      box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n  }\n\n  "]
        }),
        __metadata("design:paramtypes", [PagadorService, Router])
    ], IngresarPagadorComponent);
    return IngresarPagadorComponent;
}());
export { IngresarPagadorComponent };
//# sourceMappingURL=ingresar-pagador.component.js.map