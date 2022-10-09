import { createReducer } from '@ngrx/store';
import { Employee } from 'src/app/model/Employee';

export interface EmployeeState {}

export const initialState: EmployeeState = {};

export const employeeReducer = createReducer(initialState);
