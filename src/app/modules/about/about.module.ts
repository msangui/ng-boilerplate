// external modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// own modules
import { MaterialModule } from '../../material.module';
import { AboutRoutingModule } from './about-routing.module';

// components
import { AboutViewComponent } from './views/about-view.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    AboutRoutingModule
  ],
  declarations: [
    AboutViewComponent
  ]
})
export class AboutModule { }
