import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppmovilComponent } from './appmovil/appmovil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routes';
import { SubastaPrincipalComponent } from './subasta-principal/subasta-principal.component';



@NgModule({
    imports: [ BrowserModule,
               HomeRouting ],

    declarations: [ AppmovilComponent,
                    SubastaPrincipalComponent,
                    ContactoComponent,
                    FuncionamientoComponent,
                    ProductosComponent,
                    HomeComponent],

                    exports: [ AppmovilComponent,
                        ContactoComponent,
                        FuncionamientoComponent,
                        ProductosComponent,
                        HomeComponent],

     bootstrap:    [  ]
})
export class HomeModule { }
