import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/model/Employee';

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
