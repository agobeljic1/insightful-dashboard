import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';
import { employees } from '../data/employees';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return of(employees).pipe(delay(500));
  }
}
