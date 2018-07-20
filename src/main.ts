import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule) // JIT Compilation
  .catch(err => console.log(err));
