import { Injectable } from '@angular/core';
import { employees } from '../data/employees';
import { shifts } from '../data/shifts';
import { getTotalRegularAndOvertime } from '../utils/shift-utls';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private baseService: BaseService) {}

  getDashbordStats() {
    const dashboardStats = {
      employeeCount: employees.length,
      totalTime: 0,
      regularHoursPaid: 0,
      overtimeHoursPaid: 0
    };

    employees.forEach((employee) => {
      const employeeShifts = shifts
        .filter((item) => item.employeeId === employee.id)
        .sort((a, b) => a.clockIn.getTime() - b.clockIn.getTime());

      const totalTime = getTotalRegularAndOvertime(employeeShifts);
      dashboardStats.totalTime +=
        totalTime.regularHours + totalTime.overtimeHours;
      dashboardStats.regularHoursPaid +=
        totalTime.regularHours * employee.hourlyRate;
      dashboardStats.overtimeHoursPaid +=
        totalTime.overtimeHours * employee.overtimeHourlyRate;
    });

    return this.baseService.createObservableWithRandomDelay(dashboardStats);
  }
}
