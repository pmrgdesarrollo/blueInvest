import { RouterModule } from '@angular/router';
import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HistoricasComponent } from './historicas/historicas.component';
import { OfertadasComponent } from './ofertadas/ofertadas.component';
import { InboxInversionistaComponent } from './inbox-inversionista/inbox-inversionista.component';
export var InversionistaRoutes = [
    { path: '', component: InboxInversionistaComponent },
    { path: 'inboxInversionista', component: InboxInversionistaComponent },
    { path: 'disponibles', component: DisponiblesComponent },
    { path: 'ofertadas', component: OfertadasComponent },
    { path: 'historicas', component: HistoricasComponent },
];
export var Inversionistaroutes = RouterModule.forChild(InversionistaRoutes);
//# sourceMappingURL=facturas-inversionista.routes.js.map