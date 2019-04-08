var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* REQUIRED MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturasCorredorModuleModule } from '../components/facturas-corredor/facturas-corredor-module.module';
import { FacturasInversionistaModule } from '../components/facturas-inversionista/facturasInversionista.module';
import { TiposDePersonaModule } from '../components/tiposPersona/tipos-persona.module';
/* REQUIRED COMPONENTS */
import { PagesComponent } from './pages.component';
import { CorredorComponent } from './corredor/corredor.component';
import { InversorComponent } from './inversor/inversor.component';
import { SubastaComponent } from './subasta/subasta.component';
import { AprobacionComponent } from './aprobacion/aprobacion.component';
/* PAGES ROUTES */
import { routingPages } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModuleModule } from '../components/components-module.module';
import { FacturaPublicadaComponent } from './factura-publicada/factura-publicada.component';
import { PagadoresComponent } from './pagadores/pagadores.component';
import { PagadorComponent } from './pagador/pagador.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { EventosComponent } from './eventos/eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HacerOfertaPageComponent } from './hacer-oferta-page/hacer-oferta-page.component';
import { DescontadoresComponent } from './descontadores/descontadores.component';
import { DescontadorComponent } from './descontador/descontador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        NgModule({
            imports: [BrowserModule,
                ComponentsModuleModule,
                FacturasCorredorModuleModule,
                FacturasInversionistaModule,
                TiposDePersonaModule,
                CommonModule,
                SharedModule,
                routingPages,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: [CorredorComponent,
                InversorComponent,
                SubastaComponent,
                AprobacionComponent],
            declarations: [PagesComponent,
                CorredorComponent,
                InversorComponent,
                SubastaComponent,
                AprobacionComponent,
                FacturaPublicadaComponent,
                PagadoresComponent,
                PagadorComponent,
                AdministradorComponent,
                EventosComponent,
                NoticiasComponent,
                HacerOfertaPageComponent,
                DescontadoresComponent,
                DescontadorComponent,
                UsuariosComponent,
                UsuarioComponent,
            ],
            bootstrap: []
        })
    ], PagesModule);
    return PagesModule;
}());
export { PagesModule };
//# sourceMappingURL=pages.module.js.map