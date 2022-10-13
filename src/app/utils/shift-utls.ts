import { Shift } from '../model/Shift';
import { areDatesOnTheSameDay } from './date-utils';

const MILISECONDS_IN_DAY = 86400000;
const MILISECONDS_IN_HOUR = 3600000;
const WORKDAY_LENGTH = 8 * MILISECONDS_IN_HOUR;

export const getTotalRegularAndOvertime = (shifts: Shift[]) => {
  let index = 0;
  let actual = 0;
  let previousDate = null;

  let totalTime = {
    regular: 0,
    overtime: 0
  };
  while (index < shifts.length) {
    const shift = shifts[index++];
    const difference = shift.clockOut.getTime() - shift.clockIn.getTime();

    if (previousDate && !areDatesOnTheSameDay(previousDate, shift.clockIn)) {
      totalTime = updateTotalTimes(totalTime, actual);
      actual = 0;
    }

    if (areDatesOnTheSameDay(shift.clockIn, shift.clockOut)) {
      actual += difference;
      previousDate = shift.clockOut;
    } else {
      const tillNewDay =
        MILISECONDS_IN_DAY - (shift.clockIn.getTime() % MILISECONDS_IN_DAY);
      actual += tillNewDay;

      const midnight = new Date(shift.clockIn.getTime() + tillNewDay);
      totalTime = updateTotalTimes(totalTime, actual);
      actual = shift.clockOut.getTime() - midnight.getTime();
      previousDate = shift.clockOut;
    }
  }
  totalTime = updateTotalTimes(totalTime, actual);

  return {
    regularHours: +(totalTime.regular / MILISECONDS_IN_HOUR).toFixed(2),
    overtimeHours: +(totalTime.overtime / MILISECONDS_IN_HOUR).toFixed(2)
  };
};

const updateTotalTimes = (totalTime: any, amount: number) => {
  const regular = Math.min(WORKDAY_LENGTH, amount);
  const overtime = amount - regular;
  return {
    ...totalTime,
    regular: totalTime.regular + regular,
    overtime: totalTime.overtime + overtime
  };
};
