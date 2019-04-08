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
import { Descontador } from 'src/app/models/descontador.model';
import { Router } from '@angular/router';
import { DescontadorService } from '../../services/descontador.service';
var IngresarDescontadorComponent = /** @class */ (function () {
    function IngresarDescontadorComponent(_descontadorService, ruta) {
        this._descontadorService = _descontadorService;
        this.ruta = ruta;
        this.descontadores = [];
    }
    IngresarDescontadorComponent.prototype.ngOnInit = function () {
        this.cargarDescontadores();
        this.forma = new FormGroup({
            nombre: new FormControl(null, Validators.required),
            nit: new FormControl(null, Validators.required),
        });
        /*this._modalUploadService.notificacion
        .subscribe( () => this.cargarHospitales() );*/
    };
    IngresarDescontadorComponent.prototype.cargarDescontadores = function () {
        var _this = this;
        this._descontadorService.cargarDescontador()
            .subscribe(function (descontadores) { return _this.descontadores = descontadores; });
    };
    IngresarDescontadorComponent.prototype.crearDescontador = function (forma) {
        var _this = this;
        console.log(forma.value);
        var descontador = new Descontador(this.forma.value.nombre, this.forma.value.nit, this.forma.value.id);
        this._descontadorService.crearDescontador(descontador).subscribe(function (data) {
            console.log(data);
            console.log(data._id);
            return _this.ruta.navigate(['/corredor']);
        });
    };
    IngresarDescontadorComponent = __decorate([
        Component({
            selector: 'app-ingresar-descontador',
            templateUrl: './ingresar-descontador.component.html',
            styles: ["\n\n  .ng-invalid.ng-touched:not(form) {\n      border: 1px solid red;\n    }\n\n    .mensaje{\n      font-size: 8px;\n      margin:0;\n      padding:0;\n  }\n\n    .tama\u00F1oletra{\n      font-size: 18px;\n    }\n    .fondoDivs{\n\n      background:linear-gradient(to right, rgb(65, 65, 175),rgb(0, 204, 189));\n      border-radius: 10px;\n      padding: 10px;\n      -moz-box-shadow:    3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n      -webkit-box-shadow: 3px 3px 5px 6px   rgba(109, 108, 108, 0.085);\n      box-shadow:         3px 3px 5px 6px rgba(109, 108, 108, 0.085);\n    }\n\n    "]
        }),
        __metadata("design:paramtypes", [DescontadorService, Router])
    ], IngresarDescontadorComponent);
    return IngresarDescontadorComponent;
}());
export { IngresarDescontadorComponent };
//# sourceMappingURL=ingresar-descontador.component.js.map