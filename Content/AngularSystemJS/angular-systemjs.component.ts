import { Component } from '@angular/core';
@Component({
  selector: 'app-angular-systemjs',
  templateUrl: './AngularSystemJS/angular-systemjs.component.html',
  styleUrls: ['./AngularSystemJS/angular-systemjs.component.css'],
})
export class AngularSystemJSComponent {
  name = 'Angular';
  greeting() {
    return 'Hello, ' + this.name;
  }
}