import { Shift } from '../model/Shift';

let shifts: Shift[] = [];
let setShifts = (newShifts: Shift[]) => {
  shifts = newShifts;
};

export { shifts, setShifts };
