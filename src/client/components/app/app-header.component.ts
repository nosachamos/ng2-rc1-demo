import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: 'components/app/app-header.component.html',
  styleUrls: ['components/app/app-header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppHeaderComponent {}
