import { Component, OnInit } from '@angular/core';
import { DashboardStore } from 'src/app/states/dashboard/dashboard.store';
import { DashboardQuery } from 'src/app/states/dashboard/dashboard.query';
import { Observable } from 'rxjs';
import { UserQuery } from 'src/app/states/user/state/user.query';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.scss'],
})
export class LocationInfoComponent implements OnInit {
  count$: Observable<number>;
  postalCode$: Observable<any>;
  county$: Observable<any>;
  constructor(private query: DashboardQuery, private userQuery: UserQuery) {}

  ngOnInit(): void {
    this.count$ = this.query
      .selectAll()
      .pipe(map(ds => ds.map(d => +d.hits).reduce((total, hits) => total + hits, 0)));
    this.postalCode$ = this.userQuery.selectActive(entity => {
      return entity.postalcode.slice(0, -4); // Get just the first 4 digits
    });
    this.county$ = this.userQuery.selectActive(entity => entity.county);
  }
}
