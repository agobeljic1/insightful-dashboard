import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { employees, setEmployees } from '../data/employees';
import { shifts } from '../data/shifts';
import { Employee } from '../model/Employee';
import { Shift } from '../model/Shift';
import { areDatesOnTheSameDay } from '../utils/date-utils';

const WORKDAY_LENGTH = 8;
const MILISECONDS_IN_DAY = 86400000;
const MILISECONDS_IN_HOUR = 3600000;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    const employeesWithShifts = employees.map((employee) => {
      const employeeShifts = shifts
        .filter((item) => item.employeeId === employee.id)
        .sort((a, b) => a.clockIn.getTime() - b.clockIn.getTime());

      const totalTime = this.getTotalTime(employeeShifts);
      const totalRegularTime = this.getTotalRegularTime(employeeShifts);
      const totalHours = +(totalTime / MILISECONDS_IN_HOUR).toFixed(2);
      const totalRegularHours = +(
        totalRegularTime / MILISECONDS_IN_HOUR
      ).toFixed(2);
      return {
        ...employee,
        shifts: employeeShifts,
        totalHours,
        totalRegularHoursPaid: totalRegularHours * employee.hourlyRate,
        totalOvertimeHoursPaid:
          (totalHours - totalRegularHours) * employee.overtimeHourlyRate
      };
    });
    return of(employeesWithShifts).pipe(delay(500));
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
    return of(true).pipe(delay(500));
  }

  private getTotalTime(shifts: Shift[]) {
    return shifts.reduce(
      (acc, val) => acc + val.clockOut.getTime() - val.clockIn.getTime(),
      0
    );
  }

  private getTotalRegularTime(shifts: Shift[]) {
    let index = 0;
    let sum = 0;
    let actual = 0;
    let previousDate = null;
    while (index < shifts.length) {
      const shift = shifts[index++];
      const difference = shift.clockOut.getTime() - shift.clockIn.getTime();

      if (previousDate && !areDatesOnTheSameDay(previousDate, shift.clockIn)) {
        sum += Math.min(WORKDAY_LENGTH, actual);
        actual = 0;
      }

      if (areDatesOnTheSameDay(shift.clockIn, shift.clockOut)) {
        actual += difference;
        previousDate = shift.clockOut;
      } else {
        const tillNewDay =
          MILISECONDS_IN_DAY - (shift.clockIn.getTime() % MILISECONDS_IN_DAY);
        actual += tillNewDay;

        const midnight = new Date(shift.clockIn.getTime() + tillNewDay);
        sum += Math.min(WORKDAY_LENGTH, actual);
        actual = shift.clockOut.getTime() - midnight.getTime();
        previousDate = shift.clockOut;
      }
    }
    sum += Math.min(WORKDAY_LENGTH, actual);
    return sum;
  }
}
