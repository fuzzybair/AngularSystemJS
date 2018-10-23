import { Component } from '@angular/core';
@Component({
  selector: 'app-angular-systemjs',
  template: '<h1>{{greeting()}}</h1>'
})
export class AngularSystemJSComponent {
  name = 'Angular';
  greeting(){
    return 'Hello, ' + this.name;
  }
}