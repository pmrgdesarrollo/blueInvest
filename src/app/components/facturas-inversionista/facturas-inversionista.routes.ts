import { Routes , RouterModule } from '@angular/router';

import { DisponiblesComponent } from './disponibles/disponibles.component';
import { HistoricasComponent } from './historicas/historicas.component';
import { OfertadasComponent } from './ofertadas/ofertadas.component';
import { InboxInversionistaComponent } from './inbox-inversionista/inbox-inversionista.component';
import { PagarComponent } from './pagar/pagar.component';
import { PayuComponent } from './pagar/payu/payu.component';
import { PagandoSaldoComponent } from './pagar/pagando-saldo/pagando-saldo.component';
import { PagandoTransferenciaComponent } from './pagar/pagando-transferencia/pagando-transferencia.component';
import { ElegirMetodoComponent } from './elegir-metodo/elegir-metodo.component';









export const InversionistaRoutes: Routes = [
    { path: '', component: InboxInversionistaComponent } ,
    { path: 'inboxInversionista', component: InboxInversionistaComponent},
    { path: 'pagar/:id', component: PagarComponent},
    { path: 'payU/:id', component: PayuComponent },
    { path: 'saldo/:id', component: PagandoSaldoComponent},
    { path: 'transferencia/:id', component: PagandoTransferenciaComponent},
    { path: 'disponibles', component: DisponiblesComponent },
    { path: 'elegirMetodo/:id', component: ElegirMetodoComponent },
    { path: 'ofertadas', component: OfertadasComponent  },
    { path: 'historicas', component: HistoricasComponent  },
];

export const Inversionistaroutes = RouterModule.forChild(InversionistaRoutes);

