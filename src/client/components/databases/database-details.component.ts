import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import {Database} from '../../models/database.model';

import {Http, Response} from '@angular/http';

import {RouteSegment, OnActivate} from '@angular/router';
import {BytesPipe} from '../../pipes/bytes.pipe';

@Component({
  selector: 'databases-list',
  pipes: [BytesPipe],
  templateUrl: 'components/databases/database-details.component.html',
  directives: [FORM_DIRECTIVES]
})
export class DatabaseDetailsComponent implements OnActivate {
  database: Database;
  loading: boolean;
  errorMessage: string;
  dbId: number;

  constructor(private http: Http) {
  }

  routerOnActivate(routeSeg: RouteSegment) {
    this.dbId = +routeSeg.getParam('id');
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.http.get('http://www.internalassemble.com/api/databases/' + this.dbId)
      .map((res: Response) => res.json())
      .take(1)
      .subscribe(
        (database: Database) => {
          this.database = database;
          this.errorMessage = undefined;
          this.loading = false;
        },
        () => {
          this.errorMessage = 'An error has occurred. Try again.';
          this.loading = false;
        });
  }

}
