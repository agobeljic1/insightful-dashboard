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

export const selectSelectedEmployees = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.selectedEmployees
);

export const selectDashboardStats = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.dashboardStats
);

export const selectLoadingDashboardStats = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.loadingDashboardStats
);
