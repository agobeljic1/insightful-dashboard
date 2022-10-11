import { Shift } from '../model/Shift';

let shifts: Shift[] = [
  {
    id: '1',
    employeeId: '2',
    clockIn: new Date(1665232222222),
    clockOut: new Date()
  },
  {
    id: '2',
    employeeId: '2',
    clockIn: new Date(1665232222227),
    clockOut: new Date()
  },
  {
    id: '3',
    employeeId: '2',
    clockIn: new Date(1665232222222),
    clockOut: new Date()
  },
  {
    id: '4',
    employeeId: '2',
    clockIn: new Date(1665232222224),
    clockOut: new Date()
  }
];
let setShifts = (newShifts: Shift[]) => {
  shifts = newShifts;
};

export { shifts, setShifts };
