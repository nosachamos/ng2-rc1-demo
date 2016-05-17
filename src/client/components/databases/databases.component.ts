import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import {Database} from '../../models/database.model';

import {Http, Response} from '@angular/http';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {DatabaseDetailsComponent} from './database-details.component';

@Component({
  selector: 'databases-list',
  templateUrl: 'components/databases/databases.component.html',
  styleUrls: ['components/databases/databases.component.css'],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
@Routes([
  {
    path: ':id',
    component: DatabaseDetailsComponent
  }
])
export class DatabasesComponent {
  dbList: Database[];
  loading: boolean = false;
  errorMessage: string;

  constructor(private http: Http) {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.http.get('http://www.internalassemble.com/api/databases')
      .map((res: Response) => res.json())
      .take(1)
      .subscribe(
        (dbList: Database[]) => {
          this.dbList = dbList;
          this.errorMessage = undefined;
          this.loading = false;
        },
        () => {
          this.errorMessage = 'An error has occurred. Try again.';
          this.loading = false;
        });
  }

}
