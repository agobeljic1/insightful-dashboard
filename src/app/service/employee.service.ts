import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { employees, setEmployees } from '../data/employees';
import { shifts } from '../data/shifts';
import { Employee } from '../model/Employee';
import { getTotalRegularAndOvertime } from '../utils/shift-utls';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private baseService: BaseService) {}

  getEmployees() {
    const employeesWithShifts = employees.map((employee) => {
      const employeeShifts = shifts
        .filter((item) => item.employeeId === employee.id)
        .sort((a, b) => a.clockIn.getTime() - b.clockIn.getTime());

      const totalTime = getTotalRegularAndOvertime(employeeShifts);
      return {
        ...employee,
        shifts: employeeShifts,
        totalHours: totalTime.regularHours + totalTime.overtimeHours,
        totalRegularHoursPaid: totalTime.regularHours * employee.hourlyRate,
        totalOvertimeHoursPaid:
          totalTime.overtimeHours * employee.overtimeHourlyRate
      };
    });
    return this.baseService.createObservableWithRandomDelay(
      employeesWithShifts
    );
  }

  bulkEditEmployees(editedEmployees: Employee[]) {
    const editedEmployeesChanges = editedEmployees.reduce(
      (acc: { [key: string]: Employee }, { shifts, ...employee }) => {
        acc[employee.id] = employee;
        return acc;
      },
      {}
    );
    const newEmployees = employees.map((employee) => {
      return editedEmployeesChanges[employee.id] ?? employee;
    });
    setEmployees(newEmployees);
    return this.baseService.createObservableWithRandomDelay(true);
  }
}
