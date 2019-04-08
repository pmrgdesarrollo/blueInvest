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
import { Usuario } from 'src/app/models/usuario.model';
var FormLogComponent = /** @class */ (function () {
    function FormLogComponent(_usuarioService, ruta) {
        this._usuarioService = _usuarioService;
        this.ruta = ruta;
        this.recordarme = false;
    }
    FormLogComponent.prototype.ngOnInit = function () {
        this.googleInit();
        this.email = localStorage.getItem('email') || '';
        if (this.email.length > 1) {
            this.recordarme = true;
        }
    };
    FormLogComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '1080183916145-1eqlol8ojaq8svunnra9be384jpjlitl.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('btnGoogle'));
        });
    };
    FormLogComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            // let profile = googleUser.getBasicProfile();
            var token = googleUser.getAuthResponse().id_token;
            _this._usuarioService.loginGoogle(token)
                .subscribe(function () { return window.location.href = '#/aprobacion'; });
        });
    };
    FormLogComponent.prototype.ingresar = function (forma) {
        var _this = this;
        console.log(forma.value);
        if (forma.invalid) {
            return;
        }
        var usuario = new Usuario(null, forma.value.email, forma.value.password, null);
        this._usuarioService.loginService(usuario, forma.value.recordarme).subscribe(function (data) {
            console.log(data);
            // userId = data.id ;
            _this.ruta.navigate(['/aprobacion']);
        });
    };
    FormLogComponent = __decorate([
        Component({
            selector: 'app-form-log',
            templateUrl: './form-log.component.html',
            styleUrls: ['./form-log.component.css']
        }),
        __metadata("design:paramtypes", [UsuariosService, Router])
    ], FormLogComponent);
    return FormLogComponent;
}());
export { FormLogComponent };
//# sourceMappingURL=form-log.component.js.map