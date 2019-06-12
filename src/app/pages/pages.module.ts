/* REQUIRED MODULES */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

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
import { PipesModule } from '../pipes/pipes.module';
import { FotograndeComponent } from './fotogrande/fotogrande.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaComponent } from './empresa/empresa.component';

/* CHARTS MODULE */
import { ChartsModule } from 'ng2-charts';







@NgModule({
    imports:   [BrowserModule,
               ComponentsModuleModule,
               FacturasCorredorModuleModule,
               FacturasInversionistaModule,
               TiposDePersonaModule,
               CommonModule,
               SharedModule,
               routingPages,
               FormsModule ,
               ReactiveFormsModule,
               PipesModule,
               ChartsModule

                ],

    exports:    [CorredorComponent,
                 InversorComponent,
                 SubastaComponent,
                 AprobacionComponent ],

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
                   FotograndeComponent,
                   EmpresasComponent,
                   EmpresaComponent,
                ],

                   bootstrap:    [ ]
})
export class PagesModule { }
