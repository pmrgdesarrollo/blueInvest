import { RouterModule, Routes } from '@angular/router';
import { PersonaNaturalComponent } from './persona-natural/persona-natural.component';
import { PersonaJuridicaComponent } from './persona-juridica/persona-juridica.component';

export const Personaroutes: Routes = [
    { path: '',  redirectTo: '/aprobacion/natural', pathMatch: 'full' },
    { path: 'natural', component: PersonaNaturalComponent},
    { path: 'juridica', component: PersonaJuridicaComponent},

];

export const appRouting = RouterModule.forChild( Personaroutes);
