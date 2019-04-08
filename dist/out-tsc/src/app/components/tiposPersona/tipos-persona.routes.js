import { RouterModule } from '@angular/router';
import { PersonaNaturalComponent } from './persona-natural/persona-natural.component';
import { PersonaJuridicaComponent } from './persona-juridica/persona-juridica.component';
export var Personaroutes = [
    { path: '', redirectTo: '/aprobacion/natural', pathMatch: 'full' },
    { path: 'natural', component: PersonaNaturalComponent },
    { path: 'juridica', component: PersonaJuridicaComponent },
];
export var appRouting = RouterModule.forChild(Personaroutes);
//# sourceMappingURL=tipos-persona.routes.js.map