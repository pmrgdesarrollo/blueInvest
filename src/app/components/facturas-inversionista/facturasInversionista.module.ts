import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FacturasInversionistaComponent } from './facturas-inversionista.component';

import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HistoricasComponent } from './historicas/historicas.component';
import { OfertadasComponent } from './ofertadas/ofertadas.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { Inversionistaroutes } from './facturas-inversionista.routes';
import { FacturasCorredorModuleModule } from '../facturas-corredor/facturas-corredor-module.module';
import { InboxInversionistaComponent } from './inbox-inversionista/inbox-inversionista.component';
import { PagarComponent } from './pagar/pagar.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PayuComponent } from './pagar/payu/payu.component';
import { PagandoSaldoComponent } from './pagar/pagando-saldo/pagando-saldo.component';
import { PagandoTransferenciaComponent } from './pagar/pagando-transferencia/pagando-transferencia.component';
import { ElegirMetodoComponent } from './elegir-metodo/elegir-metodo.component';






@NgModule({
    imports: [ BrowserModule,
               CommonModule,
               Inversionistaroutes,
               FacturasCorredorModuleModule,
               PipesModule,
               FormsModule,
               ReactiveFormsModule,


               ],

    declarations: [ FacturasInversionistaComponent,
                    InboxInversionistaComponent,
                    DisponiblesComponent,
                    OfertadasComponent,
                    HistoricasComponent,
                    PagarComponent,
                    PayuComponent,
                    PagandoSaldoComponent,
                    PagandoTransferenciaComponent,
                    ElegirMetodoComponent, ],

                    exports : [ FacturasInversionistaComponent,
                        DisponiblesComponent,
                        OfertadasComponent,
                        HistoricasComponent, ],
    bootstrap:    [ ]
})
export class FacturasInversionistaModule { }
