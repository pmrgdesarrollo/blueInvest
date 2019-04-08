import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
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
import { AgregarFacturaLinkComponent } from './agregar-factura-link/agregar-factura-link.component';
import { PipesModule } from '../pipes/pipes.module';




// ----------------------------------------------------------------------------------------------//


@NgModule({
    declarations: [
    PublicarOfertaComponent,
    RecordsComponent,
    HacerOfertaComponent,
    FormLogComponent,
    FormRegComponent,
    IngresarPagadorComponent,
    MensajeInformativoComponent,
    IngresarDescontadorComponent,
    AgregarFacturaLinkComponent,
 


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
    AgregarFacturaLinkComponent
  ],

    imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PipesModule
  ],

  providers: [ PublicarOfertaComponent , IngresarPagadorComponent ],

})
export class ComponentsModuleModule { }
