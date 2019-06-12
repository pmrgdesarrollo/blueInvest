import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { TiposPersonaComponent } from './tipos-persona.component';

import { PersonaNaturalComponent } from './persona-natural/persona-natural.component';
import { PersonaJuridicaComponent } from './persona-juridica/persona-juridica.component';



import { appRouting } from './tipos-persona.routes';


@NgModule({

    declarations : [
          TiposPersonaComponent,
          PersonaNaturalComponent,
          PersonaJuridicaComponent ],


    exports: [
      PersonaNaturalComponent,
      PersonaJuridicaComponent,
      TiposPersonaComponent, ],

    imports: [

        CommonModule,
        BrowserModule,
        FormsModule,
        appRouting ,
        ReactiveFormsModule ],

  providers: [ ],

})

export class TiposDePersonaModule { }
