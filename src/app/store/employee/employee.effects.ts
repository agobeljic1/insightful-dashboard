import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { ShiftService } from 'src/app/service/shift.service';
import { BulkEditModalComponent } from 'src/app/ui/components/modals/bulk-edit-modal/bulk-edit-modal.component';
import { EmployeeActions } from '.';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private shiftService: ShiftService,
    private dialog: MatDialog
  ) {}

  employees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      switchMap(() => {
        return this.employeeService.getEmployees().pipe(
          map((employees) => {
            return EmployeeActions.loadEmployeesSuccess({
              employees
            });
          }),
          catchError(() => of(EmployeeActions.loadEmployeesFailure()))
        );
      })
    )
  );

  openBulkEdit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.openBulkEdit),
      tap(({ employees }) => {
        this.dialog.open(BulkEditModalComponent, {
          width: '1000px',
          minHeight: '400px',
          disableClose: true,
          data: {
            employees
          }
        });
      }),
      map(() => EmployeeActions.openBulkEditSuccess())
    )
  );

  loadEmployeeShifts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployeeShifts),
      switchMap(({ employeeIds }) => {
        return this.shiftService.getEmployeeShifts(employeeIds).pipe(
          map((shifts) => {
            return EmployeeActions.setEmployeeShifts({
              shifts
            });
          }),
          catchError(() => of(EmployeeActions.loadEmployeeShiftsFailure()))
        );
      })
    )
  );

  bulkEditSubmitEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.bulkEditSubmit),
      switchMap(({ employees }) => {
        return this.employeeService.bulkEditEmployees(employees).pipe(
          map(() => {
            return EmployeeActions.bulkEditEmployeesSuccess();
          }),
          catchError(() => of(EmployeeActions.bulkEditEmployeesFailure()))
        );
      })
    )
  );

  bulkEditSubmitShifts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.bulkEditSubmit),
      switchMap(({ employees }) => {
        return this.shiftService.bulkEditShifts(employees).pipe(
          map(() => {
            return EmployeeActions.bulkEditShiftsSuccess();
          }),
          catchError(() => of(EmployeeActions.bulkEditShiftsFailure()))
        );
      })
    )
  );

  refetchEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.bulkEditEmployeesSuccess),
      map(() => EmployeeActions.loadEmployees())
    )
  );
}
