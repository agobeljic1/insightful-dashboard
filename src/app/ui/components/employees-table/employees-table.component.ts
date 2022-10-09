import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/Employee';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesTableComponent {
  employees$!: Observable<any>;

  displayedColumns = [
    'select',
    'id',
    'name',
    'email',
    'hourlyRate',
    'overtimeHourlyRate'
  ];
  constructor() {}

  trackEmployee = (index: number, employee: Employee) => {
    return `${employee.id}`;
  };
}
