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
import { OfertaService } from 'src/app/services/oferta.service';
var InboxCorredorComponent = /** @class */ (function () {
    function InboxCorredorComponent(ofertasService) {
        this.ofertasService = ofertasService;
        this.misOfertas = [];
    }
    InboxCorredorComponent.prototype.ngOnInit = function () {
        this.cargarMisOfertas();
    };
    InboxCorredorComponent.prototype.cargarMisOfertas = function () {
        var _this = this;
        this.ofertasService.cargarMisOfertas().subscribe(function (data) {
            _this.misOfertas = data;
            console.log(_this.misOfertas);
        });
    };
    InboxCorredorComponent = __decorate([
        Component({
            selector: 'app-inbox-corredor',
            templateUrl: './inbox-corredor.component.html',
            styleUrls: ['./inbox-corredor.component.css']
        }),
        __metadata("design:paramtypes", [OfertaService])
    ], InboxCorredorComponent);
    return InboxCorredorComponent;
}());
export { InboxCorredorComponent };
//# sourceMappingURL=inbox-corredor.component.js.map