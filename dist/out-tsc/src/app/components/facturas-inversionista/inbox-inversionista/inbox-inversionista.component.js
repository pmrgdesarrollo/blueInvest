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
import { OfertaService } from '../../../services/oferta.service';
var InboxInversionistaComponent = /** @class */ (function () {
    function InboxInversionistaComponent(_ofertaService) {
        this._ofertaService = _ofertaService;
    }
    InboxInversionistaComponent.prototype.ngOnInit = function () {
        this.cargarOfertas();
    };
    InboxInversionistaComponent.prototype.cargarOfertas = function () {
        var _this = this;
        this._ofertaService.cargarMisOfertas().subscribe(function (data) {
            console.log(data);
            // tslint:disable-next-line:forin
            for (var oferta in data) {
                var aprobado = data[oferta].estado;
                if (aprobado === false) {
                    _this.estado = 'pendiente';
                }
                else {
                    _this.estado = 'exitosa';
                }
            }
            _this.misOfertas = data;
        });
    };
    InboxInversionistaComponent = __decorate([
        Component({
            selector: 'app-inbox-inversionista',
            templateUrl: './inbox-inversionista.component.html',
            styleUrls: ['./inbox-inversionista.component.css']
        }),
        __metadata("design:paramtypes", [OfertaService])
    ], InboxInversionistaComponent);
    return InboxInversionistaComponent;
}());
export { InboxInversionistaComponent };
//# sourceMappingURL=inbox-inversionista.component.js.map