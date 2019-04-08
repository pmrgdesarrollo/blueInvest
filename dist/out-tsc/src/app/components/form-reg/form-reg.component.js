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
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
var FormRegComponent = /** @class */ (function () {
    function FormRegComponent(_usuarioService, ruta) {
        this._usuarioService = _usuarioService;
        this.ruta = ruta;
    }
    FormRegComponent.prototype.sonIguales = function (campo1, campo2) {
        return function (grupo) {
            var pass1 = grupo.controls[campo1].value;
            var pass2 = grupo.controls[campo2].value;
            if (pass1 === pass2) {
                return null;
            }
            return { sonIguales: true };
        };
    };
    FormRegComponent.prototype.ngOnInit = function () {
        this.forma = new FormGroup({
            nombre: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
            password2: new FormControl(null, Validators.required),
            role: new FormControl(null, Validators.required),
            condiciones: new FormControl(false),
        }, { validators: this.sonIguales('password', 'password2') });
    };
    FormRegComponent.prototype.registrarUsuario = function (forma) {
        var _this = this;
        if (this.forma.invalid) {
            return;
        }
        if (!this.forma.value.condiciones) {
            return console.log('debes aceptar las condiciones');
        }
        console.log(forma.value);
        var usuario = new Usuario(this.forma.value.nombre, this.forma.value.email, this.forma.value.password, this.forma.value.role);
        this._usuarioService.crearUsuario(usuario).subscribe(function (data) {
            return _this.ruta.navigate(['/login']);
        });
    };
    FormRegComponent = __decorate([
        Component({
            selector: 'app-form-reg',
            templateUrl: './form-reg.component.html',
            styleUrls: ['./form-reg.component.css']
        }),
        __metadata("design:paramtypes", [UsuariosService, Router])
    ], FormRegComponent);
    return FormRegComponent;
}());
export { FormRegComponent };
//# sourceMappingURL=form-reg.component.js.map