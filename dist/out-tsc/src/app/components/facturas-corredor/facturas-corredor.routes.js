import { RouterModule } from '@angular/router';
import { PublicadasComponent } from './publicadas/publicadas.component';
import { HistoricoComponent } from './historico/historico.component';
import { InboxCorredorComponent } from './inbox-corredor/inbox-corredor.component';
import { FacturaComponent } from './factura/factura.component';
export var corredorRoutes = [
    { path: '', component: InboxCorredorComponent },
    { path: 'inboxCorredor', component: InboxCorredorComponent },
    { path: 'factura/:id', component: FacturaComponent },
    { path: 'publicadas', component: PublicadasComponent },
    { path: 'historico', component: HistoricoComponent },
];
export var corredorRutas = RouterModule.forChild(corredorRoutes);
//# sourceMappingURL=facturas-corredor.routes.js.map