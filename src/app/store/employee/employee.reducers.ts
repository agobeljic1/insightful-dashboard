import { createReducer, on } from '@ngrx/store';
import { DashboardStats } from 'src/app/model/DashboardStats';
import { Employee } from 'src/app/model/Employee';
import {
  clearSelectedEmployees,
  loadDashboardStats,
  loadDashboardStatsFailure,
  loadDashboardStatsSuccess,
  loadEmployees,
  loadEmployeesFailure,
  loadEmployeesSuccess,
  selectEmployee,
  setEmployeeShifts,
  unselectEmployee
} from './employee.actions';

export interface EmployeeState {
  employees: Employee[];
  loadingEmployees: boolean;
  selectedEmployees: Employee[];
  bulkEditDisabled: boolean;
  dashboardStats: DashboardStats;
  loadingDashboardStats: boolean;
}

export const initialState: EmployeeState = {
  employees: [],
  loadingEmployees: false,
  selectedEmployees: [],
  bulkEditDisabled: true,
  dashboardStats: {},
  loadingDashboardStats: false
};

export const employeeReducer = createReducer(
  initialState,
  on(loadDashboardStats, (state: EmployeeState) => ({
    ...state,
    loadingDashboardStats: true
  })),
  on(loadDashboardStatsSuccess, (state, { dashboardStats }) => ({
    ...state,
    dashboardStats,
    loadingDashboardStats: false
  })),
  on(loadDashboardStatsFailure, (state) => ({
    ...state,
    loadingDashboardStats: false
  })),
  on(loadEmployees, (state: EmployeeState) => ({
    ...state,
    loadingEmployees: true
  })),
  on(loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
    loadingEmployees: false
  })),
  on(loadEmployeesFailure, (state) => ({
    ...state,
    loadingEmployees: false
  })),
  on(selectEmployee, (state, { employee }) => ({
    ...state,
    selectedEmployees: [...state.selectedEmployees, employee],
    bulkEditDisabled: false
  })),
  on(unselectEmployee, (state, { employee }) => ({
    ...state,
    selectedEmployees: state.selectedEmployees.filter(
      (item) => item.id !== employee.id
    ),
    bulkEditDisabled: state.selectedEmployees.length <= 1
  })),
  on(setEmployeeShifts, (state, { shifts }) => ({
    ...state,
    selectedEmployees: state.selectedEmployees.map((employee) => ({
      ...employee,
      shifts: shifts[employee.id] || []
    }))
  })),
  on(clearSelectedEmployees, (state) => ({
    ...state,
    selectedEmployees: []
  }))
);
