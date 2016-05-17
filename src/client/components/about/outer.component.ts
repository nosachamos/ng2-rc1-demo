import { Component } from '@angular/core';
import {InnerComponent} from './inner.component';

@Component({
  selector: 'outer-cmp',
  directives: [InnerComponent],
  template: `<h1>{{count}}</h1>
             <inner-cmp value="100" (counted)="setMyCount($event)"></inner-cmp>`
})
export class OuterComponent {
  count: number;

  private setMyCount(count: number) {
    this.count = count;
  }
}
