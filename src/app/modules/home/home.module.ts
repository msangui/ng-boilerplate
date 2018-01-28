// external modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../../material.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../../shared/shared.module';

// own modules
import { HomeRoutingModule } from './home-routing.module';

// services
import { QuoteService } from '../../shared/services/quote.service';

// components
import { HomeViewComponent } from './views/home-view.component';
import { QuoteCardComponent } from './components/quote-card/quote-card.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeViewComponent,
    QuoteCardComponent
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
