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
import { PagarComponent } from './pagar/pagar.component';
import { PipesModule } from 'src/app/pipes/pipes.module';





@NgModule({
    imports: [ BrowserModule,
               CommonModule,
               Inversionistaroutes,
               FacturasCorredorModuleModule,
               PipesModule
               ],

    declarations: [ FacturasInversionistaComponent,
                    InboxInversionistaComponent,
                    DisponiblesComponent,
                    OfertadasComponent,
                    HistoricasComponent,
                    PagarComponent, ],

                    exports : [ FacturasInversionistaComponent,
                        DisponiblesComponent,
                        OfertadasComponent,
                        HistoricasComponent, ],
    bootstrap:    [ ]
})
export class FacturasInversionistaModule { }
