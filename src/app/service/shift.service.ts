import { Injectable } from '@angular/core';
import { setShifts, shifts } from '../data/shifts';
import { Employee } from '../model/Employee';
import { Shift } from '../model/Shift';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  constructor(private baseService: BaseService) {}

  getEmployeeShifts(employeeIdList: string[]) {
    const shiftMap = employeeIdList.reduce(
      (acc: { [key: string]: Shift[] }, val: string) => {
        acc[val] = shifts.filter((item) => item.employeeId === val);
        return acc;
      },
      {}
    );
    return this.baseService.createObservableWithRandomDelay(shiftMap);
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
      return {
        ...shift,
        ...(editedShiftsChanges[shift.id] || {})
      };
    });
    setShifts(newShifts);
    return this.baseService.createObservableWithRandomDelay(true);
  }
}
