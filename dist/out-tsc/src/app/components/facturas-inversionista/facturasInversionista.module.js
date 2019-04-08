var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FacturasInversionistaComponent } from './facturas-inversionista.component';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HistoricasComponent } from './historicas/historicas.component';
import { OfertadasComponent } from './ofertadas/ofertadas.component';
import { Inversionistaroutes } from './facturas-inversionista.routes';
import { FacturasCorredorModuleModule } from '../facturas-corredor/facturas-corredor-module.module';
import { InboxInversionistaComponent } from './inbox-inversionista/inbox-inversionista.component';
var FacturasInversionistaModule = /** @class */ (function () {
    function FacturasInversionistaModule() {
    }
    FacturasInversionistaModule = __decorate([
        NgModule({
            imports: [BrowserModule,
                CommonModule,
                Inversionistaroutes,
                FacturasCorredorModuleModule
            ],
            declarations: [FacturasInversionistaComponent,
                InboxInversionistaComponent,
                DisponiblesComponent,
                OfertadasComponent,
                HistoricasComponent,],
            exports: [FacturasInversionistaComponent,
                DisponiblesComponent,
                OfertadasComponent,
                HistoricasComponent,],
            bootstrap: []
        })
    ], FacturasInversionistaModule);
    return FacturasInversionistaModule;
}());
export { FacturasInversionistaModule };
//# sourceMappingURL=facturasInversionista.module.js.map