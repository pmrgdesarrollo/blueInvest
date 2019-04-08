var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HomeModule } from './home/home.module';
import { PublicarOfertaComponent } from './publicar-oferta/publicar-oferta.component';
import { RecordsComponent } from './records/records.component';
import { HacerOfertaComponent } from './hacer-oferta/hacer-oferta.component';
import { FormLogComponent } from './form-log/form-log.component';
import { FormRegComponent } from './form-reg/form-reg.component';
import { IngresarPagadorComponent } from './ingresar-pagador/ingresar-pagador.component';
import { IngresarDescontadorComponent } from './ingresar-descontador/ingresar-descontador.component';
// ENVIROMENT --> HERE IS THE FIREBASE CONFIGURATION IN APP>ENVIROMENTS
import { AppRoutingModule } from '../app-routing';
import { MensajeInformativoComponent } from './mensaje-informativo/mensaje-informativo.component';
import { HttpClientModule } from '@angular/common/http';
// ----------------------------------------------------------------------------------------------//
var ComponentsModuleModule = /** @class */ (function () {
    function ComponentsModuleModule() {
    }
    ComponentsModuleModule = __decorate([
        NgModule({
            declarations: [
                PublicarOfertaComponent,
                RecordsComponent,
                HacerOfertaComponent,
                FormLogComponent,
                FormRegComponent,
                IngresarPagadorComponent,
                MensajeInformativoComponent,
                IngresarDescontadorComponent,
            ],
            exports: [
                PublicarOfertaComponent,
                RecordsComponent,
                HacerOfertaComponent,
                FormLogComponent,
                FormRegComponent,
                IngresarPagadorComponent,
                MensajeInformativoComponent,
                IngresarDescontadorComponent,
            ],
            imports: [
                CommonModule,
                BrowserModule,
                AppRoutingModule,
                HomeModule,
                FormsModule,
                ChartsModule,
                ReactiveFormsModule,
                HttpClientModule
            ],
            providers: [PublicarOfertaComponent, IngresarPagadorComponent],
        })
    ], ComponentsModuleModule);
    return ComponentsModuleModule;
}());
export { ComponentsModuleModule };
//# sourceMappingURL=components-module.module.js.map