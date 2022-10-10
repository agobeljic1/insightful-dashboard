import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { EmployeeActions } from '.';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
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
}
