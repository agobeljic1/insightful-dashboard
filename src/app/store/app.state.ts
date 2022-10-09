import { ActionReducerMap } from '@ngrx/store';
import { employeeReducer, EmployeeState } from './employee/employee.reducers';

export interface AppState {
  employeeState: EmployeeState;
}

export const reducers: ActionReducerMap<AppState> = {
  employeeState: employeeReducer
};
