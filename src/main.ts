import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { routes} from './app/app.routes';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule,[routes,{provide: LocationStrategy, useClass: HashLocationStrategy}]);
