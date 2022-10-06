import { Employee } from '../model/Employee';

let employees: Employee[] = [];
let setEmployees = (newEmployees: Employee[]) => {
  employees = newEmployees;
};

export { employees, setEmployees };
