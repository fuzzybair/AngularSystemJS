import { AngularSystemJSComponent } from './angular-systemjs.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [BrowserModule],
  declarations: [AngularSystemJSComponent],
  bootstrap: [AngularSystemJSComponent]
})
export class AngularSystemJSModule {
}