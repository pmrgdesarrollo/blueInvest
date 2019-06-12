import { Routes , RouterModule } from '@angular/router';

import { PublicadasComponent } from './publicadas/publicadas.component';
import { HistoricoComponent } from './historico/historico.component';
import { InboxCorredorComponent } from './inbox-corredor/inbox-corredor.component';
import { FacturaComponent } from './factura/factura.component';
import { FotoComponent } from './foto/foto.component';
import { AceptandoOfertaComponent } from './aceptando-oferta/aceptando-oferta.component';
import { ConfirmantePagoComponent } from './confirmante-pago/confirmante-pago.component';



export const corredorRoutes: Routes = [
    { path: '', component: PublicadasComponent } ,
    { path: 'inboxCorredor', component: InboxCorredorComponent },
    { path: 'factura/:id', component: FacturaComponent},
    { path: 'foto/:id', component: FotoComponent},
    { path: 'confirmante/:id', component: ConfirmantePagoComponent},
    { path: 'aceptando/:id', component: AceptandoOfertaComponent},
    { path: 'publicadas', component: PublicadasComponent },
    { path: 'historico', component:  HistoricoComponent},
];

export const corredorRutas = RouterModule.forChild( corredorRoutes );
