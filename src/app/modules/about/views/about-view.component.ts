import { Component, OnInit } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.scss']
})
export class AboutViewComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
