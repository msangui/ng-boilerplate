import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/services/route/route.service';
import { extract } from '../core/services/i18n/i18n.service';
import { HomeViewComponent } from './views/home-view.component';

const routes: Routes = Route.withDefaultLayout([
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent, data: { title: extract('Home') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
