import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { routingPages } from '../pages/pages.routes';

@NgModule({
  declarations: [HeaderComponent,
                 BreadcrumbsComponent,
                 NoPageFoundComponent,
                 SidebarComponent],

                  exports: [HeaderComponent,
                  BreadcrumbsComponent,
                  NoPageFoundComponent,
                  SidebarComponent],
  imports: [
    CommonModule,
    routingPages
  ]
})
export class SharedModule { }
