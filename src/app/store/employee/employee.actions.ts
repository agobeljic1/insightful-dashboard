import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/model/Employee';

export const loadEmployees = createAction('[Employee Page] Load Flowes');

export const loadEmployeesSuccess = createAction(
  '[Employee API] Employee Load Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee API] Employee Load Failure'
);
