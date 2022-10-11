import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { setShifts, shifts } from '../data/shifts';
import { Employee } from '../model/Employee';
import { Shift } from '../model/Shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  constructor() {}

  getEmployeeShifts(employeeIdList: string[]) {
    const shiftMap = employeeIdList.reduce(
      (acc: { [key: string]: Shift[] }, val: string) => {
        acc[val] = shifts.filter((item) => item.employeeId === val);
        return acc;
      },
      {}
    );
    return of(shiftMap).pipe(delay(Math.random() * 200 + 300));
  }

  bulkEditShifts(editedEmployees: Employee[]) {
    const editedShifts = editedEmployees
      .map((employee: Employee) => employee.shifts)
      .flat();
    const editedShiftsChanges = editedShifts.reduce(
      (acc: { [key: string]: Shift }, shift) => {
        if (shift) {
          acc[shift.id] = shift;
        }
        return acc;
      },
      {}
    );
    const newShifts = shifts.map((shift) => {
      return editedShiftsChanges[shift.id] ?? shift;
    });
    setShifts(newShifts);
    return of(true).pipe(delay(500));
  }
}
