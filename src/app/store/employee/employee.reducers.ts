import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/model/Employee';
import {
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
}

export const initialState: EmployeeState = {
  employees: [],
  loadingEmployees: false,
  selectedEmployees: [],
  bulkEditDisabled: true
};

export const employeeReducer = createReducer(
  initialState,
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
  }))
);
