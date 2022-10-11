import { Shift } from './Shift';

export interface Employee {
  id: string;
  name: string;
  email: string;
  hourlyRate: number;
  overtimeHourlyRate: number;
  shifts?: Shift[];
  totalHours?: number;
  totalRegularHoursPaid?: number;
  totalOvertimeHoursPaid?: number;
}
