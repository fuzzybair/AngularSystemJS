import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularSystemJSModule } from './AngularSystemJS/angular-systemjs.module';
platformBrowserDynamic().bootstrapModule(AngularSystemJSModule);