var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PublicadasComponent } from './publicadas/publicadas.component';
import { HistoricoComponent } from './historico/historico.component';
import { FacturasCorredorComponent } from './facturas-corredor.component';
import { corredorRutas } from './facturas-corredor.routes';
import { ComponentsModuleModule } from '../components-module.module';
import { InboxCorredorComponent } from './inbox-corredor/inbox-corredor.component';
import { FacturaComponent } from './factura/factura.component';
var FacturasCorredorModuleModule = /** @class */ (function () {
    function FacturasCorredorModuleModule() {
    }
    FacturasCorredorModuleModule = __decorate([
        NgModule({
            declarations: [FacturasCorredorComponent,
                InboxCorredorComponent,
                PublicadasComponent,
                HistoricoComponent,
                FacturaComponent,],
            exports: [
                FacturasCorredorComponent,
                PublicadasComponent,
                HistoricoComponent
            ],
            imports: [
                CommonModule,
                BrowserModule,
                corredorRutas,
                ComponentsModuleModule
            ]
        })
    ], FacturasCorredorModuleModule);
    return FacturasCorredorModuleModule;
}());
export { FacturasCorredorModuleModule };
//# sourceMappingURL=facturas-corredor-module.module.js.map