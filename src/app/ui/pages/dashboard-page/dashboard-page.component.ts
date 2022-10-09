import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPageComponent {
  employees$ = of([
    {
      id: '1',
      name: 'Adnan Gobeljic',
      email: 'adnan.gobeljic@insightful.com',
      hourlyRate: 30,
      overtimeHourlyRate: 100
    },
    {
      id: '2',
      name: 'Adnan Gobeljic',
      email: 'adnan.gobeljic@insightful.com',
      hourlyRate: 30,
      overtimeHourlyRate: 100
    },
    {
      id: '3',
      name: 'Adnan Gobeljic',
      email: 'adnan.gobeljic@insightful.com',
      hourlyRate: 30,
      overtimeHourlyRate: 100
    },
    {
      id: '4',
      name: 'Adnan Gobeljic',
      email: 'adnan.gobeljic@insightful.com',
      hourlyRate: 30,
      overtimeHourlyRate: 100
    }
  ]);

  constructor() {}
}
