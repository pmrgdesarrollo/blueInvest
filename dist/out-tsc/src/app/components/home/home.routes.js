import { RouterModule } from '@angular/router';
import { FuncionamientoComponent } from './funcionamiento/funcionamiento.component';
import { ProductosComponent } from './productos/productos.component';
import { AppmovilComponent } from './appmovil/appmovil.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home.component';
import { SubastaPrincipalComponent } from './subasta-principal/subasta-principal.component';
export var Homeroutes = [
    { path: 'home', component: HomeComponent },
    { path: 'ensubasta', component: SubastaPrincipalComponent },
    { path: 'funcion', component: FuncionamientoComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'appmovil', component: AppmovilComponent },
    { path: 'contacto', component: ContactoComponent },
];
export var HomeRouting = RouterModule.forChild(Homeroutes);
//# sourceMappingURL=home.routes.js.map