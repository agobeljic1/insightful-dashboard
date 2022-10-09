import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EmployeeState } from './employee.reducers';

export const selectEmployees = (state: AppState) => state.employeeState;
