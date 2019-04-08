import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

/* Rutas generales */
import { AppRoutingModule } from './app-routing';
import { ComponentsModuleModule } from './components/components-module.module';
import { HomeModule } from './components/home/home.module';
import { CommonModule } from '@angular/common';
import { TiposDePersonaModule } from './components/tiposPersona/tipos-persona.module';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule,
    ComponentsModuleModule,
    HomeModule,
    HttpModule,
    CommonModule,
    TiposDePersonaModule



  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
