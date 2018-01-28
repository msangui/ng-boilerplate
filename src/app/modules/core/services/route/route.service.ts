import { Routes } from '@angular/router';

import { DefaultLayoutComponent } from '../../layouts/default-layout.component';

/**
 * Provides helper methods to create routes.
 */
export class Route {

  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return {Routes} The new routes using shell as the base.
   */
  static withDefaultLayout(routes: Routes): Routes {
    return [{
      path: '',
      component: DefaultLayoutComponent,
      children: routes,
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true }
    }];
  }

}
