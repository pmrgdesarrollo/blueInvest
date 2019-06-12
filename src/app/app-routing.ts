import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { Homeroutes } from './components/home/home.routes';

const routes: Routes = [
  { path: '',  redirectTo: '/login/ensubasta', pathMatch: 'full' },
  { path: 'login', component: LoginComponent , children: Homeroutes },
  { path: 'register', component: RegisterComponent , children: Homeroutes  },
  { path: '**', redirectTo : 'NoPageFoundComponent' }

 ];

export const AppRoutingModule = RouterModule.forRoot( routes , { useHash: true } );

