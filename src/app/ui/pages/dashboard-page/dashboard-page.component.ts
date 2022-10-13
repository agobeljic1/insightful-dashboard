import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardStats } from 'src/app/model/DashboardStats';
import { Employee } from 'src/app/model/Employee';
import { AppState } from 'src/app/store/app.state';
import { EmployeeActions, EmployeeSelectors } from 'src/app/store/employee';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent implements OnInit {
  bulkEditDisabled$!: Observable<boolean>;
  selectedEmployees$!: Observable<Employee[]>;
  dashboardStats$!: Observable<DashboardStats>;
  loadingDashboardStats$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.loadDashboardStats());

    this.bulkEditDisabled$ = this.store.select(
      EmployeeSelectors.selectBulkEditDisabled
    );

    this.selectedEmployees$ = this.store.select(
      EmployeeSelectors.selectSelectedEmployees
    );

    this.dashboardStats$ = this.store.select(
      EmployeeSelectors.selectDashboardStats
    );

    this.loadingDashboardStats$ = this.store.select(
      EmployeeSelectors.selectLoadingDashboardStats
    );
  }

  openBulkEdit(employees: Employee[]): void {
    this.store.dispatch(EmployeeActions.openBulkEdit({ employees }));
  }
}
