import { Component } from '@angular/core';
import {OuterComponent} from './outer.component';

@Component({
  selector: 'about-page',
  directives: [OuterComponent],
  templateUrl: 'components/about/about.component.html',
  styleUrls: ['components/about/about.component.css']
})
export class AboutComponent {}
