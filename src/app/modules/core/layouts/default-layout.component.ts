import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private media: ObservableMedia) { }

  ngOnInit() {
    // Automatically close side menu on screens > sm breakpoint
    this.media.asObservable()
      .pipe(filter((change: MediaChange) => (change.mqAlias !== 'xs' && change.mqAlias !== 'sm')))
      .subscribe(() => this.sidenav.close());
  }

}
