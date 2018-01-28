import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/services/route/route.service';
import { extract } from '../core/services/i18n/i18n.service';
import { AboutViewComponent } from './views/about-view.component';

const routes: Routes = Route.withDefaultLayout([
  { path: 'about', component: AboutViewComponent, data: { title: extract('About') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
