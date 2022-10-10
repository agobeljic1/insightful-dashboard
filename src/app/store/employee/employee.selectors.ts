import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { EmployeeState } from './employee.reducers';

export const selectEmployees = (state: AppState) => state.employeeState;

export const selectAllEmployees = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.employees
);

export const selectLoadingEmployees = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.loadingEmployees
);

export const selectBulkEditDisabled = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.bulkEditDisabled
);
