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
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
var ProtegerRutasGuard = /** @class */ (function () {
    function ProtegerRutasGuard(_usuarioService, router) {
        this._usuarioService = _usuarioService;
        this.router = router;
    }
    ProtegerRutasGuard.prototype.canActivate = function () {
        if (this._usuarioService.estalogueado()) {
            console.log('PASO EL GUARD');
            return true;
        }
        else {
            console.log('Bloqueado por guard');
            this.router.navigate(['/login']);
            return false;
        }
    };
    ProtegerRutasGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [UsuariosService,
            Router])
    ], ProtegerRutasGuard);
    return ProtegerRutasGuard;
}());
export { ProtegerRutasGuard };
//# sourceMappingURL=proteger-rutas.guard.js.map