import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { Homeroutes } from './components/home/home.routes';
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, children: Homeroutes },
    { path: 'register', component: RegisterComponent, children: Homeroutes },
    { path: '**', redirectTo: 'NoPageFoundComponent' }
];
export var AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=app-routing.js.map