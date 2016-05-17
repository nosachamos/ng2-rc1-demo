import { Component } from '@angular/core';
import {EventEmitter, Output, Input} from '@angular/core';


@Component({
  selector: 'inner-cmp',
  template: '<button (click)="count()">Count! {{value}}</button>',
})
export class InnerComponent {
  @Output() counted = new EventEmitter();
  @Input() value: number = 0;

  count() {
    this.value++;
    this.counted.emit(this.value);
  }

}
