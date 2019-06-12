import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { PublicadasComponent } from './publicadas/publicadas.component';
import { HistoricoComponent } from './historico/historico.component';
import { FacturasCorredorComponent } from './facturas-corredor.component';

import { corredorRutas } from './facturas-corredor.routes';
import { ComponentsModuleModule } from '../components-module.module';
import { InboxCorredorComponent } from './inbox-corredor/inbox-corredor.component';
import { FacturaComponent } from './factura/factura.component';
import { PipesModule } from '../../pipes/pipes.module';
import { FotoComponent } from './foto/foto.component';
import { AceptandoOfertaComponent } from './aceptando-oferta/aceptando-oferta.component';
import { ConfirmantePagoComponent } from './confirmante-pago/confirmante-pago.component';




@NgModule({
  declarations: [   FacturasCorredorComponent,
                    AceptandoOfertaComponent,
                    InboxCorredorComponent,
                    PublicadasComponent,
                    HistoricoComponent,
                    FacturaComponent,
                    ConfirmantePagoComponent,
                    FotoComponent],

                    exports: [
                    FacturasCorredorComponent,
                    PublicadasComponent,
                    HistoricoComponent],
    imports: [
    CommonModule,
    BrowserModule,
    corredorRutas,
    ComponentsModuleModule,
    PipesModule,
    FormsModule ,
    ReactiveFormsModule ,
  ]
})
export class FacturasCorredorModuleModule { }
