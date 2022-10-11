import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { AppState } from 'src/app/store/app.state';
import { EmployeeActions, EmployeeSelectors } from 'src/app/store/employee';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesTableComponent implements OnInit {
  employees$!: Observable<any>;
  loadingEmployees$!: Observable<boolean>;

  displayedColumns = [
    'select',
    'name',
    'email',
    'totalHours',
    'totalRegularHoursPaid',
    'totalOvertimeHoursPaid'
  ];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.loadEmployees());

    this.employees$ = this.store
      .select(EmployeeSelectors.selectAllEmployees)
      .pipe(
        map((a) => {
          console.log(a);
          return a;
        })
      );

    this.loadingEmployees$ = this.store.select(
      EmployeeSelectors.selectLoadingEmployees
    );
  }

  trackEmployee = (index: number, employee: Employee) => {
    return `${employee.id}`;
  };

  onChangeSelectEmployee(employee: Employee, checked: boolean) {
    if (checked) {
      this.store.dispatch(EmployeeActions.selectEmployee({ employee }));
    } else {
      this.store.dispatch(EmployeeActions.unselectEmployee({ employee }));
    }
  }
}
