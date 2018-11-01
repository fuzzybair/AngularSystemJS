import { AngularSystemJSComponent } from './angular-systemjs.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule
  ],
  declarations: [AngularSystemJSComponent],
  bootstrap: [AngularSystemJSComponent]
})
export class AngularSystemJSModule {
}