import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/model/Employee';
import { Shift } from 'src/app/model/Shift';

export const loadEmployees = createAction('[Employee Page] Load Employees');

export const loadEmployeesSuccess = createAction(
  '[Employee API] Employee Load Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee API] Employee Load Failure'
);

export const selectEmployee = createAction(
  '[Employee API] Select Employee',
  props<{ employee: Employee }>()
);

export const unselectEmployee = createAction(
  '[Employee API] Unselect Employee',
  props<{ employee: Employee }>()
);

export const openBulkEdit = createAction(
  '[Dashboard Page] Open Bulk Edit',
  props<{ employees: Employee[] }>()
);

export const openBulkEditSuccess = createAction(
  '[Dashboard Page] Open Bulk Edit Success'
);

export const loadEmployeeShifts = createAction(
  '[Dashboard Page] Load Employee Shifts',
  props<{ employeeIds: string[] }>()
);

export const loadEmployeeShiftsFailure = createAction(
  '[Dashboard Page] Load Employee Shifts Failure'
);

export const setEmployeeShifts = createAction(
  '[Dashboard Page] Set Employee Shifts',
  props<{ shifts: { [key: string]: Shift[] } }>()
);

export const bulkEditSubmit = createAction(
  '[Dashboard Page] Bulk Edit Submit',
  props<{ employees: Employee[] }>()
);

export const bulkEditEmployeesSuccess = createAction(
  '[Dashboard Page] Bulk Edit Employees Success'
);

export const bulkEditEmployeesFailure = createAction(
  '[Dashboard Page] Bulk Edit Employees Failure'
);

export const bulkEditShiftsSuccess = createAction(
  '[Dashboard Page] Bulk Edit Shifts Success'
);

export const bulkEditShiftsFailure = createAction(
  '[Dashboard Page] Bulk Edit Shifts Failure'
);
