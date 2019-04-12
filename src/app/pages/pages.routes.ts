import { RouterModule, Routes } from '@angular/router';

/* Pages module components */

import { PagesComponent } from './pages.component';

import { CorredorComponent } from './corredor/corredor.component';
import { InversorComponent } from './inversor/inversor.component';
import { SubastaComponent } from './subasta/subasta.component';
import { InversionistaRoutes } from '../components/facturas-inversionista/facturas-inversionista.routes';
import { corredorRoutes } from '../components/facturas-corredor/facturas-corredor.routes';
import { AprobacionComponent } from './aprobacion/aprobacion.component';
import { Personaroutes } from '../components/tiposPersona/tipos-persona.routes';
import { ProtegerRutasGuard } from '../guards/proteger-rutas.guard';
import { FacturaPublicadaComponent } from './factura-publicada/factura-publicada.component';
import { PagadoresComponent } from './pagadores/pagadores.component';
import { PagadorComponent } from './pagador/pagador.component';
import { EventosComponent } from './eventos/eventos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { HacerOfertaPageComponent } from './hacer-oferta-page/hacer-oferta-page.component';
import { DescontadoresComponent } from './descontadores/descontadores.component';
import { DescontadorComponent } from './descontador/descontador.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresaComponent } from './empresa/empresa.component';




const pagesRoutes: Routes = [
    { path: '',
      component: PagesComponent ,
      canActivate: [ ProtegerRutasGuard ],
      children : [
    { path: 'aprobacion' , component: AprobacionComponent , children:  Personaroutes  },

    { path: 'pagadores' , component: PagadoresComponent },
    { path: 'pagador/:id' , component: PagadorComponent},
    { path: 'descontadores' , component: DescontadoresComponent},
    { path: 'empresas' , component: EmpresasComponent},
    { path: 'empresa/:id' , component: EmpresaComponent},
    { path: 'descontador/:id' , component: DescontadorComponent},
    { path: 'usuarios' , component: UsuariosComponent },
    { path: 'usuario/:id' , component:  UsuarioComponent },

    { path: 'haceroferta/:id' , component: HacerOfertaPageComponent },
    { path: 'eventos' , component: EventosComponent},
    { path: 'noticias' , component: NoticiasComponent},
    { path: 'administrador' , component: AdministradorComponent},
    { path: 'publicada/:id' , component: FacturaPublicadaComponent},
    { path: 'corredor' , component: CorredorComponent , children: corredorRoutes  },
    { path: 'inversor' , component: InversorComponent , children: InversionistaRoutes  },
    { path: 'subasta' , component: SubastaComponent  },

]},

];

export const routingPages = RouterModule.forChild( pagesRoutes );
