import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { formatTimeDifference } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-shifts-table',
  templateUrl: './shifts-table.component.html',
  styleUrls: ['./shifts-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShiftsTableComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  @Input() formGroups!: FormGroup[];

  displayedColumns = ['id', 'clockIn', 'clockOut', 'totalTime'];
  constructor() {}

  ngOnInit(): void {
    this.formGroups.forEach((formGroup) => {
      formGroup.valueChanges
        .pipe(takeUntil(this.destroy$))
        .subscribe(({ clockIn, clockOut }) => {
          const newTotalTime = formatTimeDifference(clockIn, clockOut);
          formGroup.controls['totalTime'].setValue(newTotalTime, {
            emitEvent: false
          });
        });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
