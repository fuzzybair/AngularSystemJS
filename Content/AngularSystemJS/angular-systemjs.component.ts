import { Component } from '@angular/core';
import { DataItem } from './models/data-item';

@Component({
  selector: 'app-angular-systemjs',
  templateUrl: './AngularSystemJS/angular-systemjs.component.html',
  styleUrls: ['./AngularSystemJS/angular-systemjs.component.css'],
})
export class AngularSystemJSComponent {
  itemList: Array<DataItem>
  selectedItemId: Number;
  name = 'Angular';
  constructor() {
    this.itemList = [new DataItem(1, 'Item 1'), new DataItem(2, 'Item 2')]
  }
  greeting() {
    return 'Hello, ' + this.name;
  }
  getDetails() {
    // Empty
  }
}