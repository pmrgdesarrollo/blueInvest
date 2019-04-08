var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TiposPersonaComponent } from './tipos-persona.component';
import { PersonaNaturalComponent } from './persona-natural/persona-natural.component';
import { PersonaJuridicaComponent } from './persona-juridica/persona-juridica.component';
import { appRouting } from './tipos-persona.routes';
var TiposDePersonaModule = /** @class */ (function () {
    function TiposDePersonaModule() {
    }
    TiposDePersonaModule = __decorate([
        NgModule({
            declarations: [
                TiposPersonaComponent,
                PersonaNaturalComponent,
                PersonaJuridicaComponent
            ],
            exports: [
                PersonaNaturalComponent,
                PersonaJuridicaComponent,
                TiposPersonaComponent,
            ],
            imports: [
                CommonModule,
                BrowserModule,
                FormsModule,
                appRouting,
            ],
            providers: [],
        })
    ], TiposDePersonaModule);
    return TiposDePersonaModule;
}());
export { TiposDePersonaModule };
//# sourceMappingURL=tipos-persona.module.js.map