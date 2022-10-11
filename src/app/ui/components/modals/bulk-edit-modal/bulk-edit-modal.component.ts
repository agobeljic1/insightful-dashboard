import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, skip, Subject, take, takeUntil } from 'rxjs';
import { Employee } from 'src/app/model/Employee';
import { AppState } from 'src/app/store/app.state';
import { EmployeeActions, EmployeeSelectors } from 'src/app/store/employee';
import { formatTimeDifference } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-bulk-edit-modal',
  templateUrl: './bulk-edit-modal.component.html',
  styleUrls: ['./bulk-edit-modal.component.scss']
})
export class BulkEditModalComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  form!: FormGroup;
  selectedEmployees$!: Observable<Employee[]>;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BulkEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employees: Employee[] }
  ) {}

  ngOnInit(): void {
    this.selectedEmployees$ = this.store.select(
      EmployeeSelectors.selectSelectedEmployees
    );

    this.selectedEmployees$
      .pipe(skip(1), take(1), takeUntil(this.destroy$))
      .subscribe((employees) => {
        this.createForm(employees);
      });

    this.store.dispatch(
      EmployeeActions.loadEmployeeShifts({
        employeeIds: this.data.employees.map((employee) => employee.id)
      })
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createForm(employees: Employee[]) {
    const employeesArray = employees.map(
      ({ id, name, email, hourlyRate, overtimeHourlyRate, shifts }) => {
        const shiftsArray: FormGroup[] = (shifts || []).map(
          ({ id, clockIn, clockOut }) => {
            return this.formBuilder.group(
              {
                id: new FormControl(id, Validators.required),
                clockIn: [clockIn, [Validators.required]],
                clockOut: [clockOut, [Validators.required]],
                totalTime: new FormControl(
                  formatTimeDifference(clockIn, clockOut),
                  Validators.required
                )
              },
              {
                validator: this.dateRangeValidator
              }
            );
          }
        );

        return this.formBuilder.group({
          id: [id, [Validators.required]],
          name: [name, [Validators.required]],
          email: [email, [Validators.required, Validators.email]],
          hourlyRate: [hourlyRate, [Validators.required, Validators.min(0)]],
          overtimeHourlyRate: [
            overtimeHourlyRate,
            [Validators.required, Validators.min(0)]
          ],
          shifts: this.formBuilder.array(shiftsArray)
        });
      }
    );

    this.form = this.formBuilder.group({
      employees: this.formBuilder.array(employeesArray)
    });
  }

  dateRangeValidator(group: FormGroup) {
    const clockInControl = group.controls['clockIn'];
    const clockOutControl = group.controls['clockOut'];

    const dateRangeInvalid = !!(
      clockInControl.value &&
      clockOutControl.value &&
      clockInControl.value >= clockOutControl.value
    );

    const dateRangeError = dateRangeInvalid ? { dateRange: true } : null;
    clockInControl.setErrors(dateRangeError, { emitEvent: false });
    clockOutControl.setErrors(dateRangeError, { emitEvent: false });
  }

  get employeeForms(): any {
    return (this.form.get('employees') as FormArray).controls as any;
  }

  onSave() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.store.dispatch(EmployeeActions.bulkEditSubmit(this.form.value));
      this.dialogRef.close();
    }
  }

  onSubmit() {
    this.dialogRef.close();
  }
}
