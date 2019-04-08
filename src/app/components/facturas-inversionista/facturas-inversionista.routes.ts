import { Routes , RouterModule } from '@angular/router';

import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HistoricasComponent } from './historicas/historicas.component';
import { OfertadasComponent } from './ofertadas/ofertadas.component';
import { InboxInversionistaComponent } from './inbox-inversionista/inbox-inversionista.component';
import { PagarComponent } from './pagar/pagar.component';




export const InversionistaRoutes: Routes = [
    { path: '', component: InboxInversionistaComponent } ,
    { path: 'inboxInversionista', component: InboxInversionistaComponent},
    { path: 'pagar/:id', component: PagarComponent},
    { path: 'disponibles', component: DisponiblesComponent },
    { path: 'ofertadas', component: OfertadasComponent  },
    { path: 'historicas', component: HistoricasComponent  },
];

export const Inversionistaroutes = RouterModule.forChild(InversionistaRoutes);

